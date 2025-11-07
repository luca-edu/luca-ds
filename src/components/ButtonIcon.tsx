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

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: 'default' | 'selected' | 'hover' | 'disabled';
  outline?: 'default' | 'rounded';
  icon?: React.ReactNode;
}

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      state = 'default',
      outline = 'default',
      icon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    // Si el estado es disabled, forzamos disabled=true en el botón
    const isDisabled = state === 'disabled' || disabled;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          'luca-flex luca-items-center luca-justify-center luca-w-8 luca-h-8 luca-p-1 luca-border luca-transition-all luca-duration-200',
          buttonIconVariants.state[state],
          buttonIconVariants.outline[outline],
          // Hover styles solo si no está disabled
          !isDisabled && 'hover:luca-bg-[#edf5ff] hover:luca-text-[#3843d0]',
          className
        )}
        {...props}
      >
        <span className="luca-w-4 luca-h-4 luca-flex luca-items-center luca-justify-center">
          {icon}
        </span>
      </button>
    );
  }
);

ButtonIcon.displayName = 'ButtonIcon';