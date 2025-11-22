import { default as React } from '../../node_modules/react';
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
export declare const TabList: React.ForwardRefExoticComponent<TabListProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=TabList.d.ts.map