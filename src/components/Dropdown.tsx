import React from 'react';
import {
  Dropdown as AntDropdown,
  Input,
  Tag,
} from 'antd';
import VirtualList from 'rc-virtual-list';
import { cn } from '../utils/cn';
import { ChevronDownIcon, CheckIcon, MinusIcon } from '../shared/icons';

type DropdownSize = 'sm' | 'md' | 'lg';

export interface DropdownOption {
  key: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface DropdownProps {
  label?: string;
  placeholder?: string;
  items: DropdownOption[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (keys: string[]) => void;
  disabled?: boolean;
  size?: DropdownSize;
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
}

const sizeStyles: Record<DropdownSize, string> = {
  sm: 'luca-min-h-10',
  md: 'luca-min-h-11',
  lg: 'luca-min-h-12',
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
  overlayClassName,
  className,
  wrapperClassName,
  multiple = true,
  selectAll = false,
  selectAllLabel = 'Seleccionar todo',
  allSelectedLabel = 'Todos los elementos seleccionados',
  summaryMaxItems = 3,
  enableSearch = false,
  virtualizationThreshold = 10,
  virtualListHeight = 256,
  virtualItemHeight = 40,
}) => {
  const [internalValue, setInternalValue] = React.useState<string[]>(
    defaultValue ?? []
  );
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('');
  const isControlled = value !== undefined;
  const selectedKeys = isControlled ? value! : internalValue;

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
    () => items.filter((item) => !item.disabled).map((item) => item.key),
    [items]
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
      enabledKeys.length > 0 &&
      enabledKeys.every((key) => selectedKeys.includes(key));

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
    return items.filter((item) =>
      `${item.label} ${item.description ?? ''}`.toLowerCase().includes(normalized)
    );
  }, [enableSearch, items, searchTerm]);

  const renderItem = React.useCallback(
    (item: DropdownOption) => (
      <DropdownItem
        key={item.key}
        label={item.label}
        description={item.description}
        checked={selectedKeys.includes(item.key)}
        disabled={item.disabled}
        onToggle={() => toggleKey(item.key)}
      />
    ),
    [selectedKeys, toggleKey]
  );

  const shouldVirtualize =
    filteredItems.length > virtualizationThreshold &&
    filteredItems.length > 0;

  const areAllEnabledSelected =
    enabledKeys.length > 0 &&
    enabledKeys.every((key) => selectedKeys.includes(key));

  const hasPartialSelection =
    !areAllEnabledSelected &&
    selectedKeys.some((key) => enabledKeys.includes(key));

  const summaryContent = React.useMemo<React.ReactNode>(() => {
    if (selectedKeys.length === 0) {
      return (
        <span className="luca-text-sm luca-font-medium luca-text-neutral-500">
          {placeholder}
        </span>
      );
    }

    if (!multiple) {
      const key = selectedKeys[0];
      const label =
        items.find((item) => item.key === key)?.label ?? placeholder;
      return (
        <>
          {label}
        </>
      );
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
          className="luca-m-0 luca-bg-primary-50 luca-text-primary-600 luca-rounded-full luca-px-2 luca-py-0.5 luca-text-xs luca-font-semibold luca-leading-5"
          closeIcon={
            <span className="luca-ml-1 luca-text-primary-600 luca-font-bold">
              ×
            </span>
          }
        >
          {allSelectedLabel}
        </Tag>
      );
    }

    const visibleItems = items.filter((item) =>
      selectedKeys.includes(item.key)
    );

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
  ]);

  const menuContent = React.useMemo(() => {
    const virtualList = (
      <VirtualList
        data={filteredItems}
        height={virtualListHeight}
        itemHeight={virtualItemHeight}
        itemKey="key"
      >
        {(item: DropdownOption) => renderItem(item)}
      </VirtualList>
    );

    const regularList = (
      <div className="luca-flex luca-flex-col luca-gap-1 luca-max-h-[320px] luca-overflow-y-auto luca-pr-1">
        {filteredItems.map((item) => renderItem(item))}
      </div>
    );

    return (
      <div className="luca-flex luca-w-[min(320px,100vw)] luca-flex-col luca-gap-3 luca-rounded-xl luca-bg-white luca-p-2 luca-shadow-lg">
        {enableSearch && (
          <Input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar..."
            className="luca-rounded-lg luca-border luca-border-neutral-200 luca-text-sm"
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
  ]);

  return (
    <div
      className={cn(
        'luca-flex luca-w-[min(320px,100vw)] luca-flex-col luca-gap-2',
        wrapperClassName
      )}
    >
      {label && (
        <label className="luca-text-sm luca-font-medium luca-leading-6 luca-text-neutral-900">
          {label}
        </label>
      )}
      <AntDropdown
        trigger={['click']}
        disabled={disabled}
        open={open}
        onOpenChange={setOpen}
        menu={{
          items: [],
        }}
        dropdownRender={() => menuContent}
        overlayClassName={cn('luca-dropdown-overlay', overlayClassName)}
      >
        <button
          type="button"
          className={cn(
            'luca-flex luca-w-full luca-items-start luca-justify-between luca-rounded-2xl luca-border luca-border-neutral-200 luca-bg-white luca-px-4 luca-py-2 luca-text-sm luca-font-medium luca-text-neutral-500 luca-transition-colors luca-duration-200',
            'hover:luca-border-primary-100 hover:luca-text-primary-600',
            'focus:luca-border-primary-200 focus:luca-text-primary-600 focus:luca-outline-none focus:luca-ring-2 focus:luca-ring-primary-200',
            disabled &&
              'luca-cursor-not-allowed luca-border-neutral-200 luca-bg-neutral-100 luca-text-neutral-400',
            sizeStyles[size],
            className
          )}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <div className="luca-flex luca-max-w-[calc(100%-1.75rem)] luca-flex-wrap luca-gap-1 luca-items-center luca-whitespace-normal luca-text-left">
            {summaryContent}
          </div>
          <ChevronDownIcon size={16} className="luca-text-primary-600" />
        </button>
      </AntDropdown>
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
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  description,
  checked,
  disabled,
  onToggle,
  indeterminate = false,
}) => {
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
        'luca-flex luca-w-full luca-items-center luca-gap-3 luca-rounded-xl luca-px-2 luca-py-1.5 luca-transition-colors luca-duration-150',
        checked ? 'luca-bg-primary-50' : 'luca-bg-white',
        'hover:luca-bg-neutral-100 focus:luca-outline-none focus:luca-ring-2 focus:luca-ring-primary-100',
        disabled && 'luca-cursor-not-allowed luca-opacity-70'
      )}
    >
      <span
        className={cn(
          'luca-flex luca-h-6 luca-w-6 luca-items-center luca-justify-center luca-rounded-lg luca-border-2 luca-transition-colors luca-duration-150',
          checked
            ? 'luca-border-primary-500 luca-bg-primary-500 luca-text-white'
            : 'luca-border-neutral-200 luca-bg-white luca-text-transparent'
        )}
        aria-hidden
      >
        {checked ? (
          <CheckIcon size={14} />
        ) : indeterminate ? (
          <MinusIcon size={12} />
        ) : null}
      </span>
      <div className="luca-flex luca-min-w-0 luca-flex-col luca-items-start luca-gap-0.5">
        <span className="luca-text-sm luca-font-medium luca-text-neutral-700 luca-truncate">
          {label}
        </span>
        {description && (
          <span className="luca-text-xs luca-font-normal luca-text-neutral-400 luca-truncate">
            {description}
          </span>
        )}
      </div>
    </button>
  );
};

DropdownItem.displayName = 'DropdownItem';


