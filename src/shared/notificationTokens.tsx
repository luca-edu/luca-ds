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
    closeButtonColor: 'luca-text-success-600',
    closeButtonHoverColor: 'hover:luca-text-neutral-700',
    toastBackground: 'luca-bg-success-50',
    toastTextColor: 'luca-text-success-600',
  },
  danger: {
    iconBackground: 'luca-bg-danger-50',
    iconColor: 'luca-text-danger-600',
    titleColor: 'luca-text-danger-600',
    descriptionColor: 'luca-text-neutral-500',
    primaryActionColor: 'luca-text-danger-600',
    secondaryActionColor: 'luca-text-neutral-900',
    closeButtonColor: 'luca-text-danger-600',
    closeButtonHoverColor: 'hover:luca-text-neutral-700',
    toastBackground: 'luca-bg-danger-50',
    toastTextColor: 'luca-text-danger-600',
  },
  warning: {
    iconBackground: 'luca-bg-warning-50',
    iconColor: 'luca-text-warning-600',
    titleColor: 'luca-text-warning-600',
    descriptionColor: 'luca-text-neutral-500',
    primaryActionColor: 'luca-text-warning-600',
    secondaryActionColor: 'luca-text-neutral-900',
    closeButtonColor: 'luca-text-warning-600',
    closeButtonHoverColor: 'hover:luca-text-neutral-700',
    toastBackground: 'luca-bg-warning-50',
    toastTextColor: 'luca-text-warning-800  ',
  },
  info: {
    iconBackground: 'luca-bg-info-50',
    iconColor: 'luca-text-info-600',
    titleColor: 'luca-text-info-600',
    descriptionColor: 'luca-text-neutral-500',
    primaryActionColor: 'luca-text-info-600',
    secondaryActionColor: 'luca-text-neutral-900',
    closeButtonColor: 'luca-text-info-600',
    closeButtonHoverColor: 'hover:luca-text-neutral-700',
    toastBackground: 'luca-bg-info-50',
    toastTextColor: 'luca-text-info-600',
  },
};

type IconRenderer = (props?: { className?: string }) => React.ReactNode;

const createIcon =
  (paths: React.ReactNode, viewBox = '0 0 24 24'): IconRenderer =>
  // eslint-disable-next-line react/display-name, react/prop-types
  ({ className } = {}) => (
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
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        d="M12 5.205C8.2425 5.205 5.205 8.2425 5.205 12C5.205 15.7575 8.2425 18.8175 12 18.8175C15.7575 18.8175 18.8175 15.7575 18.8175 12C18.8175 8.2425 15.7575 5.205 12 5.205ZM12 17.805C8.805 17.805 6.2175 15.195 6.2175 12C6.2175 8.805 8.805 6.2175 12 6.2175C15.195 6.2175 17.805 8.8275 17.805 12.0225C17.805 15.195 15.195 17.805 12 17.805Z"
        fill="white"
      />
      <path
        d="M13.935 9.9075L11.2575 12.5175L10.0425 11.325C9.84 11.1225 9.525 11.145 9.3225 11.325C9.12 11.5275 9.1425 11.8425 9.3225 12.045L10.7625 13.44C10.8975 13.575 11.0775 13.6425 11.2575 13.6425C11.4375 13.6425 11.6175 13.575 11.7525 13.44L14.655 10.65C14.8575 10.4475 14.8575 10.1325 14.655 9.93C14.4525 9.7275 14.1375 9.7275 13.935 9.9075Z"
        fill="white"
      />
    </>
  ),
  danger: createIcon(
    <>
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        d="M12 5.205C8.2425 5.205 5.205 8.2425 5.205 12C5.205 15.7575 8.2425 18.8175 12 18.8175C15.7575 18.8175 18.8175 15.7575 18.8175 12C18.8175 8.2425 15.7575 5.205 12 5.205ZM12 17.805C8.805 17.805 6.2175 15.195 6.2175 12C6.2175 8.805 8.805 6.2175 12 6.2175C15.195 6.2175 17.805 8.8275 17.805 12.0225C17.805 15.195 15.195 17.805 12 17.805Z"
        fill="white"
      />
      <path
        d="M14.07 9.90751C13.8675 9.70501 13.5525 9.70501 13.35 9.90751L12 11.28L10.6275 9.90751C10.425 9.70501 10.11 9.70501 9.9075 9.90751C9.705 10.11 9.705 10.425 9.9075 10.6275L11.28 12L9.9075 13.3725C9.705 13.575 9.705 13.89 9.9075 14.0925C9.9975 14.1825 10.1325 14.25 10.2675 14.25C10.4025 14.25 10.5375 14.205 10.6275 14.0925L12 12.72L13.3725 14.0925C13.4625 14.1825 13.5975 14.25 13.7325 14.25C13.8675 14.25 14.0025 14.205 14.0925 14.0925C14.295 13.89 14.295 13.575 14.0925 13.3725L12.72 12L14.0925 10.6275C14.2725 10.425 14.2725 10.11 14.07 9.90751Z"
        fill="white"
      />
    </>
  ),
  warning: createIcon(
    <>
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        d="M10.051 5.87749C10.917 4.37691 13.0836 4.37678 13.9494 5.87749L18.8518 14.3755C19.7171 15.8755 18.6342 17.7494 16.9026 17.7496H7.09691C5.36534 17.7494 4.28333 15.8755 5.14867 14.3755L10.051 5.87749ZM12.6496 6.62651C12.361 6.12665 11.6396 6.12687 11.3508 6.62651L6.44749 15.1255C6.15949 15.6254 6.51998 16.2494 7.09691 16.2496H16.9026C17.4795 16.2494 17.8408 15.6254 17.553 15.1255L12.6496 6.62651ZM12.0051 13.7496C12.419 13.7497 12.7549 14.0857 12.7551 14.4996V14.5044C12.7551 14.9186 12.4192 15.2543 12.0051 15.2544H12.0002C11.586 15.2544 11.2502 14.9187 11.2502 14.5044V14.4996C11.2505 14.0856 11.5862 13.7496 12.0002 13.7496H12.0051ZM12.0002 9.24956C12.4141 9.24976 12.75 9.58569 12.7502 9.99956V12.4996C12.7502 12.9136 12.4143 13.2494 12.0002 13.2496C11.586 13.2496 11.2502 12.9138 11.2502 12.4996V9.99956C11.2505 9.58556 11.5862 9.24956 12.0002 9.24956Z"
        fill="white"
      />
    </>
  ),
  info: createIcon(
    <>
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6.66668C9.05448 6.66668 6.66667 9.05449 6.66667 12C6.66667 14.9455 9.05448 17.3333 12 17.3333C14.9455 17.3333 17.3333 14.9455 17.3333 12C17.3333 9.05449 14.9455 6.66668 12 6.66668ZM5.33333 12C5.33333 8.31811 8.3181 5.33334 12 5.33334C15.6819 5.33334 18.6667 8.31811 18.6667 12C18.6667 15.6819 15.6819 18.6667 12 18.6667C8.3181 18.6667 5.33333 15.6819 5.33333 12ZM12 8.66668C12.3682 8.66668 12.6667 8.96515 12.6667 9.33334V12.6667C12.6667 13.0349 12.3682 13.3333 12 13.3333C11.6318 13.3333 11.3333 13.0349 11.3333 12.6667V9.33334C11.3333 8.96515 11.6318 8.66668 12 8.66668ZM11.3333 14.6667C11.3333 14.2985 11.6318 14 12 14H12.0067C12.3749 14 12.6733 14.2985 12.6733 14.6667C12.6733 15.0349 12.3749 15.3333 12.0067 15.3333H12C11.6318 15.3333 11.3333 15.0349 11.3333 14.6667Z"
        fill="white"
      />
    </>
  ),
};

export const VARIANT_NOTIFICATION_ICONS: Record<NotificationVariant, IconRenderer> = {
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
      <path d="M12 10V13.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 16.25H12.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  info: createIcon(
    <>
      <path
        d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M12 10V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 8H12.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
};

type CloseIconProps = {
  className?: string;
};

export const CloseIcon = ({ className, ...props }: CloseIconProps = {}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('luca-h-4 luca-w-4', className)}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.4697 5.46973C17.7626 5.17683 18.2374 5.17683 18.5303 5.46973C18.8231 5.76262 18.8232 6.2374 18.5303 6.53027L13.0606 12L18.5303 17.4697C18.8231 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8231 17.7626 18.8231 17.4697 18.5303L12 13.0605L6.53028 18.5303C6.2374 18.8231 5.76263 18.8231 5.46973 18.5303C5.17684 18.2374 5.17684 17.7626 5.46973 17.4697L10.9395 12L5.46973 6.53027C5.17684 6.23738 5.17684 5.76262 5.46973 5.46973C5.76262 5.17683 6.23738 5.17683 6.53028 5.46973L12 10.9395L17.4697 5.46973Z"
      fill="currentColor"
    />
  </svg>
);

CloseIcon.displayName = 'CloseIcon';

export const baseShadow =
  'luca-shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)]';
