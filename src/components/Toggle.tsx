import React from 'react';
import { cn } from '../utils/cn';

export type ToggleVariant =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type ToggleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ToggleState = 'default' | 'focus' | 'disabled';

export interface ToggleProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'checked'> {
  /**
   * Color variant of the toggle
   * @default 'primary'
   */
  variant?: ToggleVariant;

  /**
   * Size of the toggle
   * @default 'md'
   */
  size?: ToggleSize;

  /**
   * State of the toggle
   * @default 'default'
   */
  state?: ToggleState;

  /**
   * Label text
   */
  label?: React.ReactNode;

  /**
   * Helper text below the label
   */
  helperText?: React.ReactNode;

  /**
   * Left label (for left & right label variant)
   */
  leftLabel?: React.ReactNode;

  /**
   * Right label (for left & right label variant)
   */
  rightLabel?: React.ReactNode;

  /**
   * Left icon (for left & right icons variant)
   */
  leftIcon?: React.ReactNode;

  /**
   * Right icon (for left & right icons variant)
   */
  rightIcon?: React.ReactNode;

  /**
   * Layout variant
   * @default 'default'
   */
  layout?: 'default' | 'left-right-label' | 'left-right-icons';

  /**
   * Whether the toggle is checked (controlled)
   */
  checked?: boolean;

  /**
   * Default checked state (uncontrolled)
   */
  defaultChecked?: boolean;

  /**
   * Change handler
   */
  onChange?: (checked: boolean) => void;
}

const toggleSizeStyles: Record<
  ToggleSize,
  {
    trackHeight: string;
    trackWidth: string;
    thumbSize: string;
    thumbLeft: string;
    thumbRight: string;
    thumbTop: string;
  }
> = {
  xs: {
    trackHeight: 'luca-h-4',
    trackWidth: 'luca-w-7',
    thumbSize: 'luca-w-3 luca-h-3',
    thumbLeft: 'luca-left-0.5',
    thumbRight: 'luca-left-[12px]',
    thumbTop: 'luca-top-[1px]',
  },
  sm: {
    trackHeight: 'luca-h-5',
    trackWidth: 'luca-w-9',
    thumbSize: 'luca-w-4 luca-h-4',
    thumbLeft: 'luca-left-0.5',
    thumbRight: 'luca-left-[16px]',
    thumbTop: 'luca-top-[1px]',
  },
  md: {
    trackHeight: 'luca-h-5',
    trackWidth: 'luca-w-9',
    thumbSize: 'luca-w-4 luca-h-4',
    thumbLeft: 'luca-left-0.5',
    thumbRight: 'luca-left-[16px]',
    thumbTop: 'luca-top-[1px]',
  },
  lg: {
    trackHeight: 'luca-h-6',
    trackWidth: 'luca-w-11',
    thumbSize: 'luca-w-5 luca-h-5',
    thumbLeft: 'luca-left-0.5',
    thumbRight: 'luca-right-0.75',
    thumbTop: 'luca-top-[1px]',
  },
  xl: {
    trackHeight: 'luca-h-7',
    trackWidth: 'luca-w-14',
    thumbSize: 'luca-w-6 luca-h-6',
    thumbLeft: 'luca-left-1',
    thumbRight: 'luca-right-1',
    thumbTop: 'luca-top-[1px]',
  },
};

const toggleVariantStyles: Record<
  ToggleVariant,
  Record<
    'unchecked' | 'checked' | 'disabled',
    { trackBg: string; trackBorder: string; thumbBg: string }
  >
> = {
  primary: {
    unchecked: {
      trackBg: 'luca-bg-neutral-100',
      trackBorder: 'luca-border-neutral-200',
      thumbBg: 'luca-bg-white',
    },
    checked: {
      trackBg: 'luca-bg-primary-600',
      trackBorder: 'luca-border-primary-600',
      thumbBg: 'luca-bg-white',
    },
    disabled: {
      trackBg: 'luca-bg-neutral-100',
      trackBorder: 'luca-border-neutral-100',
      thumbBg: 'luca-bg-neutral-50',
    },
  },
  neutral: {
    unchecked: {
      trackBg: 'luca-bg-neutral-100',
      trackBorder: 'luca-border-neutral-200',
      thumbBg: 'luca-bg-white',
    },
    checked: {
      trackBg: 'luca-bg-neutral-700',
      trackBorder: 'luca-border-neutral-700',
      thumbBg: 'luca-bg-white',
    },
    disabled: {
      trackBg: 'luca-bg-neutral-100',
      trackBorder: 'luca-border-neutral-100',
      thumbBg: 'luca-bg-neutral-50',
    },
  },
  accent: {
    unchecked: {
      trackBg: 'luca-bg-neutral-100',
      trackBorder: 'luca-border-neutral-200',
      thumbBg: 'luca-bg-white',
    },
    checked: {
      trackBg: 'luca-bg-accent-600',
      trackBorder: 'luca-border-accent-600',
      thumbBg: 'luca-bg-white',
    },
    disabled: {
      trackBg: 'luca-bg-neutral-100',
      trackBorder: 'luca-border-neutral-100',
      thumbBg: 'luca-bg-neutral-50',
    },
  },
  success: {
    unchecked: {
      trackBg: 'luca-bg-neutral-100',
      trackBorder: 'luca-border-neutral-200',
      thumbBg: 'luca-bg-white',
    },
    checked: {
      trackBg: 'luca-bg-success-600',
      trackBorder: 'luca-border-success-600',
      thumbBg: 'luca-bg-white',
    },
    disabled: {
      trackBg: 'luca-bg-neutral-100',
      trackBorder: 'luca-border-neutral-100',
      thumbBg: 'luca-bg-neutral-50',
    },
  },
  warning: {
    unchecked: {
      trackBg: 'luca-bg-neutral-100',
      trackBorder: 'luca-border-neutral-200',
      thumbBg: 'luca-bg-white',
    },
    checked: {
      trackBg: 'luca-bg-warning-600',
      trackBorder: 'luca-border-warning-600',
      thumbBg: 'luca-bg-white',
    },
    disabled: {
      trackBg: 'luca-bg-neutral-100',
      trackBorder: 'luca-border-neutral-100',
      thumbBg: 'luca-bg-neutral-50',
    },
  },
  danger: {
    unchecked: {
      trackBg: 'luca-bg-neutral-100',
      trackBorder: 'luca-border-neutral-200',
      thumbBg: 'luca-bg-white',
    },
    checked: {
      trackBg: 'luca-bg-danger-600',
      trackBorder: 'luca-border-danger-600',
      thumbBg: 'luca-bg-white',
    },
    disabled: {
      trackBg: 'luca-bg-neutral-100',
      trackBorder: 'luca-border-neutral-100',
      thumbBg: 'luca-bg-neutral-50',
    },
  },
  info: {
    unchecked: {
      trackBg: 'luca-bg-neutral-100',
      trackBorder: 'luca-border-neutral-200',
      thumbBg: 'luca-bg-white',
    },
    checked: {
      trackBg: 'luca-bg-info-600',
      trackBorder: 'luca-border-info-600',
      thumbBg: 'luca-bg-white',
    },
    disabled: {
      trackBg: 'luca-bg-neutral-100',
      trackBorder: 'luca-border-neutral-100',
      thumbBg: 'luca-bg-neutral-50',
    },
  },
};

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      state = 'default',
      label,
      helperText,
      leftLabel,
      rightLabel,
      leftIcon,
      rightIcon,
      layout = 'default',
      checked,
      defaultChecked,
      onChange,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;
    const isDisabled = disabled || state === 'disabled';
    const isFocus = state === 'focus' && !isDisabled;

    const sizeStyles = toggleSizeStyles[size];
    const trackState = isDisabled ? 'disabled' : isChecked ? 'checked' : 'unchecked';
    const trackStyles = toggleVariantStyles[variant][trackState];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked;
      if (!isControlled) {
        setInternalChecked(newChecked);
      }
      if (onChange) {
        onChange(newChecked);
      }
    };

    const toggleElement = (
      <label
        className={cn(
          'luca-relative luca-inline-flex luca-items-center luca-cursor-pointer',
          isDisabled && 'luca-cursor-not-allowed luca-opacity-50',
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={isDisabled}
          className="luca-sr-only"
          {...props}
        />
        <div
          className={cn(
            'luca-relative luca-rounded-full luca-border luca-transition-all luca-duration-200 luca-ease-in-out',
            sizeStyles.trackHeight,
            sizeStyles.trackWidth,
            trackStyles.trackBg,
            trackStyles.trackBorder,
            isFocus && 'luca-shadow-[0px_0px_0px_2px_rgba(190,219,255,1)]',
            isChecked && 'luca-transition-colors'
          )}
        >
          <div
            className={cn(
              'luca-absolute luca-rounded-full luca-transition-all luca-duration-200 luca-ease-in-out luca-shadow-[0px_1px_0.5px_0.05px_rgba(29,41,61,0.02)]',
              sizeStyles.thumbSize,
              sizeStyles.thumbTop,
              isChecked ? sizeStyles.thumbRight : sizeStyles.thumbLeft,
              trackStyles.thumbBg
            )}
          />
        </div>
      </label>
    );

    if (layout === 'left-right-label') {
      return (
        <div className="luca-flex luca-gap-3 luca-items-center">
          {leftLabel && (
            <span className="luca-text-sm luca-font-medium luca-text-neutral-900">{leftLabel}</span>
          )}
          {toggleElement}
          {rightLabel && (
            <span className="luca-text-sm luca-font-medium luca-text-neutral-900">
              {rightLabel}
            </span>
          )}
        </div>
      );
    }

    if (layout === 'left-right-icons') {
      return (
        <div className="luca-flex luca-gap-3 luca-items-center">
          {leftIcon && <div className="luca-shrink-0 luca-w-5 luca-h-5">{leftIcon}</div>}
          {toggleElement}
          {rightIcon && <div className="luca-shrink-0 luca-w-5 luca-h-5">{rightIcon}</div>}
        </div>
      );
    }

    if (label || helperText) {
      return (
        <div className="luca-flex luca-gap-2 luca-items-start">
          {toggleElement}
          {(label || helperText) && (
            <div className="luca-flex luca-flex-col luca-gap-0.5">
              {label && (
                <label className="luca-text-sm luca-font-medium luca-leading-5 luca-text-neutral-900 luca-cursor-pointer">
                  {label}
                </label>
              )}
              {helperText && (
                <p className="luca-text-sm luca-font-normal luca-leading-5 luca-text-neutral-600">
                  {helperText}
                </p>
              )}
            </div>
          )}
        </div>
      );
    }

    return toggleElement;
  }
);

Toggle.displayName = 'Toggle';
