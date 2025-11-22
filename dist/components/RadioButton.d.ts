import { default as React } from '../../node_modules/react';
export type RadioButtonVariant = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export type RadioButtonStyle = 'default' | 'filled';
export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'style'> {
    label?: string;
    variant?: RadioButtonVariant;
    style?: RadioButtonStyle;
    showLabel?: boolean;
    className?: string;
    wrapperClassName?: string;
}
export declare const RadioButton: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<HTMLInputElement>>;
export default RadioButton;
//# sourceMappingURL=RadioButton.d.ts.map