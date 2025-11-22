import React from 'react';
import {
  Tooltip as AntTooltip,
  type TooltipProps as AntTooltipProps,
} from 'antd';
import { cn } from '../utils/cn';

export type TooltipVariant =
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral'
  | 'white';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

type Placement = AntTooltipProps['placement'];

export interface TooltipProps
  extends Omit<AntTooltipProps, 'title' | 'overlayClassName' | 'placement'> {
  content: string;
  variant?: TooltipVariant;
  placement?: TooltipPlacement;
  className?: string;
  overlayClassName?: string;
}

const variantColors: Record<TooltipVariant, { bg: string; text: string; arrow: string }> = {
  primary: {
    bg: 'luca-bg-primary-600',
    text: 'luca-text-white',
    arrow: 'luca-fill-primary-600',
  },
  accent: {
    bg: 'luca-bg-accent-600',
    text: 'luca-text-white',
    arrow: 'luca-fill-accent-600',
  },
  success: {
    bg: 'luca-bg-success-600',
    text: 'luca-text-white',
    arrow: 'luca-fill-success-600',
  },
  warning: {
    bg: 'luca-bg-warning-600',
    text: 'luca-text-white',
    arrow: 'luca-fill-warning-600',
  },
  danger: {
    bg: 'luca-bg-danger-600',
    text: 'luca-text-white',
    arrow: 'luca-fill-danger-600',
  },
  info: {
    bg: 'luca-bg-info-600',
    text: 'luca-text-white',
    arrow: 'luca-fill-info-600',
  },
  neutral: {
    bg: 'luca-bg-neutral-900',
    text: 'luca-text-white',
    arrow: 'luca-fill-neutral-900',
  },
  white: {
    bg: 'luca-bg-white',
    text: 'luca-text-neutral-500',
    arrow: 'luca-fill-white',
  },
};

// Función para obtener el color del arrow según la variante
const getArrowColor = (variant: TooltipVariant): string => {
  const colors: Record<TooltipVariant, string> = {
    primary: '#3843d0',
    accent: '#ffba31',
    success: '#16a34a',
    warning: '#d97706',
    danger: '#dc2626',
    info: '#0284c7',
    neutral: '#111827',
    white: '#ffffff',
  };
  return colors[variant];
};

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  variant = 'primary',
  placement = 'top',
  className,
  overlayClassName,
  ...rest
}) => {
  const colors = variantColors[variant];
  const arrowColor = getArrowColor(variant);
  const hasShadow = variant === 'white';

  // Mapear placement a formato de Ant Design
  const antPlacement: Placement = placement;

  // Generar el SVG del arrow según la posición
  const getArrowSVG = (position: TooltipPlacement) => {
    switch (position) {
      case 'top':
        return (
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="luca-absolute luca-bottom-[-7px] luca-left-1/2 luca-translate-x-[-50%]"
          >
            <path d="M6 7L0 0H12L6 7Z" fill={arrowColor} />
          </svg>
        );
      case 'bottom':
        return (
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="luca-absolute luca-top-[-7px] luca-left-1/2 luca-translate-x-[-50%] luca-rotate-180"
          >
            <path d="M6 7L0 0H12L6 7Z" fill={arrowColor} />
          </svg>
        );
      case 'left':
        return (
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="luca-absolute luca-right-[-7px] luca-top-1/2 luca-translate-y-[-50%] luca-rotate-180"
          >
            <path
              d="M0 6L7 0V12L0 6Z"
              fill={arrowColor}
            />
          </svg>
        );
      case 'right':
        return (
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="luca-absolute luca-left-[-7px] luca-top-1/2 luca-translate-y-[-50%] luca-rotate-180"
          >
            <path
              d="M7 6L0 0V12L7 6Z"
              fill={arrowColor}
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <AntTooltip
      placement={antPlacement}
      title={
        <div className="luca-relative">
          <div
            className={cn(
              'luca-flex luca-items-center luca-justify-center luca-px-[14px] luca-py-[5px] luca-rounded-[5px]',
              colors.bg,
              colors.text,
              hasShadow && 'luca-shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)]'
            )}
          >
            <p className='luca-font-["Poppins"] luca-font-normal luca-text-sm luca-leading-5 luca-text-center luca-whitespace-nowrap'>
              {content}
            </p>
          </div>
          {getArrowSVG(placement)}
        </div>
      }
      overlayClassName={cn('luca-tooltip-overlay', overlayClassName)}
      overlayInnerStyle={{
        padding: 0,
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
      showArrow={false}
      arrow={false}
      {...rest}
    >
      <span className={cn('luca-inline-flex luca-items-center', className)}>
        {children}
      </span>
    </AntTooltip>
  );
};

Tooltip.displayName = 'Tooltip';
