import React from 'react';
import { cn } from '../utils/cn';

export type TagVariant =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type TagSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TagState = 'default' | 'hover' | 'focused' | 'disabled';

export interface TagProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /**
   * Color variant of the tag
   * @default 'primary'
   */
  variant?: TagVariant;

  /**
   * Size of the tag
   * @default 'md'
   */
  size?: TagSize;

  /**
   * State of the tag
   * @default 'default'
   */
  state?: TagState;

  /**
   * Icon to display on the left side
   */
  icon?: React.ReactNode;

  /**
   * Whether the tag is clickable
   * @default true
   */
  clickable?: boolean;

  /**
   * Tag content
   */
  children: React.ReactNode;
}

const tagBaseStyles =
  'luca-inline-flex luca-items-center luca-gap-2 luca-rounded-xl luca-border luca-transition-colors luca-duration-200 luca-font-normal luca-whitespace-nowrap';

const tagSizeStyles: Record<TagSize, string> = {
  xs: 'luca-h-6 luca-px-2 luca-py-1 luca-text-xs luca-gap-1.5',
  sm: 'luca-h-7 luca-px-3 luca-py-1.5 luca-text-xs luca-gap-2',
  md: 'luca-h-10 luca-px-4 luca-py-2 luca-text-sm luca-gap-2',
  lg: 'luca-h-11 luca-px-5 luca-py-2.5 luca-text-base luca-gap-2.5',
  xl: 'luca-h-12 luca-px-6 luca-py-3 luca-text-base luca-gap-3',
};

const iconSizeStyles: Record<TagSize, string> = {
  xs: 'luca-w-3 luca-h-3',
  sm: 'luca-w-4 luca-h-4',
  md: 'luca-w-6 luca-h-6',
  lg: 'luca-w-6 luca-h-6',
  xl: 'luca-w-6 luca-h-6',
};

const tagVariantStyles: Record<
  TagVariant,
  Record<TagState, { bg: string; border: string; text: string }>
> = {
  primary: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-primary-300',
      text: 'luca-text-neutral-900',
    },
    hover: {
      bg: 'luca-bg-primary-50',
      border: 'luca-border-primary-300',
      text: 'luca-text-neutral-900',
    },
    focused: {
      bg: 'luca-bg-primary-600',
      border: 'luca-border-primary-300',
      text: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      text: 'luca-text-neutral-400',
    },
  },
  neutral: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-neutral-300',
      text: 'luca-text-neutral-900',
    },
    hover: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-300',
      text: 'luca-text-neutral-900',
    },
    focused: {
      bg: 'luca-bg-neutral-700',
      border: 'luca-border-neutral-300',
      text: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      text: 'luca-text-neutral-400',
    },
  },
  accent: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-accent-300',
      text: 'luca-text-neutral-900',
    },
    hover: {
      bg: 'luca-bg-accent-50',
      border: 'luca-border-accent-300',
      text: 'luca-text-neutral-900',
    },
    focused: {
      bg: 'luca-bg-accent-600',
      border: 'luca-border-accent-300',
      text: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      text: 'luca-text-neutral-400',
    },
  },
  success: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-success-300',
      text: 'luca-text-neutral-900',
    },
    hover: {
      bg: 'luca-bg-success-50',
      border: 'luca-border-success-300',
      text: 'luca-text-neutral-900',
    },
    focused: {
      bg: 'luca-bg-success-600',
      border: 'luca-border-success-300',
      text: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      text: 'luca-text-neutral-400',
    },
  },
  warning: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-warning-300',
      text: 'luca-text-neutral-900',
    },
    hover: {
      bg: 'luca-bg-warning-50',
      border: 'luca-border-warning-300',
      text: 'luca-text-neutral-900',
    },
    focused: {
      bg: 'luca-bg-warning-600',
      border: 'luca-border-warning-300',
      text: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      text: 'luca-text-neutral-400',
    },
  },
  danger: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-danger-300',
      text: 'luca-text-neutral-900',
    },
    hover: {
      bg: 'luca-bg-danger-50',
      border: 'luca-border-danger-300',
      text: 'luca-text-neutral-900',
    },
    focused: {
      bg: 'luca-bg-danger-600',
      border: 'luca-border-danger-300',
      text: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      text: 'luca-text-neutral-400',
    },
  },
  info: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-info-300',
      text: 'luca-text-neutral-900',
    },
    hover: {
      bg: 'luca-bg-info-50',
      border: 'luca-border-info-300',
      text: 'luca-text-neutral-900',
    },
    focused: {
      bg: 'luca-bg-info-600',
      border: 'luca-border-info-300',
      text: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      text: 'luca-text-neutral-400',
    },
  },
};

const tagHoverStyles: Record<TagVariant, string> = {
  primary: 'hover:luca-bg-primary-50 hover:luca-border-primary-300 hover:luca-text-neutral-900',
  neutral: 'hover:luca-bg-neutral-50 hover:luca-border-neutral-300 hover:luca-text-neutral-900',
  accent: 'hover:luca-bg-accent-50 hover:luca-border-accent-300 hover:luca-text-neutral-900',
  success: 'hover:luca-bg-success-50 hover:luca-border-success-300 hover:luca-text-neutral-900',
  warning: 'hover:luca-bg-warning-50 hover:luca-border-warning-300 hover:luca-text-neutral-900',
  danger: 'hover:luca-bg-danger-50 hover:luca-border-danger-300 hover:luca-text-neutral-900',
  info: 'hover:luca-bg-info-50 hover:luca-border-info-300 hover:luca-text-neutral-900',
};

export const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      state = 'default',
      icon,
      clickable = true,
      children,
      className,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || state === 'disabled';
    const currentState = isDisabled ? 'disabled' : state;
    const styles = tagVariantStyles[variant][currentState];

    const shouldApplyHover = currentState === 'default' && !isDisabled && clickable;

    const baseElement = clickable ? (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          tagBaseStyles,
          tagSizeStyles[size],
          styles.bg,
          styles.border,
          styles.text,
          shouldApplyHover && tagHoverStyles[variant],
          !isDisabled &&
            clickable &&
            'hover:luca-cursor-pointer focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2',
          isDisabled && 'luca-cursor-not-allowed',
          className
        )}
        {...props}
      >
        {icon && <span className={cn('luca-shrink-0', iconSizeStyles[size])}>{icon}</span>}
        <span className="luca-leading-tight">{children}</span>
      </button>
    ) : (
      <div
        className={cn(
          tagBaseStyles,
          tagSizeStyles[size],
          styles.bg,
          styles.border,
          styles.text,
          className
        )}
      >
        {icon && <span className={cn('luca-shrink-0', iconSizeStyles[size])}>{icon}</span>}
        <span className="luca-leading-tight">{children}</span>
      </div>
    );

    return baseElement;
  }
);

Tag.displayName = 'Tag';
