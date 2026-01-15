import React from 'react';
import { cn } from '../utils/cn';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

export type SubsectionStoreVariant =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type SubsectionStoreSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SubsectionStoreState = 'default' | 'hover' | 'disabled';

export interface SubsectionStoreProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Color variant of the subsection
   * @default 'primary'
   */
  variant?: SubsectionStoreVariant;

  /**
   * Size of the subsection
   * @default 'md'
   */
  size?: SubsectionStoreSize;

  /**
   * State of the subsection
   * @default 'default'
   */
  state?: SubsectionStoreState;

  /**
   * Title text
   */
  title: string | React.ReactNode;

  /**
   * Left icon/image element
   */
  leftIcon?: React.ReactNode;

  /**
   * Right icon/image element
   */
  rightIcon?: React.ReactNode;

  /**
   * Show navigation arrow icon
   * @default true
   */
  showArrow?: boolean;

  /**
   * Custom arrow icon
   */
  arrowIcon?: React.ReactNode;

  /**
   * Whether the subsection is clickable
   * @default true
   */
  clickable?: boolean;

  /**
   * Click handler
   */
  onClick?: () => void;
}

const subsectionStoreSizeStyles: Record<
  SubsectionStoreSize,
  {
    padding: string;
    gap: string;
    titleSize: string;
    iconSize: string;
    arrowSize: string;
    borderRadius: string;
  }
> = {
  xs: {
    padding: 'luca-px-3 luca-py-2',
    gap: 'luca-gap-2',
    titleSize: 'luca-text-xs',
    iconSize: 'luca-w-12 luca-h-12',
    arrowSize: 'luca-w-[32px] luca-h-[32px] luca-p-[2.5px]',
    borderRadius: 'luca-rounded-sm',
  },
  sm: {
    padding: 'luca-px-4 luca-py-3',
    gap: 'luca-gap-3',
    titleSize: 'luca-text-sm',
    iconSize: 'luca-w-16 luca-h-16',
    arrowSize: 'luca-w-[40px] luca-h-[40px] luca-p-[3px]',
    borderRadius: 'luca-rounded',
  },
  md: {
    padding: 'luca-px-6 luca-py-4',
    gap: 'luca-gap-4',
    titleSize: 'luca-text-lg',
    iconSize: 'luca-w-[120px] luca-h-[120px]',
    arrowSize: 'luca-w-[48px] luca-h-[48px] luca-p-[4.5px]',
    borderRadius: 'luca-rounded-lg',
  },
  lg: {
    padding: 'luca-px-8 luca-py-5',
    gap: 'luca-gap-5',
    titleSize: 'luca-text-xl',
    iconSize: 'luca-w-[140px] luca-h-[140px]',
    arrowSize: 'luca-w-[56px] luca-h-[56px] luca-p-[6px]',
    borderRadius: 'luca-rounded-xl',
  },
  xl: {
    padding: 'luca-px-10 luca-py-6',
    gap: 'luca-gap-6',
    titleSize: 'luca-text-2xl',
    iconSize: 'luca-w-[160px] luca-h-[160px]',
    arrowSize: 'luca-w-[64px] luca-h-[64px] luca-p-[8px]',
    borderRadius: 'luca-rounded-2xl',
  },
};

const subsectionStoreVariantStyles: Record<
  SubsectionStoreVariant,
  Record<
    SubsectionStoreState,
    { bg: string; border: string; titleColor: string; arrowColor: string }
  >
> = {
  primary: {
    default: {
      bg: 'luca-bg-white',
      border: '',
      titleColor: 'luca-text-neutral-900',
      arrowColor: 'luca-text-primary-600',
    },
    hover: {
      bg: 'luca-bg-primary-50',
      border: 'luca-border luca-border-primary-200',
      titleColor: 'luca-text-neutral-900',
      arrowColor: 'luca-text-primary-600',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: '',
      titleColor: 'luca-text-neutral-400',
      arrowColor: 'luca-text-neutral-400',
    },
  },
  neutral: {
    default: {
      bg: 'luca-bg-white',
      border: '',
      titleColor: 'luca-text-neutral-900',
      arrowColor: 'luca-text-neutral-600',
    },
    hover: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border luca-border-neutral-200',
      titleColor: 'luca-text-neutral-900',
      arrowColor: 'luca-text-neutral-600',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: '',
      titleColor: 'luca-text-neutral-400',
      arrowColor: 'luca-text-neutral-400',
    },
  },
  accent: {
    default: {
      bg: 'luca-bg-white',
      border: '',
      titleColor: 'luca-text-neutral-900',
      arrowColor: 'luca-text-accent-600',
    },
    hover: {
      bg: 'luca-bg-accent-50',
      border: 'luca-border luca-border-accent-200',
      titleColor: 'luca-text-neutral-900',
      arrowColor: 'luca-text-accent-600',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: '',
      titleColor: 'luca-text-neutral-400',
      arrowColor: 'luca-text-neutral-400',
    },
  },
  success: {
    default: {
      bg: 'luca-bg-white',
      border: '',
      titleColor: 'luca-text-neutral-900',
      arrowColor: 'luca-text-success-600',
    },
    hover: {
      bg: 'luca-bg-success-50',
      border: 'luca-border luca-border-success-200',
      titleColor: 'luca-text-neutral-900',
      arrowColor: 'luca-text-success-600',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: '',
      titleColor: 'luca-text-neutral-400',
      arrowColor: 'luca-text-neutral-400',
    },
  },
  warning: {
    default: {
      bg: 'luca-bg-white',
      border: '',
      titleColor: 'luca-text-neutral-900',
      arrowColor: 'luca-text-warning-600',
    },
    hover: {
      bg: 'luca-bg-warning-50',
      border: 'luca-border luca-border-warning-200',
      titleColor: 'luca-text-neutral-900',
      arrowColor: 'luca-text-warning-600',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: '',
      titleColor: 'luca-text-neutral-400',
      arrowColor: 'luca-text-neutral-400',
    },
  },
  danger: {
    default: {
      bg: 'luca-bg-white',
      border: '',
      titleColor: 'luca-text-neutral-900',
      arrowColor: 'luca-text-danger-600',
    },
    hover: {
      bg: 'luca-bg-danger-50',
      border: 'luca-border luca-border-danger-200',
      titleColor: 'luca-text-neutral-900',
      arrowColor: 'luca-text-danger-600',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: '',
      titleColor: 'luca-text-neutral-400',
      arrowColor: 'luca-text-neutral-400',
    },
  },
  info: {
    default: {
      bg: 'luca-bg-white',
      border: '',
      titleColor: 'luca-text-neutral-900',
      arrowColor: 'luca-text-info-600',
    },
    hover: {
      bg: 'luca-bg-info-50',
      border: 'luca-border luca-border-info-200',
      titleColor: 'luca-text-neutral-900',
      arrowColor: 'luca-text-info-600',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: '',
      titleColor: 'luca-text-neutral-400',
      arrowColor: 'luca-text-neutral-400',
    },
  },
};

export const SubsectionStore = React.forwardRef<HTMLDivElement, SubsectionStoreProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      state = 'default',
      title,
      leftIcon,
      rightIcon,
      showArrow = true,
      arrowIcon,
      clickable = true,
      onClick,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = state === 'disabled';
    const sizeStyles = subsectionStoreSizeStyles[size];
    const variantStyles = subsectionStoreVariantStyles[variant][state];

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
          'luca-flex luca-items-center luca-justify-center luca-w-full luca-transition-all luca-duration-200',
          sizeStyles.padding,
          sizeStyles.gap,
          sizeStyles.borderRadius,
          variantStyles.bg,
          variantStyles.border,
          'luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)]',
          isDisabled && 'luca-opacity-50 luca-cursor-not-allowed',
          clickable && !isDisabled && 'luca-cursor-pointer hover:luca-shadow-md',
          className
        )}
        {...props}
      >
        {/* Left Icon */}
        {leftIcon && (
          <div className={cn('luca-shrink-0 luca-overflow-hidden', sizeStyles.iconSize)}>
            {leftIcon}
          </div>
        )}

        {/* Right Icon */}
        {rightIcon && (
          <div className={cn('luca-shrink-0 luca-overflow-hidden', sizeStyles.iconSize)}>
            {rightIcon}
          </div>
        )}

        {/* Title Container */}
        <div className="luca-flex luca-flex-1 luca-items-center luca-justify-center luca-gap-1 luca-min-w-0">
          <div className="luca-flex luca-items-center luca-gap-1 luca-min-w-0">
            <h3
              className={cn(
                'luca-font-semibold luca-leading-7 luca-uppercase luca-whitespace-nowrap luca-truncate',
                sizeStyles.titleSize,
                variantStyles.titleColor
              )}
            >
              {title}
            </h3>
            {showArrow && (
              <div className={cn('luca-shrink-0', sizeStyles.arrowSize)}>
                {arrowIcon ? (
                  <div className={cn('luca-w-full luca-h-full', variantStyles.arrowColor)}>
                    {arrowIcon}
                  </div>
                ) : (
                  <ArrowRightCircleIcon
                    className={cn('luca-w-full luca-h-full', variantStyles.arrowColor)}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

SubsectionStore.displayName = 'SubsectionStore';
