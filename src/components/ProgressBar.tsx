import React from 'react';
import { cn } from '../utils/cn';

export type ProgressBarVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';
export type ProgressBarSize = 'sm' | 'md' | 'lg';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
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
   * Visual variant of the progress bar
   * @default "default"
   */
  variant?: ProgressBarVariant;
  /**
   * Size of the progress bar
   * @default "md"
   */
  size?: ProgressBarSize;
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
   * Enable striped animation
   * @default false
   */
  striped?: boolean;
  /**
   * Enable animated stripes
   * @default false
   */
  animated?: boolean;
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

const variantClasses: Record<ProgressBarVariant, string> = {
  default: 'luca-bg-primary-500',
  success: 'luca-bg-success-500',
  warning: 'luca-bg-warning-500',
  danger: 'luca-bg-danger-500',
  info: 'luca-bg-info-500',
};

const sizeClasses: Record<ProgressBarSize, { track: string; label: string }> = {
  sm: {
    track: 'luca-h-2',
    label: 'luca-text-xs',
  },
  md: {
    track: 'luca-h-4',
    label: 'luca-text-sm',
  },
  lg: {
    track: 'luca-h-6',
    label: 'luca-text-base',
  },
};

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      max = 100,
      variant = 'default',
      size = 'md',
      showLabel = false,
      label,
      labelPosition = 'inside',
      striped = false,
      animated = false,
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

    const showInsideLabel = labelPosition === 'inside' && displayLabel && size !== 'sm';
    const showTopLabel = labelPosition === 'top' && displayLabel;
    const showOutsideLabel = labelPosition === 'outside' && displayLabel;

    return (
      <div ref={ref} className={cn('luca-w-full', className)} style={customStyles} {...props}>
        {/* Top Label */}
        {showTopLabel && (
          <div className="luca-flex luca-justify-between luca-items-center luca-mb-2">
            <span className={cn('luca-font-medium luca-text-neutral-700', sizeClasses[size].label)}>
              {displayLabel}
            </span>
          </div>
        )}

        {/* Progress Track and Bar Container */}
        <div className="luca-flex luca-items-center luca-gap-3">
          {/* Track */}
          <div
            className={cn(
              'luca-relative luca-w-full luca-overflow-hidden luca-rounded-full luca-bg-neutral-200',
              sizeClasses[size].track,
              trackClassName
            )}
            role="progressbar"
            aria-valuenow={clampedValue}
            aria-valuemin={0}
            aria-valuemax={max}
            aria-label={displayLabel || `${percentage}% complete`}
          >
            {/* Filled Bar */}
            <div
              className={cn(
                'luca-h-full luca-rounded-full luca-transition-all luca-duration-500 luca-ease-out',
                variantClasses[variant],
                striped && 'luca-bg-[length:1rem_1rem]',
                striped &&
                  'luca-bg-gradient-to-r luca-from-transparent luca-via-white/20 luca-to-transparent',
                striped &&
                  'luca-bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)]',
                animated && striped && 'luca-animate-[progress-bar-stripes_1s_linear_infinite]',
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
                      sizeClasses[size].label
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
                sizeClasses[size].label
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

ProgressBar.displayName = 'ProgressBar';

// Add keyframes for striped animation to global styles
// This should be added to your Tailwind config or global CSS:
/*
@keyframes progress-bar-stripes {
  0% {
    background-position: 1rem 0;
  }
  100% {
    background-position: 0 0;
  }
}
*/
