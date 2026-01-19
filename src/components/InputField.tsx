import React from 'react';
import { cn } from '../utils/cn';
import { Input } from 'antd';
import type { InputProps } from 'antd';
import { Tooltip } from './Tooltip';
import { QuestionIcon } from '../shared/icons';

type FieldStatus = 'default' | 'danger';

interface FieldBaseProps {
  label?: string;
  required?: boolean;
  tooltip?: string;
  helpText?: string;
  message?: React.ReactNode;
  status?: FieldStatus;
  showCounter?: boolean;
  wrapperClassName?: string;
  enableDebounce?: boolean;
  debounceTime?: number;
}

type ControlledValue = string | number | readonly string[] | undefined;

function valueToString(value: ControlledValue): string {
  if (value === undefined || value === null) {
    return '';
  }

  if (Array.isArray(value)) {
    return value.join('');
  }

  return String(value);
}

function useFieldValue<T extends HTMLInputElement | HTMLTextAreaElement>({
  value,
  defaultValue,
}: {
  value: ControlledValue;
  defaultValue: ControlledValue;
}) {
  const isControlled = value !== undefined && value !== null;
  const initialValue = React.useMemo(
    () => valueToString(isControlled ? value : defaultValue),
    [defaultValue, isControlled, value]
  );
  const [uncontrolledValue, setUncontrolledValue] = React.useState(initialValue);

  React.useEffect(() => {
    if (!isControlled) {
      setUncontrolledValue(valueToString(defaultValue));
    }
  }, [defaultValue, isControlled]);

  const currentValue = isControlled ? valueToString(value) : uncontrolledValue;

  const handleUncontrolledChange = React.useCallback((event: React.ChangeEvent<T>) => {
    setUncontrolledValue(event.target.value);
  }, []);

  return {
    isControlled,
    currentValue,
    handleUncontrolledChange,
  };
}

export interface InputFieldProps
  extends FieldBaseProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children' | 'size'> {
  size?: InputProps['size'];
}

type AntInputRef = React.ComponentRef<typeof Input>;

export const InputField = React.forwardRef<AntInputRef, InputFieldProps>(
  (
    {
      label,
      required,
      tooltip,
      helpText,
      message,
      status = 'default',
      showCounter = false,
      wrapperClassName,
      className,
      id: idProp,
      disabled,
      type = 'text',
      value,
      onChange,
      maxLength,
      defaultValue,
      enableDebounce = false,
      debounceTime = 300,
      ...rest
    },
    ref
  ) => {
    const generatedId = React.useId();
    const fieldId = idProp ?? generatedId;
    const helpTextId = helpText ? `${fieldId}-help` : undefined;
    const messageId = status === 'danger' && message ? `${fieldId}-message` : undefined;
    const composedDescribedBy =
      [helpTextId, messageId, rest['aria-describedby']].filter(Boolean).join(' ') || undefined;

    const { isControlled, currentValue, handleUncontrolledChange } =
      useFieldValue<HTMLInputElement>({ value, defaultValue });

    const charCount = currentValue.length;
    const counterVisible = showCounter || typeof maxLength === 'number';
    const counterText = counterVisible
      ? typeof maxLength === 'number'
        ? `${charCount}/${maxLength}`
        : `${charCount}`
      : undefined;

    const debounceTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
      return () => {
        if (debounceTimeoutRef.current) {
          clearTimeout(debounceTimeoutRef.current);
        }
      };
    }, []);

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
          handleUncontrolledChange(event);
        }

        if (enableDebounce) {
          if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
          }
          debounceTimeoutRef.current = setTimeout(() => {
            onChange?.(event);
          }, debounceTime);
        } else {
          onChange?.(event);
        }
      },
      [handleUncontrolledChange, isControlled, onChange, enableDebounce, debounceTime]
    );

    return (
      <div className={cn('luca-flex luca-w-full luca-flex-col luca-gap-2', wrapperClassName)}>
        {(label || tooltip) && (
          <div className="luca-flex luca-items-center luca-gap-2">
            {label && (
              <label
                htmlFor={fieldId}
                className="luca-flex luca-items-center luca-gap-1 luca-text-base luca-font-medium luca-leading-6 luca-text-neutral-900"
              >
                <span>
                  {label}
                  {required && <span className="luca-pl-1">*</span>}
                </span>
              </label>
            )}
            {tooltip && (
              <Tooltip content={tooltip}>
                <button
                  type="button"
                  className="luca-inline-flex luca-h-5 luca-w-5 luca-items-center luca-justify-center luca-text-primary-600"
                >
                  <QuestionIcon size={16} />
                </button>
              </Tooltip>
            )}
          </div>
        )}

        {helpText && (
          <p
            id={helpTextId}
            className="luca-text-xs luca-font-normal luca-leading-6 luca-text-neutral-400"
          >
            {helpText}
          </p>
        )}

        <div className="luca-flex luca-flex-col luca-gap-1">
          <Input
            ref={ref}
            id={fieldId}
            type={type}
            disabled={disabled}
            value={currentValue}
            maxLength={maxLength}
            status={status === 'danger' ? 'error' : undefined}
            className={cn(
              'luca-h-12 luca-w-full luca-rounded-[8px] luca-border luca-border-neutral-200 luca-bg-white luca-px-4 luca-text-base luca-leading-6 luca-text-neutral-700 luca-transition-colors luca-duration-200',
              'placeholder:luca-text-neutral-400 placeholder:luca-opacity-100 placeholder:luca-text-base',
              !disabled &&
                'hover:luca-border-primary-100 focus:luca-border-primary-200 focus:luca-ring-2 focus:luca-ring-primary-200 focus:luca-outline-none',
              disabled &&
                'luca-cursor-not-allowed luca-border-neutral-200 luca-bg-neutral-100 luca-text-neutral-400',
              className
            )}
            aria-invalid={status === 'danger' || undefined}
            aria-describedby={composedDescribedBy}
            onChange={handleChange}
            {...rest}
          />

          {counterVisible && counterText && (
            <div className="luca-flex luca-justify-end">
              <span className="luca-text-xs luca-font-normal luca-leading-tight luca-text-neutral-400">
                {counterText}
              </span>
            </div>
          )}

          {status === 'danger' && message && (
            <p
              id={messageId}
              className="luca-text-xs luca-font-medium luca-leading-6 luca-text-danger-500"
            >
              {message}
            </p>
          )}
        </div>
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export interface TextAreaFieldProps
  extends FieldBaseProps, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'children'> {}

type AntTextAreaRef = React.ComponentRef<typeof Input.TextArea>;

export const TextAreaField = React.forwardRef<AntTextAreaRef, TextAreaFieldProps>(
  (
    {
      label,
      required,
      tooltip,
      helpText,
      message,
      status = 'default',
      showCounter = true,
      wrapperClassName,
      className,
      id: idProp,
      disabled,
      value,
      onChange,
      maxLength,
      rows = 6,
      defaultValue,
      enableDebounce = false,
      debounceTime = 300,
      ...rest
    },
    ref
  ) => {
    const generatedId = React.useId();
    const fieldId = idProp ?? generatedId;
    const helpTextId = helpText ? `${fieldId}-help` : undefined;
    const messageId = status === 'danger' && message ? `${fieldId}-message` : undefined;
    const composedDescribedBy =
      [helpTextId, messageId, rest['aria-describedby']].filter(Boolean).join(' ') || undefined;

    const { isControlled, currentValue, handleUncontrolledChange } =
      useFieldValue<HTMLTextAreaElement>({ value, defaultValue });

    const charCount = currentValue.length;
    const counterVisible = showCounter || typeof maxLength === 'number';
    const counterText = counterVisible
      ? typeof maxLength === 'number'
        ? `${charCount}/${maxLength}`
        : `${charCount}`
      : undefined;

    const debounceTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
      return () => {
        if (debounceTimeoutRef.current) {
          clearTimeout(debounceTimeoutRef.current);
        }
      };
    }, []);

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (!isControlled) {
          handleUncontrolledChange(event);
        }

        if (enableDebounce) {
          if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
          }
          debounceTimeoutRef.current = setTimeout(() => {
            onChange?.(event);
          }, debounceTime);
        } else {
          onChange?.(event);
        }
      },
      [handleUncontrolledChange, isControlled, onChange, enableDebounce, debounceTime]
    );

    return (
      <div className={cn('luca-flex luca-w-full luca-flex-col luca-gap-2', wrapperClassName)}>
        {(label || tooltip) && (
          <div className="luca-flex luca-items-center luca-gap-2">
            {label && (
              <label
                htmlFor={fieldId}
                className="luca-flex luca-items-center luca-gap-1 luca-text-base luca-font-medium luca-leading-6 luca-text-neutral-900"
              >
                <span>
                  {label}
                  {required && <span className="luca-pl-1">*</span>}
                </span>
              </label>
            )}
            {tooltip && (
              <Tooltip content={tooltip}>
                <button
                  type="button"
                  className="luca-inline-flex luca-h-5 luca-w-5 luca-items-center luca-justify-center luca-text-primary-600"
                >
                  <QuestionIcon size={16} />
                </button>
              </Tooltip>
            )}
          </div>
        )}

        {helpText && (
          <p
            id={helpTextId}
            className="luca-text-xs luca-font-normal luca-leading-6 luca-text-neutral-400"
          >
            {helpText}
          </p>
        )}

        <div className="luca-flex luca-flex-col luca-gap-1">
          <Input.TextArea
            ref={ref}
            id={fieldId}
            disabled={disabled}
            value={currentValue}
            maxLength={maxLength}
            rows={rows}
            status={status === 'danger' ? 'error' : undefined}
            className={cn(
              'luca-w-full luca-rounded-[8px] luca-border luca-border-neutral-200 luca-bg-white luca-p-4 luca-text-base luca-leading-6 luca-text-neutral-700 luca-transition-colors luca-duration-200',
              'placeholder:luca-text-neutral-400 placeholder:luca-opacity-100 placeholder:luca-text-base',
              'luca-resize-y luca-overflow-auto',
              !disabled &&
                'hover:luca-border-primary-100 focus:luca-border-primary-200 focus:luca-ring-2 focus:luca-ring-primary-200 focus:luca-outline-none',
              disabled &&
                'luca-cursor-not-allowed luca-border-neutral-200 luca-bg-neutral-100 luca-text-neutral-400',
              className
            )}
            aria-invalid={status === 'danger' || undefined}
            aria-describedby={composedDescribedBy}
            onChange={handleChange}
            {...rest}
          />

          {counterVisible && counterText && (
            <div className="luca-flex luca-justify-end">
              <span className="luca-text-xs luca-font-normal luca-leading-tight luca-text-neutral-400">
                {counterText}
              </span>
            </div>
          )}

          {status === 'danger' && message && (
            <p
              id={messageId}
              className="luca-text-xs luca-font-medium luca-leading-6 luca-text-danger-500"
            >
              {message}
            </p>
          )}
        </div>
      </div>
    );
  }
);

TextAreaField.displayName = 'TextAreaField';
