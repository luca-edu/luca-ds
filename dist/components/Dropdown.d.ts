import { default as React } from 'react';
type DropdownSize = 'sm' | 'md' | 'lg';
export type DropdownVariant = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
export interface DropdownOption {
    key: string;
    label: string;
    description?: string;
    disabled?: boolean;
    [key: string]: any;
}
export interface DropdownProps {
    label?: string;
    placeholder?: string;
    items: Record<string, any>[];
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
export declare const Dropdown: React.FC<DropdownProps>;
export interface DropdownItemProps {
    label: string;
    description?: string;
    checked?: boolean;
    disabled?: boolean;
    onToggle?: () => void;
    indeterminate?: boolean;
    variant?: DropdownVariant;
}
export declare const DropdownItem: React.FC<DropdownItemProps>;
export {};
//# sourceMappingURL=Dropdown.d.ts.map