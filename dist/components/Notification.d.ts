import { default as React } from 'react';
import { NotificationVariant } from '../types/variants';
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
}
export declare const Notification: React.ForwardRefExoticComponent<NotificationProps & React.RefAttributes<HTMLDivElement>>;
export interface NotificationActionsProps extends React.HTMLAttributes<HTMLDivElement> {
}
export declare const NotificationActions: React.ForwardRefExoticComponent<NotificationActionsProps & React.RefAttributes<HTMLDivElement>>;
export type NotificationActionVariant = 'primary' | 'secondary';
export interface NotificationActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    actionVariant?: NotificationActionVariant;
}
export declare const NotificationAction: React.ForwardRefExoticComponent<NotificationActionProps & React.RefAttributes<HTMLButtonElement>>;
export type { NotificationVariant } from '../types/variants';
//# sourceMappingURL=Notification.d.ts.map