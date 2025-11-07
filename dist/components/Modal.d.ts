import { default as React } from 'react';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title: string;
    subtitle?: string;
    description?: string;
    cancelButtonText?: string;
    submitButtonText: string;
    closeOnOverlayClick?: boolean;
    closeOnEscape?: boolean;
    className?: string;
    maxWidth?: number | string;
    children?: React.ReactNode;
}
export declare const Modal: React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Modal.d.ts.map