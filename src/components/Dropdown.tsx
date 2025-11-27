import React from 'react';
import { Dropdown as AntDropdown, Input, Tag } from 'antd';
import VirtualList from 'rc-virtual-list';
import { cn } from '../utils/cn';
import { ChevronDownIcon, CheckIcon, MinusIcon } from '../shared/icons';
import { Tooltip } from './Tooltip';
import { QuestionIcon } from '../shared/icons';

type DropdownSize = 'sm' | 'md' | 'lg';

export type DropdownVariant =
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';

export interface DropdownOption {
  key: string;
  label: string;
  description?: string;
  disabled?: boolean;
  [key: string]: unknown;
}

export interface DropdownProps {
  label?: string;
  placeholder?: string;
  items: Record<string, unknown>[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (keys: string[]) => void;
  disabled?: boolean;
  size?: DropdownSize;
  variant?: DropdownVariant;
  valueKey?: string;
  labelKey?: string;
  descriptionKey?: string;
  disabledKey?: string;
  overlayClassName?: string;
  className?: string;
  wrapperClassName?: string;
  multiple?: boolean;
  selectAll?: boolean;
  selectAllLabel?: string;
  allSelectedLabel?: string;
  summaryMaxItems?: number;
  enableSearch?: boolean;
  virtualizationThreshold?: number;
  virtualListHeight?: number;
  virtualItemHeight?: number;
  required?: boolean;
  tooltip?: string;
  helpText?: string;
  message?: React.ReactNode;
}

const sizeStyles: Record<DropdownSize, string> = {
  sm: 'luca-min-h-10',
  md: 'luca-min-h-11',
  lg: 'luca-min-h-12',
};

// Mapeo de variantes a colores del tailwind.config.js
const variantColors: Record<
  DropdownVariant,
  {
    border: string;
    borderHover: string;
    borderFocus: string;
    text: string;
    textHover: string;
    textFocus: string;
    ring: string;
    ringFocus: string;
    bgChecked: string;
    bgTag: string;
    textTag: string;
    borderCheckbox: string;
    bgCheckbox: string;
    icon: string;
  }
> = {
  primary: {
    border: 'luca-border-neutral-200',
    borderHover: 'hover:luca-border-primary-100',
    borderFocus: 'focus:luca-border-primary-200',
    text: 'luca-text-neutral-500',
    textHover: 'hover:luca-text-primary-600',
    textFocus: 'focus:luca-text-primary-600',
    ring: 'focus:luca-ring-primary-200',
    ringFocus: 'focus:luca-ring-primary-100',
    bgChecked: 'luca-bg-primary-50',
    bgTag: 'luca-bg-primary-50',
    textTag: 'luca-text-primary-600',
    borderCheckbox: 'luca-border-primary-500',
    bgCheckbox: 'luca-bg-primary-500',
    icon: 'luca-text-primary-600',
  },
  accent: {
    border: 'luca-border-neutral-200',
    borderHover: 'hover:luca-border-accent-100',
    borderFocus: 'focus:luca-border-accent-200',
    text: 'luca-text-neutral-500',
    textHover: 'hover:luca-text-accent-600',
    textFocus: 'focus:luca-text-accent-600',
    ring: 'focus:luca-ring-accent-200',
    ringFocus: 'focus:luca-ring-accent-100',
    bgChecked: 'luca-bg-accent-50',
    bgTag: 'luca-bg-accent-50',
    textTag: 'luca-text-accent-600',
    borderCheckbox: 'luca-border-accent-600',
    bgCheckbox: 'luca-bg-accent-600',
    icon: 'luca-text-accent-600',
  },
  success: {
    border: 'luca-border-neutral-200',
    borderHover: 'hover:luca-border-success-100',
    borderFocus: 'focus:luca-border-success-200',
    text: 'luca-text-neutral-500',
    textHover: 'hover:luca-text-success-600',
    textFocus: 'focus:luca-text-success-600',
    ring: 'focus:luca-ring-success-200',
    ringFocus: 'focus:luca-ring-success-100',
    bgChecked: 'luca-bg-success-50',
    bgTag: 'luca-bg-success-50',
    textTag: 'luca-text-success-600',
    borderCheckbox: 'luca-border-success-500',
    bgCheckbox: 'luca-bg-success-500',
    icon: 'luca-text-success-600',
  },
  warning: {
    border: 'luca-border-neutral-200',
    borderHover: 'hover:luca-border-warning-100',
    borderFocus: 'focus:luca-border-warning-200',
    text: 'luca-text-neutral-500',
    textHover: 'hover:luca-text-warning-600',
    textFocus: 'focus:luca-text-warning-600',
    ring: 'focus:luca-ring-warning-200',
    ringFocus: 'focus:luca-ring-warning-100',
    bgChecked: 'luca-bg-warning-50',
    bgTag: 'luca-bg-warning-50',
    textTag: 'luca-text-warning-600',
    borderCheckbox: 'luca-border-warning-500',
    bgCheckbox: 'luca-bg-warning-500',
    icon: 'luca-text-warning-600',
  },
  danger: {
    border: 'luca-border-neutral-200',
    borderHover: 'hover:luca-border-danger-100',
    borderFocus: 'focus:luca-border-danger-200',
    text: 'luca-text-neutral-500',
    textHover: 'hover:luca-text-danger-600',
    textFocus: 'focus:luca-text-danger-600',
    ring: 'focus:luca-ring-danger-200',
    ringFocus: 'focus:luca-ring-danger-100',
    bgChecked: 'luca-bg-danger-50',
    bgTag: 'luca-bg-danger-50',
    textTag: 'luca-text-danger-600',
    borderCheckbox: 'luca-border-danger-500',
    bgCheckbox: 'luca-bg-danger-500',
    icon: 'luca-text-danger-600',
  },
  info: {
    border: 'luca-border-neutral-200',
    borderHover: 'hover:luca-border-info-100',
    borderFocus: 'focus:luca-border-info-200',
    text: 'luca-text-neutral-500',
    textHover: 'hover:luca-text-info-600',
    textFocus: 'focus:luca-text-info-600',
    ring: 'focus:luca-ring-info-200',
    ringFocus: 'focus:luca-ring-info-100',
    bgChecked: 'luca-bg-info-50',
    bgTag: 'luca-bg-info-50',
    textTag: 'luca-text-info-600',
    borderCheckbox: 'luca-border-info-500',
    bgCheckbox: 'luca-bg-info-500',
    icon: 'luca-text-info-600',
  },
  neutral: {
    border: 'luca-border-neutral-200',
    borderHover: 'hover:luca-border-neutral-100',
    borderFocus: 'focus:luca-border-neutral-200',
    text: 'luca-text-neutral-500',
    textHover: 'hover:luca-text-neutral-600',
    textFocus: 'focus:luca-text-neutral-600',
    ring: 'focus:luca-ring-neutral-200',
    ringFocus: 'focus:luca-ring-neutral-100',
    bgChecked: 'luca-bg-neutral-100',
    bgTag: 'luca-bg-neutral-100',
    textTag: 'luca-text-neutral-600',
    borderCheckbox: 'luca-border-neutral-500',
    bgCheckbox: 'luca-bg-neutral-500',
    icon: 'luca-text-neutral-600',
  },
};

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  placeholder = 'Selecciona una opción',
  items,
  value,
  defaultValue,
  onChange,
  disabled,
  size = 'sm',
  variant = 'primary',
  valueKey = 'key',
  labelKey = 'label',
  descriptionKey = 'description',
  disabledKey = 'disabled',
  overlayClassName,
  className,
  wrapperClassName,
  multiple = true,
  selectAll = false,
  selectAllLabel = 'Seleccionar todo',
  allSelectedLabel = 'Todos',
  summaryMaxItems = 3,
  enableSearch = false,
  virtualizationThreshold = 10,
  virtualListHeight = 256,
  virtualItemHeight = 40,
  required = false,
  tooltip,
  helpText,
  message,
}) => {
  const [internalValue, setInternalValue] = React.useState<string[]>(defaultValue ?? []);
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const isControlled = value !== undefined;
  const selectedKeys = isControlled ? value! : internalValue;
  const colors = variantColors[variant];

  // Helper functions para obtener valores usando las keys personalizadas
  const getItemValue = React.useCallback(
    (item: Record<string, unknown>): string => {
      return String(item[valueKey] ?? '');
    },
    [valueKey]
  );

  const getItemLabel = React.useCallback(
    (item: Record<string, unknown>): string => {
      return String(item[labelKey] ?? '');
    },
    [labelKey]
  );

  const getItemDescription = React.useCallback(
    (item: Record<string, unknown>): string | undefined => {
      return item[descriptionKey] ? String(item[descriptionKey]) : undefined;
    },
    [descriptionKey]
  );

  const getItemDisabled = React.useCallback(
    (item: Record<string, unknown>): boolean => {
      return Boolean(item[disabledKey]);
    },
    [disabledKey]
  );

  React.useEffect(() => {
    if (!isControlled && defaultValue) {
      setInternalValue(defaultValue);
    }
  }, [defaultValue, isControlled]);

  React.useEffect(() => {
    if (!open && searchTerm) {
      setSearchTerm('');
    }
  }, [open, searchTerm]);

  const enabledKeys = React.useMemo(
    () => items.filter((item) => !getItemDisabled(item)).map((item) => getItemValue(item)),
    [items, getItemDisabled, getItemValue]
  );

  const toggleKey = React.useCallback(
    (key: string) => {
      let next: string[];

      if (multiple) {
        next = selectedKeys.includes(key)
          ? selectedKeys.filter((current) => current !== key)
          : [...selectedKeys, key];
      } else {
        const isSame = selectedKeys.length === 1 && selectedKeys[0] === key;
        next = isSame ? [] : [key];
        setOpen(false);
      }

      if (!isControlled) {
        setInternalValue(next);
      }
      onChange?.(next);
    },
    [isControlled, multiple, onChange, selectedKeys]
  );

  const handleSelectAll = React.useCallback(() => {
    const areAllSelected =
      enabledKeys.length > 0 && enabledKeys.every((key) => selectedKeys.includes(key));

    const next = areAllSelected ? [] : enabledKeys;

    if (!isControlled) {
      setInternalValue(next);
    }
    onChange?.(next);
  }, [enabledKeys, isControlled, onChange, selectedKeys]);

  const handleRemoveKey = React.useCallback(
    (key: string) => {
      if (!multiple) return;
      if (multiple) {
        if (!isControlled) {
          setInternalValue((prev) => prev.filter((item) => item !== key));
        }
        onChange?.(selectedKeys.filter((item) => item !== key));
      }
    },
    [isControlled, multiple, onChange, selectedKeys]
  );

  const filteredItems = React.useMemo(() => {
    if (!enableSearch || !searchTerm.trim()) {
      return items;
    }
    const normalized = searchTerm.trim().toLowerCase();
    return items.filter((item) => {
      const label = getItemLabel(item);
      const description = getItemDescription(item) ?? '';
      return `${label} ${description}`.toLowerCase().includes(normalized);
    });
  }, [enableSearch, items, searchTerm, getItemLabel, getItemDescription]);

  const renderItem = React.useCallback(
    (item: Record<string, unknown>) => {
      const itemValue = getItemValue(item);
      return (
        <DropdownItem
          key={itemValue}
          label={getItemLabel(item)}
          description={getItemDescription(item)}
          checked={selectedKeys.includes(itemValue)}
          disabled={getItemDisabled(item)}
          onToggle={() => toggleKey(itemValue)}
          variant={variant}
          multiple={multiple}
        />
      );
    },
    [
      selectedKeys,
      toggleKey,
      getItemValue,
      getItemLabel,
      getItemDescription,
      getItemDisabled,
      variant,
    ]
  );

  const shouldVirtualize =
    filteredItems.length > virtualizationThreshold && filteredItems.length > 0;

  const areAllEnabledSelected =
    enabledKeys.length > 0 && enabledKeys.every((key) => selectedKeys.includes(key));

  const hasPartialSelection =
    !areAllEnabledSelected && selectedKeys.some((key) => enabledKeys.includes(key));

  const summaryContent = React.useMemo<React.ReactNode>(() => {
    if (selectedKeys.length === 0) {
      return (
        <span className="luca-text-sm luca-font-medium luca-text-neutral-500">{placeholder}</span>
      );
    }

    if (!multiple) {
      const key = selectedKeys[0];
      const selectedItem = items.find((item) => getItemValue(item) === key);
      const label = selectedItem ? getItemLabel(selectedItem) : placeholder;
      return <>{label}</>;
    }

    if (
      selectAll &&
      enabledKeys.length > 0 &&
      enabledKeys.every((key) => selectedKeys.includes(key))
    ) {
      return (
        <Tag
          bordered={false}
          closable
          onClose={(event) => {
            event.preventDefault();
            handleSelectAll();
          }}
          className={cn(
            'luca-m-0 luca-rounded-md luca-px-2 luca-py-0.5 luca-text-xs luca-font-semibold luca-leading-5',
            colors.bgTag,
            colors.textTag
          )}
          closeIcon={<span className={cn('luca-ml-1 luca-font-bold', colors.textTag)}>×</span>}
        >
          {allSelectedLabel} ({enabledKeys.length})
        </Tag>
      );
    }

    const visibleItems = items.filter((item) => selectedKeys.includes(item.key as string));

    const countItemsSelected = visibleItems.length;

    return (
      <>
        <span className="luca-text-sm luca-font-medium luca-text-neutral-500">
          {placeholder} ({countItemsSelected})
        </span>
      </>
    );
  }, [
    allSelectedLabel,
    enabledKeys,
    items,
    multiple,
    placeholder,
    selectAll,
    selectedKeys,
    summaryMaxItems,
    handleRemoveKey,
    handleSelectAll,
    getItemValue,
    getItemLabel,
  ]);

  const menuContent = React.useMemo(() => {
    const virtualList = (
      <VirtualList
        data={filteredItems}
        height={virtualListHeight}
        itemHeight={virtualItemHeight}
        itemKey={(item) => getItemValue(item)}
      >
        {(item: Record<string, unknown>) => renderItem(item)}
      </VirtualList>
    );

    const regularList = (
      <div className="luca-flex luca-flex-col luca-gap-1 luca-max-h-[190px] luca-overflow-y-auto luca-pr-1">
        {filteredItems.map((item) => renderItem(item))}
      </div>
    );

    return (
      <div className="luca-flex luca-w-[min(200px,100vw)] luca-flex-col luca-gap-3 luca-rounded-md luca-bg-white luca-p-2 luca-shadow-lg">
        {enableSearch && (
          <Input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar..."
            className="luca-rounded-md luca-border luca-border-neutral-200 luca-text-sm"
            allowClear
          />
        )}
        <div className="luca-flex luca-flex-col luca-gap-1">
          {multiple && selectAll && enabledKeys.length > 0 && (
            <DropdownItem
              key="__select_all__"
              label={selectAllLabel}
              checked={areAllEnabledSelected}
              indeterminate={hasPartialSelection}
              onToggle={handleSelectAll}
              variant={variant}
            />
          )}
          {filteredItems.length === 0 ? (
            <p className="luca-p-3 luca-text-sm luca-text-neutral-400">
              No se encontraron resultados
            </p>
          ) : shouldVirtualize ? (
            virtualList
          ) : (
            regularList
          )}
        </div>
      </div>
    );
  }, [
    areAllEnabledSelected,
    enableSearch,
    filteredItems,
    handleSelectAll,
    hasPartialSelection,
    renderItem,
    selectAll,
    selectAllLabel,
    shouldVirtualize,
    virtualItemHeight,
    virtualListHeight,
    searchTerm,
    multiple,
    enabledKeys.length,
    getItemValue,
  ]);

  const generatedId = React.useId();
  const fieldId = `dropdown-${generatedId}`;
  const helpTextId = helpText ? `${fieldId}-help` : undefined;
  const messageId = message ? `${fieldId}-message` : undefined;
  const hasError = Boolean(message);

  return (
    <div
      className={cn(
        'luca-flex luca-w-[min(200px,100vw)] luca-flex-col luca-gap-2',
        wrapperClassName
      )}
    >
      {(label || tooltip) && (
        <div className="luca-flex luca-items-center luca-gap-2">
          {label && (
            <label
              htmlFor={fieldId}
              className="luca-flex luca-items-center luca-gap-1 luca-text-base luca-font-medium luca-leading-6 luca-text-neutral-900"
            >
              <span>
                {label}
                {required && <span className="luca-text-danger-500 luca-pl-1">*</span>}
              </span>
            </label>
          )}
          {tooltip && (
            <Tooltip content={tooltip}>
              <button
                type="button"
                className="luca-inline-flex luca-h-5 luca-w-5 luca-items-center luca-justify-center luca-text-primary-600"
              >
                <QuestionIcon size={16} />
              </button>
            </Tooltip>
          )}
        </div>
      )}

      {helpText && (
        <p
          id={helpTextId}
          className="luca-text-xs luca-font-normal luca-leading-6 luca-text-neutral-400"
        >
          {helpText}
        </p>
      )}

      <div className="luca-flex luca-flex-col luca-gap-1">
        <AntDropdown
          trigger={['click']}
          disabled={disabled}
          open={open}
          onOpenChange={setOpen}
          menu={{
            items: [],
          }}
          popupRender={() => menuContent}
          overlayClassName={cn('luca-dropdown-overlay', overlayClassName)}
        >
          <button
            type="button"
            id={fieldId}
            className={cn(
              'luca-flex luca-w-full luca-items-center luca-justify-between luca-rounded-md luca-border luca-bg-white luca-px-4 luca-py-2 luca-text-sm luca-font-medium luca-transition-colors luca-duration-200',
              hasError
                ? 'luca-border-danger-500 focus:luca-border-danger-500 focus:luca-ring-2 focus:luca-ring-danger-200'
                : cn(
                    colors.border,
                    colors.borderHover,
                    colors.borderFocus,
                    colors.textFocus,
                    'focus:luca-outline-none focus:luca-ring-2',
                    colors.ring
                  ),
              colors.text,
              colors.textHover,
              disabled &&
                'luca-cursor-not-allowed luca-border-neutral-200 luca-bg-neutral-100 luca-text-neutral-400',
              sizeStyles[size],
              className
            )}
            disabled={disabled}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-invalid={hasError || undefined}
            aria-describedby={[helpTextId, messageId].filter(Boolean).join(' ') || undefined}
          >
            <div className="luca-flex luca-max-w-[calc(100%-1.75rem)] luca-flex-wrap luca-gap-1 luca-items-center luca-whitespace-normal luca-text-left">
              {summaryContent}
            </div>
            <ChevronDownIcon
              size={16}
              className={hasError ? 'luca-text-danger-500' : colors.icon}
            />
          </button>
        </AntDropdown>

        {hasError && message && (
          <p
            id={messageId}
            className="luca-text-xs luca-font-medium luca-leading-6 luca-text-danger-500"
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

Dropdown.displayName = 'Dropdown';

export interface DropdownItemProps {
  label: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  onToggle?: () => void;
  indeterminate?: boolean;
  variant?: DropdownVariant;
  multiple?: boolean;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  description,
  checked,
  disabled,
  onToggle,
  indeterminate = false,
  variant = 'primary',
  multiple = true,
}) => {
  const colors = variantColors[variant];
  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      if (!disabled) {
        onToggle?.();
      }
    },
    [disabled, onToggle]
  );

  return (
    <button
      type="button"
      role="menuitemcheckbox"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleClick}
      className={cn(
        'luca-flex luca-w-full luca-items-center luca-gap-3 luca-rounded-md luca-px-2 luca-py-1.5 luca-transition-colors luca-duration-150',
        checked ? colors.bgChecked : 'luca-bg-white',
        'hover:luca-bg-neutral-100 focus:luca-outline-none focus:luca-ring-2',
        colors.ringFocus,
        disabled && 'luca-cursor-not-allowed luca-opacity-70'
      )}
    >
      {multiple && (
        <span
          className={cn(
            'luca-flex luca-h-6 luca-w-6 luca-items-center luca-justify-center luca-rounded-md luca-border-2 luca-transition-colors luca-duration-150',
            checked
              ? cn(colors.borderCheckbox, colors.bgCheckbox, 'luca-text-white')
              : 'luca-border-neutral-200 luca-bg-white luca-text-transparent'
          )}
          aria-hidden
        >
          {checked ? <CheckIcon size={14} /> : indeterminate ? <MinusIcon size={12} /> : null}
        </span>
      )}
      <div className="luca-flex luca-min-w-0 luca-flex-1 luca-flex-col luca-items-center luca-gap-0.5">
        <span className="luca-text-sm luca-font-medium luca-text-neutral-700 luca-break-words luca-text-left luca-w-full">
          {label}
        </span>
        {description && (
          <span className="luca-text-xs luca-font-normal luca-text-neutral-400 luca-break-words luca-text-left luca-w-full">
            {description}
          </span>
        )}
      </div>
    </button>
  );
};

DropdownItem.displayName = 'DropdownItem';
