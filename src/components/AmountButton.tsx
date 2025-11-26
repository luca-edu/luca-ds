import React from 'react';
import { cn } from '../utils/cn';
import { PlusIcon, MinusIcon } from '../shared/icons';

export type AmountButtonVariant =
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';

export interface AmountButtonProps {
  value: number;
  onChange?: (value: number) => void;
  variant?: AmountButtonVariant;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  allowManualInput?: boolean;
  className?: string;
  buttonClassName?: string;
  displayClassName?: string;
}

// Mapeo de variantes a colores del tailwind.config.js
const variantColors: Record<
  AmountButtonVariant,
  {
    bg: string;
    border: string;
    icon: string;
    hover: string;
    disabled: string;
    disabledIcon: string;
  }
> = {
  primary: {
    bg: 'luca-bg-primary-600',
    border: 'luca-border-primary-600',
    icon: 'luca-text-white',
    hover: 'hover:luca-bg-primary-700',
    disabled: 'luca-bg-neutral-100',
    disabledIcon: 'luca-text-neutral-400',
  },
  accent: {
    bg: 'luca-bg-accent-600',
    border: 'luca-border-accent-600',
    icon: 'luca-text-white',
    hover: 'hover:luca-bg-accent-700',
    disabled: 'luca-bg-neutral-100',
    disabledIcon: 'luca-text-neutral-400',
  },
  success: {
    bg: 'luca-bg-success-500',
    border: 'luca-border-success-500',
    icon: 'luca-text-white',
    hover: 'hover:luca-bg-success-600',
    disabled: 'luca-bg-neutral-100',
    disabledIcon: 'luca-text-neutral-400',
  },
  warning: {
    bg: 'luca-bg-warning-500',
    border: 'luca-border-warning-500',
    icon: 'luca-text-white',
    hover: 'hover:luca-bg-warning-600',
    disabled: 'luca-bg-neutral-100',
    disabledIcon: 'luca-text-neutral-400',
  },
  danger: {
    bg: 'luca-bg-danger-500',
    border: 'luca-border-danger-500',
    icon: 'luca-text-white',
    hover: 'hover:luca-bg-danger-600',
    disabled: 'luca-bg-neutral-100',
    disabledIcon: 'luca-text-neutral-400',
  },
  info: {
    bg: 'luca-bg-info-500',
    border: 'luca-border-info-500',
    icon: 'luca-text-white',
    hover: 'hover:luca-bg-info-600',
    disabled: 'luca-bg-neutral-100',
    disabledIcon: 'luca-text-neutral-400',
  },
  neutral: {
    bg: 'luca-bg-neutral-500',
    border: 'luca-border-neutral-500',
    icon: 'luca-text-white',
    hover: 'hover:luca-bg-neutral-600',
    disabled: 'luca-bg-neutral-100',
    disabledIcon: 'luca-text-neutral-400',
  },
};

export const AmountButton: React.FC<AmountButtonProps> = ({
  value,
  onChange,
  variant = 'primary',
  min = 0,
  max,
  step = 1,
  disabled = false,
  allowManualInput = false,
  className,
  buttonClassName,
  displayClassName,
}) => {
  const colors = variantColors[variant];
  const isAtMin = value <= min;
  const isAtMax = max !== undefined && value >= max;
  const isDisabled = disabled || (isAtMin && isAtMax);
  const [inputValue, setInputValue] = React.useState<string>(String(value));

  // Sincronizar el input cuando cambia el value externo
  React.useEffect(() => {
    setInputValue(String(value));
  }, [value]);

  const handleDecrement = () => {
    if (!disabled && !isAtMin && onChange) {
      const newValue = Math.max(min, value - step);
      onChange(newValue);
    }
  };

  const handleIncrement = () => {
    if (!disabled && !isAtMax && onChange) {
      const newValue = max !== undefined ? Math.min(max, value + step) : value + step;
      onChange(newValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    setInputValue(inputVal);

    // Permitir campo vacío temporalmente mientras el usuario escribe
    if (inputVal === '') {
      return;
    }

    const numValue = Number(inputVal);

    // Validar que sea un número válido
    if (!isNaN(numValue) && onChange) {
      let newValue = numValue;

      // Aplicar límites min/max
      if (min !== undefined && newValue < min) {
        newValue = min;
      }
      if (max !== undefined && newValue > max) {
        newValue = max;
      }

      onChange(newValue);
    }
  };

  const handleInputBlur = () => {
    // Si el input está vacío o es inválido, restaurar el valor anterior
    const numValue = Number(inputValue);
    if (inputValue === '' || isNaN(numValue)) {
      setInputValue(String(value));
    } else {
      // Asegurar que el valor esté dentro del rango
      let newValue = numValue;
      if (min !== undefined && newValue < min) {
        newValue = min;
      }
      if (max !== undefined && newValue > max) {
        newValue = max;
      }
      if (newValue !== numValue && onChange) {
        onChange(newValue);
      }
      setInputValue(String(newValue));
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };

  // Determinar el estado de cada botón
  const decrementDisabled = disabled || isAtMin;
  const incrementDisabled = disabled || isAtMax;

  // Estilos para el botón de decrementar
  const decrementButtonClasses = cn(
    'luca-relative luca-h-10 luca-w-8 luca-flex luca-items-center luca-justify-center luca-border luca-border-solid luca-rounded-bl-[24px] luca-rounded-tl-[24px] luca-transition-all luca-duration-200',
    decrementDisabled
      ? `luca-bg-neutral-100 luca-border-neutral-200 luca-cursor-not-allowed`
      : `${colors.bg} ${colors.border} ${colors.hover} luca-cursor-pointer`,
    buttonClassName
  );

  // Estilos para el botón de incrementar
  const incrementButtonClasses = cn(
    'luca-relative luca-h-10 luca-w-8 luca-flex luca-items-center luca-justify-center luca-border luca-border-solid luca-rounded-br-[24px] luca-rounded-tr-[24px] luca-transition-all luca-duration-200',
    incrementDisabled
      ? `luca-bg-neutral-100 luca-border-neutral-200 luca-cursor-not-allowed`
      : `${colors.bg} ${colors.border} ${colors.hover} luca-cursor-pointer`,
    buttonClassName
  );

  // Calcular el ancho basado en la cantidad de dígitos
  const valueString = String(value);
  const digitCount = valueString.length;
  // Ancho base de 2rem (32px) + aproximadamente 0.75rem (12px) por cada dígito adicional
  const displayWidth = Math.max(2, 2 + (digitCount - 1) * 0.75);

  // Estilos para el display - ancho dinámico basado en dígitos
  const displayClasses = cn(
    'luca-bg-white luca-h-10 luca-flex luca-items-center luca-justify-center luca-border-t luca-border-b luca-border-neutral-200',
    displayClassName
  );

  return (
    <div className={cn('luca-flex luca-h-10 luca-items-center luca-relative', className)}>
      {/* Botón de decrementar */}
      <button
        type="button"
        onClick={handleDecrement}
        disabled={decrementDisabled}
        className={decrementButtonClasses}
        aria-label="Decrementar"
      >
        <MinusIcon
          size={16}
          className={cn(
            'luca-absolute luca-left-1/2 luca-top-1/2 luca-transform luca-translate-x-[-50%] luca-translate-y-[-50%]',
            decrementDisabled ? colors.disabledIcon : colors.icon
          )}
        />
      </button>

      {/* Display del valor o input */}
      <div
        className={displayClasses}
        style={{
          width: allowManualInput ? 'auto' : `${displayWidth}rem`,
          minWidth: '2rem',
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem',
        }}
      >
        {allowManualInput ? (
          <input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            disabled={disabled}
            min={min}
            max={max}
            step={step}
            className={cn(
              'luca-h-full luca-text-center luca-font-["Poppins"] luca-font-normal luca-leading-6 luca-text-base luca-border-none luca-bg-transparent luca-outline-none',
              'luca-appearance-none luca-[&::-webkit-inner-spin-button]:luca-appearance-none luca-[&::-webkit-outer-spin-button]:luca-appearance-none',
              isDisabled
                ? 'luca-text-neutral-400 luca-cursor-not-allowed'
                : 'luca-text-neutral-900',
              'focus:luca-outline-none'
            )}
            style={{
              width: `${Math.max(2, 2 + (inputValue.length - 1) * 0.5)}rem`,
              minWidth: '2rem',
            }}
            aria-label="Cantidad"
          />
        ) : (
          <span
            className={cn(
              'luca-font-["Poppins"] luca-font-normal luca-leading-6 luca-text-base luca-whitespace-nowrap',
              isDisabled ? 'luca-text-neutral-400' : 'luca-text-neutral-900'
            )}
          >
            {value}
          </span>
        )}
      </div>

      {/* Botón de incrementar */}
      <button
        type="button"
        onClick={handleIncrement}
        disabled={incrementDisabled}
        className={incrementButtonClasses}
        aria-label="Incrementar"
      >
        <PlusIcon
          size={16}
          className={cn(
            'luca-absolute luca-left-1/2 luca-top-1/2 luca-transform luca-translate-x-[-50%] luca-translate-y-[-50%]',
            incrementDisabled ? colors.disabledIcon : colors.icon
          )}
        />
      </button>
    </div>
  );
};

AmountButton.displayName = 'AmountButton';

export default AmountButton;
