import { default as React } from '../../node_modules/react';
export interface SelectorProps extends React.HTMLAttributes<HTMLDivElement> {
    disabled?: boolean;
}
export declare const Selector: React.ForwardRefExoticComponent<SelectorProps & React.RefAttributes<HTMLDivElement>>;
export interface SelectorLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
}
export declare const SelectorLabel: React.ForwardRefExoticComponent<SelectorLabelProps & React.RefAttributes<HTMLSpanElement>>;
export interface SelectorDetailProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    as?: 'button' | 'span';
}
export declare const SelectorDetail: React.ForwardRefExoticComponent<SelectorDetailProps & React.RefAttributes<HTMLButtonElement | HTMLSpanElement>>;
export interface SelectorActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    iconVariant?: 'plus' | 'minus';
}
export declare const SelectorAction: React.ForwardRefExoticComponent<SelectorActionProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Selector.d.ts.map