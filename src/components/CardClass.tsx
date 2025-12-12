import React from 'react';
import { cn } from '../utils/cn';
import { CheckIcon } from '../shared/icons';
import { ClockIcon, CalendarIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { EmptyStateIcon } from '../shared/icons';

export type CardClassVariant =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type CardClassSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type CardClassState = 'default' | 'hover' | 'disabled' | 'empty';

export interface CardClassKPI {
  /**
   * Label for the KPI (e.g., "Avance entrega")
   */
  label: string;
  /**
   * Value for the KPI (e.g., "5%")
   */
  value: React.ReactNode;
}

export interface CardClassStatus {
  /**
   * Type of status
   */
  type: 'completed' | 'in-progress' | 'scheduled';
  /**
   * Count for this status
   */
  count: number;
  /**
   * Label for the status (e.g., "Finalizadas", "En curso", "Programadas")
   */
  label: string;
}

export interface CardClassProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Color variant of the card
   * @default 'primary'
   */
  variant?: CardClassVariant;

  /**
   * Size of the card
   * @default 'md'
   */
  size?: CardClassSize;

  /**
   * State of the card
   * @default 'default'
   */
  state?: CardClassState;

  /**
   * Subject icon (e.g., Spanish, Math icon)
   */
  subjectIcon?: React.ReactNode;

  /**
   * Class identifier (e.g., "1° A Español")
   */
  classId: string;

  /**
   * Number of students
   */
  studentsCount?: number;

  /**
   * Students text (e.g., "10 Estudiantes")
   */
  studentsText?: string;

  /**
   * Show alternate class badge
   * @default false
   */
  showAlternateBadge?: boolean;

  /**
   * Alternate badge text
   * @default 'Clase alterna'
   */
  alternateBadgeText?: string;

  /**
   * KPIs to display
   */
  kpis?: CardClassKPI[];

  /**
   * Statuses to display
   */
  statuses?: CardClassStatus[];

  /**
   * Button text
   * @default 'Asignar tarea'
   */
  buttonText?: string;

  /**
   * Button click handler
   */
  onButtonClick?: () => void;

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
   * Class name
   */
  className?: string;
}

const cardClassBaseStyles =
  'luca-flex luca-flex-col luca-items-center luca-bg-white luca-rounded-2xl luca-transition-all luca-duration-200 luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)]';

const cardClassSizeStyles: Record<
  CardClassSize,
  {
    padding: string;
    gap: string;
    iconSize: string;
    classIdPadding: string;
    classIdText: string;
    studentsText: string;
    kpiPadding: string;
    kpiLabelText: string;
    kpiValueText: string;
    statusPadding: string;
    statusIconSize: number;
    statusText: string;
    buttonPadding: string;
    buttonText: string;
  }
> = {
  xs: {
    padding: 'luca-px-3 luca-py-2',
    gap: 'luca-gap-2',
    iconSize: 'luca-w-10 luca-h-10',
    classIdPadding: 'luca-p-2',
    classIdText: 'luca-text-xs luca-leading-[18px]',
    studentsText: 'luca-text-[10px] luca-leading-[14px]',
    kpiPadding: 'luca-p-2',
    kpiLabelText: 'luca-text-[10px] luca-leading-[14px]',
    kpiValueText: 'luca-text-sm luca-leading-[20px]',
    statusPadding: 'luca-px-2 luca-py-1',
    statusIconSize: 12,
    statusText: 'luca-text-xs luca-leading-[16px]',
    buttonPadding: 'luca-px-2 luca-py-1',
    buttonText: 'luca-text-xs luca-leading-[16px]',
  },
  sm: {
    padding: 'luca-px-4 luca-py-3',
    gap: 'luca-gap-2.5',
    iconSize: 'luca-w-12 luca-h-12',
    classIdPadding: 'luca-p-2.5',
    classIdText: 'luca-text-sm luca-leading-[20px]',
    studentsText: 'luca-text-xs luca-leading-[16px]',
    kpiPadding: 'luca-p-2.5',
    kpiLabelText: 'luca-text-xs luca-leading-[16px]',
    kpiValueText: 'luca-text-base luca-leading-[24px]',
    statusPadding: 'luca-px-2.5 luca-py-1.5',
    statusIconSize: 14,
    statusText: 'luca-text-sm luca-leading-[20px]',
    buttonPadding: 'luca-px-3 luca-py-2',
    buttonText: 'luca-text-sm luca-leading-[20px]',
  },
  md: {
    padding: 'luca-px-6 luca-py-4',
    gap: 'luca-gap-2',
    iconSize: 'luca-w-14 luca-h-14',
    classIdPadding: 'luca-p-2.5',
    classIdText: 'luca-text-lg luca-leading-[28px]',
    studentsText: 'luca-text-xs luca-leading-[16px]',
    kpiPadding: 'luca-p-2',
    kpiLabelText: 'luca-text-xs luca-leading-[16px]',
    kpiValueText: 'luca-text-lg luca-leading-[28px]',
    statusPadding: 'luca-px-2 luca-py-1',
    statusIconSize: 16,
    statusText: 'luca-text-sm luca-leading-[20px]',
    buttonPadding: 'luca-px-2 luca-py-2.5',
    buttonText: 'luca-text-sm luca-leading-[20px]',
  },
  lg: {
    padding: 'luca-px-8 luca-py-5',
    gap: 'luca-gap-3',
    iconSize: 'luca-w-16 luca-h-16',
    classIdPadding: 'luca-p-3',
    classIdText: 'luca-text-xl luca-leading-[30px]',
    studentsText: 'luca-text-sm luca-leading-[20px]',
    kpiPadding: 'luca-p-3',
    kpiLabelText: 'luca-text-sm luca-leading-[20px]',
    kpiValueText: 'luca-text-xl luca-leading-[30px]',
    statusPadding: 'luca-px-3 luca-py-2',
    statusIconSize: 18,
    statusText: 'luca-text-base luca-leading-[24px]',
    buttonPadding: 'luca-px-4 luca-py-3',
    buttonText: 'luca-text-base luca-leading-[24px]',
  },
  xl: {
    padding: 'luca-px-10 luca-py-6',
    gap: 'luca-gap-3.5',
    iconSize: 'luca-w-20 luca-h-20',
    classIdPadding: 'luca-p-4',
    classIdText: 'luca-text-2xl luca-leading-[32px]',
    studentsText: 'luca-text-base luca-leading-[24px]',
    kpiPadding: 'luca-p-4',
    kpiLabelText: 'luca-text-base luca-leading-[24px]',
    kpiValueText: 'luca-text-2xl luca-leading-[32px]',
    statusPadding: 'luca-px-4 luca-py-2.5',
    statusIconSize: 20,
    statusText: 'luca-text-lg luca-leading-[28px]',
    buttonPadding: 'luca-px-5 luca-py-4',
    buttonText: 'luca-text-lg luca-leading-[28px]',
  },
};

const cardClassVariantStyles: Record<
  CardClassVariant,
  Record<CardClassState, { bg: string; border: string; classIdBg: string; classIdText: string }>
> = {
  primary: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      classIdBg: 'luca-bg-primary-600',
      classIdText: 'luca-text-white',
    },
    hover: {
      bg: 'luca-bg-primary-50/50',
      border: 'luca-border-primary-200',
      classIdBg: 'luca-bg-primary-600',
      classIdText: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      classIdBg: 'luca-bg-neutral-400',
      classIdText: 'luca-text-white',
    },
    empty: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      classIdBg: 'luca-bg-primary-600',
      classIdText: 'luca-text-white',
    },
  },
  neutral: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      classIdBg: 'luca-bg-neutral-700',
      classIdText: 'luca-text-white',
    },
    hover: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-300',
      classIdBg: 'luca-bg-neutral-700',
      classIdText: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      classIdBg: 'luca-bg-neutral-400',
      classIdText: 'luca-text-white',
    },
    empty: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      classIdBg: 'luca-bg-neutral-700',
      classIdText: 'luca-text-white',
    },
  },
  accent: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      classIdBg: 'luca-bg-accent-600',
      classIdText: 'luca-text-white',
    },
    hover: {
      bg: 'luca-bg-accent-50',
      border: 'luca-border-accent-300',
      classIdBg: 'luca-bg-accent-600',
      classIdText: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      classIdBg: 'luca-bg-neutral-400',
      classIdText: 'luca-text-white',
    },
    empty: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      classIdBg: 'luca-bg-accent-600',
      classIdText: 'luca-text-white',
    },
  },
  success: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      classIdBg: 'luca-bg-success-600',
      classIdText: 'luca-text-white',
    },
    hover: {
      bg: 'luca-bg-success-50',
      border: 'luca-border-success-300',
      classIdBg: 'luca-bg-success-600',
      classIdText: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      classIdBg: 'luca-bg-neutral-400',
      classIdText: 'luca-text-white',
    },
    empty: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      classIdBg: 'luca-bg-success-600',
      classIdText: 'luca-text-white',
    },
  },
  warning: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      classIdBg: 'luca-bg-warning-600',
      classIdText: 'luca-text-white',
    },
    hover: {
      bg: 'luca-bg-warning-50',
      border: 'luca-border-warning-300',
      classIdBg: 'luca-bg-warning-600',
      classIdText: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      classIdBg: 'luca-bg-neutral-400',
      classIdText: 'luca-text-white',
    },
    empty: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      classIdBg: 'luca-bg-warning-600',
      classIdText: 'luca-text-white',
    },
  },
  danger: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      classIdBg: 'luca-bg-danger-600',
      classIdText: 'luca-text-white',
    },
    hover: {
      bg: 'luca-bg-danger-50',
      border: 'luca-border-danger-300',
      classIdBg: 'luca-bg-danger-600',
      classIdText: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      classIdBg: 'luca-bg-neutral-400',
      classIdText: 'luca-text-white',
    },
    empty: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      classIdBg: 'luca-bg-danger-600',
      classIdText: 'luca-text-white',
    },
  },
  info: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      classIdBg: 'luca-bg-info-600',
      classIdText: 'luca-text-white',
    },
    hover: {
      bg: 'luca-bg-info-50',
      border: 'luca-border-info-300',
      classIdBg: 'luca-bg-info-600',
      classIdText: 'luca-text-white',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
      classIdBg: 'luca-bg-neutral-400',
      classIdText: 'luca-text-white',
    },
    empty: {
      bg: 'luca-bg-white',
      border: 'luca-border-transparent',
      classIdBg: 'luca-bg-info-600',
      classIdText: 'luca-text-white',
    },
  },
};

const getStatusIcon = (type: CardClassStatus['type'], size: number) => {
  const sizeClass =
    size === 12
      ? 'luca-w-3 luca-h-3'
      : size === 14
        ? 'luca-w-3.5 luca-h-3.5'
        : size === 16
          ? 'luca-w-4 luca-h-4'
          : size === 18
            ? 'luca-w-[18px] luca-h-[18px]'
            : 'luca-w-5 luca-h-5';
  switch (type) {
    case 'completed':
      return <CheckIcon size={size} />;
    case 'in-progress':
      return <ClockIcon className={sizeClass} />;
    case 'scheduled':
      return <CalendarIcon className={sizeClass} />;
    default:
      return null;
  }
};

const statusIconStyles: Record<CardClassStatus['type'], { bg: string; iconColor: string }> = {
  completed: {
    bg: 'luca-bg-success-50',
    iconColor: 'luca-text-success-600',
  },
  'in-progress': {
    bg: 'luca-bg-accent-50',
    iconColor: 'luca-text-warning-600',
  },
  scheduled: {
    bg: 'luca-bg-neutral-100',
    iconColor: 'luca-text-neutral-600',
  },
};

export const CardClass = React.forwardRef<HTMLDivElement, CardClassProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      state = 'default',
      subjectIcon,
      classId,
      studentsCount,
      studentsText,
      showAlternateBadge = false,
      alternateBadgeText = 'Clase alterna',
      kpis = [],
      statuses = [],
      buttonText = 'Asignar tarea',
      onButtonClick,
      clickable = false,
      onClick,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = state === 'disabled';
    const isEmpty = state === 'empty';
    const isHover = state === 'hover';
    const styles = cardClassVariantStyles[variant][state];
    const sizeStyles = cardClassSizeStyles[size];

    const handleClick = () => {
      if (!isDisabled && clickable && onClick) {
        onClick();
      }
    };

    const handleButtonClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!isDisabled && onButtonClick) {
        onButtonClick();
      }
    };

    const displayStudentsText =
      studentsText || (studentsCount !== undefined ? `${studentsCount} Estudiantes` : undefined);

    if (isEmpty) {
      return (
        <div
          ref={ref}
          onClick={handleClick}
          className={cn(
            cardClassBaseStyles,
            sizeStyles.padding,
            'luca-h-auto luca-min-h-[368px] luca-items-center luca-justify-center',
            styles.bg,
            styles.border,
            isDisabled && 'luca-opacity-50 luca-cursor-not-allowed',
            clickable && !isDisabled && 'luca-cursor-pointer',
            className
          )}
          {...props}
        >
          <div className="luca-flex luca-flex-col luca-gap-2 luca-items-center luca-justify-center luca-px-0 luca-py-6 luca-w-full">
            <div className="luca-flex luca-gap-2 luca-items-center luca-w-full">
              {subjectIcon && (
                <div className={cn('luca-shrink-0 luca-overflow-hidden', sizeStyles.iconSize)}>
                  {subjectIcon}
                </div>
              )}
              {classId && (
                <div className="luca-flex luca-flex-col luca-items-start luca-justify-center luca-shrink-0">
                  <div
                    className={cn(
                      'luca-flex luca-flex-col luca-items-center luca-justify-center luca-rounded-lg',
                      sizeStyles.classIdPadding,
                      styles.classIdBg
                    )}
                  >
                    <div
                      className={cn(
                        'luca-flex luca-flex-col luca-justify-center luca-font-semibold luca-whitespace-nowrap',
                        sizeStyles.classIdText,
                        styles.classIdText
                      )}
                    >
                      <p>{classId}</p>
                    </div>
                  </div>
                </div>
              )}
              {showAlternateBadge && alternateBadgeText && (
                <div className="luca-flex luca-flex-1 luca-flex-col luca-items-end luca-justify-center luca-min-h-0 luca-min-w-0">
                  <div className="luca-bg-info-50 luca-flex luca-gap-1 luca-h-6 luca-items-center luca-justify-center luca-px-2.5 luca-py-0.75 luca-rounded">
                    <BookOpenIcon className="luca-w-4 luca-h-4 luca-text-info-600" />
                    <p className="luca-text-xs luca-font-normal luca-leading-[16px] luca-text-info-600">
                      {alternateBadgeText}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="luca-flex luca-flex-col luca-items-center luca-justify-center luca-gap-2 luca-pt-6">
              <EmptyStateIcon width={120} height={120} />
            </div>
            <div className="luca-text-xs luca-text-neutral-400 luca-text-center luca-leading-[16px] luca-max-w-[280px]">
              <p>¡Esta clase está vacía!</p>
              <br />
              <p>Cuando tus estudiantes estén registrados, podrás asignar tareas.</p>
            </div>
          </div>
          <div className="luca-flex luca-gap-2 luca-items-start luca-justify-center luca-px-0 luca-py-2 luca-w-full">
            <button
              onClick={handleButtonClick}
              disabled={isDisabled}
              className={cn(
                'luca-flex luca-flex-1 luca-h-6 luca-items-center luca-justify-center luca-px-2 luca-py-2.5',
                sizeStyles.buttonText,
                'luca-font-semibold luca-text-neutral-400 luca-cursor-not-allowed'
              )}
            >
              {buttonText}
            </button>
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={cn(
          cardClassBaseStyles,
          sizeStyles.padding,
          styles.bg,
          styles.border,
          isHover && 'luca-shadow-md',
          isDisabled && 'luca-opacity-50 luca-cursor-not-allowed',
          clickable && !isDisabled && 'luca-cursor-pointer hover:luca-shadow-md',
          className
        )}
        {...props}
      >
        <div className={cn('luca-flex luca-flex-col luca-gap-2 luca-w-full', sizeStyles.gap)}>
          {/* Header */}
          <div className="luca-flex luca-gap-2 luca-items-center luca-w-full">
            {subjectIcon && (
              <div className={cn('luca-shrink-0 luca-overflow-hidden', sizeStyles.iconSize)}>
                {subjectIcon}
              </div>
            )}
            <div className="luca-flex luca-flex-col luca-items-start luca-justify-center luca-shrink-0">
              <div
                className={cn(
                  'luca-flex luca-flex-col luca-items-center luca-justify-center luca-rounded-lg',
                  sizeStyles.classIdPadding,
                  styles.classIdBg
                )}
              >
                <div
                  className={cn(
                    'luca-flex luca-flex-col luca-justify-center luca-font-semibold luca-whitespace-nowrap',
                    sizeStyles.classIdText,
                    styles.classIdText
                  )}
                >
                  <p>{classId}</p>
                </div>
              </div>
            </div>
            {showAlternateBadge && (
              <div className="luca-flex luca-flex-1 luca-flex-col luca-items-end luca-justify-center luca-min-h-0 luca-min-w-0">
                <div className="luca-bg-info-50 luca-flex luca-gap-1 luca-h-6 luca-items-center luca-justify-center luca-px-2.5 luca-py-0.75 luca-rounded">
                  <BookOpenIcon className="luca-w-4 luca-h-4 luca-text-info-600" />
                  <p className="luca-text-xs luca-font-normal luca-leading-[16px] luca-text-info-600">
                    {alternateBadgeText}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Students Text */}
          {displayStudentsText && (
            <div
              className={cn(
                'luca-flex luca-relative luca-shrink-0 luca-w-full',
                showAlternateBadge ? 'luca-flex-row luca-gap-2 luca-items-center' : 'luca-flex-col'
              )}
            >
              <div
                className={cn(
                  'luca-flex luca-flex-col luca-font-normal luca-justify-center luca-leading-0 luca-not-italic luca-relative luca-shrink-0 luca-text-neutral-600 luca-text-center',
                  sizeStyles.studentsText
                )}
              >
                <p className="luca-leading-[16px] luca-whitespace-pre-wrap">
                  {displayStudentsText}
                </p>
              </div>
            </div>
          )}

          {/* KPIs */}
          {kpis.length > 0 && (
            <div className="luca-flex luca-gap-2 luca-items-start luca-w-full">
              {kpis.map((kpi, index) => (
                <div
                  key={index}
                  className={cn(
                    'luca-border luca-border-neutral-200 luca-flex luca-flex-1 luca-flex-col luca-gap-1 luca-items-center luca-leading-0 luca-not-italic luca-rounded-lg luca-shrink-0 luca-text-neutral-600 luca-text-center',
                    sizeStyles.kpiPadding,
                    isHover ? '' : 'luca-bg-white'
                  )}
                >
                  <div
                    className={cn(
                      'luca-flex luca-flex-col luca-font-normal luca-justify-center luca-leading-[16px] luca-relative luca-shrink-0 luca-w-full luca-whitespace-pre-wrap',
                      sizeStyles.kpiLabelText
                    )}
                  >
                    <p className="luca-mb-0">{kpi.label.split(' ')[0]}</p>
                    <p>{kpi.label.split(' ').slice(1).join(' ')}</p>
                  </div>
                  <div
                    className={cn(
                      'luca-flex luca-flex-col luca-font-semibold luca-justify-center luca-relative luca-shrink-0 luca-w-full',
                      sizeStyles.kpiValueText
                    )}
                  >
                    <p className="luca-leading-[28px] luca-whitespace-pre-wrap">{kpi.value}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Statuses */}
          {statuses.length > 0 && (
            <div className="luca-flex luca-flex-col luca-gap-2 luca-items-start luca-justify-center luca-w-full">
              {statuses.map((status, index) => {
                const statusStyle = statusIconStyles[status.type];
                const statusIcon = getStatusIcon(status.type, sizeStyles.statusIconSize);
                return (
                  <div
                    key={index}
                    className={cn(
                      'luca-border luca-border-neutral-200 luca-flex luca-gap-2 luca-items-center luca-rounded-lg luca-shrink-0 luca-w-full',
                      sizeStyles.statusPadding,
                      isHover ? '' : 'luca-bg-white'
                    )}
                  >
                    <div className="luca-content-stretch luca-flex luca-items-start luca-relative luca-shrink-0">
                      <div
                        className={cn(
                          'luca-content-stretch luca-flex luca-items-center luca-justify-center luca-p-1 luca-rounded-full luca-shrink-0 luca-w-8 luca-h-8',
                          statusStyle.bg
                        )}
                      >
                        <div
                          className={cn(
                            'luca-flex luca-items-center luca-justify-center',
                            statusStyle.iconColor
                          )}
                        >
                          {statusIcon}
                        </div>
                      </div>
                    </div>
                    <div
                      className={cn(
                        'luca-content-stretch luca-flex luca-gap-0.5 luca-items-center luca-leading-0 luca-not-italic luca-relative luca-shrink-0 luca-text-neutral-900',
                        sizeStyles.statusText
                      )}
                    >
                      <div className="luca-flex luca-flex-col luca-font-semibold luca-justify-center luca-relative luca-shrink-0 luca-w-[18px]">
                        <p className="luca-leading-[20px] luca-whitespace-pre-wrap">
                          {status.count}
                        </p>
                      </div>
                      <div className="luca-flex luca-flex-col luca-font-normal luca-justify-center luca-relative luca-shrink-0 luca-whitespace-nowrap">
                        <p className="luca-leading-[20px]">{status.label}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Button */}
          <div className="luca-content-stretch luca-flex luca-gap-2 luca-items-start luca-justify-center luca-px-0 luca-py-2 luca-relative luca-shrink-0 luca-w-full">
            <button
              onClick={handleButtonClick}
              disabled={isDisabled}
              className={cn(
                'luca-content-stretch luca-flex luca-flex-1 luca-h-6 luca-items-center luca-justify-center luca-min-h-0 luca-min-w-0',
                sizeStyles.buttonPadding,
                sizeStyles.buttonText,
                'luca-font-semibold luca-relative luca-shrink-0',
                isDisabled
                  ? 'luca-text-neutral-400 luca-cursor-not-allowed'
                  : 'luca-text-primary-600 luca-cursor-pointer hover:luca-text-primary-700'
              )}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

CardClass.displayName = 'CardClass';
