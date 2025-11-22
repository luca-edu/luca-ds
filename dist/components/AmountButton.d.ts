import { default as React } from '../../node_modules/react';
export type AmountButtonVariant = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export interface AmountButtonProps {
    value: number;
    onChange?: (value: number) => void;
    variant?: AmountButtonVariant;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    allowManualInput?: boolean;
    className?: string;
    buttonClassName?: string;
    displayClassName?: string;
}
export declare const AmountButton: React.FC<AmountButtonProps>;
export default AmountButton;
//# sourceMappingURL=AmountButton.d.ts.map