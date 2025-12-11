import React from 'react';
import { cn } from '../utils/cn';

export type AvatarVariant =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type AvatarState = 'default' | 'disabled';

export type AvatarType = 'text' | 'image';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Color variant of the avatar
   * @default 'primary'
   */
  variant?: AvatarVariant;

  /**
   * Size of the avatar
   * @default 'md'
   */
  size?: AvatarSize;

  /**
   * State of the avatar
   * @default 'default'
   */
  state?: AvatarState;

  /**
   * Type of avatar: 'text' for initials or 'image' for image
   * @default 'image'
   */
  type?: AvatarType;

  /**
   * Text to display (for type='text')
   * If not provided and type='text', will use initials from name prop
   */
  text?: string;

  /**
   * Name for generating initials (used when type='text' and text is not provided)
   */
  name?: string;

  /**
   * Image source (for type='image')
   */
  src?: string;

  /**
   * Alt text for image
   */
  alt?: string;

  /**
   * Custom image element (for type='image')
   */
  image?: React.ReactNode;

  /**
   * Show online status indicator
   * @default false
   */
  showStatus?: boolean;

  /**
   * Status indicator variant
   * @default 'online'
   */
  status?: 'online' | 'offline' | 'away' | 'busy';

  /**
   * Custom badge element
   */
  badge?: React.ReactNode;
}

const avatarSizeStyles: Record<
  AvatarSize,
  {
    size: string;
    textSize: string;
    statusSize: string;
    statusOffset: string;
  }
> = {
  xs: {
    size: 'luca-w-6 luca-h-6',
    textSize: 'luca-text-xs',
    statusSize: 'luca-w-1.5 luca-h-1.5',
    statusOffset: 'luca-bottom-0 luca-right-0',
  },
  sm: {
    size: 'luca-w-[38px] luca-h-[38px]',
    textSize: 'luca-text-sm',
    statusSize: 'luca-w-2 luca-h-2',
    statusOffset: 'luca-bottom-0 luca-right-0',
  },
  md: {
    size: 'luca-w-[42px] luca-h-[42px]',
    textSize: 'luca-text-base',
    statusSize: 'luca-w-2.5 luca-h-2.5',
    statusOffset: 'luca-bottom-0 luca-right-0',
  },
  lg: {
    size: 'luca-w-[52px] luca-h-[52px]',
    textSize: 'luca-text-lg',
    statusSize: 'luca-w-3 luca-h-3',
    statusOffset: 'luca-bottom-0 luca-right-0',
  },
  xl: {
    size: 'luca-w-20 luca-h-20',
    textSize: 'luca-text-xl',
    statusSize: 'luca-w-4 luca-h-4',
    statusOffset: 'luca-bottom-0 luca-right-0',
  },
};

const avatarVariantStyles: Record<AvatarVariant, { bg: string; text: string }> = {
  primary: {
    bg: 'luca-bg-primary-600',
    text: 'luca-text-white',
  },
  neutral: {
    bg: 'luca-bg-neutral-600',
    text: 'luca-text-white',
  },
  accent: {
    bg: 'luca-bg-accent-600',
    text: 'luca-text-white',
  },
  success: {
    bg: 'luca-bg-success-600',
    text: 'luca-text-white',
  },
  warning: {
    bg: 'luca-bg-warning-600',
    text: 'luca-text-white',
  },
  danger: {
    bg: 'luca-bg-danger-600',
    text: 'luca-text-white',
  },
  info: {
    bg: 'luca-bg-info-600',
    text: 'luca-text-white',
  },
};

const statusStyles: Record<'online' | 'offline' | 'away' | 'busy', { bg: string; border: string }> =
  {
    online: {
      bg: 'luca-bg-success-500',
      border: 'luca-border-white',
    },
    offline: {
      bg: 'luca-bg-neutral-400',
      border: 'luca-border-white',
    },
    away: {
      bg: 'luca-bg-warning-500',
      border: 'luca-border-white',
    },
    busy: {
      bg: 'luca-bg-danger-500',
      border: 'luca-border-white',
    },
  };

/**
 * Generates initials from a name
 */
const getInitials = (name: string): string => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return '';
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      state = 'default',
      type = 'image',
      text,
      name,
      src,
      alt,
      image,
      showStatus = false,
      status: statusType = 'online',
      badge,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = state === 'disabled';
    const sizeStyles = avatarSizeStyles[size];
    const variantStyles = avatarVariantStyles[variant];

    // Determine text to display for text type
    const displayText = React.useMemo(() => {
      if (type === 'text') {
        if (text) return text;
        if (name) return getInitials(name);
        return '??';
      }
      return null;
    }, [type, text, name]);

    return (
      <div
        ref={ref}
        className={cn(
          'luca-relative luca-inline-flex luca-items-center luca-justify-center luca-rounded-full luca-shrink-0 luca-overflow-hidden',
          sizeStyles.size,
          isDisabled && 'luca-opacity-50',
          className
        )}
        {...props}
      >
        {type === 'text' ? (
          <div
            className={cn(
              'luca-flex luca-items-center luca-justify-center luca-w-full luca-h-full luca-font-semibold luca-leading-none',
              sizeStyles.textSize,
              variantStyles.bg,
              variantStyles.text
            )}
          >
            {displayText}
          </div>
        ) : (
          <>
            {image ? (
              <div className="luca-w-full luca-h-full">{image}</div>
            ) : src ? (
              <img
                src={src}
                alt={alt ?? 'Avatar'}
                className="luca-w-full luca-h-full luca-object-cover"
              />
            ) : (
              <div
                className={cn(
                  'luca-w-full luca-h-full luca-flex luca-items-center luca-justify-center',
                  variantStyles.bg
                )}
              >
                <span className={cn('luca-text-white luca-font-semibold', sizeStyles.textSize)}>
                  ?
                </span>
              </div>
            )}
          </>
        )}

        {/* Status indicator */}
        {showStatus && (
          <div
            className={cn(
              'luca-absolute luca-rounded-full luca-border-2',
              sizeStyles.statusSize,
              sizeStyles.statusOffset,
              statusStyles[statusType].bg,
              statusStyles[statusType].border
            )}
          />
        )}

        {/* Badge */}
        {badge && (
          <div className="luca-absolute luca-top-0 luca-right-0 luca-transform luca-translate-x-1/2 -luca-translate-y-1/2">
            {badge}
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
