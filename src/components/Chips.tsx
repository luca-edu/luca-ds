import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { cn } from '../utils/cn';

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

export const Chips = React.forwardRef<HTMLDivElement, ChipsProps>(
  (
    {
      chips,
      onRemove,
      removable = true,
      className,
      chipClassName,
      ...props
    },
    ref
  ) => {
    const handleRemove = (id: string | number) => {
      if (onRemove) {
        onRemove(id);
      }
    };

    if (!chips || chips.length === 0) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          'luca-flex luca-flex-row luca-flex-wrap luca-items-start luca-gap-3 luca-w-full luca-p-0',
          className
        )}
        {...props}
      >
        {chips.map((chip) => (
          <div
            key={chip.id}
            className={cn(
              'luca-flex luca-flex-row luca-items-center luca-justify-center luca-gap-2 luca-px-3 luca-py-2 luca-bg-[#EDF5FF] luca-rounded-full luca-border luca-border-[#E5E7EB] luca-max-w-full',
              chipClassName
            )}
          >
            <span
              className="luca-whitespace-nowrap luca-overflow-hidden luca-text-ellipsis luca-font-normal luca-text-sm luca-text-[#111827] luca-leading-[1.5]"
              style={{ fontFamily: 'Poppins-Regular, sans-serif' }}
            >
              {chip.title}
            </span>
            {removable && onRemove && (
              <button
                type="button"
                className={cn(
                  'luca-flex luca-flex-row luca-items-center luca-justify-center luca-w-4 luca-h-4 luca-bg-transparent luca-border-0 luca-cursor-pointer luca-p-0 luca-flex-shrink-0 luca-text-[#6b7280] luca-text-xs luca-transition-all luca-duration-200',
                  'hover:luca-text-[#111827] active:luca-scale-90'
                )}
                onClick={() => handleRemove(chip.id)}
                aria-label={`Eliminar ${chip.title}`}
              >
                <CloseOutlined />
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }
);

Chips.displayName = 'Chips';
