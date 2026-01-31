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
  lottie?: boolean;
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
      lottie = false,
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
    const [jsonContent, setJsonContent] = React.useState<string | null>(null);

    const effectiveAccept = lottie ? '.gif,.json' : accept;

    const generatedId = React.useId();
    const fieldId = idProp ?? generatedId;
    const helpTextId = helpText ? `${fieldId}-help` : undefined;
    const messageId = (status === 'danger' && message) || error ? `${fieldId}-message` : undefined;
    const composedDescribedBy = [helpTextId, messageId].filter(Boolean).join(' ') || undefined;

    React.useImperativeHandle(ref, () => fileInputRef.current!);

    React.useEffect(() => {
      let cancelled = false;

      const loadPreview = async () => {
        setPreviewUrl(null);
        setJsonContent(null);

        if (!value || !showPreview) return;

        if (value.type.startsWith('image/') || value.type.startsWith('video/')) {
          const url = URL.createObjectURL(value);
          if (!cancelled) setPreviewUrl(url);
          return () => {
            if (!cancelled) URL.revokeObjectURL(url);
          };
        }

        if (lottie && (value.type === 'application/json' || value.name.endsWith('.json'))) {
          try {
            const text = await value.text();
            if (!cancelled) setJsonContent(text);
          } catch {
            
          }
        }
      };

      void loadPreview();

      return () => {
        cancelled = true;
      };
    }, [value, showPreview, lottie]);

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

        if (lottie) {
          const isGif = file.type === 'image/gif' || file.name.toLowerCase().endsWith('.gif');
          const isJson = file.type === 'application/json' || file.name.toLowerCase().endsWith('.json');

          if (!isGif && !isJson) {
            setError('Solo se permiten archivos .gif o .json');
            if (fileInputRef.current) {
              fileInputRef.current.value = '';
            }
            return;
          }
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
        setJsonContent(null);
      }
    };

    const hasError = status === 'danger' || Boolean(error);
    const displayMessage = error || message;
    const isJsonFile = lottie && value && (value.type === 'application/json' || value.name.endsWith('.json'));
    const shouldShowPreview = showPreview && value && (previewUrl || isJsonFile);

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
          {shouldShowPreview ? (
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
                {value?.type.startsWith('image/') && previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="luca-mb-3 luca-max-h-64 luca-max-w-full luca-rounded-lg luca-object-contain"
                  />
                ) : value?.type.startsWith('video/') && previewUrl ? (
                  <video
                    src={previewUrl}
                    controls
                    className="luca-mb-3 luca-max-h-64 luca-max-w-full luca-rounded-lg"
                  />
                ) : isJsonFile ? (
                  <div className="luca-mb-3 luca-w-full luca-rounded-lg luca-border luca-border-neutral-200 luca-bg-neutral-50 luca-p-4">
                    <div className="luca-flex luca-items-center luca-gap-2 luca-mb-2">
                      <svg
                        className="luca-h-6 luca-w-6 luca-text-primary-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="luca-text-sm luca-font-semibold luca-text-neutral-700">
                        Archivo JSON (Lottie)
                      </span>
                    </div>
                    <p className="luca-text-xs luca-text-neutral-500">
                      {jsonContent ? `${Math.round(jsonContent.length / 1024)} KB` : 'Cargando...'}
                    </p>
                  </div>
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
                  accept={effectiveAccept}
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
                {effectiveAccept && (
                  <p className="luca-mt-3 luca-text-xs luca-text-neutral-500">
                    Formatos aceptados: {effectiveAccept}
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
