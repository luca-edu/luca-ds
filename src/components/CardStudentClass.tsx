import React from 'react';
import { cn } from '../utils/cn';
import { ArrowPathIcon, ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export type CardStudentClassVariant =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type CardStudentClassSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type CardStudentClassState = 'default' | 'hover' | 'disabled';

export type MissionStatusType = 'completed' | 'to-review' | 'pending' | 'empty';

export interface CardStudentClassMissionStatus {
  /**
   * Type of mission status
   */
  type: MissionStatusType;
  /**
   * Count for this status (optional, e.g. "2 misiones")
   */
  count?: number;
  /**
   * Label (e.g. "Sin misiones pendientes", "misiones por repasar", "misiones pendientes")
   */
  label: string;
}

export interface CardStudentClassProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Color variant of the card (uses tailwind colors)
   * @default 'primary'
   */
  variant?: CardStudentClassVariant;

  /**
   * Size of the card (responsive)
   * @default 'md'
   */
  size?: CardStudentClassSize;

  /**
   * State of the card
   * @default 'default'
   */
  state?: CardStudentClassState;

  /**
   * Subject/class icon
   */
  subjectIcon?: React.ReactNode;

  /**
   * Class name label (e.g. "Español", "Matemáticas")
   */
  classNameLabel: string;

  /**
   * Mission statuses to display
   */
  missionStatuses?: CardStudentClassMissionStatus[];

  /**
   * Average score value (e.g. 5.5)
   */
  averageScore?: number;

  /**
   * Max score for average (e.g. 10)
   * @default 10
   */
  maxScore?: number;

  /**
   * Average label text
   * @default 'Promedio'
   */
  averageLabel?: string;

  /**
   * Whether the card is clickable
   * @default false
   */
  clickable?: boolean;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Optional decorative element (e.g. illustration)
   */
  decorativeElement?: React.ReactNode;

  /**
   * Custom class name
   */
  className?: string;
}

const cardStudentClassBaseStyles =
  'luca-flex luca-flex-col luca-bg-white luca-rounded-2xl luca-transition-all luca-duration-200 luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)] luca-overflow-hidden luca-w-full luca-min-w-0 luca-min-h-[320px] luca-relative';

const cardStudentClassSizeStyles: Record<
  CardStudentClassSize,
  {
    padding: string;
    gap: string;
    iconSize: string;
    labelPadding: string;
    labelText: string;
    missionGap: string;
    missionIconSize: string;
    missionText: string;
    averagePadding: string;
    averageLabelText: string;
    averageValueText: string;
  }
> = {
  xs: {
    padding: 'luca-p-3',
    gap: 'luca-gap-2',
    iconSize: 'luca-w-10 luca-h-10',
    labelPadding: 'luca-px-2 luca-py-1',
    labelText: 'luca-text-xs luca-leading-[18px]',
    missionGap: 'luca-gap-1.5',
    missionIconSize: 'luca-w-3.5 luca-h-3.5',
    missionText: 'luca-text-[12px] luca-leading-[14px]',
    averagePadding: 'luca-p-1.5',
    averageLabelText: 'luca-text-[10px] luca-leading-[14px]',
    averageValueText: 'luca-text-[12px] luca-leading-[20px]',
  },
  sm: {
    padding: 'luca-p-4',
    gap: 'luca-gap-2.5',
    iconSize: 'luca-w-12 luca-h-12',
    labelPadding: 'luca-px-2.5 luca-py-1.5',
    labelText: 'luca-text-sm luca-leading-[20px]',
    missionGap: 'luca-gap-2',
    missionIconSize: 'luca-w-4 luca-h-4',
    missionText: 'luca-text-[14px] luca-leading-[14px]',
    averagePadding: 'luca-p-1.5',
    averageLabelText: 'luca-text-xs luca-leading-[16px]',
    averageValueText: 'luca-text-[16px] luca-leading-[24px]',
  },
  md: {
    padding: 'luca-p-5',
    gap: 'luca-gap-3',
    iconSize: 'luca-w-14 luca-h-14',
    labelPadding: 'luca-p-2.5',
    labelText: 'luca-text-base luca-leading-[24px]',
    missionGap: 'luca-gap-2.5',
    missionIconSize: 'luca-w-5 luca-h-5',
    missionText: 'luca-text-[16px] luca-leading-[24px]',
    averagePadding: 'luca-p-2',
    averageLabelText: 'luca-text-sm luca-leading-[20px]',
    averageValueText: 'luca-text-[20px] luca-leading-[32px]',
  },
  lg: {
    padding: 'luca-p-6',
    gap: 'luca-gap-3.5',
    iconSize: 'luca-w-14 luca-h-14',
    labelPadding: 'luca-px-4 luca-py-2.5',
    labelText: 'luca-text-lg luca-leading-[28px]',
    missionGap: 'luca-gap-3',
    missionIconSize: 'luca-w-5 luca-h-5',
    missionText: 'luca-text-[18px] luca-leading-[24px]',
    averagePadding: 'luca-p-3',
    averageLabelText: 'luca-text-base luca-leading-[24px]',
    averageValueText: 'luca-text-[24px] luca-leading-[32px]',
  },
  xl: {
    padding: 'luca-p-8',
    gap: 'luca-gap-4',
    iconSize: 'luca-w-16 luca-h-16',
    labelPadding: 'luca-px-5 luca-py-3',
    labelText: 'luca-text-xl luca-leading-[30px]',
    missionGap: 'luca-gap-3.5',
    missionIconSize: 'luca-w-6 luca-h-6',
    missionText: 'luca-text-[20px] luca-leading-[28px]',
    averagePadding: 'luca-p-4',
    averageLabelText: 'luca-text-lg luca-leading-[28px]',
    averageValueText: 'luca-text-[28px] luca-leading-[32px]',
  },
};

const cardStudentClassVariantStyles: Record<
  CardStudentClassVariant,
  Record<CardStudentClassState, { bg: string; border: string; labelBg: string; labelText: string }>
> = {
  primary: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      labelBg: 'luca-bg-primary-600',
      labelText: 'luca-text-white',
    },
    hover: {
      bg: 'luca-bg-primary-50/50',
      border: 'luca-border-primary-200',
      labelBg: 'luca-bg-primary-600',
      labelText: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      labelBg: 'luca-bg-neutral-400',
      labelText: 'luca-text-white',
    },
  },
  neutral: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      labelBg: 'luca-bg-neutral-700',
      labelText: 'luca-text-white',
    },
    hover: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-300',
      labelBg: 'luca-bg-neutral-700',
      labelText: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      labelBg: 'luca-bg-neutral-400',
      labelText: 'luca-text-white',
    },
  },
  accent: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      labelBg: 'luca-bg-accent-600',
      labelText: 'luca-text-white',
    },
    hover: {
      bg: 'luca-bg-accent-50',
      border: 'luca-border-accent-300',
      labelBg: 'luca-bg-accent-600',
      labelText: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      labelBg: 'luca-bg-neutral-400',
      labelText: 'luca-text-white',
    },
  },
  success: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      labelBg: 'luca-bg-success-600',
      labelText: 'luca-text-white',
    },
    hover: {
      bg: 'luca-bg-success-50',
      border: 'luca-border-success-300',
      labelBg: 'luca-bg-success-600',
      labelText: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      labelBg: 'luca-bg-neutral-400',
      labelText: 'luca-text-white',
    },
  },
  warning: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      labelBg: 'luca-bg-warning-600',
      labelText: 'luca-text-white',
    },
    hover: {
      bg: 'luca-bg-warning-50',
      border: 'luca-border-warning-300',
      labelBg: 'luca-bg-warning-600',
      labelText: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      labelBg: 'luca-bg-neutral-400',
      labelText: 'luca-text-white',
    },
  },
  danger: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      labelBg: 'luca-bg-danger-600',
      labelText: 'luca-text-white',
    },
    hover: {
      bg: 'luca-bg-danger-50',
      border: 'luca-border-danger-300',
      labelBg: 'luca-bg-danger-600',
      labelText: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      labelBg: 'luca-bg-neutral-400',
      labelText: 'luca-text-white',
    },
  },
  info: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      labelBg: 'luca-bg-info-600',
      labelText: 'luca-text-white',
    },
    hover: {
      bg: 'luca-bg-info-50',
      border: 'luca-border-info-300',
      labelBg: 'luca-bg-info-600',
      labelText: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      labelBg: 'luca-bg-neutral-400',
      labelText: 'luca-text-white',
    },
  },
};

const missionStatusStyles: Record<MissionStatusType, { iconBg: string; iconColor: string }> = {
  completed: {
    iconBg: 'luca-bg-success-500',
    iconColor: 'luca-text-white',
  },
  'to-review': {
    iconBg: 'luca-bg-accent-500',
    iconColor: 'luca-text-white',
  },
  pending: {
    iconBg: 'luca-bg-danger-500',
    iconColor: 'luca-text-white',
  },
  empty: {
    iconBg: '',
    iconColor: '',
  },
};

const getMissionStatusIcon = (type: MissionStatusType, iconSizeClass: string): React.ReactNode => {
  switch (type) {
    case 'completed':
      return <CheckCircleIcon className={iconSizeClass} />;
    case 'to-review':
      return <ArrowPathIcon className={iconSizeClass} />;
    case 'pending':
      return <ExclamationCircleIcon className={iconSizeClass} />;
    default:
      return null;
  }
};

const getAverageScoreColor = (score: number, max: number): string => {
  const ratio = score / max;
  if (ratio >= 0.7) return 'luca-text-success-600';
  if (ratio >= 0.5) return 'luca-text-warning-600';
  return 'luca-text-danger-600';
};

const formatMissionLabel = (status: CardStudentClassMissionStatus): string => {
  if (
    status.count !== undefined &&
    status.count !== null &&
    (status.count > 0 || status.type !== 'completed')
  ) {
    return `${status.count} ${status.label}`;
  }
  return status.label;
};

export const CardStudentClass = React.forwardRef<HTMLDivElement, CardStudentClassProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      state = 'default',
      subjectIcon,
      classNameLabel,
      missionStatuses = [],
      averageScore = 0,
      maxScore = 10,
      averageLabel = 'Promedio',
      clickable = false,
      onClick,
      decorativeElement,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = state === 'disabled';
    const isHover = state === 'hover';
    const styles = cardStudentClassVariantStyles[variant][state];
    const sizeStyles = cardStudentClassSizeStyles[size];

    const isAverageZero =
      averageScore <= 0 &&
      missionStatuses.length === 1 &&
      missionStatuses.some((status) => status.type === 'empty');

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
          cardStudentClassBaseStyles,
          sizeStyles.padding,
          sizeStyles.gap,
          styles.bg,
          styles.border,
          isHover && 'luca-shadow-md',
          isDisabled && 'luca-opacity-50 luca-cursor-not-allowed',
          clickable && !isDisabled && 'luca-cursor-pointer hover:luca-shadow-md',
          'luca-max-w-full sml:luca-max-w-none md:luca-min-w-[280px]',
          className
        )}
        {...props}
      >
        <div className="luca-flex luca-flex-col luca-gap-3 luca-w-full luca-min-w-0">
          {/* Header: icon + class name */}
          <div className="luca-flex luca-gap-2 luca-items-center luca-w-full luca-min-w-0">
            {subjectIcon && (
              <div
                className={cn(
                  'luca-shrink-0 luca-overflow-hidden luca-rounded-lg',
                  sizeStyles.iconSize
                )}
              >
                {subjectIcon}
              </div>
            )}
            <div
              className={cn(
                'luca-flex luca-items-center luca-justify-start luca-rounded-lg luca-font-semibold luca-whitespace-nowrap luca-w-full',
                sizeStyles.labelPadding,
                sizeStyles.labelText,
                styles.labelBg,
                styles.labelText
              )}
            >
              {classNameLabel}
            </div>
          </div>

          {/* Mission statuses */}
          {missionStatuses.length > 0 && (
            <div
              className={cn(
                'luca-flex luca-flex-col luca-w-full luca-z-[1] luca-relative',
                sizeStyles.missionGap
              )}
            >
              {missionStatuses.map((status, index) => {
                const statusStyle = missionStatusStyles[status.type];
                const icon = getMissionStatusIcon(status.type, sizeStyles.missionIconSize);
                return (
                  <div
                    key={index}
                    className="luca-flex luca-gap-2 luca-items-center luca-w-full luca-min-w-0"
                  >
                    {icon && status.type !== 'empty' && (
                      <div
                        className={cn(
                          'luca-flex luca-shrink-0 luca-items-center luca-justify-center luca-rounded-full luca-w-8 luca-h-8',
                          statusStyle.iconBg
                        )}
                      >
                        <div className={cn(statusStyle.iconColor)}>{icon}</div>
                      </div>
                    )}
                    <p
                      className={cn(
                        'luca-font-medium luca-text-neutral-800 luca-truncate',
                        sizeStyles.missionText
                      )}
                    >
                      {formatMissionLabel(status)}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Average section */}
          {averageScore !== undefined && (
            <div
              className={cn(
                'luca-flex luca-items-center luca-self-center luca-gap-2 luca-border luca-border-neutral-200 luca-rounded-lg luca-bg-white luca-w-max luca-shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] luca-z-[1] luca-relative',
                sizeStyles.averagePadding
              )}
            >
              <span
                className={cn(
                  'luca-font-normal luca-text-neutral-600 luca-shrink-0',
                  sizeStyles.averageLabelText
                )}
              >
                {averageLabel}
              </span>
              <span
                className={cn(
                  'luca-font-semibold',
                  sizeStyles.averageValueText,
                  !isAverageZero && getAverageScoreColor(averageScore, maxScore),
                  isAverageZero &&
                    'luca-bg-neutral-100 luca-p-1 !luca-leading-none luca-w-7 luca-h-7 luca-flex luca-items-center luca-justify-center luca-rounded-lg'
                )}
              >
                {isAverageZero ? '-' : averageScore}
              </span>
              <span
                className={cn(
                  'luca-font-normal luca-text-neutral-900 luca-shrink-0',
                  sizeStyles.averageLabelText
                )}
              >
                /{maxScore}
              </span>
            </div>
          )}

          {/* Decorative element (optional) */}
          {decorativeElement && (
            <div className="luca-absolute luca-bottom-0 luca-right-0 luca-pointer-events-none luca-z-[0]">
              {decorativeElement}
            </div>
          )}
        </div>
      </div>
    );
  }
);

CardStudentClass.displayName = 'CardStudentClass';
