import React from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { cn } from '../utils/cn';

export type SearchBarStyle = 'reading' | 'examsGenerator';

export interface SearchBarProps {
  setSearchInput?: (value: string) => void;
  searchInput?: string;
  personalStyles?: SearchBarStyle;
  className?: string;
  inputClassName?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  setSearchInput,
  searchInput,
  personalStyles,
  className,
  inputClassName,
}) => {
  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput?.(event.target.value);
  };

  const containerClassName = cn(
    'luca-flex luca-w-full luca-items-center luca-justify-start',
    personalStyles === 'reading' &&
      'luca-h-[50px] luca-rounded-[10px] luca-bg-[#e6e7ef] luca-px-5 luca-py-[10px]',
    personalStyles === 'examsGenerator' &&
      'luca-h-10 luca-gap-2 luca-rounded-lg luca-border luca-border-[#e5e7eb] luca-bg-[#f9fafb] luca-px-4 luca-py-2',
    !personalStyles &&
      'luca-min-h-[40px] luca-rounded-[10px] luca-bg-[#e6e7ef] luca-px-5 luca-py-[10px]',
    className
  );

  const inputClasses = cn(
    'luca-w-full luca-border-none luca-bg-transparent luca-outline-none',
    personalStyles === 'examsGenerator'
      ? 'luca-flex-1 luca-text-sm luca-text-[#111827] placeholder:luca-text-[#9ca3af]'
      : 'luca-pl-2.5 luca-text-base',
    inputClassName
  );

  const iconClasses = cn(
    personalStyles === 'reading' && 'luca-h-[18px] luca-w-[18px]',
    personalStyles === 'examsGenerator' &&
      'luca-h-4 luca-w-4 luca-flex-shrink-0 luca-opacity-50',
    !personalStyles && 'luca-h-5 luca-w-5'
  );

  return (
    <div className={containerClassName}>
      <input
        type="text"
        name="searchbar"
        placeholder={
          personalStyles === 'examsGenerator' ? 'Buscar por nombre' : 'Buscar'
        }
        onChange={handleSearchInput}
        value={searchInput ?? ''}
        className={inputClasses}
      />
      <SearchOutlined className={iconClasses} />
    </div>
  );
};

SearchBar.displayName = 'SearchBar';

export default SearchBar;

