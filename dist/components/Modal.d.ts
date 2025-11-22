import { default as React } from '../../node_modules/react';
interface ButtonProps {
    text: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'tertiary';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    buttons?: ButtonProps[];
    title: string;
    subtitle?: string;
    description?: string;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    className?: string;
    maxWidth?: number | string;
    children?: React.ReactNode;
}
export declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Modal.d.ts.map