import React from 'react';
import { cn } from '../utils/cn';

const cardVariantStyles: Record<'default' | 'hover', string> = {
  default:
    'bg-white/80 shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)]',
  hover:
    'bg-[rgba(237,245,255,0.5)] border-[#c5daff] shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03)]',
};

const cardAlignStyles: Record<'center' | 'start', string> = {
  center: 'items-center text-center',
  start: 'items-start text-left',
};

const cardInteractiveStyles =
  'hover:-translate-y-0.5 hover:bg-[rgba(237,245,255,0.5)] hover:border-[#c5daff] hover:shadow-[0px_8px_24px_0px_rgba(56,67,208,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3843d0]';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'hover';
  align?: 'center' | 'start';
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      align = 'center',
      interactive = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-card-variant={variant}
        data-card-align={align}
        className={cn(
          'group/card relative flex w-full flex-col gap-4 rounded-2xl border border-transparent px-6 py-8 transition-all duration-200 backdrop-blur-sm',
          cardVariantStyles[variant],
          cardAlignStyles[align],
          interactive && variant === 'default' && cardInteractiveStyles,
          variant === 'hover' && 'border-[#c5daff]',
          className
        )}
        {...props}
      >
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
          'flex w-full flex-col gap-3',
          'items-center text-center',
          'group-data-[card-align=start]/card:items-start group-data-[card-align=start]/card:text-left',
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
          'text-base font-semibold leading-tight tracking-tight text-gray-900 transition-colors duration-200',
          'group-hover/card:text-[#3843d0]',
          'group-data-[card-variant=hover]/card:text-[#3843d0]',
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
        'text-sm leading-relaxed text-gray-500 transition-colors duration-200 whitespace-pre-line',
        'group-data-[card-align=center]/card:text-center group-data-[card-align=start]/card:text-left',
        'group-hover/card:text-[#3843d0]',
        'group-data-[card-variant=hover]/card:text-[#3843d0]',
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
          'w-full text-sm text-gray-600',
          'group-data-[card-align=center]/card:text-center group-data-[card-align=start]/card:text-left',
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
  md: 'h-12 w-12 rounded-xl',
  lg: 'h-16 w-16 rounded-2xl',
};

export const CardIcon = React.forwardRef<HTMLDivElement, CardIconProps>(
  (
    { className, children, size = 'lg', background = true, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center overflow-hidden text-[#3843d0] transition-transform duration-200',
          iconSizeClasses[size],
          background && 'bg-[rgba(56,67,208,0.08)]',
          'group-hover/card:scale-[1.02]',
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
