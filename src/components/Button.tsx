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
  'luca-inline-flex luca-items-center luca-justify-center luca-gap-2.5 luca-h-9 luca-px-4 luca-py-2.5 luca-rounded-xl luca-font-semibold luca-text-sm luca-transition-all luca-duration-200 luca-whitespace-nowrap luca-focus-visible:outline luca-focus-visible:outline-2 luca-focus-visible:outline-offset-2 luca-disabled:cursor-not-allowed';

const buttonVariantStyles: Record<ButtonVariant, Record<ButtonState, string>> =
  {
    primary: {
      default: cn(
        'luca-bg-[#ffba31] luca-text-gray-900 luca-shadow-[0px_4px_0px_0px_#f58f00]',
        'luca-hover:bg-[#f58f00] luca-hover:shadow-[0px_4px_0px_0px_#d0780f]',
        'luca-active:bg-[#ffba31]',
        'luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:shadow-[0px_4px_0px_0px_#adadad]',
        'luca-focus-visible:outline-[#ffba31]'
      ),
      alert: cn(
        'luca-bg-white luca-text-red-500 luca-border luca-border-red-400',
        'luca-hover:bg-red-50',
        'luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:border-gray-300',
        'luca-focus-visible:outline-red-500'
      ),
    },
    secondary: {
      default: cn(
        'luca-bg-white luca-text-gray-900 luca-border luca-border-gray-200',
        'luca-hover:border-[#c5daff] luca-hover:text-[#3843d0]',
        'luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:border-gray-300',
        'luca-focus-visible:outline-[#3843d0]'
      ),
      alert: cn(
        'luca-bg-white luca-text-red-500 luca-border luca-border-red-400',
        'luca-hover:bg-red-50',
        'luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:border-gray-300',
        'luca-focus-visible:outline-red-500'
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
          <span className="luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0">
            {leftIcon}
          </span>
        )}
        <span className="luca-leading-tight">{children}</span>
        {rightIcon && (
          <span className="luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
