import { default as React } from '../../node_modules/react';
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
export declare const Dropdown: React.FC<DropdownProps>;
export interface DropdownItemProps {
    label: string;
    description?: string;
    checked?: boolean;
    disabled?: boolean;
    onToggle?: () => void;
    indeterminate?: boolean;
}
export declare const DropdownItem: React.FC<DropdownItemProps>;
export {};
//# sourceMappingURL=Dropdown.d.ts.map