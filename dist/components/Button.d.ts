import { default as React } from '../../node_modules/react';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonState = 'alert' | 'default';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    state?: ButtonState;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    children: React.ReactNode;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map