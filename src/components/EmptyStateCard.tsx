import React from 'react';
import { Card } from './Card';
import { cn } from '../utils/cn';
import { EmptyStateIcon } from '../shared/icons';

export interface EmptyStateCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  illustrationSrc?: string;
  illustrationAlt?: string;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  compact?: boolean;
}

export const EmptyStateCard = React.forwardRef<
  HTMLDivElement,
  EmptyStateCardProps
>(
  (
    {
      illustrationSrc,
      illustrationAlt = 'Estado vacío',
      title,
      description = 'No hay registros disponibles en este momento.',
      footer,
      compact = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        align="center"
        interactive={false}
        className={cn(
          'luca-flex luca-min-h-[260px] luca-flex-col luca-items-center luca-justify-center luca-gap-4 luca-text-center luca-max-w-full',
          compact && 'luca-min-h-[200px]',
          className,
        )}
        {...props}
      >
        <div className="luca-flex luca-flex-col luca-items-center luca-gap-3">
          <div className="luca-flex luca-h-[120px] luca-w-[120px] luca-items-center luca-justify-center luca-p-6">
            {illustrationSrc ? (
            <img
              src={illustrationSrc}
              alt={illustrationAlt}
              className="luca-max-h-full luca-max-w-full luca-object-contain luca-opacity-80"
              loading="lazy"
            />
            ) : (
              <EmptyStateIcon />
            )}
          </div>

          <div className="luca-flex luca-flex-col luca-items-center luca-gap-1">
            {title && (
              <h3 className="luca-text-base luca-font-semibold luca-text-neutral-700">
                {title}
              </h3>
            )}
            {description && (
              <p className="luca-max-w-[320px] luca-text-sm luca-font-normal luca-leading-6 luca-text-neutral-400">
                {description}
              </p>
            )}
          </div>

          {footer && (
            <div className="luca-mt-2 luca-flex luca-items-center luca-justify-center">
              {footer}
            </div>
          )}
        </div>
      </Card>
    );
  }
);

EmptyStateCard.displayName = 'EmptyStateCard';


