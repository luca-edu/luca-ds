import React from 'react';
import { cn } from '../utils/cn';
import type { NotificationVariant } from '../types/variants';
import {
  VARIANT_ICONS,
  VARIANT_TOKENS,
  baseShadow,
  CloseIcon,
} from '../shared/notificationTokens';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: NotificationVariant;
  message: React.ReactNode;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  closeButtonAriaLabel?: string;
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      variant = 'success',
      message,
      icon,
      dismissible = false,
      onDismiss,
      className,
      closeButtonAriaLabel = 'Cerrar notificación',
      ...props
    },
    ref
  ) => {
    const tokens = VARIANT_TOKENS[variant];
    const IconRenderer = VARIANT_ICONS[variant];
    const showIcon = Boolean(icon ?? IconRenderer());

    return (
      <div
        ref={ref}
        role="status"
        className={cn(
          'luca-inline-flex luca-items-center luca-gap-3 luca-rounded-xl luca-px-[18px] luca-py-[15px]',
          tokens.toastBackground,
          tokens.toastTextColor,
          baseShadow,
          className
        )}
        {...props}
      >
        {showIcon && (
          <span
            className={cn(
              'luca-flex luca-h-6 luca-w-6 luca-shrink-0 luca-items-center luca-justify-center luca-rounded-full',
              tokens.iconBackground,
              tokens.iconColor
            )}
            aria-hidden
          >
            {icon ?? <IconRenderer className="luca-h-4 luca-w-4" />}
          </span>
        )}

        <span className="luca-text-sm luca-leading-6">
          {message}
        </span>

        {dismissible && (
          <button
            type="button"
            onClick={onDismiss}
            aria-label={closeButtonAriaLabel}
            className={cn(
              'luca-ml-auto luca-inline-flex luca-h-6 luca-w-6 luca-items-center luca-justify-center luca-rounded-full luca-transition-colors luca-duration-200',
              tokens.closeButtonColor,
              tokens.closeButtonHoverColor,
              'focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-neutral-200'
            )}
          >
            <CloseIcon />
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';

