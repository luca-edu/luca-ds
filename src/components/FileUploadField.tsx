import React from 'react';
import { cn } from '../utils/cn';
import { Button } from './Button';
import { Tooltip } from './Tooltip';
import { QuestionIcon, UploadIcon, XMarkIcon } from '../shared/icons';

export interface FileUploadFieldProps {
  label?: string;
  required?: boolean;
  tooltip?: string;
  helpText?: string;
  message?: React.ReactNode;
  status?: 'default' | 'danger';
  accept?: string;
  maxSizeMB?: number;
  value?: File | null;
  onChange?: (file: File | null) => void;
  placeholder?: string;
  showPreview?: boolean;
  wrapperClassName?: string;
  id?: string;
  disabled?: boolean;
}

export const FileUploadField = React.forwardRef<HTMLInputElement, FileUploadFieldProps>(
  (
    {
      label,
      required = false,
      tooltip,
      helpText,
      message,
      status = 'default',
      accept = 'image/*',
      maxSizeMB = 5,
      value,
      onChange,
      placeholder = 'Seleccionar archivo',
      showPreview = true,
      wrapperClassName,
      id: idProp,
      disabled = false,
    },
    ref
  ) => {
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
    const [error, setError] = React.useState<string | null>(null);

    const generatedId = React.useId();
    const fieldId = idProp ?? generatedId;
    const helpTextId = helpText ? `${fieldId}-help` : undefined;
    const messageId = (status === 'danger' && message) || error ? `${fieldId}-message` : undefined;
    const composedDescribedBy = [helpTextId, messageId].filter(Boolean).join(' ') || undefined;

    React.useImperativeHandle(ref, () => fileInputRef.current!);

    React.useEffect(() => {
      if (value && showPreview) {
        if (value.type.startsWith('image/') || value.type.startsWith('video/')) {
          const url = URL.createObjectURL(value);
          setPreviewUrl(url);
          return () => URL.revokeObjectURL(url);
        }
      }
      setPreviewUrl(null);
    }, [value, showPreview]);

    const handleButtonClick = () => {
      if (!disabled) {
        fileInputRef.current?.click();
      }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null;
      setError(null);

      if (file) {
        const fileSizeMB = file.size / (1024 * 1024);
        if (fileSizeMB > maxSizeMB) {
          setError(`El archivo excede el tamaño máximo de ${maxSizeMB}MB`);
          if (fileInputRef.current) {
            fileInputRef.current.value = '';
          }
          return;
        }
      }

      onChange?.(file);
    };

    const handleRemoveFile = () => {
      if (!disabled) {
        onChange?.(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        setError(null);
      }
    };

    const hasError = status === 'danger' || Boolean(error);
    const displayMessage = error || message;

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
          {previewUrl && showPreview ? (
            <div
              className={cn(
                'luca-relative luca-rounded-lg luca-border-2 luca-bg-white luca-p-4',
                hasError ? 'luca-border-danger-500' : 'luca-border-neutral-300',
                disabled && 'luca-opacity-60 luca-cursor-not-allowed'
              )}
            >
              <Button
                variant="primary"
                state="alert"
                size="xs"
                onClick={handleRemoveFile}
                disabled={disabled}
                className="luca-absolute luca-top-2 luca-right-2 luca-z-10"
                title="Eliminar archivo"
                leftIcon={<XMarkIcon size={16} />}
              >
                Eliminar
              </Button>
              <div className="luca-flex luca-flex-col luca-items-center luca-justify-center">
                {value?.type.startsWith('image/') ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="luca-mb-3 luca-max-h-64 luca-max-w-full luca-rounded-lg luca-object-contain"
                  />
                ) : value?.type.startsWith('video/') ? (
                  <video
                    src={previewUrl}
                    controls
                    className="luca-mb-3 luca-max-h-64 luca-max-w-full luca-rounded-lg"
                  />
                ) : null}
                <p className="luca-text-sm luca-font-medium luca-text-neutral-700">
                  {value?.name}
                </p>
                <Button
                  state="default"
                  variant="tertiary"
                  size="sm"
                  onClick={handleButtonClick}
                  className="luca-mt-3"
                  type="button"
                  disabled={disabled}
                >
                  Cambiar archivo
                </Button>
              </div>
            </div>
          ) : (
            <div
              className={cn(
                'luca-rounded-lg luca-border-2 luca-border-dashed luca-bg-white luca-p-8 luca-text-center',
                hasError ? 'luca-border-danger-500' : 'luca-border-neutral-300',
                disabled && 'luca-opacity-60 luca-cursor-not-allowed'
              )}
            >
              <div className="luca-flex luca-flex-col luca-items-center luca-justify-center">
                <UploadIcon size={32} className="luca-mb-3 luca-text-neutral-400" />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={accept}
                  onChange={handleFileChange}
                  className="luca-hidden"
                  id={fieldId}
                  disabled={disabled}
                  aria-invalid={hasError || undefined}
                  aria-describedby={composedDescribedBy}
                />
                <Button
                  state="default"
                  variant="tertiary"
                  size="md"
                  onClick={handleButtonClick}
                  type="button"
                  disabled={disabled}
                >
                  {placeholder}
                </Button>
                {accept && (
                  <p className="luca-mt-3 luca-text-xs luca-text-neutral-500">
                    Formatos aceptados: {accept}
                  </p>
                )}
              </div>
            </div>
          )}

          {hasError && displayMessage && (
            <p
              id={messageId}
              className="luca-text-xs luca-font-medium luca-leading-6 luca-text-danger-500"
            >
              {displayMessage}
            </p>
          )}
        </div>
      </div>
    );
  }
);

FileUploadField.displayName = 'FileUploadField';
