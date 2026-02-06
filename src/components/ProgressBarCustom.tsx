import React from 'react';
import { cn } from '../utils/cn';

export type ProgressBarCustomVariant =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type ProgressBarCustomSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ProgressBarCustomState = 'default' | 'hover' | 'disabled';

export interface ProgressBarCustomProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Progress value (0-100)
   */
  value: number;
  /**
   * Maximum value
   * @default 100
   */
  max?: number;
  /**
   * Visual variant of the progress bar (uses tailwind colors)
   * @default "primary"
   */
  variant?: ProgressBarCustomVariant;
  /**
   * Size of the progress bar (responsive)
   * @default "md"
   */
  size?: ProgressBarCustomSize;
  /**
   * State of the progress bar
   * @default "default"
   */
  state?: ProgressBarCustomState;
  /**
   * Show percentage label
   * @default false
   */
  showLabel?: boolean;
  /**
   * Custom label text (overrides percentage)
   */
  label?: string;
  /**
   * Label position
   * @default "inside"
   */
  labelPosition?: 'inside' | 'outside' | 'top';
  /**
   * Enable striped pattern
   * @default false
   */
  striped?: boolean;
  /**
   * Enable animated stripes
   * @default false
   */
  animated?: boolean;
  /**
   * Show border/outline effect
   * @default true
   */
  showBorder?: boolean;
  /**
   * Custom background color for the track
   */
  trackClassName?: string;
  /**
   * Custom color for the filled bar
   */
  barClassName?: string;
  /**
   * Custom styles for the container
   */
  customStyles?: React.CSSProperties;
}

const progressBarCustomSizeStyles: Record<
  ProgressBarCustomSize,
  {
    track: string;
    label: string;
    borderWidth: string;
    heightOuter: string;
    heightFill: string;
  }
> = {
  xs: {
    track: 'luca-h-6',
    label: 'luca-text-[10px] luca-leading-[14px]',
    borderWidth:
      'luca-border-[1px] luca-py-[3px] luca-px-4 luca-shadow-[0_4px_0.2px_rgba(0,0,0,0.10)]',
    heightOuter: 'luca-w-[calc(100%-32px)] luca-h-[16px]',
    heightFill: 'luca-h-4',
  },
  sm: {
    track: 'luca-h-8',
    label: 'luca-text-xs luca-leading-[16px]',
    borderWidth:
      'luca-border-[2px] luca-py-[4px] luca-px-4 luca-shadow-[0_4px_0.2px_rgba(0,0,0,0.10)]',
    heightOuter: 'luca-w-[calc(100%-32px)] luca-h-[20px]',
    heightFill: 'luca-h-5',
  },
  md: {
    track: 'luca-h-10',
    label: 'luca-text-sm luca-leading-[20px]',
    borderWidth:
      'luca-border-[3px] luca-py-[5px] luca-px-4 luca-shadow-[0_4px_0.2px_rgba(0,0,0,0.10)]',
    heightOuter: 'luca-w-[calc(100%-32px)] luca-h-[24px]',
    heightFill: 'luca-h-6',
  },
  lg: {
    track: 'luca-h-12',
    label: 'luca-text-base luca-leading-[24px]',
    borderWidth:
      'luca-border-[4px] luca-py-[6px] luca-px-4 luca-shadow-[0_5px_0.2px_rgba(0,0,0,0.10)]',
    heightOuter: 'luca-w-[calc(100%-32px)] luca-h-[28px]',
    heightFill: 'luca-h-7',
  },
  xl: {
    track: 'luca-h-14',
    label: 'luca-text-lg luca-leading-[28px]',
    borderWidth:
      'luca-border-[5px] luca-py-[7px] luca-px-4 luca-shadow-[0_6px_0.2px_rgba(0,0,0,0.10)]',
    heightOuter: 'luca-w-[calc(100%-32px)] luca-h-[32px]',
    heightFill: 'luca-h-8',
  },
};

const progressBarCustomVariantStyles: Record<
  ProgressBarCustomVariant,
  Record<
    ProgressBarCustomState,
    {
      track: string;
      fill: string;
      border: string;
      borderOuter: string;
    }
  >
> = {
  primary: {
    default: {
      track: 'luca-bg-primary-100',
      fill: 'luca-bg-primary-600',
      border: 'luca-border-primary-400',
      borderOuter: 'luca-bg-primary-200',
    },
    hover: {
      track: 'luca-bg-primary-100',
      fill: 'luca-bg-primary-700',
      border: 'luca-border-primary-500',
      borderOuter: 'luca-bg-primary-300',
    },
    disabled: {
      track: 'luca-bg-neutral-200',
      fill: 'luca-bg-neutral-400',
      border: 'luca-border-neutral-300',
      borderOuter: 'luca-bg-neutral-100',
    },
  },
  neutral: {
    default: {
      track: 'luca-bg-neutral-100',
      fill: 'luca-bg-neutral-600',
      border: 'luca-border-neutral-400',
      borderOuter: 'luca-bg-neutral-200',
    },
    hover: {
      track: 'luca-bg-neutral-100',
      fill: 'luca-bg-neutral-700',
      border: 'luca-border-neutral-500',
      borderOuter: 'luca-bg-neutral-200',
    },
    disabled: {
      track: 'luca-bg-neutral-200',
      fill: 'luca-bg-neutral-400',
      border: 'luca-border-neutral-300',
      borderOuter: 'luca-bg-neutral-200',
    },
  },
  accent: {
    default: {
      track: 'luca-bg-accent-100',
      fill: 'luca-bg-accent-600',
      border: 'luca-border-accent-400',
      borderOuter: 'luca-bg-accent-200',
    },
    hover: {
      track: 'luca-bg-accent-100',
      fill: 'luca-bg-accent-700',
      border: 'luca-border-accent-500',
      borderOuter: 'luca-bg-accent-200',
    },
    disabled: {
      track: 'luca-bg-neutral-200',
      fill: 'luca-bg-neutral-400',
      border: 'luca-border-neutral-300',
      borderOuter: 'luca-bg-neutral-200',
    },
  },
  success: {
    default: {
      track: 'luca-bg-success-100',
      fill: 'luca-bg-success-600',
      border: 'luca-border-success-400',
      borderOuter: 'luca-bg-success-200',
    },
    hover: {
      track: 'luca-bg-success-100',
      fill: 'luca-bg-success-700',
      border: 'luca-border-success-500',
      borderOuter: 'luca-bg-success-200',
    },
    disabled: {
      track: 'luca-bg-neutral-200',
      fill: 'luca-bg-neutral-400',
      border: 'luca-border-neutral-300',
      borderOuter: 'luca-bg-neutral-200',
    },
  },
  warning: {
    default: {
      track: 'luca-bg-warning-100',
      fill: 'luca-bg-warning-600',
      border: 'luca-border-warning-400',
      borderOuter: 'luca-bg-warning-200',
    },
    hover: {
      track: 'luca-bg-warning-100',
      fill: 'luca-bg-warning-700',
      border: 'luca-border-warning-500',
      borderOuter: 'luca-bg-warning-200',
    },
    disabled: {
      track: 'luca-bg-neutral-200',
      fill: 'luca-bg-neutral-400',
      border: 'luca-border-neutral-300',
      borderOuter: 'luca-bg-neutral-200',
    },
  },
  danger: {
    default: {
      track: 'luca-bg-danger-100',
      fill: 'luca-bg-danger-600',
      border: 'luca-border-danger-400',
      borderOuter: 'luca-bg-danger-200',
    },
    hover: {
      track: 'luca-bg-danger-100',
      fill: 'luca-bg-danger-700',
      border: 'luca-border-danger-500',
      borderOuter: 'luca-bg-danger-200',
    },
    disabled: {
      track: 'luca-bg-neutral-200',
      fill: 'luca-bg-neutral-400',
      border: 'luca-border-neutral-300',
      borderOuter: 'luca-bg-neutral-200',
    },
  },
  info: {
    default: {
      track: 'luca-bg-info-100',
      fill: 'luca-bg-info-600',
      border: 'luca-border-info-400',
      borderOuter: 'luca-bg-info-200',
    },
    hover: {
      track: 'luca-bg-info-100',
      fill: 'luca-bg-info-700',
      border: 'luca-border-info-500',
      borderOuter: 'luca-bg-info-200',
    },
    disabled: {
      track: 'luca-bg-neutral-200',
      fill: 'luca-bg-neutral-400',
      border: 'luca-border-neutral-300',
      borderOuter: 'luca-bg-neutral-200',
    },
  },
};

export const ProgressBarCustom = React.forwardRef<HTMLDivElement, ProgressBarCustomProps>(
  (
    {
      value,
      max = 100,
      variant = 'primary',
      size = 'md',
      state = 'default',
      showLabel = false,
      label,
      labelPosition = 'inside',
      striped = false,
      animated = false,
      showBorder = true,
      trackClassName,
      barClassName,
      customStyles,
      className,
      ...props
    },
    ref
  ) => {
    // Ensure value is within bounds
    const clampedValue = Math.min(Math.max(value, 0), max);
    const percentage = Math.round((clampedValue / max) * 100);
    const displayLabel = label ?? (showLabel ? `${percentage}%` : '');

    const isDisabled = state === 'disabled';
    const isHover = state === 'hover';
    const styles = progressBarCustomVariantStyles[variant][state];
    const sizeStyles = progressBarCustomSizeStyles[size];

    const showInsideLabel =
      labelPosition === 'inside' && displayLabel && size !== 'xs' && size !== 'sm';
    const showTopLabel = labelPosition === 'top' && displayLabel;
    const showOutsideLabel = labelPosition === 'outside' && displayLabel;

    return (
      <div
        ref={ref}
        className={cn(
          'luca-w-full luca-max-w-full',
          'xs:luca-max-w-full sml:luca-max-w-full md:luca-max-w-full',
          className
        )}
        style={customStyles}
        {...props}
      >
        {/* Top Label */}
        {showTopLabel && (
          <div className="luca-flex luca-justify-between luca-items-center luca-mb-2">
            <span className={cn('luca-font-medium luca-text-neutral-700', sizeStyles.label)}>
              {displayLabel}
            </span>
          </div>
        )}

        {/* Progress Track and Bar Container */}
        <div className="luca-flex luca-items-center luca-gap-3">
          {/* Track with custom border effect */}
          <div
            className={cn(
              'luca-relative luca-w-full luca-overflow-hidden luca-rounded-full',
              sizeStyles.track,
              styles.track,
              isDisabled && 'luca-opacity-50',
              showBorder && styles.border,
              showBorder && sizeStyles.borderWidth,
              trackClassName
            )}
            role="progressbar"
            aria-valuenow={clampedValue}
            aria-valuemin={0}
            aria-valuemax={max}
            aria-label={displayLabel || `${percentage}% complete`}
            aria-disabled={isDisabled}
          >
            {/* Outer border effect */}
            {showBorder && (
              <div
                className={cn(
                  'luca-absolute luca-inset-0 luca-rounded-full luca-top-1/2 luca-left-1/2 luca-translate-x-[-50%] luca-translate-y-[-50%] luca-z-10',
                  styles.borderOuter,
                  sizeStyles.heightOuter,
                  'luca-pointer-events-none'
                )}
              />
            )}

            {/* Filled Bar */}
            <div
              className={cn(
                'luca-rounded-full luca-transition-all luca-duration-500 luca-ease-out luca-z-10 luca-relative',
                styles.fill,
                sizeStyles.heightFill,
                striped && 'luca-bg-[length:1rem_1rem]',
                striped &&
                  'luca-bg-gradient-to-r luca-from-transparent luca-via-white/20 luca-to-transparent',
                striped &&
                  'luca-bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)]',
                animated && striped && 'luca-animate-[progress-bar-stripes_1s_linear_infinite]',
                isHover && !isDisabled && 'luca-shadow-sm',
                barClassName
              )}
              style={{
                width: `${percentage}%`,
              }}
            >
              {/* Inside Label */}
              {showInsideLabel && (
                <div className="luca-flex luca-h-full luca-items-center luca-justify-end luca-px-2">
                  <span
                    className={cn(
                      'luca-font-medium luca-text-white luca-drop-shadow-sm',
                      sizeStyles.label
                    )}
                  >
                    {displayLabel}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Outside Label */}
          {showOutsideLabel && (
            <span
              className={cn(
                'luca-font-medium luca-text-neutral-700 luca-whitespace-nowrap',
                sizeStyles.label
              )}
            >
              {displayLabel}
            </span>
          )}
        </div>
      </div>
    );
  }
);

ProgressBarCustom.displayName = 'ProgressBarCustom';
