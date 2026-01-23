import React from 'react';
import { cn } from '../utils/cn';
import { GemIcon, GemIconBlue } from '../shared/icons';
import { Badge } from './Badge';
import { TextButton } from './TextButton';

export type CardProductStoreSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type CardProductStoreColor =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type CardProductStoreState = 'default' | 'disabled';

export interface CardProductStoreProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onClick'
> {
  /**
   * Tamaño del componente
   * @default 'md'
   */
  size?: CardProductStoreSize;

  /**
   * Variante de color
   * @default 'primary'
   */
  color?: CardProductStoreColor;

  /**
   * Estado del componente
   * @default 'default'
   */
  state?: CardProductStoreState;

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
   * Título del producto
   */
  title?: string;

  /**
   * Número de unidades disponibles
   */
  availableCount?: number;

  /**
   * Mostrar información de disponibilidad
   * @default true
   */
  showAvailability?: boolean;

  /**
   * Mostrar badge "AGOTADO"
   * @default false
   */
  showSoldOutBadge?: boolean;

  /**
   * Descripción secundaria
   */
  description?: string;

  /**
   * Mostrar descripción
   * @default true
   */
  showDescription?: boolean;

  /**
   * Texto de fecha límite (ej: "Termina en n días")
   */
  dateText?: string;

  /**
   * Mostrar texto de fecha
   * @default true
   */
  showDateText?: boolean;

  /**
   * Valor en cristales
   */
  crystalsValue?: number | string;

  /**
   * Mostrar botón de precio
   * @default true
   */
  showPriceButton?: boolean;

  /**
   * Mostrar badge "¡Comprado!"
   * @default false
   */
  showPurchasedBadge?: boolean;
  /**
   * Texto del badge "¡Comprado!"
   * @default '¡Comprado!'
   */
  purchasedText?: string;

  /**
   * Texto del badge "Ya no está disponible"
   * @default 'Ya no está disponible'
   */
  notAvailableText?: string;

  /**
   * Mostrar badge "Ya no está disponible"
   * @default false
   */
  showNotAvailableBadge?: boolean;

  /**
   * Texto del badge "Premio disponible en Nivel Maestro"
   * @default 'Premio disponible en Nivel Maestro'
   */
  nextLevelOnlyText?: string;

  /**
   * Mostrar badge "Sólo para el próximo nivel"
   * @default false
   */
  showNextLevelOnlyBadge?: boolean;

  /**
   * Texto del link "Ver en mi colección"
   */
  collectionLinkText?: string;

  /**
   * Mostrar link de colección
   * @default true
   */
  showCollectionLink?: boolean;

  /**
   * Handler para click en el botón de precio
   */
  onPriceClick?: () => void;

  /**
   * Handler para click en el link de colección
   */
  onCollectionLinkClick?: () => void;

  /**
   * Si es clickeable
   * @default false
   */
  clickable?: boolean;

  /**
   * Handler de click general
   */
  onClick?: () => void;
}

const containerSizeStyles: Record<
  CardProductStoreSize,
  {
    width: string;
    padding: string;
    gap: string;
    imageSize: string;
  }
> = {
  xs: {
    width: 'luca-w-[140px]',
    padding: 'luca-p-2',
    gap: 'luca-gap-2',
    imageSize: 'luca-w-[80px] luca-h-[80px]',
  },
  sm: {
    width: 'luca-w-[170px]',
    padding: 'luca-p-3',
    gap: 'luca-gap-3',
    imageSize: 'luca-w-[96px] luca-h-[96px]',
  },
  md: {
    width: 'luca-w-[210px] xs:luca-w-[180px] sml:luca-w-[210px]',
    padding: 'luca-p-4',
    gap: 'luca-gap-4',
    imageSize:
      'luca-w-[100px] luca-h-[100px] xs:luca-w-[80px] xs:luca-h-[80px] sml:luca-w-[100px] sml:luca-h-[100px]',
  },
  lg: {
    width: 'luca-w-[240px]',
    padding: 'luca-p-5',
    gap: 'luca-gap-5',
    imageSize: 'luca-w-[120px] luca-h-[120px]',
  },
  xl: {
    width: 'luca-w-[280px]',
    padding: 'luca-p-6',
    gap: 'luca-gap-6',
    imageSize: 'luca-w-[140px] luca-h-[140px]',
  },
};

const textSizeStyles: Record<
  CardProductStoreSize,
  {
    title: string;
    availability: string;
    description: string;
    date: string;
    price: string;
    link: string;
    nextLevelOnly: string;
  }
> = {
  xs: {
    title: 'luca-text-xs',
    availability: 'luca-text-[10px]',
    description: 'luca-text-[10px]',
    date: 'luca-text-[10px]',
    price: 'luca-text-[10px]',
    link: 'luca-text-[10px]',
    nextLevelOnly: 'luca-text-[10px]',
  },
  sm: {
    title: 'luca-text-sm',
    availability: 'luca-text-xs',
    description: 'luca-text-xs',
    date: 'luca-text-xs',
    price: 'luca-text-xs',
    link: 'luca-text-xs',
    nextLevelOnly: 'luca-text-xs',
  },
  md: {
    title: 'luca-text-base xs:luca-text-sm sml:luca-text-base',
    availability: 'luca-text-sm xs:luca-text-xs sml:luca-text-sm',
    description: 'luca-text-sm xs:luca-text-xs sml:luca-text-sm',
    date: 'luca-text-xs',
    price: 'luca-text-sm xs:luca-text-xs sml:luca-text-sm',
    link: 'luca-text-sm xs:luca-text-xs sml:luca-text-sm',
    nextLevelOnly: 'luca-text-sm xs:luca-text-xs sml:luca-text-sm',
  },
  lg: {
    title: 'luca-text-lg',
    availability: 'luca-text-base',
    description: 'luca-text-base',
    date: 'luca-text-sm',
    price: 'luca-text-base',
    link: 'luca-text-base',
    nextLevelOnly: 'luca-text-base',
  },
  xl: {
    title: 'luca-text-xl',
    availability: 'luca-text-lg',
    description: 'luca-text-lg',
    date: 'luca-text-base',
    price: 'luca-text-lg',
    link: 'luca-text-lg',
    nextLevelOnly: 'luca-text-lg',
  },
};

const buttonSizeStyles: Record<CardProductStoreSize, { height: string; padding: string }> = {
  xs: {
    height: 'luca-h-[28px]',
    padding: 'luca-px-2 luca-py-1.5',
  },
  sm: {
    height: 'luca-h-[32px]',
    padding: 'luca-px-3 luca-py-2',
  },
  md: {
    height: 'luca-h-[36px] xs:luca-h-[32px] sml:luca-h-[36px]',
    padding: 'luca-px-4 luca-py-[10px] xs:luca-px-3 xs:luca-py-2 sml:luca-px-4 sml:luca-py-[10px]',
  },
  lg: {
    height: 'luca-h-[40px]',
    padding: 'luca-px-5 luca-py-2.5',
  },
  xl: {
    height: 'luca-h-[44px]',
    padding: 'luca-px-6 luca-py-3',
  },
};

const iconSizeStyles: Record<CardProductStoreSize, number> = {
  xs: 16,
  sm: 18,
  md: 24,
  lg: 28,
  xl: 32,
};

const colorStyles: Record<
  CardProductStoreColor,
  {
    buttonBg: string;
    buttonShadow: string;
    linkText: string;
  }
> = {
  primary: {
    buttonBg: 'luca-bg-accent-600',
    buttonShadow: 'luca-shadow-[0px_4px_0px_0px_#f58f00]',
    linkText: 'luca-text-primary-600',
  },
  neutral: {
    buttonBg: 'luca-bg-accent-600',
    buttonShadow: 'luca-shadow-[0px_4px_0px_0px_#f58f00]',
    linkText: 'luca-text-primary-600',
  },
  accent: {
    buttonBg: 'luca-bg-accent-600',
    buttonShadow: 'luca-shadow-[0px_4px_0px_0px_#f58f00]',
    linkText: 'luca-text-primary-600',
  },
  success: {
    buttonBg: 'luca-bg-accent-600',
    buttonShadow: 'luca-shadow-[0px_4px_0px_0px_#f58f00]',
    linkText: 'luca-text-primary-600',
  },
  warning: {
    buttonBg: 'luca-bg-accent-600',
    buttonShadow: 'luca-shadow-[0px_4px_0px_0px_#f58f00]',
    linkText: 'luca-text-primary-600',
  },
  danger: {
    buttonBg: 'luca-bg-accent-600',
    buttonShadow: 'luca-shadow-[0px_4px_0px_0px_#f58f00]',
    linkText: 'luca-text-primary-600',
  },
  info: {
    buttonBg: 'luca-bg-accent-600',
    buttonShadow: 'luca-shadow-[0px_4px_0px_0px_#f58f00]',
    linkText: 'luca-text-primary-600',
  },
};

export const CardProductStore = React.forwardRef<HTMLDivElement, CardProductStoreProps>(
  (
    {
      size = 'md',
      color = 'primary',
      state = 'default',
      imageSrc,
      imageAlt,
      image,
      title = 'Title',
      availableCount,
      showAvailability = true,
      showSoldOutBadge = false,
      description,
      showDescription = true,
      dateText,
      showDateText = true,
      crystalsValue = 850,
      showPriceButton = true,
      showPurchasedBadge = false,
      showNotAvailableBadge = false,
      notAvailableText = 'Ya no está disponible',
      purchasedText = '¡Comprado!',
      nextLevelOnlyText = 'Premio disponible en Nivel Maestro',
      showNextLevelOnlyBadge = false,
      collectionLinkText = 'Ver en mi colección',
      showCollectionLink = true,
      onPriceClick,
      onCollectionLinkClick,
      clickable = false,
      onClick,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = state === 'disabled';
    const sizeStyles = containerSizeStyles[size];
    const textStyles = textSizeStyles[size];
    const buttonStyles = buttonSizeStyles[size];
    const iconSize = iconSizeStyles[size];
    const colors = colorStyles[color];

    const handlePriceClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!isDisabled && onPriceClick) {
        onPriceClick();
      }
    };

    const handleCollectionLinkClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!isDisabled && onCollectionLinkClick) {
        onCollectionLinkClick();
      }
    };

    const handleCardClick = () => {
      if (!isDisabled && clickable && onClick) {
        onClick();
      }
    };

    const cardShadow =
      'luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)]';

    return (
      <div
        ref={ref}
        className={cn(
          'luca-flex luca-flex-col luca-items-center luca-rounded-lg luca-border luca-border-neutral-200 luca-min-h-[320px]',
          sizeStyles.width,
          sizeStyles.padding,
          sizeStyles.gap,
          cardShadow,
          isDisabled ? 'luca-bg-neutral-100' : 'luca-bg-white',
          clickable &&
            !isDisabled &&
            'luca-cursor-pointer hover:luca-shadow-lg luca-transition-shadow',
          isDisabled && 'luca-opacity-50',
          className
        )}
        onClick={handleCardClick}
        {...props}
      >
        {/* Imagen del producto */}
        {(image || imageSrc) && (
          <div
            className={cn('luca-relative luca-shrink-0 luca-overflow-hidden', sizeStyles.imageSize)}
          >
            {image ? (
              <div className="luca-w-full luca-h-full">{image}</div>
            ) : imageSrc ? (
              <img
                src={imageSrc}
                alt={imageAlt ?? 'Product image'}
                className={cn(
                  'luca-w-full luca-h-full luca-object-contain',
                  isDisabled && 'luca-opacity-50'
                )}
              />
            ) : null}
          </div>
        )}

        {/* Contenedor de descripción */}
        <div className="luca-flex luca-flex-col luca-gap-1 luca-items-center luca-w-full">
          {/* Título */}
          {title && (
            <p
              className={cn(
                'luca-font-semibold luca-leading-6 luca-text-center luca-w-full',
                textStyles.title,
                isDisabled ? 'luca-text-neutral-400' : 'luca-text-neutral-900'
              )}
            >
              {title}
            </p>
          )}

          {/* Disponibilidad */}
          {showAvailability && availableCount !== undefined && (
            <p
              className={cn(
                'luca-font-normal luca-leading-5 luca-text-center luca-w-full',
                textStyles.availability,
                isDisabled ? 'luca-text-neutral-400' : 'luca-text-neutral-600'
              )}
            >
              Quedan <span className="luca-font-semibold">({availableCount})</span> disponibles
            </p>
          )}

          {/* Badge AGOTADO */}
          {showSoldOutBadge && (
            <Badge variant="fill" color="danger" rounded="semi">
              AGOTADO
            </Badge>
          )}

          {/* Descripción */}
          {showDescription && description && (
            <p
              className={cn(
                'luca-font-normal luca-leading-5 luca-text-center luca-w-full',
                textStyles.description,
                isDisabled ? 'luca-text-neutral-400' : 'luca-text-neutral-600'
              )}
            >
              {description}
            </p>
          )}

          {/* Texto de fecha */}
          {showDateText && dateText && (
            <p
              className={cn(
                'luca-font-semibold luca-leading-5 luca-text-center luca-w-full luca-pt-3',
                textStyles.date,
                isDisabled ? 'luca-text-neutral-400' : 'luca-text-neutral-500'
              )}
            >
              {dateText}
            </p>
          )}
        </div>

        {/* Acciones */}
        <div className="luca-flex luca-flex-col luca-gap-2 luca-items-center luca-w-full luca-mt-auto">
          {/* Botón de precio */}
          {showPriceButton && (
            <button
              type="button"
              onClick={handlePriceClick}
              disabled={isDisabled}
              className={cn(
                'luca-flex luca-gap-2.5 luca-items-center luca-justify-center luca-w-full luca-rounded-xl luca-transition-all',
                buttonStyles.height,
                buttonStyles.padding,
                isDisabled
                  ? 'luca-bg-neutral-100 luca-border luca-border-neutral-200 luca-shadow-[0px_4px_0px_0px_#adadad]'
                  : cn(colors.buttonBg, colors.buttonShadow),
                isDisabled ? 'luca-cursor-not-allowed' : 'luca-cursor-pointer hover:luca-opacity-90'
              )}
            >
              {isDisabled ? (
                <GemIcon
                  width={iconSize}
                  height={iconSize}
                  className="luca-shrink-0 luca-opacity-50"
                />
              ) : (
                <GemIconBlue width={iconSize} height={iconSize} className="luca-shrink-0" />
              )}
              <span
                className={cn(
                  'luca-font-semibold luca-leading-5 luca-whitespace-nowrap',
                  textStyles.price,
                  isDisabled ? 'luca-text-neutral-400' : 'luca-text-neutral-900'
                )}
              >
                {crystalsValue} cristales
              </span>
            </button>
          )}

          {/* Badge ¡Comprado! */}
          {showPurchasedBadge && (
            <Badge variant="fill" color="success" rounded="semi" showIcon>
              {purchasedText}
            </Badge>
          )}

          {/* Link de colección */}
          {showCollectionLink && (
            <TextButton
              variant="primary"
              size="sm"
              state="default"
              onClick={handleCollectionLinkClick}
              disabled={isDisabled}
            >
              {collectionLinkText}
            </TextButton>
          )}

          {/* Badge !No disponible¡ */}
          {showNotAvailableBadge && (
            <Badge variant="fill" color="light" rounded="semi">
              {notAvailableText}
            </Badge>
          )}
        </div>

        {showNextLevelOnlyBadge && nextLevelOnlyText && (
          <p
            className={cn(
              'luca-font-normal luca-leading-5 luca-text-center luca-w-full luca-mt-auto',
              textStyles.nextLevelOnly,
              isDisabled ? 'luca-text-neutral-400' : 'luca-text-neutral-600'
            )}
          >
            {nextLevelOnlyText}
          </p>
        )}
      </div>
    );
  }
);

CardProductStore.displayName = 'CardProductStore';
