import { default as React } from '../../node_modules/react';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    align?: 'center' | 'start';
    interactive?: boolean;
    icon?: React.ReactNode;
    iconSrc?: string;
    iconAlt?: string;
    iconSize?: 'md' | 'lg';
    iconClassName?: string;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}
export declare const CardTitle: React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLHeadingElement>>;
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}
export declare const CardDescription: React.ForwardRefExoticComponent<CardDescriptionProps & React.RefAttributes<HTMLParagraphElement>>;
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const CardContent: React.ForwardRefExoticComponent<CardContentProps & React.RefAttributes<HTMLDivElement>>;
export interface CardIconProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    size?: 'md' | 'lg';
}
export declare const CardIcon: React.ForwardRefExoticComponent<CardIconProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Card.d.ts.map