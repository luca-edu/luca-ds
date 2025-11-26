import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../utils/cn';
import type { NotificationVariant } from '../types/variants';
import { VARIANT_ICONS, VARIANT_TOKENS, baseShadow, CloseIcon } from '../shared/notificationTokens';

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'left-center'
  | 'right-center';

export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onDismiss'> {
  variant?: NotificationVariant;
  message: React.ReactNode;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  closeButtonAriaLabel?: string;
  position?: ToastPosition;
  autoClose?: number | false;
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  className?: string;
  customStyles?: React.CSSProperties;
}

// Componente interno del Toast (sin animaciones)
const ToastContent = React.forwardRef<
  HTMLDivElement,
  Omit<ToastProps, 'position' | 'autoClose' | 'visible' | 'onVisibleChange'>
>(
  (
    {
      variant = 'success',
      message,
      icon,
      dismissible = false,
      onDismiss,
      className,
      customStyles,
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
        style={customStyles}
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

        <span className="luca-text-sm luca-leading-6">{message}</span>

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

ToastContent.displayName = 'ToastContent';

// Mapeo de posiciones a clases de Tailwind
const positionClasses: Record<ToastPosition, string> = {
  'top-left': 'luca-fixed luca-top-4 luca-left-4',
  'top-center': 'luca-fixed luca-top-4 luca-left-1/2 luca-translate-x-[-50%]',
  'top-right': 'luca-fixed luca-top-4 luca-right-4',
  'bottom-left': 'luca-fixed luca-bottom-4 luca-left-4',
  'bottom-center': 'luca-fixed luca-bottom-4 luca-left-1/2 luca-translate-x-[-50%]',
  'bottom-right': 'luca-fixed luca-bottom-4 luca-right-4',
  'left-center': 'luca-fixed luca-left-4 luca-top-1/2 luca-translate-y-[-50%]',
  'right-center': 'luca-fixed luca-right-4 luca-top-1/2 luca-translate-y-[-50%]',
};

// Mapeo de animaciones según posición
const getAnimationClasses = (position: ToastPosition, isVisible: boolean): string => {
  const animationMap: Record<ToastPosition, { enter: string; exit: string }> = {
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
    'left-center': {
      enter: 'luca-animate-[slideInFromLeft_0.3s_ease-out]',
      exit: 'luca-animate-[slideOutToLeft_0.3s_ease-in]',
    },
    'right-center': {
      enter: 'luca-animate-[slideInFromRight_0.3s_ease-out]',
      exit: 'luca-animate-[slideOutToRight_0.3s_ease-in]',
    },
  };

  return isVisible ? animationMap[position].enter : animationMap[position].exit;
};

export const Toast: React.FC<ToastProps> = ({
  position = 'top-right',
  autoClose = false,
  visible: controlledVisible,
  onVisibleChange,
  dismissible = false,
  onDismiss,
  customStyles,
  ...rest
}) => {
  const [internalVisible, setInternalVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const exitTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Determinar si el componente está controlado o no
  const isControlled = controlledVisible !== undefined;
  const visible = isControlled ? controlledVisible : internalVisible;

  // Manejar el cierre con animación
  const handleDismiss = () => {
    setIsExiting(true);

    // Esperar a que termine la animación de salida antes de actualizar el estado
    exitTimeoutRef.current = setTimeout(() => {
      if (isControlled) {
        onVisibleChange?.(false);
        onDismiss?.();
      } else {
        setInternalVisible(false);
        onDismiss?.();
      }
      setIsExiting(false);
    }, 300); // Duración de la animación
  };

  // Efecto para manejar cambios en visible (modo controlado)
  useEffect(() => {
    if (isControlled && !controlledVisible) {
      setIsExiting(true);
      exitTimeoutRef.current = setTimeout(() => {
        setIsExiting(false);
      }, 300);
    } else if (isControlled && controlledVisible) {
      setIsExiting(false);
    }
  }, [isControlled, controlledVisible]);

  // Configurar temporizador automático
  useEffect(() => {
    if (autoClose && typeof autoClose === 'number' && autoClose > 0 && visible && !isExiting) {
      timeoutRef.current = setTimeout(() => {
        handleDismiss();
      }, autoClose);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [autoClose, visible, isExiting]);

  // Limpiar timeouts al desmontar
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }
    };
  }, []);

  const positionClass = positionClasses[position];
  const animationClass = getAnimationClasses(position, !isExiting && visible);

  // No renderizar si no está visible y no está en modo controlado
  if (!visible && !isControlled && !isExiting) {
    return null;
  }

  return (
    <div
      className={cn(
        'luca-z-50',
        visible && !isExiting ? 'luca-pointer-events-auto' : 'luca-pointer-events-none',
        positionClass,
        animationClass
      )}
      style={customStyles}
    >
      <ToastContent {...rest} dismissible={dismissible} onDismiss={handleDismiss} />
    </div>
  );
};

Toast.displayName = 'Toast';

// ==================== API Hook Implementation ====================

export interface ToastApiConfig {
  message: React.ReactNode;
  variant?: NotificationVariant;
  icon?: React.ReactNode;
  dismissible?: boolean;
  position?: ToastPosition;
  autoClose?: number | false;
  closeButtonAriaLabel?: string;
  className?: string;
  customStyles?: React.CSSProperties;
  onDismiss?: () => void;
}

interface ToastInstance extends ToastApiConfig {
  id: string;
  visible: boolean;
}

export type ToastApi = {
  success: (config: ToastApiConfig) => void;
  error: (config: ToastApiConfig) => void;
  warning: (config: ToastApiConfig) => void;
  info: (config: ToastApiConfig) => void;
  open: (config: ToastApiConfig & { variant: NotificationVariant }) => void;
  close: (id: string) => void;
  destroy: () => void;
};

interface ToastContextValue {
  toasts: ToastInstance[];
  addToast: (toast: Omit<ToastInstance, 'id' | 'visible'>) => string;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

const useToastContext = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast debe usarse dentro de ToastProvider');
  }
  return context;
};

// Provider para manejar el estado global de toasts
const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastInstance[]>([]);

  const addToast = React.useCallback((toast: Omit<ToastInstance, 'id' | 'visible'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast: ToastInstance = {
      ...toast,
      id,
      visible: true,
    };
    setToasts((prev) => [...prev, newToast]);
    return id;
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearAll = React.useCallback(() => {
    setToasts([]);
  }, []);

  const value = React.useMemo(
    () => ({
      toasts,
      addToast,
      removeToast,
      clearAll,
    }),
    [toasts, addToast, removeToast, clearAll]
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};

// Componente ToastItem para usar dentro del context holder (sin posición fija)
const ToastItem: React.FC<{
  toast: ToastInstance;
  onDismiss: (id: string) => void;
  onRemove: (id: string) => void;
}> = ({ toast, onDismiss, onRemove }) => {
  const [isExiting, setIsExiting] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const exitTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleDismiss = React.useCallback(() => {
    setIsExiting(true);
    exitTimeoutRef.current = setTimeout(() => {
      onRemove(toast.id);
      onDismiss(toast.id);
      setIsExiting(false);
    }, 300);
  }, [toast.id, onDismiss, onRemove]);

  React.useEffect(() => {
    if (
      toast.autoClose &&
      typeof toast.autoClose === 'number' &&
      toast.autoClose > 0 &&
      toast.visible &&
      !isExiting
    ) {
      timeoutRef.current = setTimeout(() => {
        handleDismiss();
      }, toast.autoClose);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [toast.autoClose, toast.visible, isExiting, handleDismiss]);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }
    };
  }, []);

  if (!toast.visible && !isExiting) {
    return null;
  }

  const animationClass = getAnimationClasses(
    toast.position || 'top-right',
    !isExiting && toast.visible
  );

  return (
    <div
      className={cn(
        'luca-relative',
        toast.visible && !isExiting ? 'luca-pointer-events-auto' : 'luca-pointer-events-none',
        animationClass
      )}
    >
      <ToastContent
        variant={toast.variant}
        message={toast.message}
        icon={toast.icon}
        dismissible={toast.dismissible ?? false}
        closeButtonAriaLabel={toast.closeButtonAriaLabel}
        className={toast.className}
        customStyles={toast.customStyles}
        onDismiss={handleDismiss}
      />
    </div>
  );
};

// Componente que renderiza todos los toasts agrupados por posición
const ToastContextHolder: React.FC = () => {
  const context = useToastContext();
  const { toasts, removeToast } = context;

  // Agrupar toasts por posición
  const toastsByPosition = React.useMemo(() => {
    const grouped: Record<ToastPosition, ToastInstance[]> = {
      'top-left': [],
      'top-center': [],
      'top-right': [],
      'bottom-left': [],
      'bottom-center': [],
      'bottom-right': [],
      'left-center': [],
      'right-center': [],
    };

    toasts.forEach((toast) => {
      const position = toast.position || 'top-right';
      grouped[position].push(toast);
    });

    return grouped;
  }, [toasts]);

  const handleDismiss = React.useCallback(
    (id: string) => {
      const toast = toasts.find((t) => t.id === id);
      toast?.onDismiss?.();
    },
    [toasts]
  );

  return (
    <>
      {Object.entries(toastsByPosition).map(([position, positionToasts]) => {
        if (positionToasts.length === 0) return null;

        const positionKey = position as ToastPosition;
        const basePositionClass = positionClasses[positionKey];

        return (
          <div
            key={position}
            className={cn('luca-fixed luca-z-50 luca-flex luca-flex-col', basePositionClass)}
            style={{
              gap: '0.5rem',
            }}
          >
            {positionToasts.map((toast) => (
              <ToastItem
                key={toast.id}
                toast={toast}
                onDismiss={handleDismiss}
                onRemove={removeToast}
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
export const useToast = (): [ToastApi, React.ReactElement] => {
  const [toasts, setToasts] = React.useState<ToastInstance[]>([]);

  const addToast = React.useCallback((toast: Omit<ToastInstance, 'id' | 'visible'>) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast: ToastInstance = {
      ...toast,
      id,
      visible: true,
    };
    setToasts((prev) => [...prev, newToast]);
    return id;
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearAll = React.useCallback(() => {
    setToasts([]);
  }, []);

  const api = React.useMemo<ToastApi>(
    () => ({
      success: (config: ToastApiConfig) => {
        addToast({ ...config, variant: 'success' });
      },
      error: (config: ToastApiConfig) => {
        addToast({ ...config, variant: 'danger' });
      },
      warning: (config: ToastApiConfig) => {
        addToast({ ...config, variant: 'warning' });
      },
      info: (config: ToastApiConfig) => {
        addToast({ ...config, variant: 'info' });
      },
      open: (config: ToastApiConfig & { variant: NotificationVariant }) => {
        addToast(config);
      },
      close: (id: string) => {
        removeToast(id);
      },
      destroy: () => {
        clearAll();
      },
    }),
    [addToast, removeToast, clearAll]
  );

  // Crear el valor del contexto
  const contextValue = React.useMemo<ToastContextValue>(
    () => ({
      toasts,
      addToast,
      removeToast,
      clearAll,
    }),
    [toasts, addToast, removeToast, clearAll]
  );

  // El contextHolder incluye el provider y el holder
  const contextHolder = (
    <ToastContext.Provider value={contextValue}>
      <ToastContextHolder />
    </ToastContext.Provider>
  );

  return [api, contextHolder];
};

// Función helper para crear el hook con provider
export const toast = {
  useToast: () => {
    return useToast();
  },
};

// Exportar el provider para que se use en la raíz de la app
export { ToastProvider };
