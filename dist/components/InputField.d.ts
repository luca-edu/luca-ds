import { default as React } from 'react';
import { InputProps } from 'antd';
type FieldStatus = 'default' | 'danger';
interface FieldBaseProps {
    label?: string;
    required?: boolean;
    tooltip?: string;
    helpText?: string;
    message?: React.ReactNode;
    status?: FieldStatus;
    showCounter?: boolean;
    wrapperClassName?: string;
}
export interface InputFieldProps extends FieldBaseProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children' | 'size'> {
    size?: InputProps['size'];
}
export declare const InputField: React.ForwardRefExoticComponent<InputFieldProps & React.RefAttributes<import('rc-input').InputRef>>;
export interface TextAreaFieldProps extends FieldBaseProps, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> {
}
export declare const TextAreaField: React.ForwardRefExoticComponent<TextAreaFieldProps & React.RefAttributes<import('antd/es/input/TextArea').TextAreaRef>>;
export {};
//# sourceMappingURL=InputField.d.ts.map