import React, { forwardRef } from 'react';
import { Modal as AntdModal } from 'antd';
import { Button } from './Button';
import { cn } from '../utils/cn';
import { createStyles } from 'antd-style';


const useStyle = createStyles(() => ({
  content: {
    padding: '32px !important',
    borderRadius: '20px !important',
  },
}));

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClickSecondaryButton: () => void;
  onClickTertiaryButton: () => void;
  onClickPrimaryButton: () => void;
  title: string;
  subtitle?: string;
  description?: string;
  tertiaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonText?: string;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  maxWidth?: number | string;
  children?: React.ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClickSecondaryButton,
      onClickTertiaryButton,
      onClickPrimaryButton,
      title,
      subtitle,
      description,
      tertiaryButtonText,
      secondaryButtonText = 'CANCELAR',
      primaryButtonText = 'ACEPTAR',
      closeOnOverlayClick = true,
      closeOnEscape = true,
      className,
      maxWidth,
      children,
    },
    ref
  ) => {
    const { styles } = useStyle();
    const classNames = {
      content: styles.content,
    };
  
    return (
      <AntdModal
        open={isOpen || false}
        title={
          <span className="luca-font-semibold luca-text-lg luca-text-[#111827] luca-leading-[30px]">
            {title}
          </span>
        }
        maskClosable={closeOnOverlayClick}
        footer={null}
        keyboard={closeOnEscape}
        centered
        className={cn('luca-modal', className)}
        style={
          maxWidth
            ? {
                maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
                width: '100%',
              }
            : undefined
        }
        modalRender={(dom) => (
          <div ref={ref} className="luca-modal-wrapper">
            {dom}
          </div>
        )}
        classNames={classNames}
      >
        <div className="luca-flex luca-flex-col luca-mt-6">
          {subtitle && (
            <p className="luca-font-medium luca-text-sm luca-text-[#111827] luca-leading-[30px] luca-m-0">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="luca-font-normal luca-text-sm luca-text-[#6b7280] luca-leading-normal luca-m-0 luca-mb-6">
              {description}
            </p>
          )}
          {children}
          <div className="luca-flex luca-justify-end luca-gap-2"> 
            {secondaryButtonText && (
              <Button variant="secondary" onClick={onClickSecondaryButton}>{secondaryButtonText}</Button>
            )}
            {tertiaryButtonText && (
              <Button variant="tertiary" onClick={onClickTertiaryButton}>{tertiaryButtonText}</Button>
            )}
            {primaryButtonText && (
              <Button variant="primary" onClick={onClickPrimaryButton}>{primaryButtonText}</Button>
            )}
          </div>
        </div>
      </AntdModal>
    );
  }
);

Modal.displayName = 'Modal';
