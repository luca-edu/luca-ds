import { default as React } from 'react';
export type SidebarVariant = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export interface SidebarSubmenuItem {
    key: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
}
export interface SidebarMenuItem {
    key: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    submenu?: SidebarSubmenuItem[];
    href?: string;
    onClick?: () => void;
}
export interface SidebarProps {
    items: SidebarMenuItem[];
    activeKey?: string;
    onActiveKeyChange?: (key: string) => void;
    variant?: SidebarVariant;
    collapsed?: boolean;
    onCollapseChange?: (collapsed: boolean) => void;
    logo?: React.ReactNode;
    logoIcon?: React.ReactNode;
    logoWidth?: number | string;
    logoHeight?: number | string;
    footer?: React.ReactNode;
    defaultFooter?: boolean;
    footerText?: string;
    className?: string;
    showCollapseButton?: boolean;
}
export declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
//# sourceMappingURL=Sidebar.d.ts.map