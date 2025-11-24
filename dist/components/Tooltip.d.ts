import { default as React } from 'react';
import { TooltipProps as AntTooltipProps } from 'antd';
export type TooltipVariant = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'white';
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export interface TooltipProps extends Omit<AntTooltipProps, 'title' | 'overlayClassName' | 'placement'> {
    content: string;
    variant?: TooltipVariant;
    placement?: TooltipPlacement;
    className?: string;
    overlayClassName?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
//# sourceMappingURL=Tooltip.d.ts.map