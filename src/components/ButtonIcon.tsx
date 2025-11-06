import React from 'react';
import { cn } from '../utils/cn';

const buttonIconVariants = {
  state: {
    default: 'bg-white border-[#e5e7eb] text-[#3843d0]',
    hover: 'bg-[#edf5ff] border-[#e5e7eb] text-[#3843d0]',
    selected: 'bg-[#3843d0] border-[#3843d0] text-white',
    disabled: 'bg-[#f3f4f6] border-[#e5e7eb] text-[#9ca3af] cursor-not-allowed'
  },
  outline: {
    default: 'rounded-lg',
    rounded: 'rounded-full'
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
          'flex items-center justify-center w-8 h-8 p-1 border transition-all duration-200',
          buttonIconVariants.state[state],
          buttonIconVariants.outline[outline],
          // Hover styles solo si no está disabled
          !isDisabled && 'hover:bg-[#edf5ff] hover:text-[#3843d0]',
          className
        )}
        {...props}
      >
        <span className="w-4 h-4 flex items-center justify-center">
          {icon}
        </span>
      </button>
    );
  }
);

ButtonIcon.displayName = 'ButtonIcon';