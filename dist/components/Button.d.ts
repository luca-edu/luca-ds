import { default as React } from 'react';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonState = 'alert' | 'default';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    state?: ButtonState;
    size?: ButtonSize;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children: React.ReactNode;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map