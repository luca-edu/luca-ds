import React from 'react';
import { cn } from '../utils/cn';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export const PlusIcon: React.FC<IconProps> = ({
  size = 16,
  className,
  ...props
}) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('luca-block', className)}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="M8 3.33337V12.6667"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M12.6667 8H3.33337"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export const MinusIcon: React.FC<IconProps> = ({
  size = 16,
  className,
  ...props
}) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('luca-block', className)}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="M2 7.5H14C14.2761 7.5 14.5 7.72386 14.5 8C14.5 8.27614 14.2761 8.5 14 8.5H2C1.72386 8.5 1.5 8.27614 1.5 8C1.5 7.72386 1.72386 7.5 2 7.5Z"
      fill="currentColor"
    />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({
  size = 16,
  className,
  ...props
}) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('luca-block', className)}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="M3.5 6L8 10.5L12.5 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckIcon: React.FC<IconProps> = ({
  size = 16,
  className,
  ...props
}) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('luca-block', className)}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="M4 8.25L6.66667 11L12 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const QuestionIcon: React.FC<IconProps> = ({
  size = 16,
  className,
  ...props
}) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('luca-block', className)}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M8 11.75C8.34518 11.75 8.625 12.0298 8.625 12.375C8.625 12.7202 8.34518 13 8 13C7.65482 13 7.375 12.7202 7.375 12.375C7.375 12.0298 7.65482 11.75 8 11.75Z"
      fill="currentColor"
    />
    <path
      d="M8 10.5C7.65482 10.5 7.375 10.2202 7.375 9.875C7.375 9.14365 7.72238 8.60498 8.35216 8.25067L8.53984 8.1462C8.95643 7.91372 9.25 7.4989 9.25 7C9.25 6.30964 8.69036 5.75 8 5.75C7.30964 5.75 6.75 6.30964 6.75 7C6.75 7.34518 6.47018 7.625 6.125 7.625C5.77982 7.625 5.5 7.34518 5.5 7C5.5 5.6219 6.6219 4.5 8 4.5C9.3781 4.5 10.5 5.6219 10.5 7C10.5 7.92365 10.0417 8.64676 9.21428 9.11044L9.02661 9.21492C8.69357 9.40096 8.625 9.57277 8.625 9.875C8.625 10.2202 8.34518 10.5 8 10.5Z"
      fill="currentColor"
    />
  </svg>
);


