import React from 'react';
import { cn } from '../utils/cn';
import type { NotificationVariant } from '../types/variants';

export type VariantToken = {
  iconBackground: string;
  iconColor: string;
  titleColor: string;
  descriptionColor: string;
  primaryActionColor: string;
  secondaryActionColor: string;
  closeButtonColor: string;
  closeButtonHoverColor: string;
  toastBackground: string;
  toastTextColor: string;
};

export const VARIANT_TOKENS: Record<NotificationVariant, VariantToken> = {
  success: {
    iconBackground: 'luca-bg-success-50',
    iconColor: 'luca-text-success-600',
    titleColor: 'luca-text-success-600',
    descriptionColor: 'luca-text-neutral-500',
    primaryActionColor: 'luca-text-success-600',
    secondaryActionColor: 'luca-text-neutral-900',
    closeButtonColor: 'luca-text-neutral-500',
    closeButtonHoverColor: 'hover:luca-text-neutral-700',
    toastBackground: 'luca-bg-success-50',
    toastTextColor: 'luca-text-success-800',
  },
  danger: {
    iconBackground: 'luca-bg-danger-50',
    iconColor: 'luca-text-danger-600',
    titleColor: 'luca-text-danger-600',
    descriptionColor: 'luca-text-neutral-500',
    primaryActionColor: 'luca-text-danger-600',
    secondaryActionColor: 'luca-text-neutral-900',
    closeButtonColor: 'luca-text-neutral-500',
    closeButtonHoverColor: 'hover:luca-text-neutral-700',
    toastBackground: 'luca-bg-danger-50',
    toastTextColor: 'luca-text-danger-800',
  },
  warning: {
    iconBackground: 'luca-bg-warning-50',
    iconColor: 'luca-text-warning-600',
    titleColor: 'luca-text-warning-600',
    descriptionColor: 'luca-text-neutral-500',
    primaryActionColor: 'luca-text-warning-600',
    secondaryActionColor: 'luca-text-neutral-900',
    closeButtonColor: 'luca-text-neutral-500',
    closeButtonHoverColor: 'hover:luca-text-neutral-700',
    toastBackground: 'luca-bg-warning-50',
    toastTextColor: 'luca-text-warning-800',
  },
  info: {
    iconBackground: 'luca-bg-info-50',
    iconColor: 'luca-text-info-600',
    titleColor: 'luca-text-info-600',
    descriptionColor: 'luca-text-neutral-500',
    primaryActionColor: 'luca-text-info-600',
    secondaryActionColor: 'luca-text-neutral-900',
    closeButtonColor: 'luca-text-neutral-500',
    closeButtonHoverColor: 'hover:luca-text-neutral-700',
    toastBackground: 'luca-bg-info-50',
    toastTextColor: 'luca-text-info-800',
  },
};

type IconRenderer = (props?: { className?: string }) => React.ReactNode;

const createIcon =
  (paths: React.ReactNode, viewBox = '0 0 24 24'): IconRenderer =>
  ({ className } = {}) =>
    (
      <svg
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('luca-h-5 luca-w-5', className)}
      >
        {paths}
      </svg>
    );

export const VARIANT_ICONS: Record<NotificationVariant, IconRenderer> = {
  success: createIcon(
    <>
      <path
        d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9.25 12.2499L11.0833 14.0833L14.75 9.91659"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  danger: createIcon(
    <>
      <path
        d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M9.75781 10.7578L14.2421 15.2421"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14.2422 10.7578L9.75789 15.2421"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  warning: createIcon(
    <>
      <path
        d="M12.0002 4.5L20.1248 18.5H3.87549L12.0002 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 10V13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 16.25H12.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
  info: createIcon(
    <>
      <path
        d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 10V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 8H12.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </>
  ),
};

type CloseIconProps = {
  className?: string;
};

export const CloseIcon = ({ className }: CloseIconProps = {}) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('luca-h-4 luca-w-4', className)}
  >
    <path
      d="M4 4L12 12"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M12 4L4 12"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const baseShadow =
  'luca-shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)]';

