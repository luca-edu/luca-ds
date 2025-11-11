import { default as React } from '../../node_modules/react';
export type SearchBarStyle = 'reading' | 'examsGenerator';
export interface SearchBarProps {
    setSearchInput?: (value: string) => void;
    searchInput?: string;
    personalStyles?: SearchBarStyle;
    className?: string;
    inputClassName?: string;
}
export declare const SearchBar: React.FC<SearchBarProps>;
export default SearchBar;
//# sourceMappingURL=SearchBar.d.ts.map