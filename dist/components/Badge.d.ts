import { default as React } from '../../node_modules/react';
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * Visual variant of the badge
     * @default 'fill'
     */
    variant?: 'fill' | 'outline' | 'duotone';
    /**
     * Color theme of the badge
     * @default 'primary'
     */
    color?: 'primary' | 'secondary' | 'gray' | 'light' | 'warning' | 'danger' | 'success' | 'info';
    /**
     * Border radius style
     * @default 'semi'
     */
    rounded?: 'semi' | 'full';
    /**
     * Show check icon
     * @default false
     */
    showIcon?: boolean;
    /**
     * Badge content
     */
    children: React.ReactNode;
}
export declare const Badge: React.FC<BadgeProps>;
//# sourceMappingURL=Badge.d.ts.map