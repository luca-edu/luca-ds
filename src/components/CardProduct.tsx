import React, { useState } from 'react';
import { cn } from '../utils/cn';
import { GemIcon, GemIconBlue } from '../shared/icons';
import { Badge } from './Badge';

export type CardProductSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type CardProductColor =
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';
export type CardProductState =
  | 'default'
  | 'hover'
  | 'disabled'
  | 'blocked'
  | 'exclusive'
  | 'exclusiveHover';

export interface CardProductProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Tamaño del componente
   * @default 'md'
   */
  size?: CardProductSize;

  /**
   * Variante de color
   * @default 'primary'
   */
  color?: CardProductColor;

  /**
   * Estado del componente
   * @default 'default'
   */
  state?: CardProductState;

  /**
   * Imagen del producto
   */
  imageSrc?: string;

  /**
   * Alt text para la imagen
   */
  imageAlt?: string;

  /**
   * Elemento de imagen personalizado
   */
  image?: React.ReactNode;

  /**
   * Nombre del producto
   */
  productName: string;

  /**
   * Valor en gemas
   */
  gemsValue?: number | string;

  /**
   * Mostrar gemas
   * @default true
   */
  showGems?: boolean;

  /**
   * Mostrar texto del producto
   * @default true
   */
  showText?: boolean;

  /**
   * Texto de nivel bloqueado (ej: "Nivel Máster")
   */
  blockedLevelText?: string;

  /**
   * Si es clickeable
   * @default false
   */
  clickable?: boolean;

  /**
   * Handler de click
   */
  onClick?: () => void;

  /**
   * Mostrar badge de comprado
   * @default false
   */
  showPurchasedBadge?: boolean;

  /**
   * Texto del badge de comprado
   * @default 'Comprado'
   */
  purchasedText?: string;
}

// Icono de candado
const LockIcon: React.FC<{ className?: string; size?: number }> = ({ className, size = 32 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
  >
    <path
      d="M24 11H7.99999C5.97495 11 4.33333 12.6416 4.33333 14.6667V25.3333C4.33333 27.3584 5.97495 29 7.99999 29H24C26.025 29 27.6667 27.3584 27.6667 25.3333V14.6667C27.6667 12.6416 26.025 11 24 11Z"
      fill="#7D9CFC"
    />
    <path
      d="M17 18.6667V21.3333C17 21.8853 16.552 22.3333 16 22.3333C15.448 22.3333 15 21.8853 15 21.3333V18.6667C15 18.1147 15.448 17.6667 16 17.6667C16.552 17.6667 17 18.1147 17 18.6667ZM27.6667 14.6667V25.3333C27.6667 27.356 26.0227 29 24 29H7.99999C5.97733 29 4.33333 27.356 4.33333 25.3333V14.6667C4.33333 12.644 5.97733 11 7.99999 11H8.33333V10.6667C8.33333 6.44 11.7733 3 16 3C20.2267 3 23.6667 6.44 23.6667 10.6667V11H24C26.0227 11 27.6667 12.644 27.6667 14.6667ZM10.3333 11H21.6667V10.6667C21.6667 7.54267 19.124 5 16 5C12.876 5 10.3333 7.54267 10.3333 10.6667V11ZM25.6667 14.6667C25.6667 13.748 24.9187 13 24 13H7.99999C7.08133 13 6.33333 13.748 6.33333 14.6667V25.3333C6.33333 26.252 7.08133 27 7.99999 27H24C24.9187 27 25.6667 26.252 25.6667 25.3333V14.6667Z"
      fill="#494249"
    />
  </svg>
);

const ExclusiveIcon: React.FC<{ className?: string; size?: number }> = ({
  className,
  size = 32,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M136.985 79.7863H62.4041C60.5802 79.7863 58.9219 78.7286 58.1539 77.0735L34.9562 27.0996C34.0992 25.2508 34.5332 23.0625 36.0319 21.6805C37.5288 20.2994 39.7485 20.0452 41.5202 21.0508L80.0411 42.9057L95.6138 2.98848C96.315 1.19042 98.0498 0.00585938 99.9798 0.00585938C101.912 0.00585938 103.643 1.19042 104.346 2.98848L119.919 42.9057L158.44 21.0508C160.219 20.042 162.448 20.304 163.945 21.6952C165.442 23.0864 165.864 25.2913 164.985 27.1383L141.216 77.1126C140.44 78.7465 138.793 79.7863 136.985 79.7863ZM65.395 70.4155H134.023L150.134 36.5373L119.833 53.7296C118.65 54.4003 117.231 54.5257 115.952 54.07C114.67 53.6143 113.65 52.6244 113.155 51.3572L99.9793 17.5848L86.8051 51.3558C86.3107 52.6234 85.2903 53.6129 84.008 54.0686C82.7256 54.5225 81.3086 54.3989 80.1254 53.7286L49.6155 36.4187L65.395 70.4155Z"
      fill="#FFBA31"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M99.9797 199.954C98.4276 199.954 96.9759 199.185 96.1036 197.903L54.6297 136.877C53.1753 134.738 53.7297 131.821 55.8715 130.367C58.0109 128.912 60.9257 129.467 62.3801 131.609L99.9784 186.932L116.026 163.321C117.48 161.183 120.393 160.625 122.536 162.08C124.676 163.536 125.233 166.45 123.778 168.59L103.856 197.903C102.983 199.186 101.532 199.954 99.9797 199.954ZM130.472 155.083C129.566 155.083 128.65 154.821 127.842 154.272C125.703 152.818 125.146 149.902 126.601 147.762L158.235 101.214C159.689 99.0752 162.603 98.5157 164.746 99.972C166.885 101.427 167.442 104.343 165.988 106.482L134.351 153.03C133.446 154.363 131.972 155.083 130.472 155.083ZM47.9351 123.372C46.435 123.372 44.9622 122.654 44.0558 121.32L33.9722 106.483C32.5178 104.343 33.0723 101.427 35.214 99.9728C37.352 98.516 40.2678 99.0728 41.7226 101.215L51.8062 116.052C53.2606 118.191 52.7057 121.107 50.5644 122.562C49.7595 123.108 48.8429 123.372 47.9351 123.372Z"
      fill="#FFBA31"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M162.111 108.532H37.8477C36.1572 108.532 34.5967 107.621 33.7668 106.149C32.9351 104.677 32.9628 102.87 33.8365 101.423L51.1939 72.6772C52.0418 71.273 53.5649 70.4137 55.2052 70.4137H144.757C146.399 70.4137 147.92 71.2731 148.77 72.6772L166.126 101.423C166.999 102.871 167.025 104.677 166.193 106.149C165.361 107.623 163.802 108.532 162.111 108.532ZM46.152 99.1614H153.808L142.111 79.7864H57.8501L46.152 99.1614Z"
      fill="#FFBA31"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M99.9797 199.954C97.8675 199.954 96.0141 198.541 95.4592 196.502L70.5096 105.08C69.8278 102.584 71.3007 100.008 73.7971 99.3261C76.2963 98.6462 78.8689 100.115 79.552 102.615L99.9816 177.47L120.411 102.615C121.093 100.117 123.665 98.643 126.165 99.3261C128.662 100.008 130.133 102.584 129.453 105.08L104.503 196.502C103.944 198.541 102.092 199.954 99.9797 199.954Z"
      fill="#FFBA31"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M82.4401 54.3399C81.6384 54.3399 80.8404 54.1351 80.1277 53.7296L56.616 40.3895C55.5343 39.7765 54.7418 38.7575 54.4115 37.5582C54.0812 36.3588 54.2404 35.0783 54.8553 33.998C60.487 24.0935 71.0576 17.9391 82.4397 17.9391C86.415 17.9391 90.2939 18.6665 93.9698 20.1029C96.3795 21.0453 97.5705 23.7613 96.6304 26.1706L86.8048 51.3564C86.3103 52.624 85.2904 53.6134 84.008 54.0692C83.4992 54.2509 82.9692 54.3399 82.4401 54.3399ZM65.7544 34.7992L80.0411 42.9043L86.0128 27.594C84.8384 27.4049 83.645 27.3108 82.4379 27.3108C76.0109 27.3104 69.9516 30.0983 65.7544 34.7992Z"
      fill="#FFBA31"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M117.521 54.34C116.992 54.34 116.462 54.25 115.952 54.0701C114.67 53.6144 113.649 52.6245 113.155 51.3574L103.33 26.1715C102.389 23.7618 103.579 21.044 105.99 20.1039C109.666 18.6684 113.546 17.9396 117.52 17.9396C128.903 17.9396 139.471 24.094 145.104 33.9985C145.72 35.0793 145.879 36.3616 145.547 37.5587C145.216 38.7561 144.424 39.7765 143.343 40.3904L119.833 53.7306C119.121 54.1333 118.323 54.34 117.521 54.34ZM113.945 27.595L119.918 42.9058L134.203 34.8006C130.008 30.0993 123.947 27.3123 117.519 27.3123C116.314 27.3104 115.119 27.4068 113.945 27.595Z"
      fill="#FFBA31"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100.032 60.8178C97.4427 60.8178 95.3457 58.7208 95.3457 56.1316V49.1788C95.3457 46.5897 97.4427 44.4927 100.032 44.4927C102.621 44.4927 104.718 46.5896 104.718 49.1788V56.1321C104.718 58.7208 102.621 60.8178 100.032 60.8178Z"
      fill="#FFBA31"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M75.2885 66.6547C72.6994 66.6547 70.6019 64.5578 70.6019 61.9686V60.7287C70.6019 58.1395 72.6994 56.0421 75.2885 56.0421C77.8777 56.0421 79.9746 58.1395 79.9746 60.7287V61.9686C79.9746 64.5578 77.8758 66.6547 75.2885 66.6547Z"
      fill="#FFBA31"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M124.774 66.6547C122.185 66.6547 120.088 64.5578 120.088 61.9686V60.7287C120.088 58.1395 122.185 56.0421 124.774 56.0421C127.364 56.0421 129.461 58.1395 129.461 60.7287V61.9686C129.461 64.5578 127.364 66.6547 124.774 66.6547Z"
      fill="#FFBA31"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M153.986 199.954H45.9726C43.3834 199.954 41.286 197.857 41.286 195.268C41.286 192.679 43.3834 190.582 45.9726 190.582H153.986C156.576 190.582 158.673 192.679 158.673 195.268C158.673 197.857 156.576 199.954 153.986 199.954Z"
      fill="#FFBA31"
    />
  </svg>
);

// Tamaños del contenedor
const containerSizeStyles: Record<
  CardProductSize,
  { width: string; height: string; imageSize: string }
> = {
  xs: {
    width: 'luca-w-[100px]',
    height: 'luca-h-[120px]',
    imageSize: 'luca-w-[80px] luca-h-[80px]',
  },
  sm: {
    width: 'luca-w-[120px]',
    height: 'luca-h-[140px]',
    imageSize: 'luca-w-[96px] luca-h-[96px]',
  },
  md: {
    width: 'luca-w-[140px] xs:luca-w-[100px] sml:luca-w-[140px]',
    height: 'luca-h-[170px] xs:luca-h-[120px] sml:luca-h-[170px]',
    imageSize: 'luca-w-[120px] luca-h-[120px] xs:luca-w-[120px] xs:luca-h-[120px]',
  },
  lg: {
    width: 'luca-w-[160px]',
    height: 'luca-h-[190px]',
    imageSize: 'luca-w-[140px] luca-h-[140px]',
  },
  xl: {
    width: 'luca-w-[200px]',
    height: 'luca-h-[230px]',
    imageSize: 'luca-w-[180px] luca-h-[180px]',
  },
};

// Tamaños del texto
const textSizeStyles: Record<CardProductSize, { name: string; gems: string; level: string }> = {
  xs: {
    name: 'luca-text-[10px] xs:luca-text-xs',
    gems: 'luca-text-[10px] xs:luca-text-xs',
    level: 'luca-text-[10px] xs:luca-text-xs',
  },
  sm: {
    name: 'luca-text-xs xs:luca-text-sm',
    gems: 'luca-text-xs xs:luca-text-sm',
    level: 'luca-text-xs xs:luca-text-sm',
  },
  md: {
    name: 'luca-text-sm xs:luca-text-base',
    gems: 'luca-text-sm xs:luca-text-base',
    level: 'luca-text-sm xs:luca-text-base',
  },
  lg: {
    name: 'luca-text-base xs:luca-text-lg',
    gems: 'luca-text-base xs:luca-text-lg',
    level: 'luca-text-base xs:luca-text-lg',
  },
  xl: {
    name: 'luca-text-lg xs:luca-text-xl',
    gems: 'luca-text-lg xs:luca-text-xl',
    level: 'luca-text-lg xs:luca-text-xl',
  },
};

// Tamaños del icono de candado
const lockIconSizeStyles: Record<CardProductSize, number> = {
  xs: 24,
  sm: 28,
  md: 32,
  lg: 36,
  xl: 40,
};

// Estilos de color para el fondo
const backgroundColorStyles: Record<CardProductColor, Record<CardProductState, string>> = {
  primary: {
    default: 'luca-border luca-border-white',
    hover: 'luca-bg-primary-50 luca-border luca-border-primary-300',
    disabled: '',
    blocked: '',
    exclusive: '',
    exclusiveHover: 'luca-bg-warning-50 luca-border luca-border-warning-600',
  },
  accent: {
    default: 'luca-border luca-border-white',
    hover: 'luca-bg-accent-100 luca-border luca-border-accent-600',
    disabled: '',
    blocked: '',
    exclusive: '',
    exclusiveHover: 'luca-bg-warning-50 luca-border luca-border-warning-600',
  },
  success: {
    default: 'luca-border luca-border-white',
    hover: 'luca-bg-success-100 luca-border luca-border-success-600',
    disabled: '',
    blocked: '',
    exclusive: '',
    exclusiveHover: 'luca-bg-warning-50 luca-border luca-border-warning-600',
  },
  warning: {
    default: 'luca-border luca-border-white',
    hover: 'luca-bg-warning-100 luca-border luca-border-warning-600',
    disabled: '',
    blocked: '',
    exclusive: '',
    exclusiveHover: 'luca-bg-warning-50 luca-border luca-border-warning-600',
  },
  danger: {
    default: 'luca-border luca-border-white',
    hover: 'luca-bg-danger-100 luca-border luca-border-danger-600',
    disabled: '',
    blocked: '',
    exclusive: '',
    exclusiveHover: 'luca-bg-warning-50 luca-border luca-border-warning-600',
  },
  info: {
    default: 'luca-border luca-border-white',
    hover: 'luca-bg-info-100 luca-border luca-border-info-600',
    disabled: '',
    blocked: '',
    exclusive: '',
    exclusiveHover: 'luca-bg-warning-50 luca-border luca-border-warning-600',
  },
  neutral: {
    default: 'luca-border luca-border-white',
    hover: 'luca-bg-neutral-100 luca-border luca-border-neutral-600',
    disabled: '',
    blocked: '',
    exclusive: '',
    exclusiveHover: 'luca-bg-warning-50 luca-border luca-border-warning-600',
  },
};

const bottomBackgroundContainerStyles: Record<CardProductSize, string> = {
  xs: 'luca-h-[80px]',
  sm: 'luca-h-[100px]',
  md: 'luca-h-[120px]',
  lg: 'luca-h-[140px]',
  xl: 'luca-h-[160px]',
};

const bottomBackgroundRadiusStyles: Record<CardProductSize, string> = {
  xs: 'luca-rounded-t-[16px]',
  sm: 'luca-rounded-t-[20px]',
  md: 'luca-rounded-t-[24px]',
  lg: 'luca-rounded-t-[28px]',
  xl: 'luca-rounded-t-[32px]',
};

const bottomBackgroundColorStyles: Record<CardProductColor, Record<CardProductState, string>> = {
  primary: {
    default: 'luca-bg-primary-50 luca-border luca-border-primary-200',
    hover: '',
    disabled: 'luca-bg-neutral-100',
    blocked: '',
    exclusive: 'luca-bg-gradient-to-t luca-from-accent-100 luca-to-transparent',
    exclusiveHover: '',
  },
  accent: {
    default: 'luca-bg-accent-200',
    hover: '',
    disabled: 'luca-bg-neutral-100',
    blocked: '',
    exclusive: 'luca-bg-gradient-to-t luca-from-accent-100 luca-to-transparent',
    exclusiveHover: '',
  },
  success: {
    default: 'luca-bg-success-200',
    hover: '',
    disabled: 'luca-bg-neutral-100',
    blocked: '',
    exclusive: 'luca-bg-gradient-to-t luca-from-accent-100 luca-to-transparent',
    exclusiveHover: '',
  },
  warning: {
    default: 'luca-bg-warning-200',
    hover: '',
    disabled: 'luca-bg-neutral-100',
    blocked: '',
    exclusive: 'luca-bg-gradient-to-t luca-from-accent-100 luca-to-transparent',
    exclusiveHover: '',
  },
  danger: {
    default: 'luca-bg-danger-200',
    hover: '',
    disabled: 'luca-bg-neutral-100',
    blocked: '',
    exclusive: 'luca-bg-gradient-to-t luca-from-accent-100 luca-to-transparent',
    exclusiveHover: '',
  },
  info: {
    default: 'luca-bg-info-200',
    hover: '',
    disabled: 'luca-bg-neutral-100',
    blocked: '',
    exclusive: 'luca-bg-gradient-to-t luca-from-accent-100 luca-to-transparent',
    exclusiveHover: '',
  },
  neutral: {
    default: 'luca-bg-neutral-200',
    hover: '',
    disabled: 'luca-bg-neutral-100',
    blocked: '',
    exclusive: 'luca-bg-gradient-to-t luca-from-accent-100 luca-to-transparent',
    exclusiveHover: '',
  },
};

const blockedBackgroundColorStyles: Record<CardProductColor, string> = {
  primary: 'luca-bg-neutral-400/50',
  accent: 'luca-bg-neutral-400/50',
  success: 'luca-bg-neutral-400/50',
  warning: 'luca-bg-neutral-400/50',
  danger: 'luca-bg-neutral-400/50',
  info: 'luca-bg-neutral-400/50',
  neutral: 'luca-bg-neutral-400/50',
};

// Estilos de sombra
const shadowStyles: Record<CardProductState, string> = {
  default: '',
  hover: 'luca-shadow-[0px_4px_10px_2px_rgba(65,81,234,0.2)]',
  disabled: '',
  blocked: '',
  exclusive: '',
  exclusiveHover: 'luca-shadow-[0px_4px_10px_0px_rgba(255,186,49,0.2)]',
};

// Estilos de texto según estado
const textColorStyles: Record<CardProductState, string> = {
  default: 'luca-text-neutral-900',
  hover: 'luca-text-neutral-900',
  disabled: 'luca-text-neutral-400',
  blocked: 'luca-text-neutral-400',
  exclusive: 'luca-text-neutral-900',
  exclusiveHover: 'luca-text-neutral-900',
};

export const CardProduct: React.FC<CardProductProps> = ({
  size = 'md',
  color = 'primary',
  state = 'default',
  imageSrc,
  imageAlt,
  image,
  productName,
  gemsValue,
  showGems = true,
  showText = true,
  blockedLevelText = 'Nivel Máster',
  clickable = false,
  onClick,
  className,
  showPurchasedBadge = false,
  purchasedText = 'Comprado',
  ...props
}) => {
  const [isHovering, setIsHovering] = useState(false);

  // Verificar estados base antes de calcular el estado efectivo
  const isDisabledBase = state === 'disabled';
  const isBlockedBase = state === 'blocked';

  // Determinar el estado efectivo basado en el hover
  const effectiveState: CardProductState = React.useMemo(() => {
    if (state === 'default' && isHovering) {
      return 'hover';
    }
    if (state === 'exclusive' && isHovering) {
      return 'exclusiveHover';
    }
    return state;
  }, [state, isHovering]);

  const isDisabled = effectiveState === 'disabled';
  const isBlocked = effectiveState === 'blocked';
  const isExclusive = effectiveState === 'exclusive' || effectiveState === 'exclusiveHover';
  const isHover = effectiveState === 'hover';
  const isClickable = clickable && !isDisabled && !isBlocked && onClick;

  const sizeStyles = containerSizeStyles[size];
  const textStyles = textSizeStyles[size];
  const bgStyles = backgroundColorStyles[color][effectiveState];

  const handleClick = () => {
    if (isClickable && onClick) {
      onClick();
    }
  };

  const baseStyles =
    'luca-relative luca-flex luca-flex-col luca-items-center luca-justify-center luca-rounded-xl luca-transition-all luca-duration-200 luca-overflow-hidden';

  const containerStyles = cn(
    baseStyles,
    sizeStyles.width,
    sizeStyles.height,
    bgStyles,
    shadowStyles[effectiveState],
    isClickable && 'luca-cursor-pointer',
    isDisabled && 'luca-opacity-80 luca-cursor-not-allowed',
    className
  );

  const bottomContainerBgStyles = bottomBackgroundColorStyles[color][effectiveState];
  const bottomContainerRadiusStyles = bottomBackgroundRadiusStyles[size];
  const bottomContainerHeightStyles = bottomBackgroundContainerStyles[size];

  const bottomContainerBackgroundStyles = cn(
    'luca-absolute luca-bottom-0 luca-z-[0] luca-w-full',
    bottomContainerBgStyles,
    bottomContainerRadiusStyles,
    bottomContainerHeightStyles
  );

  // Estilos para el contenedor del fondo inferior
  const bottomContainerStyles = cn(
    'luca-absolute luca-bottom-0 luca-left-0 luca-right-0 luca-flex luca-flex-col luca-items-center luca-justify-center luca-px-1 luca-py-1 luca-z-[10]',
    (effectiveState === 'default' || effectiveState === 'disabled') && 'luca-pb-1.5',
    (isHover || isExclusive) && 'luca-pb-1.5'
  );

  // Estilos para la imagen
  const imageContainerStyles = cn(
    'luca-absolute luca-left-1/2 luca-top-1 luca-translate-x-[-50%] luca-overflow-hidden luca-z-[10]',
    sizeStyles.imageSize,
    (isDisabled || isBlocked) && 'luca-opacity-50',
    !isDisabled && !isBlocked && 'luca-cursor-pointer'
  );

  const blockedBackgroundColor = blockedBackgroundColorStyles[color];

  const GemIconComponent =
    isBlocked || isDisabled ? (
      <GemIcon width={16} height={18} className="luca-shrink-0" />
    ) : (
      <GemIconBlue width={16} height={18} className="luca-shrink-0" />
    );

  const handleMouseEnter = () => {
    if ((state === 'default' || state === 'exclusive') && !isDisabledBase && !isBlockedBase) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={containerStyles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyDown={(e) => {
        if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleClick();
        }
      }}
      {...props}
    >
      {/* Imagen del producto */}
      <div className={imageContainerStyles} draggable>
        {image ? (
          image
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt ?? 'Product image'}
            className="luca-h-full luca-w-full luca-object-contain"
          />
        ) : (
          <div className="luca-h-full luca-w-full luca-bg-neutral-300 luca-rounded" />
        )}
      </div>

      <div className={bottomContainerBackgroundStyles}>
        {isExclusive && (
          <ExclusiveIcon size={70} className="luca-absolute luca-right-0 luca-bottom-0" />
        )}
      </div>

      {isBlocked && (
        <div
          className={cn(
            'luca-absolute luca-left-1/2 luca-top-1/2 luca-translate-x-[-50%] luca-translate-y-[-50%] luca-flex luca-flex-col luca-items-center luca-justify-center luca-w-full luca-h-full luca-z-10',
            blockedBackgroundColor
          )}
        >
          <div className="luca-relative luca-shrink-0 luca-text-white">
            <LockIcon size={lockIconSizeStyles[size]} />
          </div>
          <div
            className={cn(
              'luca-flex luca-flex-col luca-justify-center luca-leading-tight luca-text-center luca-mt-2 luca-text-white luca-font-semibold luca-text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]',
              textStyles.level
            )}
          >
            <p className="luca-leading-tight luca-whitespace-pre-wrap">{blockedLevelText}</p>
          </div>
        </div>
      )}
      <div className={bottomContainerStyles}>
        {showText && (
          <div
            className={cn(
              'luca-flex luca-flex-col luca-justify-center luca-leading-tight luca-text-center luca-w-full luca-whitespace-pre-wrap',
              textStyles.name,
              textColorStyles[effectiveState]
            )}
          >
            <p className="luca-font-normal luca-leading-6">{productName}</p>
          </div>
        )}
        {showGems && gemsValue !== undefined && (
          <div className="luca-flex luca-flex-col luca-items-center luca-justify-center luca-mt-1">
            <div className="luca-flex luca-gap-1 luca-items-center luca-justify-center">
              {GemIconComponent}
              <div
                className={cn(
                  'luca-flex luca-flex-col luca-justify-center luca-leading-tight luca-font-semibold luca-whitespace-nowrap',
                  textStyles.gems
                )}
              >
                <p className="luca-leading-tight">{gemsValue}</p>
              </div>
            </div>
          </div>
        )}

        {showPurchasedBadge && (
          <Badge variant="fill" color="success" rounded="semi" showIcon>
            {purchasedText}
          </Badge>
        )}
      </div>
    </div>
  );
};
