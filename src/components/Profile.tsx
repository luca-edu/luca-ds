import React from 'react';
import { cn } from '../utils/cn';
import { Avatar, AvatarProps } from './Avatar';
import { Tooltip } from './Tooltip';

export type ProfileVariant =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type ProfileSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ProfileState = 'default' | 'hover' | 'disabled';

export interface ProfileProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Color variant of the profile
   * @default 'primary'
   */
  variant?: ProfileVariant;

  /**
   * Size of the profile
   * @default 'md'
   */
  size?: ProfileSize;

  /**
   * State of the profile
   * @default 'default'
   */
  state?: ProfileState;

  /**
   * Name to display
   */
  name?: string;

  /**
   * Subtitle or secondary text (e.g., class, grade)
   */
  subtitle?: string;

  /**
   * Avatar props - can pass any Avatar props
   */
  avatar?: AvatarProps;

  /**
   * Whether the profile is clickable
   * @default false
   */
  clickable?: boolean;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Collapsed state of the profile
   * @default false
   */
  collapsed?: boolean;

  /**
   * useTooltip prop to show tooltip
   */
  useTooltip?: boolean;
}

const profileSizeStyles: Record<
  ProfileSize,
  {
    containerPadding: string;
    gap: string;
    avatarSize: AvatarProps['size'];
    nameSize: string;
    subtitleSize: string;
    borderRadius: string;
  }
> = {
  xs: {
    containerPadding: 'luca-p-1',
    gap: 'luca-gap-1.5',
    avatarSize: 'xs',
    nameSize: 'luca-text-xs',
    subtitleSize: 'luca-text-xs',
    borderRadius: 'luca-rounded-md',
  },
  sm: {
    containerPadding: 'luca-p-1.5',
    gap: 'luca-gap-2',
    avatarSize: 'sm',
    nameSize: 'luca-text-sm',
    subtitleSize: 'luca-text-xs',
    borderRadius: 'luca-rounded-lg',
  },
  md: {
    containerPadding: 'luca-p-2',
    gap: 'luca-gap-2',
    avatarSize: 'md',
    nameSize: 'luca-text-lg',
    subtitleSize: 'luca-text-lg',
    borderRadius: 'luca-rounded-lg',
  },
  lg: {
    containerPadding: 'luca-p-2.5',
    gap: 'luca-gap-3',
    avatarSize: 'lg',
    nameSize: 'luca-text-xl',
    subtitleSize: 'luca-text-lg',
    borderRadius: 'luca-rounded-lg',
  },
  xl: {
    containerPadding: 'luca-p-3',
    gap: 'luca-gap-3',
    avatarSize: 'xl',
    nameSize: 'luca-text-2xl',
    subtitleSize: 'luca-text-xl',
    borderRadius: 'luca-rounded-xl',
  },
};

const profileVariantHoverStyles: Record<ProfileVariant, string> = {
  primary: 'hover:luca-bg-primary-50',
  neutral: 'hover:luca-bg-neutral-50',
  accent: 'hover:luca-bg-accent-50',
  success: 'hover:luca-bg-success-50',
  warning: 'hover:luca-bg-warning-50',
  danger: 'hover:luca-bg-danger-50',
  info: 'hover:luca-bg-info-50',
};

const profileVariantActiveStyles: Record<ProfileVariant, string> = {
  primary: 'luca-bg-primary-50',
  neutral: 'luca-bg-neutral-50',
  accent: 'luca-bg-accent-50',
  success: 'luca-bg-success-50',
  warning: 'luca-bg-warning-50',
  danger: 'luca-bg-danger-50',
  info: 'luca-bg-info-50',
};

export const Profile = React.forwardRef<HTMLDivElement, ProfileProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      state = 'default',
      name,
      subtitle,
      avatar,
      clickable = false,
      onClick,
      className,
      collapsed = false,
      useTooltip = false,
      ...props
    },
    ref
  ) => {
    const isDisabled = state === 'disabled';
    const isHover = state === 'hover';
    const sizeStyles = profileSizeStyles[size];

    // Default avatar props based on variant
    const defaultAvatarProps: AvatarProps = {
      variant,
      size: sizeStyles.avatarSize,
      state: isDisabled ? 'disabled' : 'default',
      type: 'text',
      ...avatar,
    };

    // Generate avatar text from name if not provided
    if (!avatar?.text && !avatar?.name && name) {
      defaultAvatarProps.name = name;
    }

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
          'luca-flex luca-items-center luca-w-full luca-transition-colors luca-duration-200',
          sizeStyles.containerPadding,
          sizeStyles.gap,
          sizeStyles.borderRadius,
          isHover && profileVariantActiveStyles[variant],
          clickable && !isDisabled && !isHover && profileVariantHoverStyles[variant],
          clickable && !isDisabled && 'luca-cursor-pointer',
          isDisabled && 'luca-opacity-50 luca-cursor-not-allowed',
          className
        )}
        {...props}
      >
        <div className="luca-shrink-0">
          {collapsed && useTooltip ? (
            <Tooltip content={name ?? ''} variant="primary" placement="right">
              <Avatar {...defaultAvatarProps} />
            </Tooltip>
          ) : (
            <Avatar {...defaultAvatarProps} />
          )}
        </div>
        {!collapsed && (name || subtitle) && (
          <div className="luca-flex luca-flex-col luca-justify-center luca-min-w-0 luca-flex-1 luca-gap-[4px]">
            {name && (
              <p
                className={cn(
                  'luca-font-semibold luca-leading-tight luca-whitespace-nowrap luca-truncate',
                  sizeStyles.nameSize,
                  isDisabled ? 'luca-text-neutral-400' : 'luca-text-neutral-900'
                )}
              >
                {name}
              </p>
            )}
            {subtitle && (
              <p
                className={cn(
                  'luca-font-normal luca-leading-tight luca-whitespace-nowrap luca-truncate',
                  sizeStyles.subtitleSize,
                  isDisabled ? 'luca-text-neutral-400' : 'luca-text-neutral-500'
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Profile.displayName = 'Profile';
