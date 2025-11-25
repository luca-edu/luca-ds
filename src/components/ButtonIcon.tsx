import React from 'react';
import { cn } from '../utils/cn';

const buttonIconVariants = {
  state: {
    default: 'luca-bg-white luca-border-[#e5e7eb] luca-text-[#3843d0]',
    hover: 'luca-bg-[#edf5ff] luca-border-[#e5e7eb] luca-text-[#3843d0]',
    selected: 'luca-bg-[#3843d0] luca-border-[#3843d0] luca-text-white',
    disabled:
      'luca-bg-[#f3f4f6] luca-border-[#e5e7eb] luca-text-[#9ca3af] luca-cursor-not-allowed'
  },
  outline: {
    default: 'luca-rounded-lg',
    rounded: 'luca-rounded-full'
  }
};

const buttonIconSizeStyles: Record<ButtonIconSize, { container: string; icon: string }> = {
  xs: {
    container: 'luca-w-6 luca-h-6 luca-p-0.5',
    icon: 'luca-w-3 luca-h-3',
  },
  sm: {
    container: 'luca-w-7 luca-h-7 luca-p-1',
    icon: 'luca-w-3.5 luca-h-3.5',
  },
  md: {
    container: 'luca-w-8 luca-h-8 luca-p-1',
    icon: 'luca-w-4 luca-h-4',
  },
  lg: {
    container: 'luca-w-10 luca-h-10 luca-p-1.5',
    icon: 'luca-w-5 luca-h-5',
  },
  xl: {
    container: 'luca-w-12 luca-h-12 luca-p-2',
    icon: 'luca-w-6 luca-h-6',
  },
};

export type ButtonIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: 'default' | 'selected' | 'hover' | 'disabled';
  outline?: 'default' | 'rounded';
  size?: ButtonIconSize;
  icon?: React.ReactNode;
}

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      state = 'default',
      outline = 'default',
      size = 'md',
      icon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    // Si el estado es disabled, forzamos disabled=true en el botón
    const isDisabled = state === 'disabled' || disabled;
    const sizeStyles = buttonIconSizeStyles[size];

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          'luca-flex luca-items-center luca-justify-center luca-border luca-transition-all luca-duration-200',
          sizeStyles.container,
          buttonIconVariants.state[state],
          buttonIconVariants.outline[outline],
          // Hover styles solo si no está disabled
          !isDisabled && 'hover:luca-bg-[#edf5ff] hover:luca-text-[#3843d0]',
          className
        )}
        {...props}
      >
        <span className={cn('luca-flex luca-items-center luca-justify-center', sizeStyles.icon)}>
          {icon}
        </span>
      </button>
    );
  }
);

ButtonIcon.displayName = 'ButtonIcon';