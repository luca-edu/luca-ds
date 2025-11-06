import { default as React } from 'react';
export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    state?: 'default' | 'selected' | 'hover' | 'disabled';
    outline?: 'default' | 'rounded';
    icon?: React.ReactNode;
}
export declare const ButtonIcon: React.ForwardRefExoticComponent<ButtonIconProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=ButtonIcon.d.ts.map