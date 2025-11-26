import React from 'react';
import { cn } from '../utils/cn';
import { ArrowLeftOutlined } from '@ant-design/icons';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  separator?: React.ReactNode;
}

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  href?: string;
  isCurrentPage?: boolean;
  icon?: React.ReactNode;
}

export interface BreadcrumbBackButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export const BreadcrumbBackButton = React.forwardRef<HTMLButtonElement, BreadcrumbBackButtonProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'luca-flex luca-h-8 luca-w-8 luca-items-center luca-justify-center luca-rounded-lg luca-border luca-border-gray-200 luca-bg-white luca-p-1 luca-text-[#3843D0] luca-transition-colors hover:luca-border-gray-300 hover:luca-bg-gray-50',
          className
        )}
        {...props}
      >
        {icon || <ArrowLeftOutlined />}
      </button>
    );
  }
);

BreadcrumbBackButton.displayName = 'BreadcrumbBackButton';

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, children, href, isCurrentPage = false, icon, ...props }, ref) => {
    const content = (
      <div className="luca-flex luca-h-6 luca-items-center luca-gap-1 luca-px-1">
        {icon && <span className="luca-text-gray-500">{icon}</span>}
        <span
          className={cn(
            'luca-text-base luca-font-normal luca-leading-5',
            isCurrentPage ? 'luca-text-gray-500' : 'luca-text-[#3843D0] hover:luca-underline'
          )}
        >
          {children}
        </span>
      </div>
    );

    return (
      <li
        ref={ref}
        className={cn('luca-inline-flex luca-items-center luca-gap-1 luca-rounded-md', className)}
        {...props}
      >
        {href && !isCurrentPage ? (
          <a href={href} className="luca-inline-flex">
            {content}
          </a>
        ) : (
          content
        )}
      </li>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';

export const BreadcrumbSeparator = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, children, ...props }, ref) => {
  return (
    <li
      ref={ref}
      className={cn('luca-inline-flex luca-items-center', className)}
      role="presentation"
      aria-hidden="true"
      {...props}
    >
      <span className="luca-text-sm luca-font-medium luca-leading-5 luca-text-gray-500">
        {children || '/'}
      </span>
    </li>
  );
});

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

type BreadcrumbType = React.ForwardRefExoticComponent<
  BreadcrumbProps & React.RefAttributes<HTMLElement>
> & {
  Item: typeof BreadcrumbItem;
  Separator: typeof BreadcrumbSeparator;
  BackButton: typeof BreadcrumbBackButton;
};

const BreadcrumbComponent = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, children, separator = <BreadcrumbSeparator />, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn('luca-flex luca-items-center luca-gap-1', className)}
        {...props}
      >
        <ol className="luca-flex luca-items-center luca-gap-1">
          {childrenArray.map((child, index) => {
            const isLast = index === childrenArray.length - 1;
            const isBackButton = React.isValidElement(child) && child.type === BreadcrumbBackButton;
            const shouldShowSeparator = !isLast && !isBackButton;

            return (
              <React.Fragment key={index}>
                {child}
                {shouldShowSeparator && separator}
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    );
  }
) as BreadcrumbType;

BreadcrumbComponent.displayName = 'Breadcrumb';
BreadcrumbComponent.Item = BreadcrumbItem;
BreadcrumbComponent.Separator = BreadcrumbSeparator;
BreadcrumbComponent.BackButton = BreadcrumbBackButton;

export const Breadcrumb = BreadcrumbComponent;
