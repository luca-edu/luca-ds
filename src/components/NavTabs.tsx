import React from 'react';
import { cn } from '../utils/cn';

export type NavTabsVariant =
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';

export type NavTabsStyle = 'default' | 'underline' | 'pills';

export interface NavTabItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface NavTabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  items: NavTabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  variant?: NavTabsVariant;
  style?: NavTabsStyle | React.CSSProperties;
  fullWidth?: boolean;
  ariaLabel?: string;
}

// Mapeo de variantes a colores del tailwind.config.js
const variantColors: Record<
  NavTabsVariant,
  {
    activeBg: string;
    activeText: string;
    activeBorder: string;
    inactiveText: string;
    inactiveHover: string;
    inactiveHoverBg: string;
  }
> = {
  primary: {
    activeBg: 'luca-bg-primary-600',
    activeText: 'luca-text-white',
    activeBorder: 'luca-border-primary-600',
    inactiveText: 'luca-text-neutral-900',
    inactiveHover: 'luca-text-neutral-900',
    inactiveHoverBg: '',
  },
  accent: {
    activeBg: 'luca-bg-accent-600',
    activeText: 'luca-text-white',
    activeBorder: 'luca-border-accent-600',
    inactiveText: 'luca-text-neutral-900',
    inactiveHover: 'luca-text-neutral-900',
    inactiveHoverBg: '',
  },
  success: {
    activeBg: 'luca-bg-success-500',
    activeText: 'luca-text-white',
    activeBorder: 'luca-border-success-500',
    inactiveText: 'luca-text-neutral-900',
    inactiveHover: 'luca-text-neutral-900',
    inactiveHoverBg: '',
  },
  warning: {
    activeBg: 'luca-bg-warning-500',
    activeText: 'luca-text-white',
    activeBorder: 'luca-border-warning-500',
    inactiveText: 'luca-text-neutral-900',
    inactiveHover: 'luca-text-neutral-900',
    inactiveHoverBg: '',
  },
  danger: {
    activeBg: 'luca-bg-danger-500',
    activeText: 'luca-text-white',
    activeBorder: 'luca-border-danger-500',
    inactiveText: 'luca-text-neutral-900',
    inactiveHover: 'luca-text-neutral-900',
    inactiveHoverBg: '',
  },
  info: {
    activeBg: 'luca-bg-info-500',
    activeText: 'luca-text-white',
    activeBorder: 'luca-border-info-500',
    inactiveText: 'luca-text-neutral-900',
    inactiveHover: 'luca-text-neutral-900',
    inactiveHoverBg: '',
  },
  neutral: {
    activeBg: 'luca-bg-neutral-600',
    activeText: 'luca-text-white',
    activeBorder: 'luca-border-neutral-600',
    inactiveText: 'luca-text-neutral-900',
    inactiveHover: 'luca-text-neutral-900',
    inactiveHoverBg: '',
  },
};

export const NavTabs = React.forwardRef<HTMLDivElement, NavTabsProps>(
  (
    {
      items,
      value,
      defaultValue,
      onValueChange,
      variant = 'primary',
      style = 'default',
      fullWidth = false,
      ariaLabel,
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = value !== undefined;
    const colors = variantColors[variant];

    const firstEnabledKey = React.useMemo(() => items.find((item) => !item.disabled)?.key, [items]);

    const [uncontrolledValue, setUncontrolledValue] = React.useState<string | undefined>(() => {
      if (defaultValue !== undefined) return defaultValue;
      return firstEnabledKey;
    });

    React.useEffect(() => {
      if (isControlled) return;
      if (defaultValue === undefined) return;

      const defaultExists = items.some((item) => item.key === defaultValue && !item.disabled);
      setUncontrolledValue(defaultExists ? defaultValue : firstEnabledKey);
    }, [defaultValue, firstEnabledKey, isControlled, items]);

    React.useEffect(() => {
      if (isControlled) return;
      setUncontrolledValue((current) => {
        if (current && items.some((item) => item.key === current && !item.disabled)) {
          return current;
        }
        return firstEnabledKey ?? current;
      });
    }, [firstEnabledKey, items, isControlled]);

    const currentValue = isControlled ? value : uncontrolledValue;

    // Estilos del contenedor según el estilo
    const containerStyles = cn(
      'luca-flex luca-items-center',
      style === 'default' &&
        'luca-gap-1 luca-rounded-lg luca-py-2 luca-px-3 luca-border luca-border-neutral-200 bg-white',
      style === 'underline' && 'luca-gap-0 luca-border-b luca-border-neutral-200',
      style === 'pills' && 'luca-gap-1 luca-rounded-lg luca-bg-neutral-100 luca-py-2 luca-px-3',
      fullWidth && 'luca-w-full',
      className
    );

    // Estilos base del tab
    const getTabStyles = (isSelected: boolean, disabled: boolean) => {
      if (disabled) {
        return cn(
          'luca-inline-flex luca-items-center luca-gap-2 luca-px-4 luca-py-2 luca-transition-all luca-duration-200 luca-cursor-not-allowed luca-opacity-60',
          'luca-text-neutral-400'
        );
      }

      if (style === 'default') {
        return cn(
          'luca-inline-flex luca-items-center luca-gap-2 luca-px-4 luca-py-2 luca-rounded-lg luca-transition-all luca-duration-200',
          'focus-visible:luca-outline focus-visible:luca-outline-2 focus-visible:luca-outline-offset-2 focus-visible:luca-outline-primary-600',
          isSelected
            ? cn(colors.activeBg, colors.activeText, 'luca-shadow-sm')
            : cn(colors.inactiveText, colors.inactiveHoverBg, colors.inactiveHover)
        );
      }

      if (style === 'underline') {
        const borderClass =
          variant === 'primary'
            ? 'luca-border-b-primary-600'
            : variant === 'accent'
              ? 'luca-border-b-accent-600'
              : variant === 'success'
                ? 'luca-border-b-success-600'
                : variant === 'warning'
                  ? 'luca-border-b-warning-600'
                  : variant === 'danger'
                    ? 'luca-border-b-danger-600'
                    : variant === 'info'
                      ? 'luca-border-b-info-600'
                      : 'luca-border-b-neutral-600';

        const hoverBorderClass =
          variant === 'primary'
            ? 'hover:luca-border-b-primary-600'
            : variant === 'accent'
              ? 'hover:luca-border-b-accent-600'
              : variant === 'success'
                ? 'hover:luca-border-b-success-600'
                : variant === 'warning'
                  ? 'hover:luca-border-b-warning-600'
                  : variant === 'danger'
                    ? 'hover:luca-border-b-danger-600'
                    : variant === 'info'
                      ? 'hover:luca-border-b-info-600'
                      : 'hover:luca-border-b-neutral-600';

        const activeText = colors.inactiveHover;

        return cn(
          'luca-inline-flex luca-items-center luca-gap-2 luca-px-4 luca-py-2 luca-transition-all luca-duration-200 luca-border-b-2 luca-border-transparent luca-mb-[-1px]',
          'focus-visible:luca-outline focus-visible:luca-outline-2 focus-visible:luca-outline-offset-2 focus-visible:luca-outline-primary-600',
          isSelected
            ? cn(activeText, borderClass, 'luca-font-medium')
            : cn(colors.inactiveText, colors.inactiveHover, hoverBorderClass)
        );
      }

      if (style === 'pills') {
        return cn(
          'luca-inline-flex luca-items-center luca-gap-2 luca-px-4 luca-py-2 luca-rounded-lg luca-transition-all luca-duration-200',
          'focus-visible:luca-outline focus-visible:luca-outline-2 focus-visible:luca-outline-offset-2 focus-visible:luca-outline-primary-600',
          isSelected
            ? cn(colors.activeBg, colors.activeText, 'luca-shadow-sm')
            : cn(colors.inactiveText, colors.inactiveHoverBg, colors.inactiveHover)
        );
      }

      return '';
    };

    return (
      <div ref={ref} role="tablist" aria-label={ariaLabel} className={containerStyles} {...props}>
        {items.map((item) => {
          const isSelected = item.key === currentValue;
          const disabled = Boolean(item.disabled);
          const computedTabIndex =
            isSelected || (!currentValue && item.key === firstEnabledKey) ? 0 : -1;

          return (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-disabled={disabled}
              disabled={disabled}
              tabIndex={computedTabIndex}
              data-selected={isSelected || undefined}
              data-disabled={disabled || undefined}
              data-value={item.key}
              className={cn(
                getTabStyles(isSelected, disabled),
                fullWidth && 'luca-flex-1 luca-justify-center'
              )}
              onClick={() => {
                if (disabled) return;

                if (!isControlled) {
                  setUncontrolledValue(item.key);
                }

                onValueChange?.(item.key);
              }}
            >
              {item.icon && (
                <span
                  className={cn(
                    'luca-flex luca-items-center luca-justify-center',
                    isSelected && colors.activeText,
                    !isSelected && !disabled && colors.inactiveText,
                    disabled && 'luca-text-neutral-400'
                  )}
                >
                  {item.icon}
                </span>
              )}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    );
  }
);

NavTabs.displayName = 'NavTabs';

export default NavTabs;
