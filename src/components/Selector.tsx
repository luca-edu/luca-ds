
import React from 'react';
import { cn } from '../utils/cn';
import { ButtonIcon } from './ButtonIcon';
import { MinusIcon, PlusIcon } from '../shared/icons';

type SelectorContextValue = {
  disabled: boolean;
};

const SelectorContext = React.createContext<SelectorContextValue | null>(null);

const useSelectorContext = () => {
  const context = React.useContext(SelectorContext);

  if (!context) {
    throw new Error(
      'Los componentes compuestos de Selector deben usarse dentro de <Selector>.'
    );
  }

  return context;
};

export interface SelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
}

const selectorBaseStyles =
  'luca-group/selector luca-flex luca-w-full luca-items-center luca-gap-6 luca-rounded-2xl luca-border luca-border-neutral-200 luca-bg-white luca-px-6 luca-py-4 luca-transition-all luca-duration-200';

export const Selector = React.forwardRef<HTMLDivElement, SelectorProps>(
  ({ className, children, disabled = false, ...props }, ref) => {
    return (
      <SelectorContext.Provider value={{ disabled }}>
        <div
          ref={ref}
          data-disabled={disabled || undefined}
          className={cn(
            selectorBaseStyles,
            !disabled &&
              'hover:luca-border-primary-100 hover:luca-bg-neutral-50 focus-within:luca-border-primary-100 focus-within:luca-bg-neutral-50',
            disabled &&
              'luca-border-neutral-200 luca-bg-neutral-50 luca-opacity-70 luca-cursor-not-allowed',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </SelectorContext.Provider>
    );
  }
);

Selector.displayName = 'Selector';

export interface SelectorLabelProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export const SelectorLabel = React.forwardRef<
  HTMLSpanElement,
  SelectorLabelProps
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        'luca-text-sm luca-font-semibold luca-leading-6 luca-text-neutral-900',
        className
      )}
      {...props}
    />
  );
});

SelectorLabel.displayName = 'SelectorLabel';

export interface SelectorDetailProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button' | 'span';
}

export const SelectorDetail = React.forwardRef<
  HTMLButtonElement | HTMLSpanElement,
  SelectorDetailProps
>(({ as = 'button', className, children, ...props }, forwardedRef) => {
  const { disabled } = useSelectorContext();

  if (as === 'span') {
    const spanProps = props as React.HTMLAttributes<HTMLSpanElement>;

    return (
      <span
        ref={forwardedRef as React.ForwardedRef<HTMLSpanElement>}
        className={cn(
          'luca-text-sm luca-leading-6 luca-text-primary-600',
          className
        )}
        {...spanProps}
      >
        {children}
      </span>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      ref={forwardedRef as React.ForwardedRef<HTMLButtonElement>}
      type="button"
      disabled={disabled}
      className={cn(
        'luca-inline-flex luca-h-6 luca-items-center luca-rounded-full luca-border-none luca-bg-transparent luca-px-2 luca-text-sm luca-font-normal luca-leading-6 luca-text-primary-600 luca-transition-colors luca-duration-200',
        !disabled &&
          'group-hover/selector:luca-underline hover:luca-underline focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-primary-200',
        disabled && 'luca-text-neutral-400',
        className
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
});

SelectorDetail.displayName = 'SelectorDetail';

export interface SelectorActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  iconVariant?: 'plus' | 'minus';
}

export const SelectorAction = React.forwardRef<
  HTMLButtonElement,
  SelectorActionProps
>(({ className, iconVariant = 'plus', icon, type = 'button', ...props }, ref) => {
  const { disabled } = useSelectorContext();
  const resolvedIcon =
    icon ??
    (iconVariant === 'minus' ? (
      <MinusIcon size={16} />
    ) : (
      <PlusIcon size={16} />
    ));

  return (
    <ButtonIcon
      ref={ref}
      type={type}
      state={disabled ? 'disabled' : 'default'}
      outline="rounded"
      className={cn(
        'luca-size-8 luca-border-neutral-200 luca-bg-white luca-text-primary-600',
        !disabled &&
          'hover:luca-border-primary-200 hover:luca-bg-[#edf5ff] hover:luca-text-primary-600 focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-primary-200',
        className
      )}
      icon={resolvedIcon}
      disabled={disabled}
      {...props}
    />
  );
});

SelectorAction.displayName = 'SelectorAction';


