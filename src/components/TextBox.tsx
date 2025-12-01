import React, { useRef, useEffect, KeyboardEvent } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { cn } from '../utils/cn';

export interface TextBoxProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onSubmit'> {
  /**
   * Placeholder text shown when textarea is empty
   * @default "Write answer"
   */
  placeholder?: string;

  /**
   * Current value of the textarea
   */
  value?: string;

  /**
   * Callback fired when value changes
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

  /**
   * Callback fired when submit button is clicked or Enter is pressed (without Shift)
   */
  onSubmit?: (value: string) => void;

  /**
   * Maximum number of characters allowed
   */
  maxLength?: number;

  /**
   * Whether the textarea is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Maximum width of the container
   */
  maxWidth?: string | number;

  /**
   * Additional className for the container
   */
  className?: string;
}

export const TextBox = React.forwardRef<HTMLTextAreaElement, TextBoxProps>(
  (
    {
      placeholder = 'Write answer',
      value = '',
      onChange,
      onSubmit,
      maxLength,
      disabled = false,
      className,
      maxWidth,
      ...props
    },
    ref
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const isFocused = document.activeElement === textareaRef.current;
    const hasContent = value.length > 0;
    const canSubmit = hasContent && !disabled;

    // Auto-resize textarea based on content
    useEffect(() => {
      const textarea = textareaRef.current;
      if (textarea) {
        // Reset height to auto to get the correct scrollHeight
        textarea.style.height = 'auto';
        // Set height to scrollHeight to fit content
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [value]);

    // Handle submit button click
    const handleSubmit = () => {
      if (canSubmit && onSubmit) {
        onSubmit(value);
      }
    };

    // Handle container click to focus textarea
    const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
      // Don't focus if clicking the submit button
      if ((event.target as HTMLElement).closest('button')) {
        return;
      }
      textareaRef.current?.focus();
    };

    // Handle keyboard events
    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      // Submit on Enter (without Shift)
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        handleSubmit();
      }

      // Call original onKeyDown if provided
      props.onKeyDown?.(event);
    };

    // Combine refs
    const setRefs = (element: HTMLTextAreaElement | null) => {
      textareaRef.current = element;
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    return (
      <div
        style={{ maxWidth }}
        className={cn(
          'luca-flex luca-flex-col luca-min-h-[96px] luca-h-auto luca-w-full luca-isolate',
          className
        )}
      >
        <div
          onClick={handleContainerClick}
          className={cn(
            'luca-flex-1 luca-min-h-[96px] luca-w-full luca-relative luca-z-[1]',
            'luca-bg-white luca-rounded-[16px]',
            'luca-border luca-border-solid luca-border-neutral-200',
            disabled ? 'luca-opacity-60 luca-cursor-not-allowed' : 'luca-cursor-text',
            disabled && 'luca-opacity-60 luca-cursor-not-allowed'
          )}
        >
          <div className="luca-box-border luca-flex luca-flex-col luca-gap-4 luca-overflow-clip luca-p-4 luca-relative luca-rounded-[inherit] luca-w-full luca-h-full">
            {/* Textarea Container */}
            <div className="luca-flex luca-flex-1 luca-flex-col luca-items-start luca-relative">
              <textarea
                ref={setRefs}
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                maxLength={maxLength}
                disabled={disabled}
                className={cn(
                  'luca-w-full luca-h-full',
                  'luca-font-sans luca-text-base luca-leading-6',
                  'luca-resize-none luca-overflow-hidden',
                  'luca-bg-transparent luca-border-none luca-outline-none',
                  'luca-whitespace-pre-wrap',
                  hasContent || isFocused
                    ? 'luca-text-neutral-900 luca-font-medium'
                    : 'luca-text-neutral-400 luca-font-normal',
                  disabled && 'luca-cursor-not-allowed'
                )}
                rows={1}
                {...props}
              />
            </div>

            {/* Submit Button Container */}
            <div className="luca-flex luca-justify-end luca-items-end">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canSubmit}
                className={cn(
                  'luca-flex luca-items-center luca-justify-center',
                  'luca-relative luca-rounded-2xl luca-shrink-0 luca-size-8',
                  'luca-transition-colors luca-duration-200',
                  canSubmit
                    ? 'luca-bg-primary-600 hover:luca-bg-primary-700 luca-cursor-pointer'
                    : 'luca-bg-neutral-100 luca-cursor-not-allowed',
                  'luca-border-none luca-p-0'
                )}
                aria-label="Send message"
              >
                <div className="luca-flex luca-items-center luca-justify-center luca-relative luca-shrink-0 luca-size-[22.627px]">
                  <div className="luca-flex-none luca-rotate-[-45deg]">
                    <PaperAirplaneIcon
                      className={cn(
                        'luca-size-4',
                        canSubmit ? 'luca-text-white' : 'luca-text-neutral-400'
                      )}
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

TextBox.displayName = 'TextBox';
