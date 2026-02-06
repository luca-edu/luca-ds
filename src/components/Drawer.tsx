import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../utils/cn';

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const TRANSITION_MS = 300;
const DEFAULT_Z_INDEX = 1000;
const DEFAULT_WIDTH = 378;
const DEFAULT_OFFSET = 24;

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

/** Drawer slide direction. */
export type DrawerPlacement = 'left' | 'right';

export interface DrawerProps {
  /** Whether the Drawer dialog is visible. */
  open: boolean;

  /** Called when the user requests to close the drawer. */
  onClose: () => void;

  /**
   * Fires after the open/close transition finishes.
   * Receives the current `open` state.
   */
  afterOpenChange?: (open: boolean) => void;

  /** Unmount child components when the drawer closes. @default false */
  destroyOnClose?: boolean;

  /** Which edge the drawer slides from. @default 'right' */
  placement?: DrawerPlacement;

  /** Show the translucent backdrop mask. @default true */
  mask?: boolean;

  /** Allow closing the drawer by clicking the mask. @default true */
  maskClosable?: boolean;

  /** Show the default close button in the header. @default true */
  closable?: boolean;

  /** Custom close-button icon (replaces the default ×). */
  closeIcon?: React.ReactNode;

  /** Allow closing the drawer by pressing Escape. @default true */
  keyboard?: boolean;

  /** CSS `z-index` for the root wrapper. @default 1000 */
  zIndex?: number;

  /** Width of the drawer panel. @default 378 */
  width?: number | string;

  /**
   * Inset offset in pixels from the viewport/container edges
   * (top, bottom, and the placement side). Creates the floating-panel look.
   * Set to `0` for a flush edge-to-edge drawer.
   * @default 24
   */
  offset?: number;

  /** Rendered in the header region to the left of `extra`. */
  title?: React.ReactNode;

  /** Rendered in the header region to the right of `title`. */
  extra?: React.ReactNode;

  /** Rendered below the body, pinned to the bottom. */
  footer?: React.ReactNode;

  /** Main content of the drawer. */
  children?: React.ReactNode;

  /**
   * Where to mount the drawer.
   * - `undefined` / omit → portal to `document.body` (fixed, full-viewport).
   * - `HTMLElement | () => HTMLElement` → portal into that element (absolute, container-height).
   * - `false` → render inline (absolute, parent-height). The parent **must** be `position:relative`.
   */
  getContainer?: HTMLElement | (() => HTMLElement) | false;

  /** Accessible label for the drawer panel. Falls back to `title` text. */
  ariaLabel?: string;

  /* ---- className hooks ---- */

  /** Applied to the drawer panel (the sliding white box). */
  className?: string;

  /** Applied to the outermost wrapper (overlay root). */
  rootClassName?: string;

  /** Applied to the backdrop mask. */
  maskClassName?: string;

  /** Applied to the header `<div>`. */
  headerClassName?: string;

  /** Applied to the scrollable body `<div>`. */
  bodyClassName?: string;

  /** Applied to the footer `<div>`. */
  footerClassName?: string;

  /* ---- style hooks ---- */

  /** Inline styles for the drawer panel. */
  style?: React.CSSProperties;

  /** Inline styles for the header region. */
  headerStyle?: React.CSSProperties;

  /** Inline styles for the body region. */
  bodyStyle?: React.CSSProperties;

  /** Inline styles for the footer region. */
  footerStyle?: React.CSSProperties;
}

/* ------------------------------------------------------------------ */
/*  Scroll-lock (body only)                                            */
/* ------------------------------------------------------------------ */

let lockCount = 0;
let originalOverflow = '';
let originalPaddingRight = '';

function lockScroll() {
  lockCount += 1;
  if (lockCount === 1) {
    originalOverflow = document.body.style.overflow;
    originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  }
}

function unlockScroll() {
  lockCount -= 1;
  if (lockCount <= 0) {
    lockCount = 0;
    document.body.style.overflow = originalOverflow;
    document.body.style.paddingRight = originalPaddingRight;
  }
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function resolveContainer(
  getContainer: DrawerProps['getContainer'],
): HTMLElement | null {
  if (getContainer === false) return null; // inline
  if (getContainer === undefined) return document.body;
  if (typeof getContainer === 'function') return getContainer();
  return getContainer;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      open,
      onClose,
      afterOpenChange,
      destroyOnClose = false,
      placement = 'right',
      mask = true,
      maskClosable = true,
      closable = true,
      closeIcon,
      keyboard = true,
      zIndex = DEFAULT_Z_INDEX,
      width = DEFAULT_WIDTH,
      offset = DEFAULT_OFFSET,
      title,
      extra,
      footer,
      children,
      getContainer,
      ariaLabel,
      className,
      rootClassName,
      maskClassName,
      headerClassName,
      bodyClassName,
      footerClassName,
      style,
      headerStyle,
      bodyStyle,
      footerStyle,
    },
    ref,
  ) => {
    /* ---- mount / visibility state machine ---- */
    const [isMounted, setIsMounted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isDormant, setIsDormant] = useState(false);
    const panelRef = useRef<HTMLDivElement | null>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);
    const isBodyPortal = getContainer === undefined;

    // Resolve the target container element
    const containerEl = useMemo(() => resolveContainer(getContainer), [getContainer]);

    /* ---- scroll lock (body-level only) ---- */
    useEffect(() => {
      if (!isBodyPortal || !open || !isMounted) return;
      lockScroll();
      return () => unlockScroll();
    }, [open, isMounted, isBodyPortal]);

    /* ---- open → mount → animate-in; close → animate-out → unmount/dormant ---- */
    useEffect(() => {
      if (open) {
        setIsDormant(false);
        if (!isMounted) {
          setIsMounted(true);
          return;
        }
        if (!isAnimating) {
          const raf1 = requestAnimationFrame(() => {
            requestAnimationFrame(() => setIsAnimating(true));
          });
          return () => cancelAnimationFrame(raf1);
        }
        return;
      }

      if (isMounted && !isDormant) {
        setIsAnimating(false);
        const timeout = window.setTimeout(() => {
          if (destroyOnClose) {
            setIsMounted(false);
          } else {
            setIsDormant(true);
          }
          afterOpenChange?.(false);
        }, TRANSITION_MS);
        return () => clearTimeout(timeout);
      }
    }, [open, isMounted, isAnimating, isDormant, destroyOnClose, afterOpenChange]);

    useEffect(() => {
      if (!isAnimating) return;
      const timeout = window.setTimeout(() => {
        afterOpenChange?.(true);
      }, TRANSITION_MS);
      return () => clearTimeout(timeout);
    }, [isAnimating, afterOpenChange]);

    /* ---- focus management ---- */
    useEffect(() => {
      if (!isAnimating || !panelRef.current) return;

      previousFocusRef.current = document.activeElement as HTMLElement | null;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS),
      );

      const first = focusable[0];
      if (first) {
        first.focus();
      } else {
        panelRef.current.focus();
      }

      return () => {
        previousFocusRef.current?.focus();
      };
    }, [isAnimating]);

    /* ---- keyboard handling ---- */
    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Escape') {
          if (!keyboard) return;
          event.stopPropagation();
          onClose();
          return;
        }

        if (event.key !== 'Tab' || !panelRef.current) return;

        const focusable = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS),
        ).filter((el) => !el.hasAttribute('disabled'));

        if (focusable.length === 0) {
          event.preventDefault();
          panelRef.current.focus();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) {
          event.preventDefault();
          panelRef.current.focus();
          return;
        }

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      },
      [keyboard, onClose],
    );

    /* ---- mask click ---- */
    const handleMaskMouseDown = useCallback(() => {
      if (maskClosable) onClose();
    }, [maskClosable, onClose]);

    /* ---- ref merge ---- */
    const mergedRef = useCallback(
      (node: HTMLDivElement | null) => {
        panelRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      },
      [ref],
    );

    /* ---- computed styles ---- */
    const resolvedWidth = typeof width === 'number' ? `${width}px` : width;
    const offsetPx = `${offset}px`;

    const translateHidden =
      placement === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
    const translateVisible = 'translateX(0)';

    const panelPositionStyle: React.CSSProperties = useMemo(() => {
      const base: React.CSSProperties = {
        top: offsetPx,
        bottom: offsetPx,
        ...(placement === 'right' ? { right: offsetPx } : { left: offsetPx }),
        width: offset > 0
          ? `calc(100% - ${offsetPx})`
          : '100%',
        maxWidth: resolvedWidth,
        borderRadius: offset > 0 ? '16px' : 0,
        transform: isAnimating ? translateVisible : translateHidden,
        transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.2, 0, 0, 1)`,
        ...style,
      };
      return base;
    }, [resolvedWidth, isAnimating, translateHidden, style, placement, offsetPx, offset]);

    /* ---- has header? ---- */
    const showHeader = !!(title || extra || closable);

    /* ---- render ---- */
    if (!isMounted) return null;

    const defaultCloseIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="luca-h-6 luca-w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    );

    const content = (
      <div
        className={cn(
          isBodyPortal ? 'luca-fixed' : 'luca-absolute',
          'luca-inset-0',
          rootClassName,
        )}
        style={
          isDormant
            ? { zIndex, visibility: 'hidden', pointerEvents: 'none' }
            : { zIndex }
        }
        data-testid="drawer-root"
      >
        {/* Mask */}
        {mask && (
          <div
            className={cn(
              'luca-absolute luca-inset-0 luca-transition-opacity',
              isAnimating ? 'luca-opacity-100' : 'luca-opacity-0',
              maskClassName,
            )}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.45)',
              transitionDuration: `${TRANSITION_MS}ms`,
            }}
            onMouseDown={handleMaskMouseDown}
            role="presentation"
            data-testid="drawer-mask"
          />
        )}

        {/* Panel */}
        <div
          ref={mergedRef}
          className={cn(
            'luca-absolute luca-flex luca-flex-col luca-overflow-hidden',
            'luca-bg-white luca-shadow-xl',
            'focus:luca-outline-none',
            className,
          )}
          style={panelPositionStyle}
          onMouseDown={(e) => e.stopPropagation()}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel ?? (typeof title === 'string' ? title : undefined)}
          tabIndex={-1}
          data-testid="drawer-panel"
        >
          {/* Header */}
          {showHeader && (
            <div
              className={cn(
                'luca-flex luca-items-center luca-justify-between',
                'luca-px-6 luca-py-4',
                'luca-border-b luca-border-neutral-200',
                'luca-shrink-0',
                headerClassName,
              )}
              style={headerStyle}
              data-testid="drawer-header"
            >
              <div className="luca-flex luca-items-center luca-gap-2 luca-min-w-0 luca-flex-1">
                {title && (
                  <div className="luca-text-lg luca-font-semibold luca-text-neutral-900 luca-truncate">
                    {title}
                  </div>
                )}
              </div>
              <div className="luca-flex luca-items-center luca-gap-2 luca-shrink-0">
                {extra}
                {closable && (
                  <button
                    type="button"
                    onClick={onClose}
                    className={cn(
                      'luca-rounded-full luca-p-2',
                      'luca-text-neutral-500',
                      'luca-transition',
                      'hover:luca-bg-neutral-100 hover:luca-text-neutral-700',
                      'focus-visible:luca-outline-2 focus-visible:luca-outline-offset-2 focus-visible:luca-outline-primary',
                    )}
                    aria-label="Close"
                    data-testid="drawer-close-btn"
                  >
                    {closeIcon ?? defaultCloseIcon}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Body */}
          <div
            className={cn(
              'luca-flex-1 luca-min-h-0 luca-overflow-y-auto luca-overflow-x-hidden',
              'luca-px-6 luca-py-4',
              bodyClassName,
            )}
            style={bodyStyle}
            data-testid="drawer-body"
          >
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div
              className={cn(
                'luca-px-6 luca-py-4',
                'luca-border-t luca-border-neutral-200',
                'luca-shrink-0',
                footerClassName,
              )}
              style={footerStyle}
              data-testid="drawer-footer"
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    );

    // Decide where to render
    if (getContainer === false) {
      // Inline — no portal, parent must be relative
      return content;
    }

    const target = containerEl ?? document.body;
    return createPortal(content, target);
  },
);

Drawer.displayName = 'Drawer';
