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

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface ModalProps {
  isOpen: boolean;
  closable: boolean;
  onClose: () => void;
  buttons?: ButtonProps[];
  title: string;
  subtitle?: string;
  description?: string;
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
      closable = true,
      buttons,
      title,
      subtitle,
      description,
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
        closable={closable}
        maskClosable={closeOnOverlayClick}
        footer={null}
        keyboard={closeOnEscape}
        centered
        width={'100%'}
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
          {buttons && (
            <div className="luca-flex luca-justify-end luca-gap-2"> 
              {buttons.map((button) => (
              <Button variant={button.variant} onClick={button.onClick} leftIcon={button.leftIcon} rightIcon={button.rightIcon}>{button.text}</Button>
            ))}
          </div>
          )}
        </div>
      </AntdModal>
    );
  }
);

Modal.displayName = 'Modal';
