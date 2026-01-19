import React from 'react';
import { cn } from '../utils/cn';

export type AwardInteractionSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AwardInteractionColor =
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';
export type AwardInteractionState = 'default' | 'hover' | 'active' | 'disabled';

export interface AwardInteractionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Tamaño del componente
   * @default 'md'
   */
  size?: AwardInteractionSize;

  /**
   * Variante de color
   * @default 'primary'
   */
  color?: AwardInteractionColor;

  /**
   * Estado del componente
   * @default 'default'
   */
  state?: AwardInteractionState;

  /**
   * Valor numérico a mostrar
   */
  value: number | string;

  /**
   * Descripción o etiqueta
   */
  description: string;

  /**
   * Icono personalizado (opcional, por defecto usa el icono de trofeo)
   */
  icon?: React.ReactNode;

  /**
   * Si es clickeable
   * @default false
   */
  clickable?: boolean;
}

const TrophyIcon: React.FC<{ className?: string; size?: number }> = ({ className, size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className={className}
  >
    <g clipPath="url(#clip0_1544_1141)">
      <path
        d="M16.763 47.6309L14.7691 39.877L7.23682 42.6093L18.0184 22.2278L27.5445 27.2493L16.763 47.6309Z"
        fill="#3843D0"
      />
      <path
        d="M18.5713 46.5146L23.9106 40.5489L29.3397 46.4418L29.1503 23.385L18.3819 23.4579L18.5713 46.5146Z"
        fill="#FF8283"
      />
      <path
        d="M24 30.3507C32.2792 30.3507 38.9908 23.6391 38.9908 15.3599C38.9908 7.08074 32.2792 0.369141 24 0.369141C15.7209 0.369141 9.00928 7.08074 9.00928 15.3599C9.00928 23.6391 15.7209 30.3507 24 30.3507Z"
        fill="#32C8BD"
      />
      <path
        d="M23.9998 26.1414C29.9543 26.1414 34.7813 21.3144 34.7813 15.3599C34.7813 9.40543 29.9543 4.57837 23.9998 4.57837C18.0453 4.57837 13.2183 9.40543 13.2183 15.3599C13.2183 21.3144 18.0453 26.1414 23.9998 26.1414Z"
        fill="#FFBA31"
      />
      <path
        d="M24 5.53857L26.2154 12.3324H33.3785L27.5447 16.5417L29.76 23.3355L24 19.1263L18.24 23.3355L20.4554 16.5417L14.6216 12.3324H21.7847L24 5.53857Z"
        fill="#F4F4F4"
      />
    </g>
    <defs>
      <clipPath id="clip0_1544_1141">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// Tamaños del contenedor
const containerSizeStyles: Record<AwardInteractionSize, string> = {
  xs: 'luca-px-2 luca-py-2 luca-w-full luca-max-w-[200px] xs:luca-max-w-[240px]',
  sm: 'luca-px-3 luca-py-3 luca-w-full luca-max-w-[240px] xs:luca-max-w-[280px]',
  md: 'luca-px-4 luca-py-4 luca-w-full luca-max-w-[280px] xs:luca-max-w-[313px] sml:luca-max-w-[320px]',
  lg: 'luca-px-5 luca-py-5 luca-w-full luca-max-w-[320px] xs:luca-max-w-[360px] sml:luca-max-w-[400px]',
  xl: 'luca-px-6 luca-py-6 luca-w-full luca-max-w-[360px] xs:luca-max-w-[400px] sml:luca-max-w-[450px] md:luca-max-w-[500px]',
};

// Tamaños del icono
const iconSizeStyles: Record<AwardInteractionSize, number> = {
  xs: 32,
  sm: 40,
  md: 48,
  lg: 56,
  xl: 64,
};

// Tamaños del gap entre elementos
const gapSizeStyles: Record<AwardInteractionSize, string> = {
  xs: 'luca-gap-1',
  sm: 'luca-gap-1.5',
  md: 'luca-gap-2',
  lg: 'luca-gap-2.5',
  xl: 'luca-gap-3',
};

// Tamaños del texto del valor
const valueTextSizeStyles: Record<AwardInteractionSize, string> = {
  xs: 'luca-text-base xs:luca-text-lg',
  sm: 'luca-text-lg xs:luca-text-xl',
  md: 'luca-text-xl xs:luca-text-2xl',
  lg: 'luca-text-2xl xs:luca-text-3xl',
  xl: 'luca-text-3xl xs:luca-text-4xl',
};

// Tamaños del texto de descripción
const descriptionTextSizeStyles: Record<AwardInteractionSize, string> = {
  xs: 'luca-text-xs xs:luca-text-sm',
  sm: 'luca-text-xs xs:luca-text-sm',
  md: 'luca-text-sm xs:luca-text-base',
  lg: 'luca-text-base xs:luca-text-lg',
  xl: 'luca-text-lg xs:luca-text-xl',
};

// Estilos de color para el fondo y borde
const colorStyles: Record<AwardInteractionColor, Record<AwardInteractionState, string>> = {
  primary: {
    default: 'luca-border luca-border-white luca-bg-primary-600',
    hover: 'luca-bg-primary-400',
    active: 'luca-bg-white/30 luca-border-white',
    disabled: 'luca-bg-primary-600 luca-opacity-50 luca-cursor-not-allowed',
  },
  accent: {
    default: 'luca-border luca-border-white luca-bg-accent-600',
    hover: 'luca-bg-accent-400',
    active: 'luca-bg-white/30 luca-border-white',
    disabled: 'luca-bg-accent-600 luca-opacity-50 luca-cursor-not-allowed',
  },
  success: {
    default: 'luca-border luca-border-white luca-bg-success-600',
    hover: 'luca-bg-success-400',
    active: 'luca-bg-white/30 luca-border-white',
    disabled: 'luca-bg-success-600 luca-opacity-50 luca-cursor-not-allowed',
  },
  warning: {
    default: 'luca-border luca-border-white luca-bg-warning-600',
    hover: 'luca-bg-warning-400',
    active: 'luca-bg-white/30 luca-border-white',
    disabled: 'luca-bg-warning-600 luca-opacity-50 luca-cursor-not-allowed',
  },
  danger: {
    default: 'luca-border luca-border-white luca-bg-danger-600',
    hover: 'luca-bg-danger-400',
    active: 'luca-bg-white/30 luca-border-white',
    disabled: 'luca-bg-danger-600 luca-opacity-50 luca-cursor-not-allowed',
  },
  info: {
    default: 'luca-border luca-border-white luca-bg-info-600',
    hover: 'luca-bg-info-400',
    active: 'luca-bg-white/30 luca-border-white',
    disabled: 'luca-bg-info-600 luca-opacity-50 luca-cursor-not-allowed',
  },
  neutral: {
    default: 'luca-border luca-border-white luca-bg-neutral-700',
    hover: 'luca-bg-neutral-400',
    active: 'luca-bg-white/30 luca-border-white',
    disabled: 'luca-bg-neutral-700 luca-opacity-50 luca-cursor-not-allowed',
  },
};

// Colores del icono según la variante
const iconColorStyles: Record<AwardInteractionColor, string> = {
  primary: 'luca-text-white',
  accent: 'luca-text-white',
  success: 'luca-text-white',
  warning: 'luca-text-white',
  danger: 'luca-text-white',
  info: 'luca-text-white',
  neutral: 'luca-text-white',
};

export const AwardInteraction: React.FC<AwardInteractionProps> = ({
  size = 'md',
  color = 'primary',
  state = 'default',
  value,
  description,
  icon,
  clickable = false,
  className,
  onClick,
  ...props
}) => {
  const isDisabled = state === 'disabled';
  const isClickable = clickable && !isDisabled && onClick;
  const isInteractive = isClickable && state === 'default';

  const baseStyles =
    'luca-flex luca-flex-col luca-items-center luca-justify-center luca-rounded-lg luca-transition-all luca-duration-200';

  // Si es clickeable y está en estado default, agregar estilos hover/active
  const interactiveStyles = isInteractive
    ? cn(
        'hover:luca-bg-white/20',
        'active:luca-bg-white/30',
        'focus-visible:luca-bg-white/20 focus-visible:luca-outline-none'
      )
    : '';

  const containerStyles = cn(
    baseStyles,
    containerSizeStyles[size],
    gapSizeStyles[size],
    // backgroundColorStyles[color],
    colorStyles[color][state],
    isClickable && 'luca-cursor-pointer',
    interactiveStyles,
    className
  );

  const iconStyles = cn('luca-shrink-0', iconColorStyles[color]);

  const valueStyles = cn(
    'luca-font-semibold luca-leading-tight luca-text-center luca-text-white luca-whitespace-pre-wrap',
    valueTextSizeStyles[size]
  );

  const descriptionStyles = cn(
    'luca-font-normal luca-leading-tight luca-text-center luca-text-white luca-whitespace-pre-wrap',
    descriptionTextSizeStyles[size]
  );

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDisabled || !onClick) return;
    onClick(e);
  };

  return (
    <div
      className={containerStyles}
      onClick={handleClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={(e) => {
        if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleClick(e as unknown as React.MouseEvent<HTMLDivElement>);
        }
      }}
      {...props}
    >
      <div
        className={cn(
          'luca-flex luca-flex-col',
          gapSizeStyles[size],
          'luca-items-center luca-justify-center luca-w-full'
        )}
      >
        <div className={iconStyles}>{icon || <TrophyIcon size={iconSizeStyles[size]} />}</div>
        <div className={valueStyles}>{value}</div>
        <div className={descriptionStyles}>{description}</div>
      </div>
    </div>
  );
};
