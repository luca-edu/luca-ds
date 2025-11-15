import { default as React } from 'react';
import { TooltipProps as AntTooltipProps } from 'antd';
type Placement = AntTooltipProps['placement'];
export interface TooltipProps extends Omit<AntTooltipProps, 'title' | 'overlayClassName'> {
    content: string;
    className?: string;
    overlayClassName?: string;
    placement?: Placement;
}
export declare const Tooltip: React.FC<TooltipProps>;
export {};
//# sourceMappingURL=Tooltip.d.ts.map