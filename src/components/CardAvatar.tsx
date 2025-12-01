import React from 'react';
import { cn } from '../utils/cn';
import { RadioButton } from './RadioButton';

export type CardAvatarType = 'class' | 'student';

export type CardAvatarState = 'default' | 'disabled' | 'selected';

export interface CardAvatarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Type of card: 'class' or 'student'
   * @default 'class'
   */
  type?: CardAvatarType;

  /**
   * State of the card
   * @default 'default'
   */
  state?: CardAvatarState;

  /**
   * Icon or image for class type
   */
  icon?: React.ReactNode;

  /**
   * Image source for class type
   */
  iconSrc?: string;

  /**
   * Alt text for class icon
   */
  iconAlt?: string;

  /**
   * Avatar or image for student type
   */
  avatar?: React.ReactNode;

  /**
   * Image source for student avatar
   */
  avatarSrc?: string;

  /**
   * Alt text for student avatar
   */
  avatarAlt?: string;

  /**
   * Text label (for class type with radio button)
   */
  label?: string;

  /**
   * Student name (for student type)
   */
  studentName?: string;

  /**
   * Points (for student type)
   */
  points?: string | number;

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
  'luca-flex luca-flex-col luca-items-center luca-gap-2 luca-rounded-2xl luca-px-3 luca-py-4 luca-transition-all luca-duration-200 luca-shadow-[0px_4px_16px_0px_rgba(107,114,128,0.1)]';

const cardTypeStyles: Record<
  CardAvatarType,
  Record<CardAvatarState, { bg: string; border: string }>
> = {
  class: {
    default: {
      bg: 'luca-bg-neutral-50',
      border: 'luca-border luca-border-neutral-200',
    },
    disabled: {
      bg: 'luca-bg-neutral-200',
      border: 'luca-border luca-border-neutral-200',
    },
    selected: {
      bg: 'luca-bg-primary-50',
      border: 'luca-border luca-border-neutral-200',
    },
  },
  student: {
    default: {
      bg: 'luca-bg-primary-100',
      border: '',
    },
    disabled: {
      bg: 'luca-bg-primary-100',
      border: '',
    },
    selected: {
      bg: 'luca-bg-accent-100',
      border: 'luca-border-[3px] luca-border-accent-700',
    },
  },
};

export const CardAvatar = React.forwardRef<HTMLDivElement, CardAvatarProps>(
  (
    {
      type = 'class',
      state = 'default',
      icon,
      iconSrc,
      iconAlt,
      avatar,
      avatarSrc,
      avatarAlt,
      label = 'Radiobutton text',
      studentName = 'Student_name',
      points = 0,
      clickable = true,
      onClick,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = state === 'disabled';
    const isSelected = state === 'selected';
    const styles = cardTypeStyles[type][state];

    const handleClick = () => {
      if (!isDisabled && clickable && onClick) {
        onClick();
      }
    };

    if (type === 'class') {
      return (
        <div
          ref={ref}
          onClick={handleClick}
          className={cn(
            cardBaseStyles,
            styles.bg,
            styles.border,
            isDisabled && 'luca-opacity-50',
            clickable && !isDisabled && 'luca-cursor-pointer hover:luca-shadow-lg',
            className
          )}
          {...props}
        >
          <div className="luca-flex luca-h-20 luca-w-20 luca-items-center luca-justify-center luca-shrink-0">
            {icon ? (
              icon
            ) : iconSrc ? (
              <img
                src={iconSrc}
                alt={iconAlt ?? 'Class icon'}
                className="luca-h-full luca-w-full luca-object-contain"
              />
            ) : (
              <div className="luca-h-full luca-w-full luca-rounded-lg luca-bg-success-200 luca-border-2 luca-border-accent-400" />
            )}
          </div>
          <div className="luca-flex luca-w-full luca-items-center luca-gap-2.5">
            <RadioButton
              checked={isSelected}
              disabled={isDisabled}
              variant="primary"
              showLabel={false}
              wrapperClassName="luca-shrink-0"
            />
            <span
              className={cn(
                'luca-text-sm luca-leading-5 luca-flex-1',
                isDisabled ? 'luca-text-neutral-400' : 'luca-text-neutral-900'
              )}
            >
              {label}
            </span>
          </div>
        </div>
      );
    }

    // Student type
    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={cn(
          cardBaseStyles,
          styles.bg,
          styles.border,
          isDisabled && 'luca-opacity-50',
          clickable && !isDisabled && 'luca-cursor-pointer hover:luca-shadow-lg',
          className
        )}
        {...props}
      >
        <div className="luca-flex luca-h-20 luca-w-20 luca-items-center luca-justify-center luca-shrink-0 luca-overflow-hidden">
          {avatar ? (
            avatar
          ) : avatarSrc ? (
            <img
              src={avatarSrc}
              alt={avatarAlt ?? 'Student avatar'}
              className="luca-h-full luca-w-full luca-object-contain"
            />
          ) : (
            <div className="luca-h-full luca-w-full luca-rounded-full luca-bg-primary-200" />
          )}
        </div>
        <div className="luca-flex luca-flex-col luca-items-center luca-gap-1 luca-text-center">
          <p
            className={cn(
              'luca-text-sm luca-font-semibold luca-leading-5 luca-h-5',
              isDisabled ? 'luca-text-neutral-400' : 'luca-text-neutral-900'
            )}
          >
            {studentName}
          </p>
          <p
            className={cn(
              'luca-text-sm luca-font-normal luca-leading-5',
              isDisabled ? 'luca-text-neutral-400' : 'luca-text-neutral-900'
            )}
          >
            {points} Points
          </p>
        </div>
      </div>
    );
  }
);

CardAvatar.displayName = 'CardAvatar';
