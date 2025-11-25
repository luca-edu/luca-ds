import { default as React } from 'react';
export type SearchBarStyle = 'reading' | 'examsGenerator';
export type SearchBarSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'default';
export interface SearchBarProps {
    setSearchInput?: (value: string) => void;
    searchInput?: string;
    size?: SearchBarSize;
    className?: string;
    inputClassName?: string;
    placeholder?: string;
    enableDebounce?: boolean;
    debounceTime?: number;
}
export declare const SearchBar: React.FC<SearchBarProps>;
export default SearchBar;
//# sourceMappingURL=SearchBar.d.ts.map