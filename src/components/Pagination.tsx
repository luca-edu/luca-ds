import React from 'react';
import { cn } from '../utils/cn';
import { Select } from 'antd';
import { ChevronLeftIcon, ChevronRightIcon } from '../shared/icons';

export type PaginationVariant =
  | 'primary'
  | 'neutral'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export type PaginationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Color variant
   * @default 'primary'
   */
  variant?: PaginationVariant;

  /**
   * Size of the pagination
   * @default 'md'
   */
  size?: PaginationSize;

  /**
   * Current page number (1-based)
   * @default 1
   */
  current?: number;

  /**
   * Total number of items
   */
  total: number;

  /**
   * Number of items per page
   * @default 10
   */
  pageSize?: number;

  /**
   * Available page size options
   * @default [10, 20, 50, 100]
   */
  pageSizeOptions?: number[];

  /**
   * Show page size selector
   * @default true
   */
  showSizeChanger?: boolean;

  /**
   * Label for rows selector
   * @default 'Filas'
   */
  rowsLabel?: string;

  /**
   * Template for showing range info
   * Use {start}, {end}, {total} as placeholders
   * @default 'Mostrando {start}-{end} de {total}'
   */
  showTotalTemplate?: string;

  /**
   * Show total info
   * @default true
   */
  showTotal?: boolean;

  /**
   * Previous button text
   * @default 'Anterior'
   */
  prevText?: string;

  /**
   * Next button text
   * @default 'Siguiente'
   */
  nextText?: string;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Callback when page changes
   */
  onChange?: (page: number, pageSize: number) => void;

  /**
   * Callback when page size changes
   */
  onShowSizeChange?: (current: number, size: number) => void;
}

const paginationSizeStyles: Record<PaginationSize, { button: string; text: string; gap: string }> =
  {
    xs: {
      button: 'luca-px-2 luca-py-1 luca-text-xs luca-gap-1',
      text: 'luca-text-[10px]',
      gap: 'luca-gap-2',
    },
    sm: {
      button: 'luca-px-2.5 luca-py-1.5 luca-text-xs luca-gap-1',
      text: 'luca-text-xs',
      gap: 'luca-gap-2.5',
    },
    md: {
      button: 'luca-px-3 luca-py-2 luca-text-sm luca-gap-1.5',
      text: 'luca-text-xs',
      gap: 'luca-gap-3',
    },
    lg: {
      button: 'luca-px-4 luca-py-2.5 luca-text-base luca-gap-2',
      text: 'luca-text-sm',
      gap: 'luca-gap-4',
    },
    xl: {
      button: 'luca-px-5 luca-py-3 luca-text-lg luca-gap-2.5',
      text: 'luca-text-base',
      gap: 'luca-gap-4',
    },
  };

const paginationVariantStyles: Record<PaginationVariant, { next: string; prev: string }> = {
  primary: {
    next: 'luca-text-primary-600 hover:luca-text-primary-700 hover:luca-bg-primary-50',
    prev: 'luca-text-neutral-700 hover:luca-text-neutral-900 hover:luca-bg-neutral-50',
  },
  neutral: {
    next: 'luca-text-neutral-600 hover:luca-text-neutral-700 hover:luca-bg-neutral-50',
    prev: 'luca-text-neutral-700 hover:luca-text-neutral-900 hover:luca-bg-neutral-50',
  },
  accent: {
    next: 'luca-text-accent-700 hover:luca-text-accent-800 hover:luca-bg-accent-50',
    prev: 'luca-text-neutral-700 hover:luca-text-neutral-900 hover:luca-bg-neutral-50',
  },
  success: {
    next: 'luca-text-success-600 hover:luca-text-success-700 hover:luca-bg-success-50',
    prev: 'luca-text-neutral-700 hover:luca-text-neutral-900 hover:luca-bg-neutral-50',
  },
  warning: {
    next: 'luca-text-warning-600 hover:luca-text-warning-700 hover:luca-bg-warning-50',
    prev: 'luca-text-neutral-700 hover:luca-text-neutral-900 hover:luca-bg-neutral-50',
  },
  danger: {
    next: 'luca-text-danger-600 hover:luca-text-danger-700 hover:luca-bg-danger-50',
    prev: 'luca-text-neutral-700 hover:luca-text-neutral-900 hover:luca-bg-neutral-50',
  },
  info: {
    next: 'luca-text-info-600 hover:luca-text-info-700 hover:luca-bg-info-50',
    prev: 'luca-text-neutral-700 hover:luca-text-neutral-900 hover:luca-bg-neutral-50',
  },
};

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      current = 1,
      total,
      pageSize: pageSizeProp = 10,
      pageSizeOptions = [10, 20, 50, 100],
      showSizeChanger = true,
      rowsLabel = 'Filas',
      showTotalTemplate = 'Mostrando {start}-{end} de {total}',
      showTotal = true,
      prevText = 'Anterior',
      nextText = 'Siguiente',
      disabled = false,
      onChange,
      onShowSizeChange,
      className,
      ...props
    },
    ref
  ) => {
    const [currentPage, setCurrentPage] = React.useState(current);
    const [pageSize, setPageSize] = React.useState(pageSizeProp);

    React.useEffect(() => {
      setCurrentPage(current);
    }, [current]);

    React.useEffect(() => {
      setPageSize(pageSizeProp);
    }, [pageSizeProp]);

    const totalPages = Math.ceil(total / pageSize);
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, total);

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage >= totalPages;

    const styles = paginationVariantStyles[variant];
    const sizeStyles = paginationSizeStyles[size];

    const handlePrevClick = () => {
      if (!disabled && !isFirstPage) {
        const newPage = currentPage - 1;
        setCurrentPage(newPage);
        onChange?.(newPage, pageSize);
      }
    };

    const handleNextClick = () => {
      if (!disabled && !isLastPage) {
        const newPage = currentPage + 1;
        setCurrentPage(newPage);
        onChange?.(newPage, pageSize);
      }
    };

    const handlePageSizeChange = (value: number) => {
      if (!disabled) {
        const newPageSize = value;
        const newTotalPages = Math.ceil(total / newPageSize);
        const newPage = Math.min(currentPage, newTotalPages);

        setPageSize(newPageSize);
        setCurrentPage(newPage);
        onShowSizeChange?.(newPage, newPageSize);
        onChange?.(newPage, newPageSize);
      }
    };

    const totalText = showTotalTemplate
      .replace('{start}', String(startItem))
      .replace('{end}', String(endItem))
      .replace('{total}', String(total));

    return (
      <div
        ref={ref}
        className={cn(
          'luca-flex luca-w-full luca-items-center luca-justify-between luca-rounded-b-xl luca-bg-white luca-px-5 luca-py-3',
          disabled && 'luca-opacity-50 luca-pointer-events-none',
          className
        )}
        {...props}
      >
        {/* Left side - Rows selector and info */}
        <div className={cn('luca-flex luca-items-center', sizeStyles.gap)}>
          {showSizeChanger && (
            <>
              <span className={cn('luca-font-normal luca-text-neutral-500', sizeStyles.text)}>
                {rowsLabel}
              </span>
              <Select
                value={pageSize}
                onChange={handlePageSizeChange}
                disabled={disabled}
                size="small"
                className="luca-pagination-select"
                popupClassName="luca-pagination-select-dropdown"
                suffixIcon={
                  <ChevronRightIcon size={16} className="luca-rotate-90 luca-text-primary-600" />
                }
                style={{ width: 64 }}
                options={pageSizeOptions.map((option) => ({
                  label: String(option),
                  value: option,
                }))}
              />
            </>
          )}
          {showTotal && total > 0 && (
            <span className={cn('luca-font-normal luca-text-neutral-500', sizeStyles.text)}>
              {totalText}
            </span>
          )}
        </div>

        {/* Right side - Navigation buttons */}
        <div className={cn('luca-flex luca-items-center', sizeStyles.gap)}>
          <button
            type="button"
            onClick={handlePrevClick}
            disabled={disabled || isFirstPage}
            className={cn(
              'luca-inline-flex luca-items-center luca-justify-center luca-rounded-xl luca-border luca-border-neutral-200 luca-bg-white luca-font-normal luca-transition-all luca-duration-200',
              sizeStyles.button,
              styles.prev,
              'focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-primary-200',
              (disabled || isFirstPage) &&
                'luca-cursor-not-allowed luca-opacity-50 hover:luca-bg-white hover:luca-text-neutral-700'
            )}
          >
            <ChevronLeftIcon size={16} />
            <span>{prevText}</span>
          </button>

          <button
            type="button"
            onClick={handleNextClick}
            disabled={disabled || isLastPage}
            className={cn(
              'luca-inline-flex luca-items-center luca-justify-center luca-rounded-xl luca-border luca-border-neutral-200 luca-bg-neutral-50 luca-font-normal luca-transition-all luca-duration-200',
              sizeStyles.button,
              styles.next,
              'focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-primary-200',
              (disabled || isLastPage) &&
                'luca-cursor-not-allowed luca-opacity-50 hover:luca-bg-neutral-50'
            )}
          >
            <span>{nextText}</span>
            <ChevronRightIcon size={16} />
          </button>
        </div>
      </div>
    );
  }
);

Pagination.displayName = 'Pagination';
