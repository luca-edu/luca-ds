import React from 'react';
import { cn } from '../utils/cn';

export interface LayoutHeaderProps {
  backgroundImage: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  avatarImage: string;
  avatarAlt?: string;
  heroClassName?: string;
  heroStyle?: React.CSSProperties;
}

export const LayoutHeader: React.FC<LayoutHeaderProps> = ({
  backgroundImage,
  title,
  subtitle,
  avatarImage,
  avatarAlt = 'Layout avatar',
  heroClassName,
  heroStyle,
}) => (
  <div
    className={cn(
      'luca-pt-[34px] luca-px-6 luca-pb-[52px]',
      'luca-bg-cover luca-bg-center luca-bg-no-repeat',
      heroClassName
    )}
    style={{ backgroundImage: `url(${backgroundImage})`, ...heroStyle }}
  >
    <h3 className="luca-font-semibold luca-text-lg luca-text-[#3843D0] luca-leading-[120%] luca-text-center">
      {title}
    </h3>
    <div className="luca-flex luca-flex-row luca-items-center luca-justify-center luca-w-full luca-mt-4">
      <img
        src={avatarImage}
        alt={avatarAlt}
        className="luca-w-[169px] luca-h-[140px]"
      />
    </div>
    <div className="luca-font-semibold luca-text-base luca-text-[#111827] luca-leading-[180%] luca-text-center luca-mt-6">
      {subtitle}
    </div>
  </div>
);

LayoutHeader.displayName = 'LayoutHeader';
