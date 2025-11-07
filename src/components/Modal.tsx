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
      submitButtonText = 'ACEPTAR',
      closeOnOverlayClick = true,
      closeOnEscape = true,
      className,
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
            <Button variant="secondary" onClick={onClose}>{cancelButtonText}</Button>
            <Button variant="primary" onClick={onSubmit}>{submitButtonText}</Button>
          </div>
        </div>
      </AntdModal>
    );
  }
);

Modal.displayName = 'Modal';
