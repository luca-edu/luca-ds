import React from 'react';
import { cn } from '../utils/cn';

export interface TabListItem {
  key: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: TabListItem[];
  /**
   * Controlled selected tab key.
   */
  value?: string;
  /**
   * Uncontrolled default selected tab key.
   */
  defaultValue?: string;
  /**
   * Callback fired when a new tab is selected.
   */
  onValueChange?: (value: string) => void;
  /**
   * Whether the tabs should stretch to fill the available width.
   */
  fullWidth?: boolean;
  /**
   * Accessible label for the tab list.
   */
  ariaLabel?: string;
}

const containerStyles =
  'luca-inline-flex luca-items-center luca-gap-1 luca-rounded-[14px] luca-bg-[#ececf0] luca-p-1 luca-text-sm luca-font-medium luca-text-gray-900';

const tabBaseStyles =
  'luca-inline-flex luca-items-center luca-justify-center luca-rounded-[12px] luca-px-[9px] luca-py-[5px] luca-transition-all luca-duration-200 focus-visible:luca-outline focus-visible:luca-outline-2 focus-visible:luca-outline-offset-2 focus-visible:luca-outline-[#3843d0] luca-tracking-[-0.010em] luca-text-[#111827]';

const tabSelectedStyles =
  'luca-bg-[#fdc700] luca-text-[#111827] luca-shadow-[0px_1px_2px_rgba(0,0,0,0.05)]';

const tabUnselectedStyles = 'hover:luca-text-[#3843d0] focus-visible:luca-outline-[#3843d0]';

const tabDisabledStyles =
  'luca-cursor-not-allowed luca-text-gray-400 hover:luca-text-gray-400 focus-visible:luca-outline-none luca-opacity-60';

export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(
  (
    {
      items,
      value,
      defaultValue,
      onValueChange,
      fullWidth = false,
      ariaLabel,
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = value !== undefined;

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

    return (
      <div
        ref={ref}
        role="tablist"
        aria-label={ariaLabel}
        className={cn(containerStyles, fullWidth && 'luca-w-full', className)}
        {...props}
      >
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
                tabBaseStyles,
                fullWidth ? 'luca-flex-1' : 'luca-min-w-[88px]',
                isSelected ? tabSelectedStyles : tabUnselectedStyles,
                disabled && tabDisabledStyles
              )}
              onClick={() => {
                if (disabled) return;

                if (!isControlled) {
                  setUncontrolledValue(item.key);
                }

                onValueChange?.(item.key);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    );
  }
);

TabList.displayName = 'TabList';
