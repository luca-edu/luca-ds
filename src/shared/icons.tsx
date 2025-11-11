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
      d="M21.6429 10.9822H2.35714C2.23928 10.9822 2.14285 11.0786 2.14285 11.1965V12.8036C2.14285 12.9215 2.23928 13.0179 2.35714 13.0179H21.6429C21.7607 13.0179 21.8571 12.9215 21.8571 12.8036V11.1965C21.8571 11.0786 21.7607 10.9822 21.6429 10.9822Z"
      fill="currentColor"
    />
  </svg>
);


