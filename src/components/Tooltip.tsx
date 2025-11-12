import React from 'react';
import {
  Tooltip as AntTooltip,
  type TooltipProps as AntTooltipProps,
} from 'antd';
import { cn } from '../utils/cn';

type Placement = AntTooltipProps['placement'];

export interface TooltipProps
  extends Omit<AntTooltipProps, 'title' | 'overlayClassName'> {
  content: string;
  className?: string;
  overlayClassName?: string;
  placement?: Placement;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  className,
  overlayClassName,
  placement = 'top',
  ...rest
}) => {
  return (
    <AntTooltip
      placement={placement}
      title={content}
      overlayClassName={cn('luca-tooltip-overlay', overlayClassName)}
      overlayInnerStyle={{
        borderRadius: 8,
        backgroundColor: '#111827',
        color: '#ffffff',
        padding: '8px 12px',
        fontSize: 12,
        fontWeight: 500,
        lineHeight: '18px',
        boxShadow:
          '0px 4px 6px -1px rgba(15, 23, 42, 0.15), 0px 2px 4px -2px rgba(15, 23, 42, 0.1)',
      }}
      {...rest}
    >
      <span className={cn('luca-inline-flex luca-items-center', className)}>
        {children}
      </span>
    </AntTooltip>
  );
};

Tooltip.displayName = 'Tooltip';
