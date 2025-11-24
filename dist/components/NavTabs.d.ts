import { default as React } from 'react';
export type NavTabsVariant = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export type NavTabsStyle = 'default' | 'underline' | 'pills';
export interface NavTabItem {
    key: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
}
export interface NavTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
    items: NavTabItem[];
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    variant?: NavTabsVariant;
    style?: NavTabsStyle | React.CSSProperties;
    fullWidth?: boolean;
    ariaLabel?: string;
}
export declare const NavTabs: React.ForwardRefExoticComponent<NavTabsProps & React.RefAttributes<HTMLDivElement>>;
export default NavTabs;
//# sourceMappingURL=NavTabs.d.ts.map