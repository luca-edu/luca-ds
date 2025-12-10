import React from 'react';
import { cn } from '../utils/cn';

export type CardOptionVariant =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type CardOptionSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type CardOptionState = 'default' | 'error' | 'success' | 'hover' | 'disabled';

export interface CardOptionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Color variant of the card
   * @default 'primary'
   */
  variant?: CardOptionVariant;

  /**
   * Size of the card
   * @default 'md'
   */
  size?: CardOptionSize;

  /**
   * State of the card
   * @default 'default'
   */
  state?: CardOptionState;

  /**
   * Primary text (top section)
   */
  primaryText?: React.ReactNode;

  /**
   * Secondary text (bottom section)
   */
  secondaryText?: React.ReactNode;

  /**
   * Whether the card is clickable
   * @default false
   */
  clickable?: boolean;

  /**
   * Click handler
   */
  onClick?: () => void;
}

const cardOptionBaseStyles =
  'luca-flex luca-flex-col luca-items-start luca-relative luca-rounded luca-border luca-border-solid luca-transition-all luca-duration-200';

const cardOptionSizeStyles: Record<
  CardOptionSize,
  {
    width: string;
    height: string;
    padding: string;
    gap: string;
    primaryPadding: string;
    primaryText: string;
    secondaryPadding: string;
    secondaryText: string;
    borderRadius: string;
    borderWidth: string;
  }
> = {
  xs: {
    width: 'luca-w-[45px]',
    height: 'luca-h-auto',
    padding: 'luca-p-0',
    gap: 'luca-gap-0',
    primaryPadding: 'luca-p-1',
    primaryText: 'luca-text-[6px] luca-leading-[9px]',
    secondaryPadding: 'luca-px-1 luca-py-0.5',
    secondaryText: 'luca-text-[5px] luca-leading-[7.5px]',
    borderRadius: 'luca-rounded-[3px]',
    borderWidth: 'luca-border-[0.5px]',
  },
  sm: {
    width: 'luca-w-[50px]',
    height: 'luca-h-auto',
    padding: 'luca-p-0',
    gap: 'luca-gap-0',
    primaryPadding: 'luca-p-1.5',
    primaryText: 'luca-text-[7px] luca-leading-[10.5px]',
    secondaryPadding: 'luca-px-1.5 luca-py-1',
    secondaryText: 'luca-text-[6px] luca-leading-[9px]',
    borderRadius: 'luca-rounded-[3.5px]',
    borderWidth: 'luca-border-[0.5px]',
  },
  md: {
    width: 'luca-w-[57px]',
    height: 'luca-h-auto',
    padding: 'luca-p-0',
    gap: 'luca-gap-0',
    primaryPadding: 'luca-p-1.5',
    primaryText: 'luca-text-[7.833px] luca-leading-[11.75px]',
    secondaryPadding: 'luca-px-1.5 luca-py-0.5',
    secondaryText: 'luca-text-[6px] luca-leading-[9px]',
    borderRadius: 'luca-rounded-[4.476px]',
    borderWidth: 'luca-border-[0.56px]',
  },
  lg: {
    width: 'luca-w-[64px]',
    height: 'luca-h-auto',
    padding: 'luca-p-0',
    gap: 'luca-gap-0',
    primaryPadding: 'luca-p-2',
    primaryText: 'luca-text-[9px] luca-leading-[13.5px]',
    secondaryPadding: 'luca-px-2 luca-py-1',
    secondaryText: 'luca-text-[7px] luca-leading-[10.5px]',
    borderRadius: 'luca-rounded-[5px]',
    borderWidth: 'luca-border',
  },
  xl: {
    width: 'luca-w-[72px]',
    height: 'luca-h-auto',
    padding: 'luca-p-0',
    gap: 'luca-gap-0',
    primaryPadding: 'luca-p-2.5',
    primaryText: 'luca-text-[10px] luca-leading-[15px]',
    secondaryPadding: 'luca-px-2.5 luca-py-1.5',
    secondaryText: 'luca-text-[8px] luca-leading-[12px]',
    borderRadius: 'luca-rounded-[6px]',
    borderWidth: 'luca-border',
  },
};

const cardOptionVariantStyles: Record<
  CardOptionVariant,
  Record<
    CardOptionState,
    { bg: string; border: string; primaryBg: string; primaryText: string; secondaryText: string }
  >
> = {
  primary: {
    default: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-white',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    error: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-danger-200',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    success: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-success-200',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-success-600',
    },
    hover: {
      bg: 'luca-bg-primary-50',
      border: 'luca-border-primary-200',
      primaryBg: 'luca-bg-white',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-neutral-100',
      primaryText: 'luca-text-neutral-400',
      secondaryText: 'luca-text-neutral-400',
    },
  },
  neutral: {
    default: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-white',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    error: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-danger-200',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    success: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-success-200',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-success-600',
    },
    hover: {
      bg: 'luca-bg-neutral-100',
      border: 'luca-border-neutral-300',
      primaryBg: 'luca-bg-white',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-neutral-100',
      primaryText: 'luca-text-neutral-400',
      secondaryText: 'luca-text-neutral-400',
    },
  },
  accent: {
    default: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-white',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    error: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-danger-200',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    success: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-success-200',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-success-600',
    },
    hover: {
      bg: 'luca-bg-accent-50',
      border: 'luca-border-accent-200',
      primaryBg: 'luca-bg-white',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-neutral-100',
      primaryText: 'luca-text-neutral-400',
      secondaryText: 'luca-text-neutral-400',
    },
  },
  success: {
    default: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-white',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    error: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-danger-200',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    success: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-success-200',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-success-600',
    },
    hover: {
      bg: 'luca-bg-success-50',
      border: 'luca-border-success-200',
      primaryBg: 'luca-bg-white',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-neutral-100',
      primaryText: 'luca-text-neutral-400',
      secondaryText: 'luca-text-neutral-400',
    },
  },
  warning: {
    default: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-white',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    error: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-danger-200',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    success: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-success-200',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-success-600',
    },
    hover: {
      bg: 'luca-bg-warning-50',
      border: 'luca-border-warning-200',
      primaryBg: 'luca-bg-white',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-neutral-100',
      primaryText: 'luca-text-neutral-400',
      secondaryText: 'luca-text-neutral-400',
    },
  },
  danger: {
    default: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-white',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    error: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-danger-200',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    success: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-success-200',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-success-600',
    },
    hover: {
      bg: 'luca-bg-danger-50',
      border: 'luca-border-danger-200',
      primaryBg: 'luca-bg-white',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-neutral-100',
      primaryText: 'luca-text-neutral-400',
      secondaryText: 'luca-text-neutral-400',
    },
  },
  info: {
    default: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-white',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    error: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-danger-200',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    success: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-success-200',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-success-600',
    },
    hover: {
      bg: 'luca-bg-info-50',
      border: 'luca-border-info-200',
      primaryBg: 'luca-bg-white',
      primaryText: 'luca-text-neutral-900',
      secondaryText: 'luca-text-neutral-900',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      primaryBg: 'luca-bg-neutral-100',
      primaryText: 'luca-text-neutral-400',
      secondaryText: 'luca-text-neutral-400',
    },
  },
};

export const CardOption = React.forwardRef<HTMLDivElement, CardOptionProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      state = 'default',
      primaryText,
      secondaryText,
      clickable = false,
      onClick,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = state === 'disabled';
    const styles = cardOptionVariantStyles[variant][state];
    const sizeStyles = cardOptionSizeStyles[size];

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
          cardOptionBaseStyles,
          sizeStyles.width,
          sizeStyles.height,
          sizeStyles.borderRadius,
          sizeStyles.borderWidth,
          styles.bg,
          styles.border,
          isDisabled && 'luca-opacity-50 luca-cursor-not-allowed',
          clickable && !isDisabled && 'luca-cursor-pointer hover:luca-shadow-sm',
          className
        )}
        {...props}
      >
        {/* Primary Section */}
        {primaryText !== undefined && (
          <div
            className={cn(
              'luca-content-stretch luca-flex luca-h-auto luca-items-center luca-justify-center luca-relative luca-shrink-0 luca-w-full luca-rounded-tl luca-rounded-tr',
              sizeStyles.primaryPadding,
              styles.primaryBg
            )}
          >
            <p
              className={cn(
                'luca-font-semibold luca-leading-[1.5] luca-not-italic luca-relative luca-shrink-0 luca-text-center',
                sizeStyles.primaryText,
                styles.primaryText
              )}
            >
              {typeof primaryText === 'string' ? primaryText : primaryText}
            </p>
          </div>
        )}

        {/* Secondary Section */}
        {secondaryText !== undefined && (
          <div
            className={cn(
              'luca-content-stretch luca-flex luca-items-center luca-justify-center luca-relative luca-shrink-0 luca-w-full',
              sizeStyles.secondaryPadding
            )}
          >
            <p
              className={cn(
                'luca-leading-[1.5] luca-not-italic luca-relative luca-shrink-0 luca-text-center',
                sizeStyles.secondaryText,
                state === 'success' && variant !== 'success'
                  ? 'luca-font-semibold luca-text-success-600'
                  : state === 'error'
                    ? 'luca-font-semibold'
                    : 'luca-font-normal',
                styles.secondaryText
              )}
            >
              {typeof secondaryText === 'string' ? secondaryText : secondaryText}
            </p>
          </div>
        )}
      </div>
    );
  }
);

CardOption.displayName = 'CardOption';
