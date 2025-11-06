import React from 'react';
import { cn } from '../utils/cn';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonState = 'alert' | 'default';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  state?: ButtonState;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const buttonBaseStyles =
  'inline-flex items-center justify-center gap-2.5 h-9 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed';

const buttonVariantStyles: Record<ButtonVariant, Record<ButtonState, string>> =
  {
    primary: {
      default: cn(
        'bg-[#ffba31] text-gray-900 shadow-[0px_4px_0px_0px_#f58f00]',
        'hover:bg-[#f58f00] hover:shadow-[0px_4px_0px_0px_#d0780f]',
        'active:bg-[#ffba31]',
        'disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-[0px_4px_0px_0px_#adadad]',
        'focus-visible:outline-[#ffba31]'
      ),
      alert: cn(
        'bg-white text-red-500 border border-red-400',
        'hover:bg-red-50',
        'disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300',
        'focus-visible:outline-red-500'
      ),
    },
    secondary: {
      default: cn(
        'bg-white text-gray-900 border border-gray-200',
        'hover:border-[#c5daff] hover:text-[#3843d0]',
        'disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300',
        'focus-visible:outline-[#3843d0]'
      ),
      alert: cn(
        'bg-white text-red-500 border border-red-400',
        'hover:bg-red-50',
        'disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300',
        'focus-visible:outline-red-500'
      ),
    },
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
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
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          buttonBaseStyles,
          buttonVariantStyles[variant][state],
          className
        )}
        {...props}
      >
        {leftIcon && (
          <span className="inline-flex items-center justify-center w-6 h-6 shrink-0">
            {leftIcon}
          </span>
        )}
        <span className="leading-tight">{children}</span>
        {rightIcon && (
          <span className="inline-flex items-center justify-center w-6 h-6 shrink-0">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
