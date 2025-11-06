import React from 'react';
import { cn } from '../utils/cn';

const cardVariantStyles: Record<'default' | 'hover', string> = {
  default:
    'luca-bg-white/80 luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)] luca-w-full',
  hover:
    'luca-bg-[rgba(237,245,255,0.5)] luca-border-[var(--borders-hover,#c5daff)] luca-text-[#3843d0] luca-shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)] luca-cursor-pointer luca-w-full',
};

const cardAlignStyles: Record<'center' | 'start', string> = {
  center: 'luca-items-center luca-text-center',
  start: 'luca-items-start luca-text-left',
};

const cardInteractiveStyles =
  'luca-hover:-translate-y-0.5 luca-hover:bg-[rgba(237,245,255,0.5)] luca-hover:border-[var(--borders-hover,#c5daff)] luca-hover:text-[#3843d0] luca-hover:shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)] luca-hover:cursor-pointer luca-focus-visible:outline luca-focus-visible:outline-2 luca-focus-visible:outline-offset-2 luca-focus-visible:outline-[#3843d0]';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'hover';
  align?: 'center' | 'start';
  interactive?: boolean;
  icon?: React.ReactNode;
  iconSrc?: string;
  iconAlt?: string;
  iconSize?: 'md' | 'lg';
  iconBackground?: boolean;
  iconClassName?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      align = 'center',
      interactive = true,
      className,
      icon,
      iconSrc,
      iconAlt,
      iconSize = 'lg',
      iconBackground = false,
      iconClassName,
      children,
      ...props
    },
    ref
  ) => {
    const hasIcon = Boolean(icon ?? iconSrc);

    const renderIcon = () => {
      if (!hasIcon) return null;

      const iconNode =
        icon ??
        (iconSrc ? (
          <img
            src={iconSrc}
            alt={iconAlt ?? 'Card icon'}
            className="luca-h-full luca-w-full luca-object-contain"
          />
        ) : null);

      return (
        <CardIcon
          size={iconSize}
          background={iconBackground}
          className={iconClassName}
        >
          {iconNode}
        </CardIcon>
      );
    };

    return (
      <div
        ref={ref}
        data-card-variant={variant}
        data-card-align={align}
        className={cn(
          'luca-group/card luca-relative luca-flex luca-w-full luca-flex-col luca-gap-4 luca-rounded-2xl luca-border luca-border-transparent luca-px-6 luca-py-8 luca-transition-all luca-duration-200 luca-backdrop-blur-sm',
          cardVariantStyles[variant],
          cardAlignStyles[align],
          interactive
            ? variant === 'default'
              ? cardInteractiveStyles
              : 'luca-cursor-pointer'
            : 'luca-cursor-default',
          variant === 'hover' &&
            'luca-border luca-border-[var(--borders-hover,#c5daff)]',
          className
        )}
        {...props}
      >
        {renderIcon()}
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'luca-flex luca-w-full luca-flex-col luca-gap-3',
          'luca-items-center luca-text-center',
          'luca-group-data-[card-align=start]/card:luca-items-start luca-group-data-[card-align=start]/card:luca-text-left',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          'luca-text-base luca-font-semibold luca-leading-tight luca-tracking-tight luca-text-gray-900 luca-transition-colors luca-duration-200',
          'luca-group-hover/card:luca-text-[#3843d0]',
          'luca-group-data-[card-variant=hover]/card:luca-text-[#3843d0]',
          className
        )}
        {...props}
      >
        {children}
      </h3>
    );
  }
);

CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        'luca-text-sm luca-leading-relaxed luca-text-gray-500 luca-transition-colors luca-duration-200 luca-whitespace-pre-line',
        'luca-group-data-[card-align=center]/card:luca-text-center luca-group-data-[card-align=start]/card:luca-text-left',
        'luca-group-hover/card:luca-text-[#3843d0]',
        'luca-group-data-[card-variant=hover]/card:luca-text-[#3843d0]',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
});

CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'luca-w-full luca-text-sm luca-text-gray-600',
          'luca-group-data-[card-align=center]/card:luca-text-center luca-group-data-[card-align=start]/card:luca-text-left',
          'luca-group-hover/card:luca-text-[#3843d0]',
          'luca-group-data-[card-variant=hover]/card:luca-text-[#3843d0]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = 'CardContent';

export interface CardIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'md' | 'lg';
  background?: boolean;
}

const iconSizeClasses: Record<'md' | 'lg', string> = {
  md: 'luca-h-12 luca-w-12',
  lg: 'luca-h-16 luca-w-16',
};

export const CardIcon = React.forwardRef<HTMLDivElement, CardIconProps>(
  (
    { className, children, size = 'lg', background = false, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'luca-flex luca-items-center luca-justify-center luca-overflow-hidden luca-text-[#3843d0] luca-transition-transform luca-duration-200',
          'luca-rounded-none',
          iconSizeClasses[size],
          background &&
            cn(
              size === 'md' ? 'luca-rounded-xl' : 'luca-rounded-2xl',
              'luca-bg-[rgba(56,67,208,0.08)]'
            ),
          'luca-group-hover/card:luca-scale-[1.02]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardIcon.displayName = 'CardIcon';
