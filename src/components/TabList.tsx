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
  'inline-flex items-center gap-1 rounded-[14px] bg-[#ececf0] p-1 text-sm font-medium text-gray-900';

const tabBaseStyles =
  'inline-flex items-center justify-center rounded-[12px] px-[9px] py-[5px] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3843d0] tracking-[-0.010em] text-[#111827]';

const tabSelectedStyles =
  'bg-[#fdc700] text-[#111827] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]';

const tabUnselectedStyles =
  'hover:text-[#3843d0] focus-visible:outline-[#3843d0]';

const tabDisabledStyles =
  'cursor-not-allowed text-gray-400 hover:text-gray-400 focus-visible:outline-none opacity-60';

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

    const firstEnabledKey = React.useMemo(
      () => items.find((item) => !item.disabled)?.key,
      [items]
    );

    const [uncontrolledValue, setUncontrolledValue] = React.useState<
      string | undefined
    >(() => {
      if (defaultValue !== undefined) return defaultValue;
      return firstEnabledKey;
    });

    React.useEffect(() => {
      if (isControlled) return;
      if (defaultValue === undefined) return;

      const defaultExists = items.some(
        (item) => item.key === defaultValue && !item.disabled
      );
      setUncontrolledValue(defaultExists ? defaultValue : firstEnabledKey);
    }, [defaultValue, firstEnabledKey, isControlled, items]);

    React.useEffect(() => {
      if (isControlled) return;
      setUncontrolledValue((current) => {
        if (
          current &&
          items.some((item) => item.key === current && !item.disabled)
        ) {
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
        className={cn(containerStyles, fullWidth && 'w-full', className)}
        {...props}
      >
        {items.map((item) => {
          const isSelected = item.key === currentValue;
          const disabled = Boolean(item.disabled);
          const computedTabIndex =
            isSelected || (!currentValue && item.key === firstEnabledKey)
              ? 0
              : -1;

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
                fullWidth ? 'flex-1' : 'min-w-[88px]',
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


