import { default as React } from 'react';
export interface ChipItem {
    id: string | number;
    title: string;
}
export interface ChipsProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Array of chip items to display
     */
    chips: ChipItem[];
    /**
     * Callback when a chip is removed
     */
    onRemove?: (id: string | number) => void;
    /**
     * Whether chips are removable (shows close button)
     * @default true
     */
    removable?: boolean;
    /**
     * Custom className for the container
     */
    className?: string;
    /**
     * Custom className for each chip
     */
    chipClassName?: string;
}
export declare const Chips: React.ForwardRefExoticComponent<ChipsProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Chips.d.ts.map