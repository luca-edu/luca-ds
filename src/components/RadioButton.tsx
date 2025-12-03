import React from 'react';
import { cn } from '../utils/cn';

export type RadioButtonVariant =
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';

export type RadioButtonStyle = 'default' | 'filled';

export interface RadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'style'> {
  /**
   * Label text (deprecated in favor of children)
   */
  label?: string;

  /**
   * Custom content to display next to the radio button
   * Takes priority over label prop
   */
  children?: React.ReactNode;

  variant?: RadioButtonVariant;
  style?: RadioButtonStyle;

  /**
   * Whether to show the label/children
   * @default true
   */
  showLabel?: boolean;

  className?: string;
  wrapperClassName?: string;
}

// Mapeo de variantes a colores del tailwind.config.js
const variantColors: Record<
  RadioButtonVariant,
  {
    border: string;
    borderHover: string;
    borderFilled: string;
    bg: string;
    bgFilled: string;
    dot: string;
    dotFilled: string;
  }
> = {
  primary: {
    border: 'luca-border-primary-500',
    borderHover: 'luca-border-primary-500',
    borderFilled: 'luca-border-primary-600',
    bg: 'luca-bg-primary-600',
    bgFilled: 'luca-bg-primary-50',
    dot: 'luca-bg-white',
    dotFilled: 'luca-bg-primary-600',
  },
  accent: {
    border: 'luca-border-accent-600',
    borderHover: 'luca-border-accent-600',
    borderFilled: 'luca-border-accent-700',
    bg: 'luca-bg-accent-600',
    bgFilled: 'luca-bg-accent-50',
    dot: 'luca-bg-white',
    dotFilled: 'luca-bg-accent-700',
  },
  success: {
    border: 'luca-border-success-500',
    borderHover: 'luca-border-success-500',
    borderFilled: 'luca-border-success-600',
    bg: 'luca-bg-success-500',
    bgFilled: 'luca-bg-success-50',
    dot: 'luca-bg-white',
    dotFilled: 'luca-bg-success-600',
  },
  warning: {
    border: 'luca-border-warning-500',
    borderHover: 'luca-border-warning-500',
    borderFilled: 'luca-border-warning-600',
    bg: 'luca-bg-warning-500',
    bgFilled: 'luca-bg-warning-50',
    dot: 'luca-bg-white',
    dotFilled: 'luca-bg-warning-600',
  },
  danger: {
    border: 'luca-border-danger-500',
    borderHover: 'luca-border-danger-500',
    borderFilled: 'luca-border-danger-600',
    bg: 'luca-bg-danger-500',
    bgFilled: 'luca-bg-danger-50',
    dot: 'luca-bg-white',
    dotFilled: 'luca-bg-danger-600',
  },
  info: {
    border: 'luca-border-info-500',
    borderHover: 'luca-border-info-500',
    borderFilled: 'luca-border-info-600',
    bg: 'luca-bg-info-500',
    bgFilled: 'luca-bg-info-50',
    dot: 'luca-bg-white',
    dotFilled: 'luca-bg-info-600',
  },
  neutral: {
    border: 'luca-border-neutral-200',
    borderHover: 'luca-border-neutral-300',
    borderFilled: 'luca-border-neutral-400',
    bg: 'luca-bg-neutral-500',
    bgFilled: 'luca-bg-neutral-50',
    dot: 'luca-bg-white',
    dotFilled: 'luca-bg-neutral-600',
  },
};

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      label,
      children,
      variant = 'primary',
      style = 'default',
      showLabel = true,
      className,
      wrapperClassName,
      checked,
      disabled,
      id,
      name,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const radioId = id ?? generatedId;
    const colors = variantColors[variant];
    const isChecked = checked ?? false;
    const isFilled = style === 'filled';
    const content = children ?? label;

    // Estilos del círculo del radio
    const radioCircleClasses = cn(
      'luca-relative luca-size-5 luca-rounded-full luca-border-2 luca-transition-all luca-duration-200 luca-flex luca-items-center luca-justify-center',
      // Estado unchecked
      !isChecked &&
        !disabled &&
        'luca-bg-white luca-border-neutral-200 hover:luca-border-neutral-300',
      // Estado hover (unchecked)
      !isChecked && !disabled && `hover:${colors.borderHover}`,
      // Estado checked - default style
      isChecked && !isFilled && !disabled && `${colors.bg} ${colors.border}`,
      // Estado checked - filled style (fondo claro con borde oscuro)
      isChecked && isFilled && !disabled && `${colors.bgFilled} ${colors.borderFilled}`,
      // Estado disabled
      disabled &&
        'luca-bg-neutral-100 luca-border-neutral-200 luca-cursor-not-allowed luca-opacity-60',
      className
    );

    // Estilos del punto interno
    const dotClasses = cn(
      'luca-absolute luca-size-2.5 luca-rounded-full luca-transition-all luca-duration-200',
      // Punto para estilo default
      isChecked && !isFilled && !disabled && colors.dot,
      // Punto para estilo filled
      isChecked && isFilled && !disabled && colors.dotFilled,
      // Sin punto cuando no está checked
      !isChecked && 'luca-opacity-0'
    );

    return (
      <div className={cn('luca-flex luca-items-center luca-gap-2.5', wrapperClassName)}>
        <div className="luca-relative luca-shrink-0">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            name={name}
            value={value}
            checked={isChecked}
            disabled={disabled}
            onChange={onChange}
            className="luca-sr-only"
            aria-checked={isChecked}
            aria-disabled={disabled}
            {...props}
          />
          <label
            htmlFor={radioId}
            className={cn('luca-cursor-pointer', disabled && 'luca-cursor-not-allowed')}
          >
            <div className={radioCircleClasses}>
              <div className={dotClasses} />
            </div>
          </label>
        </div>
        {showLabel && content && (
          <label
            htmlFor={radioId}
            className={cn(
              'luca-font-["Poppins"] luca-font-normal luca-leading-6 luca-text-base luca-text-neutral-900 luca-cursor-pointer luca-select-none',
              disabled && 'luca-cursor-not-allowed luca-opacity-60'
            )}
          >
            {content}
          </label>
        )}
      </div>
    );
  }
);

RadioButton.displayName = 'RadioButton';

export default RadioButton;
