import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import { Drawer } from './Drawer';
import { InputField } from './InputField';
import { cn } from '../utils/cn';
import type { DrawerProps } from './Drawer';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

/** A single content section rendered inside the profile body. */
export interface ProfileDrawerSection {
  /** Unique key for React list rendering. */
  key: string;
  /** The content to render inside the section card. */
  content: React.ReactNode;
  /** Extra classes merged onto the section wrapper. */
  className?: string;
}

/** Data emitted when the built-in password form is submitted. */
export interface PasswordSubmitData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

/** Label overrides for the built-in password form (i18n). */
export interface PasswordFormLabels {
  /** Action row label in the main view. @default 'Cambiar contraseña' */
  action: string;
  /** Header title when the password form is visible. @default 'Cambiar contraseña' */
  title: string;
  /** @default 'Contraseña actual' */
  currentPassword: string;
  /** @default 'Nueva contraseña' */
  newPassword: string;
  /** @default 'Confirmar nueva contraseña' */
  confirmPassword: string;
  /** @default 'Cancelar' */
  cancel: string;
  /** @default 'Guardar' */
  submit: string;
  /** @default 'Las contraseñas no coinciden' */
  mismatchError: string;
  /** @default 'La contraseña debe tener al menos 6 caracteres' */
  minLengthError: string;
  /** Back-button aria-label. @default 'Volver' */
  back: string;
}

/** Props shared across all ProfileDrawer configurations. */
interface ProfileDrawerBaseProps {
  /** Whether the drawer is visible. */
  open: boolean;

  /** Called when the user requests to close the drawer. */
  onClose: () => void;

  /**
   * Title displayed in the header (e.g. "Mi cuenta").
   * Overridden automatically when the built-in password form is active.
   */
  title?: React.ReactNode;

  /**
   * Element rendered to the left of the title in the header.
   * Overridden automatically when the built-in password form is active (back arrow).
   */
  headerLeft?: React.ReactNode;

  /**
   * Content rendered inside the profile info card (name, email, school, etc.).
   */
  profileInfo?: React.ReactNode;

  /**
   * Discrete sections rendered sequentially below the profile card.
   * Each section is wrapped in a white rounded card.
   */
  sections?: ProfileDrawerSection[];

  /** Footer element rendered after all sections (e.g. version text). */
  footer?: React.ReactNode;

  /**
   * When provided, replaces the main slot-based body with this content.
   * Use for arbitrary sub-views not covered by the built-in password form.
   * Takes priority over the internal password view.
   */
  detailPanel?: React.ReactNode;

  /**
   * Escape hatch: render arbitrary children instead of (or in addition to)
   * the slot-based layout.
   */
  children?: React.ReactNode;

  /** Width passed to the underlying Drawer. @default 700 */
  width?: number | string;

  /**
   * Extra props forwarded to the underlying `<Drawer>`.
   * Useful for `zIndex`, `getContainer`, `placement`, etc.
   */
  drawerProps?: Partial<DrawerProps>;

  /* ---- Built-in password change ---- */

  /**
   * Called when the user submits the built-in password form with valid data.
   *
   * **Providing this prop enables the feature:**
   * - A "Cambiar contraseña" action row auto-renders before consumer sections.
   * - Clicking it opens the password form internally.
   * - Client-side validation (match + min-length) is handled by the component.
   * - On valid submit this callback fires.
   */
  onPasswordSubmit?: (data: PasswordSubmitData) => void;

  /** External error to display on the password form (e.g. API error). */
  passwordError?: string;

  /** Disables form controls while the submission is in progress. */
  passwordSubmitting?: boolean;

  /** Override default labels for the password form (useful for i18n). */
  passwordLabels?: Partial<PasswordFormLabels>;

  /* ---- className hooks ---- */

  /** Applied to the outermost wrapper inside the drawer body. */
  className?: string;

  /** Applied to the profile-card region (avatar + info combined). */
  profileCardClassName?: string;

  /** Applied to the avatar container. */
  avatarClassName?: string;

  /** Applied to the header row inside the drawer. */
  headerClassName?: string;

  /** Applied to the scrollable body container. */
  bodyClassName?: string;
}

/**
 * Avatar as a fully custom ReactNode — the consumer owns all rendering.
 * Mutually exclusive with `avatarSrc`.
 */
interface ProfileDrawerCustomAvatar {
  /** Fully custom avatar element. Overrides the built-in image renderer. */
  avatar: React.ReactNode;
  avatarSrc?: never;
  avatarAlt?: never;
}

/**
 * Avatar via image source — ProfileDrawer handles the circular container,
 * sizing, object-fit, and broken-image fallback internally.
 * Mutually exclusive with `avatar`.
 */
interface ProfileDrawerSrcAvatar {
  avatar?: never;
  /**
   * Image source (URL or imported asset) for the profile avatar.
   * Rendered inside a circular container sized by an internal CSS variable.
   */
  avatarSrc?: string;
  /**
   * Alt text for the avatar image. Defaults to `""` (decorative).
   * Set explicitly when the avatar conveys meaning beyond the displayed name,
   * e.g. `"Photo of {name}"`.
   */
  avatarAlt?: string;
}

export type ProfileDrawerProps = ProfileDrawerBaseProps &
  (ProfileDrawerCustomAvatar | ProfileDrawerSrcAvatar);

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const DEFAULT_WIDTH = 700;
const MIN_PASSWORD_LENGTH = 6;
const DEFAULT_AVATAR_SIZE = '200px';

const DEFAULT_LABELS: PasswordFormLabels = {
  action: 'Cambiar contraseña',
  title: 'Cambiar contraseña',
  currentPassword: 'Contraseña actual',
  newPassword: 'Nueva contraseña',
  confirmPassword: 'Confirmar nueva contraseña',
  cancel: 'Cancelar',
  submit: 'Guardar',
  mismatchError: 'Las contraseñas no coinciden',
  minLengthError: `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres`,
  back: 'Volver',
};

/* ------------------------------------------------------------------ */
/*  Inline SVG icons (avoids external dependency inside the DS)        */
/* ------------------------------------------------------------------ */

/** heroicons v2: key (24/outline) */
const KeyIconSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="luca-h-6 luca-w-6 luca-shrink-0 luca-text-neutral-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
    />
  </svg>
);

/** heroicons v2: arrow-left (24/outline) */
const ArrowLeftSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="luca-h-6 luca-w-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
);

/** heroicons v2: x-mark (24/outline) */
const XMarkSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="luca-h-6 luca-w-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

/** heroicons v2: user (24/outline) — fallback for broken avatar images */
const UserFallbackSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="luca-h-12 luca-w-12 luca-text-neutral-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

/**
 * `ProfileDrawer` — a generic, design-system-grade profile panel.
 *
 * Provides a structured layout with configurable slots (avatar, profileInfo,
 * sections, footer) plus a built-in password-change flow triggered by the
 * `onPasswordSubmit` prop.
 */
export const ProfileDrawer = forwardRef<HTMLDivElement, ProfileDrawerProps>(
  (
    {
      open,
      onClose,
      title,
      headerLeft,
      avatar,
      avatarSrc,
      avatarAlt,
      profileInfo,
      sections,
      footer,
      detailPanel,
      children,
      width = DEFAULT_WIDTH,
      drawerProps,
      onPasswordSubmit,
      passwordError,
      passwordSubmitting,
      passwordLabels: labelOverrides,
      className,
      profileCardClassName,
      avatarClassName,
      headerClassName,
      bodyClassName,
    },
    ref
  ) => {
    if (process.env.NODE_ENV !== 'production' && avatar && avatarSrc) {
      console.warn(
        'ProfileDrawer: Both `avatar` and `avatarSrc` were provided. ' +
          '`avatarSrc` will be ignored. Use one or the other.'
      );
    }

    const labels = { ...DEFAULT_LABELS, ...labelOverrides };
    const hasPasswordFeature = !!onPasswordSubmit;

    const [imgError, setImgError] = useState(false);

    useEffect(() => {
      setImgError(false);
    }, [avatarSrc]);

    const resolvedAvatar =
      avatar ??
      (avatarSrc ? (
        <div
          className="luca-overflow-hidden luca-rounded-full luca-bg-neutral-100"
          style={{
            width: 'var(--luca-profile-avatar-size)',
            height: 'var(--luca-profile-avatar-size)',
          }}
        >
          {imgError ? (
            <div className="luca-flex luca-h-full luca-w-full luca-items-center luca-justify-center luca-bg-neutral-200">
              {UserFallbackSvg}
            </div>
          ) : (
            <img
              src={avatarSrc}
              alt={avatarAlt ?? ''}
              className="luca-h-full luca-w-full luca-object-cover"
              onError={() => setImgError(true)}
            />
          )}
        </div>
      ) : null);

    const hasAvatar = !!resolvedAvatar;

    const [pwView, setPwView] = useState(false);
    const [pwForm, setPwForm] = useState({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    const [pwError, setPwError] = useState('');

    const resetPasswordState = useCallback(() => {
      setPwView(false);
      setPwForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setPwError('');
    }, []);

    useEffect(() => {
      if (!open) resetPasswordState();
    }, [open, resetPasswordState]);

    const handlePasswordSubmit = useCallback(() => {
      setPwError('');

      if (pwForm.newPassword !== pwForm.confirmPassword) {
        setPwError(labels.mismatchError);
        return;
      }
      if (pwForm.newPassword.length < MIN_PASSWORD_LENGTH) {
        setPwError(labels.minLengthError);
        return;
      }

      onPasswordSubmit?.(pwForm);
    }, [pwForm, labels.mismatchError, labels.minLengthError, onPasswordSubmit]);

    const handleClose = useCallback(() => {
      resetPasswordState();
      onClose();
    }, [resetPasswordState, onClose]);

    const isPasswordView = hasPasswordFeature && pwView && detailPanel === undefined;
    const isDetailView = detailPanel !== undefined;
    const isMainView = !isPasswordView && !isDetailView;
    const showProfileCard = isMainView && !!(hasAvatar || profileInfo);

    const resolvedTitle = isPasswordView ? labels.title : title;
    const resolvedHeaderLeft = isPasswordView ? (
      <button
        type="button"
        onClick={resetPasswordState}
        className={cn(
          'luca-rounded-full luca-p-1',
          'luca-text-neutral-500 luca-transition',
          'hover:luca-bg-neutral-100 hover:luca-text-neutral-700',
          'focus-visible:luca-outline-2 focus-visible:luca-outline-offset-2 focus-visible:luca-outline-primary'
        )}
        aria-label={labels.back}
      >
        {ArrowLeftSvg}
      </button>
    ) : (
      headerLeft
    );

    /* Prepended inside the first consumer section when the password feature is active. */
    const passwordActionRow = hasPasswordFeature ? (
      <button
        type="button"
        onClick={() => setPwView(true)}
        className="luca-flex luca-h-10 luca-w-full luca-items-center luca-gap-2 luca-rounded-lg luca-border luca-border-neutral-200 luca-bg-white luca-px-4 luca-py-2 luca-text-left luca-text-sm luca-font-normal luca-leading-5 luca-text-neutral-600 luca-transition hover:luca-bg-neutral-50 focus-visible:luca-outline-2 focus-visible:luca-outline-offset-2 focus-visible:luca-outline-primary"
      >
        {KeyIconSvg}
        <span className="luca-whitespace-nowrap">{labels.action}</span>
      </button>
    ) : null;

    /* Internal validation error takes precedence over the external `passwordError` prop. */
    const displayedError = pwError || passwordError;

    const passwordPanel = (
      <div className="luca-flex luca-flex-col luca-gap-6">
        <div className="luca-flex luca-flex-col luca-gap-4">
          <InputField
            label={labels.currentPassword}
            type="password"
            value={pwForm.currentPassword}
            onChange={(e) =>
              setPwForm((prev) => ({
                ...prev,
                currentPassword: (e.target as HTMLInputElement).value,
              }))
            }
            placeholder={labels.currentPassword}
            disabled={passwordSubmitting}
          />
          <InputField
            label={labels.newPassword}
            type="password"
            value={pwForm.newPassword}
            onChange={(e) =>
              setPwForm((prev) => ({ ...prev, newPassword: (e.target as HTMLInputElement).value }))
            }
            placeholder={labels.newPassword}
            disabled={passwordSubmitting}
          />
          <InputField
            label={labels.confirmPassword}
            type="password"
            value={pwForm.confirmPassword}
            onChange={(e) =>
              setPwForm((prev) => ({
                ...prev,
                confirmPassword: (e.target as HTMLInputElement).value,
              }))
            }
            placeholder={labels.confirmPassword}
            disabled={passwordSubmitting}
          />
          {displayedError && <p className="luca-text-sm luca-text-danger">{displayedError}</p>}
        </div>
        <div className="luca-flex luca-gap-3 luca-pt-2">
          <button
            type="button"
            onClick={resetPasswordState}
            disabled={passwordSubmitting}
            className="luca-flex-1 luca-rounded-xl luca-border luca-border-neutral-300 luca-px-4 luca-py-2 luca-text-sm luca-font-semibold luca-text-neutral-700 luca-transition hover:luca-bg-neutral-50 disabled:luca-opacity-50"
          >
            {labels.cancel}
          </button>
          <button
            type="button"
            onClick={handlePasswordSubmit}
            disabled={
              passwordSubmitting ||
              !pwForm.currentPassword ||
              !pwForm.newPassword ||
              !pwForm.confirmPassword
            }
            className="luca-flex-1 luca-rounded-xl luca-bg-primary luca-px-4 luca-py-2 luca-text-sm luca-font-semibold luca-text-white luca-transition hover:luca-brightness-95 disabled:luca-opacity-50"
          >
            {labels.submit}
          </button>
        </div>
      </div>
    );

    return (
      <Drawer
        ref={ref}
        open={open}
        onClose={handleClose}
        width={width}
        closable={false}
        {...drawerProps}
        bodyClassName="!luca-p-0"
      >
        <div
          className={cn(
            'luca-flex luca-flex-col luca-h-full',
            'luca-gap-4',
            'luca-p-6',
            'luca-bg-neutral-50',
            className
          )}
        >
          <div
            className={cn(
              'luca-flex luca-items-center luca-justify-between',
              'luca-pb-5',
              'luca-border-b luca-border-neutral-200',
              'luca-shrink-0',
              headerClassName
            )}
          >
            <div className="luca-flex luca-items-center luca-gap-4">
              {resolvedHeaderLeft}
              {resolvedTitle && (
                <h2 className="luca-text-xl luca-font-semibold luca-leading-8 luca-text-primary luca-m-0">
                  {resolvedTitle}
                </h2>
              )}
            </div>
            <button
              type="button"
              onClick={handleClose}
              className={cn(
                'luca-rounded-full luca-p-2',
                'luca-text-neutral-500',
                'luca-transition',
                'hover:luca-bg-neutral-100 hover:luca-text-neutral-700',
                'focus-visible:luca-outline-2 focus-visible:luca-outline-offset-2 focus-visible:luca-outline-primary'
              )}
              aria-label="Close"
              data-testid="profile-drawer-close"
            >
              {XMarkSvg}
            </button>
          </div>

          <div
            className={cn(
              'luca-flex-1 luca-min-h-0',
              'luca-overflow-y-auto luca-overflow-x-hidden',
              'luca--mr-6 luca-pr-6',
              bodyClassName
            )}
          >
            <div className="luca-flex luca-flex-col luca-gap-4">
              {isPasswordView ? (
                <section className="luca-rounded-2xl luca-bg-white luca-p-6">
                  {passwordPanel}
                </section>
              ) : isDetailView ? (
                <section className="luca-rounded-2xl luca-bg-white luca-p-6">{detailPanel}</section>
              ) : (
                <>
                  {showProfileCard && (
                    <section
                      className={cn(
                        'luca-relative luca-w-full luca-overflow-hidden',
                        profileCardClassName
                      )}
                    >
                      {resolvedAvatar && (
                        <div
                          className={cn(
                            'luca-relative luca-z-10 luca-flex luca-justify-center',
                            avatarClassName
                          )}
                          style={
                            {
                              '--luca-profile-avatar-size': DEFAULT_AVATAR_SIZE,
                            } as React.CSSProperties
                          }
                        >
                          {resolvedAvatar}
                        </div>
                      )}
                      {profileInfo && (
                        <div
                          className={cn(
                            'luca-relative',
                            hasAvatar ? 'luca--mt-24' : '',
                            'luca-rounded-2xl luca-border luca-border-neutral-200 luca-bg-white luca-shadow-none',
                            'luca-pt-28 luca-pb-4 luca-px-4'
                          )}
                        >
                          {profileInfo}
                        </div>
                      )}
                    </section>
                  )}

                  {sections?.map((section, index) => (
                    <section
                      key={section.key}
                      className={cn('luca-rounded-2xl luca-bg-white luca-p-6', section.className)}
                    >
                      {index === 0 && passwordActionRow && (
                        <div className="luca-mb-4">{passwordActionRow}</div>
                      )}
                      {section.content}
                    </section>
                  ))}

                  {children}

                  {footer && <div className="luca-shrink-0">{footer}</div>}
                </>
              )}
            </div>
          </div>
        </div>
      </Drawer>
    );
  }
);

ProfileDrawer.displayName = 'ProfileDrawer';
