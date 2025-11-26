import React from 'react';
import { cn } from '../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Visual variant of the badge
   * @default 'fill'
   */
  variant?: 'fill' | 'outline' | 'duotone';

  /**
   * Color theme of the badge
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'gray' | 'light' | 'warning' | 'danger' | 'success' | 'info';

  /**
   * Border radius style
   * @default 'semi'
   */
  rounded?: 'semi' | 'full';

  /**
   * Show check icon
   * @default false
   */
  showIcon?: boolean;

  /**
   * Badge content
   */
  children: React.ReactNode;
}

const CheckIcon: React.FC<{ className?: string; color: string }> = ({ className, color }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M13.3337 4L6.00033 11.3333L2.66699 8"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Badge: React.FC<BadgeProps> = ({
  variant = 'fill',
  color = 'primary',
  rounded = 'semi',
  showIcon = false,
  children,
  className,
  ...props
}) => {
  // Base styles
  const baseStyles =
    'luca-inline-flex luca-items-center luca-justify-center luca-px-[10px] luca-py-[3px] luca-text-xs luca-leading-5 luca-font-normal';

  // Rounded styles
  const roundedStyles = {
    semi: 'luca-rounded',
    full: 'luca-rounded-[30px]',
  };

  // Gap when showing icon
  const gapStyles = showIcon && rounded === 'full' ? 'luca-gap-1' : '';

  // Color styles for different variants
  const colorVariants = {
    fill: {
      primary: 'luca-bg-primary-600 luca-text-white',
      secondary: 'luca-bg-accent-600 luca-text-neutral-900',
      gray: 'luca-bg-neutral-500 luca-text-white',
      light: 'luca-bg-neutral-50 luca-text-neutral-900',
      warning: 'luca-bg-warning-500 luca-text-white',
      danger: 'luca-bg-danger-600 luca-text-white',
      success: 'luca-bg-success-600 luca-text-white',
      info: 'luca-bg-info-400 luca-text-white',
    },
    outline: {
      primary: 'luca-border luca-border-primary-600 luca-text-primary-600',
      secondary: 'luca-border luca-border-accent-600 luca-text-neutral-900',
      gray: 'luca-border luca-border-neutral-500 luca-text-neutral-500',
      light: 'luca-border luca-border-neutral-50 luca-text-neutral-900',
      warning: 'luca-border luca-border-warning-500 luca-text-warning-500',
      danger: 'luca-border luca-border-danger-600 luca-text-danger-600',
      success: 'luca-border luca-border-success-600 luca-text-success-600',
      info: 'luca-border luca-border-info-400 luca-text-info-400',
    },
    duotone: {
      primary: 'luca-bg-primary-600/10 luca-text-primary-600',
      secondary: 'luca-bg-accent-100 luca-text-neutral-900',
      gray: 'luca-bg-neutral-500/10 luca-text-neutral-500',
      light: 'luca-bg-neutral-200/50 luca-text-neutral-700',
      warning: 'luca-bg-warning-50 luca-text-warning-600',
      danger: 'luca-bg-danger-50 luca-text-danger-600',
      success: 'luca-bg-success-50 luca-text-success-600',
      info: 'luca-bg-info-50 luca-text-info-600',
    },
  };

  // Icon colors for duotone variant
  const iconColors = {
    primary: '#3843D0',
    secondary: '#374151',
    gray: '#6b7280',
    light: '#374151',
    warning: '#d97706',
    danger: '#DC2626',
    success: '#16A34A',
    info: '#38BDF8',
  };

  return (
    <span
      className={cn(
        baseStyles,
        roundedStyles[rounded],
        gapStyles,
        colorVariants[variant][color],
        className
      )}
      {...props}
    >
      {showIcon && rounded === 'full' && variant === 'duotone' && (
        <CheckIcon className="luca-shrink-0" color={iconColors[color]} />
      )}
      {children}
    </span>
  );
};
