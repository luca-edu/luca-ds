import React from 'react';
import { cn } from '../utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
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
  'luca-inline-flex luca-items-center luca-justify-center luca-gap-2.5 luca-h-9 luca-px-4 luca-py-2.5 luca-rounded-xl luca-font-semibold luca-text-sm luca-transition-all luca-duration-200 luca-whitespace-nowrap disabled:luca-cursor-not-allowed';

const buttonVariantStyles: Record<ButtonVariant, Record<ButtonState, string>> =
  {
    primary: {
      default: cn(
        // Default state - amarillo
        'luca-bg-[#ffba31] luca-text-[#111827] luca-shadow-[0px_4px_0px_0px_#f58f00]',
        // Hover, Active, Focus - mismo diseño (naranja más oscuro)
        'hover:luca-bg-[#f58f00] hover:luca-shadow-[0px_4px_0px_0px_#d0780f]',
        'active:luca-bg-[#f58f00] active:luca-shadow-[0px_4px_0px_0px_#d0780f]',
        'focus-visible:luca-bg-[#f58f00] focus-visible:luca-shadow-[0px_4px_0px_0px_#d0780f] focus-visible:luca-outline-none',
        // Disabled state - gris
        'disabled:luca-bg-[#f3f4f6] disabled:luca-text-[#9ca3af] disabled:luca-shadow-[0px_4px_0px_0px_#adadad]'
      ),
      alert: cn(
        // Alert default - borde rojo, fondo blanco
        'luca-bg-white luca-text-[#ef4444] luca-border luca-border-[#f87171]',
        // Alert hover/focus - fondo rojo muy claro
        'hover:luca-bg-[#fef2f2]',
        'focus-visible:luca-bg-[#fef2f2] focus-visible:luca-outline-none',
        'active:luca-bg-[#fef2f2]',
        // Disabled - gris
        'disabled:luca-bg-[#f3f4f6] disabled:luca-text-[#9ca3af] disabled:luca-border-[#adadad]'
      ),
    },
    secondary: {
      default: cn(
        'luca-bg-white luca-text-gray-900 luca-border luca-border-gray-200 luca-shadow-[0px_3px_0px_0px_#adadad]',
        'hover:luca-border-[#c5daff] hover:luca-text-[#3843d0]',
        'disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300',
        'focus-visible:luca-outline-[#3843d0]'
      ),
      alert: cn(
        'luca-bg-white luca-text-red-500 luca-border luca-border-red-400',
        'hover:luca-bg-red-50',
        'disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300',
        'focus-visible:luca-outline-red-500'
      ),
    },
    tertiary: {
      default: cn(
        '!luca-rounded-full luca-bg-white luca-text-[#4b5563] luca-border luca-border-[#e5e7eb]',
        'hover:luca-bg-[#edf5ff] hover:luca-border-[#3843d0] hover:luca-text-[#3843d0]',
        'active:luca-bg-[#3843d0] active:luca-border-white active:luca-text-white',
        'disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300',
        'focus-visible:luca-outline-[#3843d0]'
      ),
      alert: cn(
        '!luca-rounded-full luca-bg-white luca-text-red-500 luca-border luca-border-red-400',
        'hover:luca-bg-red-50',
        'disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300',
        'focus-visible:luca-outline-red-500'
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
