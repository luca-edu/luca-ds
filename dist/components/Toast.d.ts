import { default as React } from '../../node_modules/react';
import { NotificationVariant } from '../types/variants';
export type ToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'left-center' | 'right-center';
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
}
export declare const Toast: React.FC<ToastProps>;
//# sourceMappingURL=Toast.d.ts.map