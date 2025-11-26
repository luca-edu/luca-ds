import React from 'react';
import { cn } from '../utils/cn';
import type { NotificationVariant } from '../types/variants';
import {
  VARIANT_NOTIFICATION_ICONS,
  VARIANT_TOKENS,
  baseShadow,
  CloseIcon,
} from '../shared/notificationTokens';

type NotificationContextValue = {
  variant: NotificationVariant;
};

const NotificationContext = React.createContext<NotificationContextValue | null>(null);

const useNotificationContext = () => {
  const context = React.useContext(NotificationContext);

  if (!context) {
    throw new Error(
      'Los componentes compuestos de Notification deben usarse dentro de <Notification>.'
    );
  }

  return context;
};

export type NotificationPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: NotificationVariant;
  title?: string;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  hideIcon?: boolean;
  closeButtonAriaLabel?: string;
  floating?: boolean;
  position?: NotificationPosition;
  autoClose?: number;
  maxWidth?: string;
}

const getPositionClasses = (position: NotificationPosition): string => {
  const positionMap: Record<NotificationPosition, string> = {
    'top-left': 'luca-top-4 luca-left-4',
    'top-center': 'luca-top-4 luca-left-1/2 -luca-translate-x-1/2',
    'top-right': 'luca-top-4 luca-right-4',
    'bottom-left': 'luca-bottom-4 luca-left-4',
    'bottom-center': 'luca-bottom-4 luca-left-1/2 -luca-translate-x-1/2',
    'bottom-right': 'luca-bottom-4 luca-right-4',
  };
  return positionMap[position];
};

const getAnimationClasses = (position: NotificationPosition, isExiting: boolean): string => {
  // Determinar la dirección de la animación según la posición
  const animationMap: Record<NotificationPosition, { enter: string; exit: string }> = {
    'top-left': {
      enter: 'luca-animate-[slideInFromLeft_0.3s_ease-out]',
      exit: 'luca-animate-[slideOutToLeft_0.3s_ease-in]',
    },
    'top-center': {
      enter: 'luca-animate-[slideInFromTop_0.3s_ease-out]',
      exit: 'luca-animate-[slideOutToTop_0.3s_ease-in]',
    },
    'top-right': {
      enter: 'luca-animate-[slideInFromRight_0.3s_ease-out]',
      exit: 'luca-animate-[slideOutToRight_0.3s_ease-in]',
    },
    'bottom-left': {
      enter: 'luca-animate-[slideInFromLeft_0.3s_ease-out]',
      exit: 'luca-animate-[slideOutToLeft_0.3s_ease-in]',
    },
    'bottom-center': {
      enter: 'luca-animate-[slideInFromBottom_0.3s_ease-out]',
      exit: 'luca-animate-[slideOutToBottom_0.3s_ease-in]',
    },
    'bottom-right': {
      enter: 'luca-animate-[slideInFromRight_0.3s_ease-out]',
      exit: 'luca-animate-[slideOutToRight_0.3s_ease-in]',
    },
  };

  return isExiting ? animationMap[position].exit : animationMap[position].enter;
};

export const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      variant = 'success',
      title,
      description,
      actions,
      icon,
      dismissible = true,
      onDismiss,
      children,
      hideIcon = false,
      className,
      closeButtonAriaLabel = 'Cerrar notificación',
      floating = false,
      position = 'top-right',
      autoClose,
      maxWidth,
      ...props
    },
    ref
  ) => {
    const tokens = VARIANT_TOKENS[variant];
    const IconRenderer = VARIANT_NOTIFICATION_ICONS[variant];
    const showIcon = !hideIcon && Boolean(icon ?? IconRenderer());
    const [isExiting, setIsExiting] = React.useState(false);

    const handleDismiss = React.useCallback(() => {
      if (floating) {
        setIsExiting(true);
        // Esperar a que termine la animación antes de llamar onDismiss
        setTimeout(() => {
          onDismiss?.();
        }, 300); // Duración de la animación
      } else {
        onDismiss?.();
      }
    }, [floating, onDismiss]);

    React.useEffect(() => {
      if (autoClose && onDismiss) {
        const timer = setTimeout(() => {
          handleDismiss();
        }, autoClose);

        return () => clearTimeout(timer);
      }
    }, [autoClose, onDismiss, handleDismiss]);

    return (
      <NotificationContext.Provider value={{ variant }}>
        <div
          ref={ref}
          role="alert"
          className={cn(
            'luca-flex luca-items-start luca-gap-4 luca-rounded-2xl luca-bg-white luca-p-4 luca-transition-colors luca-duration-200',
            baseShadow,
            floating
              ? `luca-fixed luca-z-50 ${getPositionClasses(position)} ${getAnimationClasses(position, isExiting)}`
              : 'luca-relative luca-w-full',
            className
          )}
          style={maxWidth ? { maxWidth, ...props.style } : props.style}
          {...props}
        >
          {showIcon && (
            <span
              className={cn(
                'luca-flex luca-h-[34px] luca-w-[34px] luca-shrink-0 luca-items-center luca-justify-center luca-rounded-lg',
                tokens.iconBackground,
                tokens.iconColor
              )}
              aria-hidden
            >
              {icon ?? <IconRenderer />}
            </span>
          )}

          <div className="luca-flex luca-min-w-0 luca-flex-1 luca-flex-col luca-gap-4">
            {(title || description || children) && (
              <div
                className={cn(
                  'luca-flex luca-flex-col luca-gap-1 luca-text-sm luca-leading-6',
                  tokens.descriptionColor
                )}
              >
                {title && <p className={cn('luca-font-medium', tokens.titleColor)}>{title}</p>}

                {(description ?? children) && (
                  <p className="luca-text-sm luca-leading-6 luca-text-inherit">
                    {description ?? children}
                  </p>
                )}
              </div>
            )}

            {actions && (
              <div className="luca-flex luca-flex-wrap luca-gap-5 luca-text-sm luca-leading-[22px]">
                {actions}
              </div>
            )}
          </div>

          {dismissible && (
            <button
              type="button"
              onClick={handleDismiss}
              aria-label={closeButtonAriaLabel}
              className={cn(
                'luca-absolute luca-right-4 luca-top-4 luca-inline-flex luca-h-6 luca-w-6 luca-items-center luca-justify-center luca-rounded-full luca-transition-colors luca-duration-200',
                tokens.closeButtonColor,
                tokens.closeButtonHoverColor,
                'focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-neutral-200'
              )}
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </NotificationContext.Provider>
    );
  }
);

Notification.displayName = 'Notification';

export type NotificationActionsProps = React.HTMLAttributes<HTMLDivElement>;

export const NotificationActions = React.forwardRef<HTMLDivElement, NotificationActionsProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'luca-flex luca-flex-wrap luca-gap-5 luca-text-sm luca-leading-[22px]',
          className
        )}
        {...props}
      />
    );
  }
);

NotificationActions.displayName = 'NotificationActions';

export type NotificationActionVariant = 'primary' | 'secondary';

export interface NotificationActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  actionVariant?: NotificationActionVariant;
}

export const NotificationAction = React.forwardRef<HTMLButtonElement, NotificationActionProps>(
  ({ actionVariant = 'primary', className, type = 'button', ...props }, ref) => {
    const { variant } = useNotificationContext();
    const tokens = VARIANT_TOKENS[variant];

    const actionVariantClasses =
      actionVariant === 'primary' ? tokens.primaryActionColor : tokens.secondaryActionColor;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'luca-inline-flex luca-items-center luca-gap-2 luca-rounded luca-border-none luca-bg-transparent luca-p-0 luca-text-sm luca-font-medium luca-leading-[22px] luca-transition-colors luca-duration-200',
          actionVariantClasses,
          'hover:luca-underline focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-neutral-200',
          className
        )}
        {...props}
      />
    );
  }
);

NotificationAction.displayName = 'NotificationAction';

export type { NotificationVariant } from '../types/variants';

// ==================== API Hook Implementation ====================

export interface NotificationApiConfig {
  title?: string;
  description?: React.ReactNode;
  variant?: NotificationVariant;
  icon?: React.ReactNode;
  dismissible?: boolean;
  position?: NotificationPosition;
  autoClose?: number;
  hideIcon?: boolean;
  closeButtonAriaLabel?: string;
  maxWidth?: string;
  actions?: React.ReactNode;
  className?: string;
  onDismiss?: () => void;
}

interface NotificationInstance extends NotificationApiConfig {
  id: string;
  visible: boolean;
}

export type NotificationApi = {
  success: (config: NotificationApiConfig) => void;
  error: (config: NotificationApiConfig) => void;
  warning: (config: NotificationApiConfig) => void;
  info: (config: NotificationApiConfig) => void;
  open: (config: NotificationApiConfig & { variant: NotificationVariant }) => void;
  close: (id: string) => void;
  destroy: () => void;
};

interface NotificationContextApiValue {
  notifications: NotificationInstance[];
  addNotification: (notification: Omit<NotificationInstance, 'id' | 'visible'>) => string;
  removeNotification: (id: string) => void;
  clearAll: () => void;
}

const NotificationContextApi = React.createContext<NotificationContextApiValue | null>(null);

const useNotificationContextApi = () => {
  const context = React.useContext(NotificationContextApi);
  if (!context) {
    throw new Error('useNotification debe usarse dentro de NotificationProvider');
  }
  return context;
};

// Provider para manejar el estado global de notificaciones
const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = React.useState<NotificationInstance[]>([]);

  const addNotification = React.useCallback(
    (notification: Omit<NotificationInstance, 'id' | 'visible'>) => {
      const id = `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const newNotification: NotificationInstance = {
        ...notification,
        id,
        visible: true,
      };
      setNotifications((prev) => [...prev, newNotification]);
      return id;
    },
    []
  );

  const removeNotification = React.useCallback((id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  }, []);

  const clearAll = React.useCallback(() => {
    setNotifications([]);
  }, []);

  const value = React.useMemo(
    () => ({
      notifications,
      addNotification,
      removeNotification,
      clearAll,
    }),
    [notifications, addNotification, removeNotification, clearAll]
  );

  return (
    <NotificationContextApi.Provider value={value}>{children}</NotificationContextApi.Provider>
  );
};

// Componente NotificationItem para usar dentro del context holder (sin posición fija)
const NotificationItem: React.FC<{
  notification: NotificationInstance;
  onDismiss: (id: string) => void;
  onRemove: (id: string) => void;
}> = ({ notification, onDismiss, onRemove }) => {
  const [isExiting, setIsExiting] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleDismiss = React.useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      onRemove(notification.id);
      onDismiss(notification.id);
      setIsExiting(false);
    }, 300);
  }, [notification.id, onDismiss, onRemove]);

  React.useEffect(() => {
    if (notification.autoClose && notification.visible && !isExiting) {
      timeoutRef.current = setTimeout(() => {
        handleDismiss();
      }, notification.autoClose);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [notification.autoClose, notification.visible, isExiting, handleDismiss]);

  if (!notification.visible && !isExiting) {
    return null;
  }

  const animationClass = getAnimationClasses(notification.position || 'top-right', isExiting);

  return (
    <div
      className={cn('luca-relative', animationClass)}
      style={{
        maxWidth: notification.maxWidth,
      }}
    >
      <Notification
        variant={notification.variant}
        title={notification.title}
        description={notification.description}
        icon={notification.icon}
        dismissible={notification.dismissible ?? true}
        hideIcon={notification.hideIcon}
        closeButtonAriaLabel={notification.closeButtonAriaLabel}
        floating={true}
        position={notification.position}
        maxWidth={notification.maxWidth}
        actions={notification.actions}
        className={notification.className}
        onDismiss={handleDismiss}
      />
    </div>
  );
};

// Componente que renderiza todas las notificaciones agrupadas por posición
const NotificationContextHolder: React.FC = () => {
  const { notifications, removeNotification } = useNotificationContextApi();

  // Agrupar notificaciones por posición
  const notificationsByPosition = React.useMemo(() => {
    const grouped: Record<NotificationPosition, NotificationInstance[]> = {
      'top-left': [],
      'top-center': [],
      'top-right': [],
      'bottom-left': [],
      'bottom-center': [],
      'bottom-right': [],
    };

    notifications.forEach((notification) => {
      const position = notification.position || 'top-right';
      grouped[position].push(notification);
    });

    return grouped;
  }, [notifications]);

  const handleDismiss = React.useCallback(
    (id: string) => {
      const notification = notifications.find((n) => n.id === id);
      notification?.onDismiss?.();
    },
    [notifications]
  );

  return (
    <>
      {Object.entries(notificationsByPosition).map(([position, positionNotifications]) => {
        if (positionNotifications.length === 0) return null;

        const positionKey = position as NotificationPosition;
        const basePositionClass = getPositionClasses(positionKey);

        return (
          <div
            key={position}
            className={cn('luca-fixed luca-z-50 luca-flex luca-flex-col', basePositionClass)}
            style={{
              gap: '0.5rem',
            }}
          >
            {positionNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
                onDismiss={handleDismiss}
                onRemove={removeNotification}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

// Hook principal que retorna [api, contextHolder]
// Este hook crea su propio provider interno
export const useNotification = (): [NotificationApi, React.ReactElement] => {
  const [notifications, setNotifications] = React.useState<NotificationInstance[]>([]);

  const addNotification = React.useCallback(
    (notification: Omit<NotificationInstance, 'id' | 'visible'>) => {
      const id = `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const newNotification: NotificationInstance = {
        ...notification,
        id,
        visible: true,
      };
      setNotifications((prev) => [...prev, newNotification]);
      return id;
    },
    []
  );

  const removeNotification = React.useCallback((id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  }, []);

  const clearAll = React.useCallback(() => {
    setNotifications([]);
  }, []);

  const api = React.useMemo<NotificationApi>(
    () => ({
      success: (config: NotificationApiConfig) => {
        addNotification({ ...config, variant: 'success' });
      },
      error: (config: NotificationApiConfig) => {
        addNotification({ ...config, variant: 'danger' });
      },
      warning: (config: NotificationApiConfig) => {
        addNotification({ ...config, variant: 'warning' });
      },
      info: (config: NotificationApiConfig) => {
        addNotification({ ...config, variant: 'info' });
      },
      open: (config: NotificationApiConfig & { variant: NotificationVariant }) => {
        addNotification(config);
      },
      close: (id: string) => {
        removeNotification(id);
      },
      destroy: () => {
        clearAll();
      },
    }),
    [addNotification, removeNotification, clearAll]
  );

  // Crear el valor del contexto
  const contextValue = React.useMemo<NotificationContextApiValue>(
    () => ({
      notifications,
      addNotification,
      removeNotification,
      clearAll,
    }),
    [notifications, addNotification, removeNotification, clearAll]
  );

  // El contextHolder incluye el provider y el holder
  const contextHolder = (
    <NotificationContextApi.Provider value={contextValue}>
      <NotificationContextHolder />
    </NotificationContextApi.Provider>
  );

  return [api, contextHolder];
};

// Función helper para crear el hook con provider
export const notification = {
  useNotification: () => {
    return useNotification();
  },
};

// Exportar el provider para que se use en la raíz de la app
export { NotificationProvider };
