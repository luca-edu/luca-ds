import { default as React } from 'react';
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    separator?: React.ReactNode;
}
export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
    href?: string;
    isCurrentPage?: boolean;
    icon?: React.ReactNode;
}
export interface BreadcrumbBackButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
}
export declare const BreadcrumbBackButton: React.ForwardRefExoticComponent<BreadcrumbBackButtonProps & React.RefAttributes<HTMLButtonElement>>;
export declare const BreadcrumbItem: React.ForwardRefExoticComponent<BreadcrumbItemProps & React.RefAttributes<HTMLLIElement>>;
export declare const BreadcrumbSeparator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLLIElement> & React.RefAttributes<HTMLLIElement>>;
type BreadcrumbType = React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>> & {
    Item: typeof BreadcrumbItem;
    Separator: typeof BreadcrumbSeparator;
    BackButton: typeof BreadcrumbBackButton;
};
export declare const Breadcrumb: BreadcrumbType;
export {};
//# sourceMappingURL=Breadcrumb.d.ts.map