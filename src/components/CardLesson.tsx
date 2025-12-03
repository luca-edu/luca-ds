import React from 'react';
import { cn } from '../utils/cn';
import { CheckIcon, GemIcon as GemIconIcon } from '../shared/icons';
import { PlayCircleIcon as PlayCircleIconIcon } from '@heroicons/react/24/outline';

export type CardLessonVariant =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type CardLessonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type CardLessonState = 'default' | 'hover' | 'disabled';

export interface CardLessonBadge {
  label: string;
  color: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'accent';
}

export interface CardLessonProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Color variant of the card
   * @default 'primary'
   */
  variant?: CardLessonVariant;

  /**
   * Size of the card
   * @default 'md'
   */
  size?: CardLessonSize;

  /**
   * State of the card
   * @default 'default'
   */
  state?: CardLessonState;

  /**
   * Image source for the lesson thumbnail
   */
  imageSrc?: string;

  /**
   * Alt text for the image
   */
  imageAlt?: string;

  /**
   * Custom image element
   */
  image?: React.ReactNode;

  /**
   * Title of the lesson
   */
  title: string;

  /**
   * Badges to display (e.g., grade, subject)
   */
  badges?: CardLessonBadge[];

  /**
   * Date text (e.g., "Finaliza 31 agosto")
   */
  dateText?: string;

  /**
   * Show "Hoy" badge overlay on image
   * @default false
   */
  showTodayBadge?: boolean;

  /**
   * Show video lesson overlay
   * @default false
   */
  showVideoOverlay?: boolean;

  /**
   * Video lesson text
   * @default 'Video Lección'
   */
  videoLessonText?: string;

  /**
   * Show gems indicator
   * @default false
   */
  showGems?: boolean;

  /**
   * Number of gems (0-3)
   * @default 0
   */
  gemsCount?: number;

  /**
   * Whether the card is clickable
   * @default true
   */
  clickable?: boolean;

  /**
   * Click handler
   */
  onClick?: () => void;
}

const cardBaseStyles =
  'luca-flex luca-flex-col luca-items-start luca-overflow-hidden luca-rounded-2xl luca-border luca-border-neutral-200 luca-transition-all luca-duration-200 luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)]';

const cardSizeStyles: Record<
  CardLessonSize,
  { width: string; imageHeight: string; padding: string; gap: string }
> = {
  xs: {
    width: 'luca-w-[180px]',
    imageHeight: 'luca-h-[100px]',
    padding: 'luca-p-2',
    gap: 'luca-gap-2',
  },
  sm: {
    width: 'luca-w-[220px]',
    imageHeight: 'luca-h-[120px]',
    padding: 'luca-p-3',
    gap: 'luca-gap-2.5',
  },
  md: {
    width: 'luca-w-[260px]',
    imageHeight: 'luca-h-[140px]',
    padding: 'luca-p-4',
    gap: 'luca-gap-2',
  },
  lg: {
    width: 'luca-w-[300px]',
    imageHeight: 'luca-h-[160px]',
    padding: 'luca-p-5',
    gap: 'luca-gap-3',
  },
  xl: {
    width: 'luca-w-[340px]',
    imageHeight: 'luca-h-[180px]',
    padding: 'luca-p-6',
    gap: 'luca-gap-3',
  },
};

const textSizeStyles: Record<CardLessonSize, { title: string; badge: string; date: string }> = {
  xs: {
    title: 'luca-text-xs',
    badge: 'luca-text-[10px]',
    date: 'luca-text-[8px]',
  },
  sm: {
    title: 'luca-text-sm',
    badge: 'luca-text-xs',
    date: 'luca-text-[10px]',
  },
  md: {
    title: 'luca-text-sm',
    badge: 'luca-text-xs',
    date: 'luca-text-xs',
  },
  lg: {
    title: 'luca-text-base',
    badge: 'luca-text-sm',
    date: 'luca-text-xs',
  },
  xl: {
    title: 'luca-text-lg',
    badge: 'luca-text-sm',
    date: 'luca-text-sm',
  },
};

const cardVariantStyles: Record<
  CardLessonVariant,
  Record<CardLessonState, { bg: string; border: string }>
> = {
  primary: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-neutral-200',
    },
    hover: {
      bg: 'luca-bg-primary-50',
      border: 'luca-border-primary-200',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
    },
  },
  neutral: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-neutral-200',
    },
    hover: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-300',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
    },
  },
  accent: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-accent-200',
    },
    hover: {
      bg: 'luca-bg-accent-50',
      border: 'luca-border-accent-300',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
    },
  },
  success: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-success-200',
    },
    hover: {
      bg: 'luca-bg-success-50',
      border: 'luca-border-success-300',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
    },
  },
  warning: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-warning-200',
    },
    hover: {
      bg: 'luca-bg-warning-50',
      border: 'luca-border-warning-300',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
    },
  },
  danger: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-danger-200',
    },
    hover: {
      bg: 'luca-bg-danger-50',
      border: 'luca-border-danger-300',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
    },
  },
  info: {
    default: {
      bg: 'luca-bg-white',
      border: 'luca-border-info-200',
    },
    hover: {
      bg: 'luca-bg-info-50',
      border: 'luca-border-info-300',
    },
    disabled: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border-neutral-200',
    },
  },
};

const badgeColorStyles: Record<CardLessonBadge['color'] | 'default', { bg: string; text: string }> =
  {
    primary: {
      bg: 'luca-bg-primary-600',
      text: 'luca-text-white',
    },
    success: {
      bg: 'luca-bg-[#32c8bd]',
      text: 'luca-text-white',
    },
    warning: {
      bg: 'luca-bg-warning-500',
      text: 'luca-text-white',
    },
    danger: {
      bg: 'luca-bg-[#e86076]',
      text: 'luca-text-white',
    },
    info: {
      bg: 'luca-bg-info-500',
      text: 'luca-text-white',
    },
    accent: {
      bg: 'luca-bg-accent-600',
      text: 'luca-text-white',
    },
    default: {
      bg: 'luca-bg-neutral-500',
      text: 'luca-text-white',
    },
  };

export const CardLesson = React.forwardRef<HTMLDivElement, CardLessonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      state = 'default',
      imageSrc,
      imageAlt,
      image,
      title,
      badges = [],
      dateText,
      showTodayBadge = false,
      showVideoOverlay = false,
      videoLessonText = 'Video Lección',
      showGems = false,
      clickable = true,
      onClick,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = state === 'disabled';
    const styles = cardVariantStyles[variant][state];
    const sizeStyles = cardSizeStyles[size];
    const textStyles = textSizeStyles[size];

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
          cardBaseStyles,
          sizeStyles.width,
          styles.bg,
          styles.border,
          isDisabled && 'luca-opacity-50 luca-cursor-not-allowed',
          clickable && !isDisabled && 'luca-cursor-pointer hover:luca-shadow-lg',
          className
        )}
        {...props}
      >
        {/* Image Section */}
        <div
          className={cn('luca-relative luca-w-full luca-overflow-hidden', sizeStyles.imageHeight)}
        >
          {image ? (
            image
          ) : imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt ?? 'Lesson thumbnail'}
              className="luca-h-full luca-w-full luca-object-cover"
            />
          ) : (
            <div className="luca-h-full luca-w-full luca-bg-primary-200" />
          )}

          {/* Today Badge */}
          {showTodayBadge && (
            <div className="luca-absolute luca-left-1/2 luca-top-1/2 luca-translate-x-[-50%] luca-translate-y-[-50%] luca-bg-primary-600 luca-px-2.5 luca-py-1.5 luca-rounded">
              <span className="luca-text-xs luca-font-normal luca-leading-4 luca-text-white">
                Hoy
              </span>
            </div>
          )}

          {/* Video Overlay */}
          {showVideoOverlay && (
            <div className="luca-absolute luca-bottom-2 luca-left-2 luca-bg-black/70 luca-px-2 luca-py-1 luca-rounded">
              <div className="luca-flex luca-items-center luca-gap-1">
                <PlayCircleIconIcon className="luca-h-4 luca-w-4 luca-text-white" />
                <span className="luca-text-xs luca-font-medium luca-leading-[18px] luca-text-white">
                  {videoLessonText}
                </span>
              </div>
            </div>
          )}

          {/* Gems */}
          {showGems && (
            <div className="luca-absolute luca-right-2 luca-top-2 luca-flex luca-gap-2.5 luca-items-center">
              {[0, 1, 2].map((index) => (
                <GemIconIcon key={index} className="luca-text-neutral-400" />
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div
          className={cn('luca-flex luca-w-full luca-flex-col', sizeStyles.padding, sizeStyles.gap)}
        >
          {/* Title */}
          <h3
            className={cn(
              'luca-font-semibold luca-leading-[19.6px] luca-text-neutral-900 luca-w-full',
              textStyles.title
            )}
          >
            {title}
          </h3>

          {/* Badges */}
          {badges.length > 0 && (
            <div className="luca-flex luca-flex-wrap luca-gap-2">
              {badges.map((badge, index) => {
                const badgeStyles = badgeColorStyles[badge.color || 'default'];
                return (
                  <div
                    key={index}
                    className={cn(
                      'luca-flex luca-items-center luca-justify-center luca-gap-1 luca-px-2.5 luca-py-1.5 luca-rounded',
                      badgeStyles.bg,
                      badgeStyles.text,
                      textStyles.badge
                    )}
                  >
                    <CheckIcon size={16} className="luca-shrink-0" />
                    <span className="luca-font-normal luca-leading-4">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Date */}
          {dateText && (
            <div className="luca-flex luca-w-full luca-justify-end">
              <div className="luca-bg-neutral-50 luca-px-2 luca-py-1.5 luca-rounded-full">
                <span
                  className={cn(
                    'luca-font-normal luca-leading-[1.5] luca-text-neutral-400',
                    textStyles.date
                  )}
                >
                  {dateText}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

CardLesson.displayName = 'CardLesson';
