import React from 'react';
import { cn } from '../utils/cn';

export type TextButtonVariant =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type TextButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TextButtonState = 'default' | 'hover' | 'disabled';

export interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Color variant of the text button
   * @default 'primary'
   */
  variant?: TextButtonVariant;

  /**
   * Size of the text button
   * @default 'md'
   */
  size?: TextButtonSize;

  /**
   * State of the text button
   * @default 'default'
   */
  state?: TextButtonState;

  /**
   * Left icon
   */
  leftIcon?: React.ReactNode;

  /**
   * Right icon
   */
  rightIcon?: React.ReactNode;

  /**
   * Button content
   */
  children: React.ReactNode;
}

const textButtonBaseStyles =
  'luca-inline-flex luca-items-center luca-justify-center luca-font-semibold luca-transition-all luca-duration-200 luca-whitespace-nowrap luca-bg-transparent luca-border-none luca-cursor-pointer luca-p-0';

const textButtonSizeStyles: Record<
  TextButtonSize,
  { text: string; icon: string; padding: string }
> = {
  xs: {
    text: 'luca-text-xs',
    icon: 'luca-w-3 luca-h-3',
    padding: 'luca-px-1.5 luca-py-1',
  },
  sm: {
    text: 'luca-text-sm',
    icon: 'luca-w-4 luca-h-4',
    padding: 'luca-px-2 luca-py-1',
  },
  md: {
    text: 'luca-text-sm',
    icon: 'luca-w-4 luca-h-4',
    padding: 'luca-px-2 luca-py-1.5',
  },
  lg: {
    text: 'luca-text-base',
    icon: 'luca-w-5 luca-h-5',
    padding: 'luca-px-2.5 luca-py-2',
  },
  xl: {
    text: 'luca-text-lg',
    icon: 'luca-w-5 luca-h-5',
    padding: 'luca-px-3 luca-py-2',
  },
};

const textButtonVariantStyles: Record<
  TextButtonVariant,
  Record<'default' | 'hover' | 'disabled', { text: string; hoverText: string; underline: string }>
> = {
  primary: {
    default: {
      text: 'luca-text-primary-600',
      hoverText: 'hover:luca-text-primary-700',
      underline: 'hover:luca-underline',
    },
    hover: {
      text: 'luca-text-primary-700',
      hoverText: '',
      underline: 'luca-underline',
    },
    disabled: {
      text: 'luca-text-neutral-400',
      hoverText: '',
      underline: '',
    },
  },
  neutral: {
    default: {
      text: 'luca-text-neutral-600',
      hoverText: 'hover:luca-text-neutral-700',
      underline: 'hover:luca-underline',
    },
    hover: {
      text: 'luca-text-neutral-700',
      hoverText: '',
      underline: 'luca-underline',
    },
    disabled: {
      text: 'luca-text-neutral-400',
      hoverText: '',
      underline: '',
    },
  },
  accent: {
    default: {
      text: 'luca-text-accent-600',
      hoverText: 'hover:luca-text-accent-700',
      underline: 'hover:luca-underline',
    },
    hover: {
      text: 'luca-text-accent-700',
      hoverText: '',
      underline: 'luca-underline',
    },
    disabled: {
      text: 'luca-text-neutral-400',
      hoverText: '',
      underline: '',
    },
  },
  success: {
    default: {
      text: 'luca-text-success-600',
      hoverText: 'hover:luca-text-success-700',
      underline: 'hover:luca-underline',
    },
    hover: {
      text: 'luca-text-success-700',
      hoverText: '',
      underline: 'luca-underline',
    },
    disabled: {
      text: 'luca-text-neutral-400',
      hoverText: '',
      underline: '',
    },
  },
  warning: {
    default: {
      text: 'luca-text-warning-600',
      hoverText: 'hover:luca-text-warning-700',
      underline: 'hover:luca-underline',
    },
    hover: {
      text: 'luca-text-warning-700',
      hoverText: '',
      underline: 'luca-underline',
    },
    disabled: {
      text: 'luca-text-neutral-400',
      hoverText: '',
      underline: '',
    },
  },
  danger: {
    default: {
      text: 'luca-text-danger-600',
      hoverText: 'hover:luca-text-danger-700',
      underline: 'hover:luca-underline',
    },
    hover: {
      text: 'luca-text-danger-700',
      hoverText: '',
      underline: 'luca-underline',
    },
    disabled: {
      text: 'luca-text-neutral-400',
      hoverText: '',
      underline: '',
    },
  },
  info: {
    default: {
      text: 'luca-text-info-600',
      hoverText: 'hover:luca-text-info-700',
      underline: 'hover:luca-underline',
    },
    hover: {
      text: 'luca-text-info-700',
      hoverText: '',
      underline: 'luca-underline',
    },
    disabled: {
      text: 'luca-text-neutral-400',
      hoverText: '',
      underline: '',
    },
  },
};

export const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      state = 'default',
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || state === 'disabled';
    const sizeStyles = textButtonSizeStyles[size];
    const variantStyles = textButtonVariantStyles[variant];

    // Determine which state styles to use
    const currentState = isDisabled ? 'disabled' : state === 'hover' ? 'hover' : 'default';
    const styles = variantStyles[currentState];

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          textButtonBaseStyles,
          sizeStyles.padding,
          sizeStyles.text,
          styles.text,
          !isDisabled && styles.hoverText,
          !isDisabled && styles.underline,
          isDisabled && 'luca-cursor-not-allowed',
          className
        )}
        {...props}
      >
        {leftIcon && (
          <span
            className={cn(
              'luca-inline-flex luca-items-center luca-justify-center luca-shrink-0 luca-mr-1.5',
              sizeStyles.icon
            )}
          >
            {leftIcon}
          </span>
        )}
        <span className="luca-leading-5">{children}</span>
        {rightIcon && (
          <span
            className={cn(
              'luca-inline-flex luca-items-center luca-justify-center luca-shrink-0 luca-ml-1.5',
              sizeStyles.icon
            )}
          >
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

TextButton.displayName = 'TextButton';
