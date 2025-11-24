import { default as React } from 'react';
export interface EmptyStateCardProps extends React.HTMLAttributes<HTMLDivElement> {
    illustrationSrc?: string;
    illustrationAlt?: string;
    title?: string;
    description?: string;
    footer?: React.ReactNode;
    compact?: boolean;
}
export declare const EmptyStateCard: React.ForwardRefExoticComponent<EmptyStateCardProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=EmptyStateCard.d.ts.map