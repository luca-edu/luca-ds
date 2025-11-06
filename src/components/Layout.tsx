import React from 'react';
import { cn } from '../utils/cn';
import { LayoutHeader } from './LayoutHeader';
// Subcomponente para el contenido
export const LayoutContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div
    className={cn(
      'luca-w-full luca-mx-auto luca-relative luca-min-h-[calc(100vh-280px)]',
      className
    )}
    {...props}
  >
    {children}
  </div>
);
LayoutContent.displayName = 'LayoutContent';

export interface LayoutProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

type LayoutType = React.FC<LayoutProps> & {
  Header: typeof LayoutHeader;
  Content: typeof LayoutContent;
};

const Layout: LayoutType = ({ className, style, children }) => {
  return (
    <div className={cn('luca-bg-[#F9FAFB]', className)} style={style}>
      {children}
    </div>
  );
};

Layout.displayName = 'Layout';
Layout.Header = LayoutHeader;
Layout.Content = LayoutContent;

export { Layout };
