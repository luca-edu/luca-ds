import { default as React } from '../../node_modules/react';
export type CheckboxVariant = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export type CheckboxStyle = 'default' | 'filled';
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size' | 'style'> {
    label?: string;
    variant?: CheckboxVariant;
    style?: CheckboxStyle;
    showLabel?: boolean;
    indeterminate?: boolean;
    className?: string;
    wrapperClassName?: string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
//# sourceMappingURL=Checkbox.d.ts.map