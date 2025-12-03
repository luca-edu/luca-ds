import React from 'react';
import { cn } from '../utils/cn';
import { Collapse, type CollapseProps as AntCollapseProps } from 'antd';
import { ChevronDownIcon } from '../shared/icons';

export type AccordionVariant =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type AccordionSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AccordionItemType {
  /**
   * Unique key for the item
   */
  key: string;

  /**
   * Header content (title)
   */
  header: React.ReactNode;

  /**
   * Optional description below the header
   */
  headerDescription?: React.ReactNode;

  /**
   * Content of the accordion item
   */
  content: React.ReactNode;

  /**
   * Whether this item is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Custom class for the item
   */
  className?: string;
}

export interface AccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Color variant of the accordion
   * @default 'primary'
   */
  variant?: AccordionVariant;

  /**
   * Size of the accordion
   * @default 'md'
   */
  size?: AccordionSize;

  /**
   * Accordion items
   */
  items: AccordionItemType[];

  /**
   * Active key(s) for controlled mode
   */
  activeKey?: string | string[];

  /**
   * Default active key(s) for uncontrolled mode
   */
  defaultActiveKey?: string | string[];

  /**
   * Allow multiple panels to be open
   * @default false
   */
  accordion?: boolean;

  /**
   * Show border around accordion
   * @default true
   */
  bordered?: boolean;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Change callback
   */
  onChange?: (key: string | string[]) => void;
}

const accordionSizeStyles: Record<
  AccordionSize,
  { header: string; content: string; icon: number; gap: string }
> = {
  xs: {
    header: 'luca-px-3 luca-py-2 luca-text-xs',
    content: 'luca-px-3 luca-py-2 luca-text-xs',
    icon: 12,
    gap: 'luca-gap-2',
  },
  sm: {
    header: 'luca-px-4 luca-py-2.5 luca-text-sm',
    content: 'luca-px-4 luca-py-2.5 luca-text-sm',
    icon: 14,
    gap: 'luca-gap-2.5',
  },
  md: {
    header: 'luca-px-4 luca-py-3 luca-text-sm',
    content: 'luca-px-4 luca-py-3 luca-text-sm',
    icon: 16,
    gap: 'luca-gap-3',
  },
  lg: {
    header: 'luca-px-5 luca-py-4 luca-text-base',
    content: 'luca-px-5 luca-py-4 luca-text-base',
    icon: 18,
    gap: 'luca-gap-3.5',
  },
  xl: {
    header: 'luca-px-6 luca-py-5 luca-text-lg',
    content: 'luca-px-6 luca-py-5 luca-text-lg',
    icon: 20,
    gap: 'luca-gap-4',
  },
};

const accordionVariantStyles: Record<
  AccordionVariant,
  {
    border: string;
    headerBg: string;
    headerBgActive: string;
    headerText: string;
    iconColor: string;
  }
> = {
  primary: {
    border: 'luca-border-primary-200',
    headerBg: 'luca-bg-white',
    headerBgActive: 'luca-bg-primary-50',
    headerText: 'luca-text-neutral-900',
    iconColor: 'luca-text-primary-600',
  },
  neutral: {
    border: 'luca-border-neutral-200',
    headerBg: 'luca-bg-white',
    headerBgActive: 'luca-bg-neutral-50',
    headerText: 'luca-text-neutral-900',
    iconColor: 'luca-text-neutral-600',
  },
  accent: {
    border: 'luca-border-accent-200',
    headerBg: 'luca-bg-white',
    headerBgActive: 'luca-bg-accent-50',
    headerText: 'luca-text-neutral-900',
    iconColor: 'luca-text-accent-700',
  },
  success: {
    border: 'luca-border-success-200',
    headerBg: 'luca-bg-white',
    headerBgActive: 'luca-bg-success-50',
    headerText: 'luca-text-neutral-900',
    iconColor: 'luca-text-success-600',
  },
  warning: {
    border: 'luca-border-warning-200',
    headerBg: 'luca-bg-white',
    headerBgActive: 'luca-bg-warning-50',
    headerText: 'luca-text-neutral-900',
    iconColor: 'luca-text-warning-600',
  },
  danger: {
    border: 'luca-border-danger-200',
    headerBg: 'luca-bg-white',
    headerBgActive: 'luca-bg-danger-50',
    headerText: 'luca-text-neutral-900',
    iconColor: 'luca-text-danger-600',
  },
  info: {
    border: 'luca-border-info-200',
    headerBg: 'luca-bg-white',
    headerBgActive: 'luca-bg-info-50',
    headerText: 'luca-text-neutral-900',
    iconColor: 'luca-text-info-600',
  },
};

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      items,
      activeKey,
      defaultActiveKey,
      accordion = false,
      bordered = true,
      disabled = false,
      onChange,
      className,
      ...props
    },
    ref
  ) => {
    const styles = accordionVariantStyles[variant];
    const sizeStyles = accordionSizeStyles[size];

    const collapseItems: AntCollapseProps['items'] = items.map((item) => ({
      key: item.key,
      label: (
        <div className={cn('luca-flex luca-flex-col', sizeStyles.gap)}>
          <div className={cn('luca-font-semibold luca-leading-6', styles.headerText)}>
            {item.header}
          </div>
          {item.headerDescription && (
            <div className="luca-text-xs luca-font-normal luca-leading-5 luca-text-neutral-500">
              {item.headerDescription}
            </div>
          )}
        </div>
      ),
      children: <div className="luca-leading-6 luca-text-neutral-700">{item.content}</div>,
      disabled: item.disabled || disabled,
      className: cn(
        'luca-accordion-item luca-border-rounded-lg',
        `luca-accordion-item--${variant}`,
        `luca-accordion-item--${size}`,
        item.className
      ),
    }));

    return (
      <div
        ref={ref}
        className={cn(
          'luca-accordion-wrapper',
          `luca-accordion-wrapper--${variant}`,
          `luca-accordion-wrapper--${size}`,
          disabled && 'luca-accordion-wrapper--disabled',
          className
        )}
        {...props}
      >
        <Collapse
          items={collapseItems}
          activeKey={activeKey}
          defaultActiveKey={defaultActiveKey}
          accordion={accordion}
          bordered={bordered}
          ghost={!bordered}
          expandIcon={({ isActive }) => (
            <ChevronDownIcon
              size={sizeStyles.icon}
              className={cn(
                'luca-transition-transform luca-duration-200',
                styles.iconColor,
                isActive ? 'luca-rotate-180' : 'luca-rotate-0'
              )}
            />
          )}
          expandIconPosition="end"
          onChange={onChange}
          className={cn(
            'luca-accordion',
            `luca-accordion--${variant}`,
            `luca-accordion--${size}`,
            disabled && 'luca-accordion--disabled'
          )}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
          }}
        />
        <style>{`
          .luca-accordion .ant-collapse-item {
            border: 1px solid ${bordered ? 'var(--neutral-200, #e5e7eb)' : 'transparent'};
            border-radius: 12px !important;
            margin-bottom: 8px;
            overflow: hidden;
          }

          .luca-accordion .ant-collapse-item:last-child {
            margin-bottom: 0;
            border: 1px solid ${bordered ? 'var(--neutral-200, #e5e7eb)' : 'transparent'};
            border-radius: 12px;
          }

          .luca-accordion--primary .ant-collapse-item > .ant-collapse-header {
            background-color: white;
            padding: ${sizeStyles.header.includes('px-3') ? '8px 12px' : sizeStyles.header.includes('px-4') ? '12px 16px' : sizeStyles.header.includes('px-5') ? '16px 20px' : sizeStyles.header.includes('px-6') ? '20px 24px' : '12px 16px'};
          }

          .luca-accordion--primary .ant-collapse-item-active > .ant-collapse-header {
            background-color: #edf5ff;
          }

          .luca-accordion--neutral .ant-collapse-item > .ant-collapse-header {
            background-color: white;
          }

          .luca-accordion--neutral .ant-collapse-item-active > .ant-collapse-header {
            background-color: #f9fafb;
          }

          .luca-accordion--accent .ant-collapse-item > .ant-collapse-header {
            background-color: white;
          }

          .luca-accordion--accent .ant-collapse-item-active > .ant-collapse-header {
            background-color: #fefbec;
          }

          .luca-accordion--success .ant-collapse-item > .ant-collapse-header {
            background-color: white;
          }

          .luca-accordion--success .ant-collapse-item-active > .ant-collapse-header {
            background-color: #f0fdf4;
          }

          .luca-accordion--warning .ant-collapse-item > .ant-collapse-header {
            background-color: white;
          }

          .luca-accordion--warning .ant-collapse-item-active > .ant-collapse-header {
            background-color: #fffbeb;
          }

          .luca-accordion--danger .ant-collapse-item > .ant-collapse-header {
            background-color: white;
          }

          .luca-accordion--danger .ant-collapse-item-active > .ant-collapse-header {
            background-color: #fef2f2;
          }

          .luca-accordion--info .ant-collapse-item > .ant-collapse-header {
            background-color: white;
          }

          .luca-accordion--info .ant-collapse-item-active > .ant-collapse-header {
            background-color: #f0f9ff;
          }

          .luca-accordion .ant-collapse-content {
            border-top: 1px solid var(--neutral-200, #e5e7eb);
          }

          .luca-accordion .ant-collapse-content > .ant-collapse-content-box {
            padding: ${sizeStyles.content.includes('px-3') ? '8px 12px' : sizeStyles.content.includes('px-4') ? '12px 16px' : sizeStyles.content.includes('px-5') ? '16px 20px' : sizeStyles.content.includes('px-6') ? '20px 24px' : '12px 16px'};
          }

          .luca-accordion--disabled {
            opacity: 0.5;
            pointer-events: none;
          }
        `}</style>
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';
