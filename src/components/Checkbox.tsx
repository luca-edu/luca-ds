import React from 'react';
import { cn } from '../utils/cn';
import { CheckIcon, MinusIcon } from '../shared/icons';

export type CheckboxVariant =
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';

export type CheckboxStyle = 'default' | 'filled';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'style'> {
  /**
   * Label text (deprecated in favor of children)
   */
  label?: string;

  /**
   * Custom content to display next to the checkbox
   * Takes priority over label prop
   */
  children?: React.ReactNode;

  variant?: CheckboxVariant;
  style?: CheckboxStyle;

  /**
   * Whether to show the label/children
   * @default true
   */
  showLabel?: boolean;

  indeterminate?: boolean;
  className?: string;
  wrapperClassName?: string;
}

// Mapeo de variantes a colores del tailwind.config.js
const variantColors: Record<
  CheckboxVariant,
  {
    border: string;
    borderHover: string;
    borderFilled: string;
    bg: string;
    bgFilled: string;
    icon: string;
    iconFilled: string;
  }
> = {
  primary: {
    border: 'luca-border-primary-500',
    borderHover: 'luca-border-primary-500',
    borderFilled: 'luca-border-primary-600',
    bg: 'luca-bg-primary-600',
    bgFilled: 'luca-bg-primary-50',
    icon: 'luca-text-white',
    iconFilled: 'luca-text-primary-600',
  },
  accent: {
    border: 'luca-border-accent-600',
    borderHover: 'luca-border-accent-600',
    borderFilled: 'luca-border-accent-700',
    bg: 'luca-bg-accent-600',
    bgFilled: 'luca-bg-accent-50',
    icon: 'luca-text-white',
    iconFilled: 'luca-text-accent-700',
  },
  success: {
    border: 'luca-border-success-500',
    borderHover: 'luca-border-success-500',
    borderFilled: 'luca-border-success-600',
    bg: 'luca-bg-success-500',
    bgFilled: 'luca-bg-success-50',
    icon: 'luca-text-white',
    iconFilled: 'luca-text-success-600',
  },
  warning: {
    border: 'luca-border-warning-500',
    borderHover: 'luca-border-warning-500',
    borderFilled: 'luca-border-warning-600',
    bg: 'luca-bg-warning-500',
    bgFilled: 'luca-bg-warning-50',
    icon: 'luca-text-white',
    iconFilled: 'luca-text-warning-600',
  },
  danger: {
    border: 'luca-border-danger-500',
    borderHover: 'luca-border-danger-500',
    borderFilled: 'luca-border-danger-600',
    bg: 'luca-bg-danger-500',
    bgFilled: 'luca-bg-danger-50',
    icon: 'luca-text-white',
    iconFilled: 'luca-text-danger-600',
  },
  info: {
    border: 'luca-border-info-500',
    borderHover: 'luca-border-info-500',
    borderFilled: 'luca-border-info-600',
    bg: 'luca-bg-info-500',
    bgFilled: 'luca-bg-info-50',
    icon: 'luca-text-white',
    iconFilled: 'luca-text-info-600',
  },
  neutral: {
    border: 'luca-border-neutral-200',
    borderHover: 'luca-border-neutral-300',
    borderFilled: 'luca-border-neutral-400',
    bg: 'luca-bg-neutral-500',
    bgFilled: 'luca-bg-neutral-50',
    icon: 'luca-text-white',
    iconFilled: 'luca-text-neutral-600',
  },
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      children,
      variant = 'primary',
      style = 'default',
      showLabel = true,
      indeterminate = false,
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
    const checkboxId = id ?? generatedId;
    const internalRef = React.useRef<HTMLInputElement>(null);
    const inputRef = (ref || internalRef) as React.RefObject<HTMLInputElement>;
    const colors = variantColors[variant];
    const isChecked = checked ?? false;
    const isFilled = style === 'filled';
    const isIndeterminate = indeterminate && !isChecked;
    const content = children ?? label;

    // Sincronizar el atributo indeterminate del input
    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = isIndeterminate;
      }
    }, [isIndeterminate, inputRef]);

    // Estilos del cuadrado del checkbox
    const checkboxSquareClasses = cn(
      'luca-relative luca-size-5 luca-rounded-lg luca-border-2 luca-transition-all luca-duration-200 luca-flex luca-items-center luca-justify-center',
      // Estado unchecked
      !isChecked &&
        !isIndeterminate &&
        !disabled &&
        'luca-bg-white luca-border-neutral-200 hover:luca-border-neutral-300',
      // Estado hover (unchecked)
      !isChecked && !isIndeterminate && !disabled && `hover:${colors.borderHover}`,
      // Estado checked - default style
      isChecked && !isFilled && !disabled && `${colors.bg} ${colors.border}`,
      // Estado checked - filled style (fondo claro con borde oscuro)
      isChecked && isFilled && !disabled && `${colors.bgFilled} ${colors.borderFilled}`,
      // Estado indeterminate - default style
      isIndeterminate && !isFilled && !disabled && `${colors.bg} ${colors.border}`,
      // Estado indeterminate - filled style
      isIndeterminate && isFilled && !disabled && `${colors.bgFilled} ${colors.borderFilled}`,
      // Estado disabled
      disabled &&
        'luca-bg-neutral-100 luca-border-neutral-200 luca-cursor-not-allowed luca-opacity-60',
      className
    );

    // Estilos del icono interno
    const iconClasses = cn(
      'luca-absolute luca-transition-all luca-duration-200',
      // Icono para estilo default
      (isChecked || isIndeterminate) && !isFilled && !disabled && colors.icon,
      // Icono para estilo filled
      (isChecked || isIndeterminate) && isFilled && !disabled && colors.iconFilled,
      // Sin icono cuando no está checked ni indeterminate
      !isChecked && !isIndeterminate && 'luca-opacity-0'
    );

    return (
      <div className={cn('luca-flex luca-items-center luca-gap-2.5', wrapperClassName)}>
        <div className="luca-relative luca-shrink-0">
          <input
            ref={inputRef}
            type="checkbox"
            id={checkboxId}
            name={name}
            value={value}
            checked={isChecked}
            disabled={disabled}
            onChange={onChange}
            className="luca-sr-only"
            aria-checked={isIndeterminate ? 'mixed' : isChecked}
            aria-disabled={disabled}
            {...props}
          />
          <label
            htmlFor={checkboxId}
            className={cn('luca-cursor-pointer', disabled && 'luca-cursor-not-allowed')}
          >
            <div className={checkboxSquareClasses}>
              {isIndeterminate ? (
                <MinusIcon size={12} className={iconClasses} />
              ) : (
                <CheckIcon size={14} className={iconClasses} />
              )}
            </div>
          </label>
        </div>
        {showLabel && content && (
          <label
            htmlFor={checkboxId}
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

Checkbox.displayName = 'Checkbox';

export default Checkbox;
