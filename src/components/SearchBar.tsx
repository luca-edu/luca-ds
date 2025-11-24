import React from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { cn } from '../utils/cn';

export type SearchBarStyle = 'reading' | 'examsGenerator';
export type SearchBarSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'default';

export interface SearchBarProps {
  setSearchInput?: (value: string) => void;
  searchInput?: string;
  size?: SearchBarSize;
  className?: string;
  inputClassName?: string;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  setSearchInput,
  searchInput,
  size = 'default',
  className,
  inputClassName,
  placeholder = 'Buscar',
}) => {
  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput?.(event.target.value);
  };

  // Estilos de tamaño para el contenedor
  const getSizeContainerStyles = () => {
    
    switch (size) {
      case 'sm':
        return 'luca-min-h-[32px] luca-px-3 luca-py-1.5';
      case 'md':
        return 'luca-min-h-[40px] luca-px-4 luca-py-2';
      case 'lg':
        return 'luca-min-h-[48px] luca-px-5 luca-py-2.5';
      case 'xl':
        return 'luca-min-h-[56px] luca-px-6 luca-py-3';
      case 'xxl':
        return 'luca-min-h-[64px] luca-px-7 luca-py-3.5';
      case 'default':
      default:
        return 'luca-min-h-[40px] luca-px-5 luca-py-[10px]';
    }
  };

  const containerClassName = cn(
    'luca-flex luca-w-full luca-items-center luca-justify-start',
    'luca-h-10 luca-gap-2 luca-rounded-lg luca-border luca-border-[#e5e7eb] luca-bg-[#f9fafb] luca-px-4 luca-py-2',
    cn(
      'luca-rounded-[10px] luca-bg-[#e6e7ef]',
      getSizeContainerStyles()
    ),
    className
  );

  // Estilos de tamaño para el input
  const getSizeInputStyles = () => {
    
    switch (size) {
      case 'sm':
        return 'luca-text-xs';
      case 'md':
        return 'luca-text-sm';
      case 'lg':
        return 'luca-text-base';
      case 'xl':
        return 'luca-text-lg';
      case 'xxl':
        return 'luca-text-xl';
      case 'default':
      default:
        return 'luca-text-base';
    }
  };

  const inputClasses = cn(
    'luca-w-full luca-border-none luca-bg-transparent luca-outline-none',
    getSizeInputStyles(),
    inputClassName
  );

  // Estilos de tamaño para el icono
  const getSizeIconStyles = () => {
    
    switch (size) {
      case 'sm':
        return 'luca-h-3 luca-w-3';
      case 'md':
        return 'luca-h-4 luca-w-4';
      case 'lg':
        return 'luca-h-5 luca-w-5';
      case 'xl':
        return 'luca-h-6 luca-w-6';
      case 'xxl':
        return 'luca-h-7 luca-w-7';
      case 'default':
      default:
        return 'luca-h-5 luca-w-5';
    }
  };

  const iconClasses = cn(
    'luca-h-4 luca-w-4 luca-flex-shrink-0 luca-opacity-50', 
    getSizeIconStyles()
  );

  return (
    <div className={containerClassName}>
      <input
        type="text"
        name="searchbar"
        placeholder={placeholder}
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

