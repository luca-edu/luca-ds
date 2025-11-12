import { default as React } from 'react';
import { NotificationVariant } from '../types/variants';
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: NotificationVariant;
    message: React.ReactNode;
    icon?: React.ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    closeButtonAriaLabel?: string;
}
export declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Toast.d.ts.map