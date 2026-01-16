import React from 'react';
import { cn } from '../utils/cn';

export type CardKPIVariant =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type CardKPISize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type CardKPIState = 'default' | 'hover' | 'disabled';

const cardKPIBaseStyles =
  'luca-flex luca-flex-col luca-items-start luca-bg-white luca-rounded-lg luca-transition-all luca-duration-200 luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)]';

const cardKPISizeStyles: Record<
  CardKPISize,
  {
    padding: string;
    gap: string;
    iconSize: string;
    iconPadding: string;
    titleText: string;
    descriptionText: string;
    descriptionGap: string;
  }
> = {
  xs: {
    padding: 'luca-px-2 luca-py-1',
    gap: 'luca-gap-1',
    iconSize: 'luca-w-6 luca-h-6',
    iconPadding: 'luca-p-1',
    titleText: 'luca-text-[10px] luca-leading-[14px]',
    descriptionText: 'luca-text-xs luca-leading-[16px]',
    descriptionGap: 'luca-gap-2',
  },
  sm: {
    padding: 'luca-px-3 luca-py-2',
    gap: 'luca-gap-1.5',
    iconSize: 'luca-w-7 luca-h-7',
    iconPadding: 'luca-p-1.5',
    titleText: 'luca-text-[11px] luca-leading-[15px]',
    descriptionText: 'luca-text-sm luca-leading-[20px]',
    descriptionGap: 'luca-gap-3',
  },
  md: {
    padding: 'luca-px-4 luca-py-2',
    gap: 'luca-gap-1',
    iconSize: 'luca-w-8 luca-h-8',
    iconPadding: 'luca-p-1',
    titleText: 'luca-text-xs luca-leading-[16px]',
    descriptionText: 'luca-text-lg luca-leading-[28px]',
    descriptionGap: 'luca-gap-4',
  },
  lg: {
    padding: 'luca-px-5 luca-py-3',
    gap: 'luca-gap-2',
    iconSize: 'luca-w-10 luca-h-10',
    iconPadding: 'luca-p-2',
    titleText: 'luca-text-sm luca-leading-[18px]',
    descriptionText: 'luca-text-xl luca-leading-[30px]',
    descriptionGap: 'luca-gap-5',
  },
  xl: {
    padding: 'luca-px-6 luca-py-4',
    gap: 'luca-gap-2.5',
    iconSize: 'luca-w-12 luca-h-12',
    iconPadding: 'luca-p-2.5',
    titleText: 'luca-text-base luca-leading-[20px]',
    descriptionText: 'luca-text-2xl luca-leading-[32px]',
    descriptionGap: 'luca-gap-6',
  },
};

const iconVariantStyles: Record<CardKPIVariant, { bg: string; iconColor: string }> = {
  primary: {
    bg: 'luca-bg-primary-50',
    iconColor: 'luca-text-primary-600',
  },
  neutral: {
    bg: 'luca-bg-neutral-50',
    iconColor: 'luca-text-neutral-600',
  },
  accent: {
    bg: 'luca-bg-accent-50',
    iconColor: 'luca-text-accent-700',
  },
  success: {
    bg: 'luca-bg-success-50',
    iconColor: 'luca-text-success-600',
  },
  warning: {
    bg: 'luca-bg-warning-50',
    iconColor: 'luca-text-warning-600',
  },
  danger: {
    bg: 'luca-bg-danger-50',
    iconColor: 'luca-text-danger-600',
  },
  info: {
    bg: 'luca-bg-info-50',
    iconColor: 'luca-text-info-600',
  },
};

const cardKPIVariantStyles: Record<
  CardKPIVariant,
  Record<CardKPIState, { bg: string; titleColor: string; descriptionColor: string }>
> = {
  primary: {
    default: {
      bg: 'luca-bg-white',
      titleColor: 'luca-text-neutral-600',
      descriptionColor: 'luca-text-neutral-900',
    },
    hover: {
      bg: 'luca-bg-primary-50',
      titleColor: 'luca-text-neutral-600',
      descriptionColor: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      titleColor: 'luca-text-neutral-400',
      descriptionColor: 'luca-text-neutral-400',
    },
  },
  neutral: {
    default: {
      bg: 'luca-bg-white',
      titleColor: 'luca-text-neutral-600',
      descriptionColor: 'luca-text-neutral-900',
    },
    hover: {
      bg: 'luca-bg-neutral-50',
      titleColor: 'luca-text-neutral-600',
      descriptionColor: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      titleColor: 'luca-text-neutral-400',
      descriptionColor: 'luca-text-neutral-400',
    },
  },
  accent: {
    default: {
      bg: 'luca-bg-white',
      titleColor: 'luca-text-neutral-600',
      descriptionColor: 'luca-text-neutral-900',
    },
    hover: {
      bg: 'luca-bg-accent-50',
      titleColor: 'luca-text-neutral-600',
      descriptionColor: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      titleColor: 'luca-text-neutral-400',
      descriptionColor: 'luca-text-neutral-400',
    },
  },
  success: {
    default: {
      bg: 'luca-bg-white',
      titleColor: 'luca-text-neutral-600',
      descriptionColor: 'luca-text-neutral-900',
    },
    hover: {
      bg: 'luca-bg-success-50',
      titleColor: 'luca-text-neutral-600',
      descriptionColor: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      titleColor: 'luca-text-neutral-400',
      descriptionColor: 'luca-text-neutral-400',
    },
  },
  warning: {
    default: {
      bg: 'luca-bg-white',
      titleColor: 'luca-text-neutral-600',
      descriptionColor: 'luca-text-neutral-900',
    },
    hover: {
      bg: 'luca-bg-warning-50',
      titleColor: 'luca-text-neutral-600',
      descriptionColor: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      titleColor: 'luca-text-neutral-400',
      descriptionColor: 'luca-text-neutral-400',
    },
  },
  danger: {
    default: {
      bg: 'luca-bg-white',
      titleColor: 'luca-text-neutral-600',
      descriptionColor: 'luca-text-neutral-900',
    },
    hover: {
      bg: 'luca-bg-danger-50',
      titleColor: 'luca-text-neutral-600',
      descriptionColor: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      titleColor: 'luca-text-neutral-400',
      descriptionColor: 'luca-text-neutral-400',
    },
  },
  info: {
    default: {
      bg: 'luca-bg-white',
      titleColor: 'luca-text-neutral-600',
      descriptionColor: 'luca-text-neutral-900',
    },
    hover: {
      bg: 'luca-bg-info-50',
      titleColor: 'luca-text-neutral-600',
      descriptionColor: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      titleColor: 'luca-text-neutral-400',
      descriptionColor: 'luca-text-neutral-400',
    },
  },
};

export interface CardKPIProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'title' | 'description1' | 'description2'
> {
  /**
   * Color variant of the card
   * @default 'primary'
   */
  variant?: CardKPIVariant;

  /**
   * Size of the card
   * @default 'md'
   */
  size?: CardKPISize;

  /**
   * State of the card
   * @default 'default'
   */
  state?: CardKPIState;

  /**
   * Title text (small text above description)
   */
  title?: React.ReactNode;

  /**
   * Primary description (large, semibold text)
   */
  description1?: React.ReactNode;

  /**
   * Secondary description (optional, appears next to description1)
   */
  description2?: React.ReactNode;

  /**
   * Icon to display in the card
   */
  icon?: React.ReactNode;

  /**
   * Whether to show the icon
   * @default true
   */
  showIcon?: boolean;

  /**
   * Icon to display in the card
   */
  icon2?: React.ReactNode;

  /**
   * Whether to show the icon
   * @default true
   */
  showIcon2?: boolean;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Whether the card is clickable
   * @default false
   */
  clickable?: boolean;
}

export const CardKPI = React.forwardRef<HTMLDivElement, CardKPIProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      state = 'default',
      title,
      description1,
      description2,
      icon,
      showIcon = true,
      icon2,
      showIcon2 = true,
      onClick,
      clickable = false,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = state === 'disabled';
    const styles = cardKPIVariantStyles[variant][state];
    const sizeStyles = cardKPISizeStyles[size];
    const iconStyles = iconVariantStyles[variant];

    const handleClick = () => {
      if (!isDisabled && clickable && onClick) {
        onClick();
      }
    };

    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={cn(
          cardKPIBaseStyles,
          sizeStyles.padding,
          styles.bg,
          isDisabled && 'luca-opacity-50 luca-cursor-not-allowed',
          clickable && !isDisabled && 'luca-cursor-pointer hover:luca-shadow-md',
          className
        )}
        {...props}
      >
        <div className={cn('luca-flex luca-flex-col luca-gap-1 luca-w-full', sizeStyles.gap)}>
          {/* Title and Icon Row */}
          <div className={cn('luca-flex luca-gap-1 luca-items-center luca-w-full', sizeStyles.gap)}>
            {showIcon && icon && (
              <div
                className={cn(
                  'luca-flex luca-items-center luca-justify-center luca-rounded-full luca-shrink-0',
                  sizeStyles.iconSize,
                  iconStyles.bg,
                  sizeStyles.iconPadding
                )}
              >
                <div
                  className={cn(
                    'luca-flex luca-items-center luca-justify-center',
                    iconStyles.iconColor
                  )}
                >
                  {React.isValidElement(icon)
                    ? React.cloneElement(icon as React.ReactElement<React.ComponentProps<'svg'>>, {
                        className: cn(
                          sizeStyles.iconSize.includes('w-6')
                            ? 'luca-w-4 luca-h-4'
                            : sizeStyles.iconSize.includes('w-7')
                              ? 'luca-w-[14px] luca-h-[14px]'
                              : sizeStyles.iconSize.includes('w-8')
                                ? 'luca-w-4 luca-h-4'
                                : sizeStyles.iconSize.includes('w-10')
                                  ? 'luca-w-5 luca-h-5'
                                  : 'luca-w-6 luca-h-6',
                          iconStyles.iconColor,
                          (icon as React.ReactElement<React.ComponentProps<'svg'>>).props?.className
                        ),
                      })
                    : icon}
                </div>
              </div>
            )}
            {title && (
              <div
                className={cn(
                  'luca-flex luca-flex-1 luca-flex-col luca-justify-center luca-min-h-0 luca-min-w-0',
                  sizeStyles.titleText,
                  styles.titleColor
                )}
              >
                {typeof title === 'string' ? <p>{title}</p> : title}
              </div>
            )}
          </div>

          {/* Description Row */}
          <div className={cn('luca-flex luca-gap-1 luca-items-center luca-w-full', sizeStyles.gap)}>
            {showIcon2 && icon2 && (
              <div
                className={cn(
                  'luca-flex luca-items-center luca-justify-center luca-rounded-full luca-shrink-0',
                  sizeStyles.iconSize,
                  iconStyles.bg,
                  sizeStyles.iconPadding
                )}
              >
                <div
                  className={cn(
                    'luca-flex luca-items-center luca-justify-center',
                    iconStyles.iconColor
                  )}
                >
                  {React.isValidElement(icon2)
                    ? React.cloneElement(icon2 as React.ReactElement<React.ComponentProps<'svg'>>, {
                        className: cn(
                          sizeStyles.iconSize.includes('w-6')
                            ? 'luca-w-4 luca-h-4'
                            : sizeStyles.iconSize.includes('w-7')
                              ? 'luca-w-[14px] luca-h-[14px]'
                              : sizeStyles.iconSize.includes('w-8')
                                ? 'luca-w-4 luca-h-4'
                                : sizeStyles.iconSize.includes('w-10')
                                  ? 'luca-w-5 luca-h-5'
                                  : 'luca-w-6 luca-h-6',
                          iconStyles.iconColor,
                          (icon2 as React.ReactElement<React.ComponentProps<'svg'>>).props
                            ?.className
                        ),
                      })
                    : icon2}
                </div>
              </div>
            )}
            {(description1 || description2) && (
              <div
                className={cn(
                  'luca-flex luca-flex-col luca-items-start luca-w-full luca-font-semibold luca-whitespace-nowrap luca-overflow-clip',
                  sizeStyles.descriptionText,
                  styles.descriptionColor,
                  sizeStyles.descriptionGap
                )}
              >
                <div className="luca-flex luca-gap-4 luca-items-center luca-w-full">
                  {description1 && (
                    <div className="luca-flex luca-flex-col luca-justify-center luca-shrink-0">
                      {typeof description1 === 'string' ? <p>{description1}</p> : description1}
                    </div>
                  )}
                  {description2 && (
                    <div className="luca-flex luca-flex-col luca-justify-center luca-shrink-0">
                      {typeof description2 === 'string' ? <p>{description2}</p> : description2}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

CardKPI.displayName = 'CardKPI';
