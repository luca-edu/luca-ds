import { default as React } from 'react';
import { LayoutHeader } from './LayoutHeader';
export declare const LayoutContent: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export interface LayoutProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
type LayoutType = React.FC<LayoutProps> & {
    Header: typeof LayoutHeader;
    Content: typeof LayoutContent;
};
declare const Layout: LayoutType;
export { Layout };
//# sourceMappingURL=Layout.d.ts.map