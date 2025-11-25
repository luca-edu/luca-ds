import { default as React } from 'react';
export type ButtonIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    state?: 'default' | 'selected' | 'hover' | 'disabled';
    outline?: 'default' | 'rounded';
    size?: ButtonIconSize;
    icon?: React.ReactNode;
}
export declare const ButtonIcon: React.ForwardRefExoticComponent<ButtonIconProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=ButtonIcon.d.ts.map