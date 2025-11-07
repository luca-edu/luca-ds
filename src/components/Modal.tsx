import React, { forwardRef } from 'react';
import { Modal as AntdModal } from 'antd';
import { cn } from '../utils/cn';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  subtitle?: string;
  description?: string;
  cancelButtonText?: string;
  submitButtonText: string;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      onSubmit,
      title,
      subtitle,
      description,
      cancelButtonText = 'CANCELAR',
      submitButtonText,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      className,
      children,
    },
    ref
  ) => {
    return (
      <AntdModal
        open={isOpen || false}
        onCancel={onClose}
        onOk={onSubmit}
        title={
          <span className="luca-font-semibold luca-text-lg luca-text-[#111827] luca-leading-[30px]">
            {title}
          </span>
        }
        okText={submitButtonText}
        cancelText={cancelButtonText}
        maskClosable={closeOnOverlayClick}
        keyboard={closeOnEscape}
        centered
        className={cn('luca-modal', className)}
        modalRender={(dom) => (
          <div ref={ref} className="luca-modal-wrapper">
            {dom}
          </div>
        )}
      >
        <div className="luca-flex luca-flex-col luca-gap-4">
          {subtitle && (
            <p className="luca-font-medium luca-text-sm luca-text-[#111827] luca-leading-[30px] luca-m-0">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="luca-font-normal luca-text-sm luca-text-[#6b7280] luca-leading-normal luca-m-0">
              {description}
            </p>
          )}
          {children}
        </div>
      </AntdModal>
    );
  }
);

Modal.displayName = 'Modal';
