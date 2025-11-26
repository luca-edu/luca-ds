import React, { useState } from 'react';
import { cn } from '../utils/cn';
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
  LucaLogoLarge,
  LucaLogoSmall,
} from '../shared/icons';

export type SidebarVariant =
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral';

export interface SidebarSubmenuItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface SidebarMenuItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  submenu?: SidebarSubmenuItem[];
  href?: string;
  onClick?: () => void;
}

export interface SidebarProps {
  items: SidebarMenuItem[];
  activeKey?: string;
  onActiveKeyChange?: (key: string) => void;
  variant?: SidebarVariant;
  collapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
  logo?: React.ReactNode;
  logoIcon?: React.ReactNode;
  logoWidth?: number | string;
  logoHeight?: number | string;
  footer?: React.ReactNode;
  defaultFooter?: boolean;
  footerText?: string;
  className?: string;
  showCollapseButton?: boolean;
}

// Mapeo de variantes a colores del tailwind.config.js
const variantColors: Record<
  SidebarVariant,
  {
    activeBg: string;
    activeText: string;
    inactiveText: string;
    inactiveHover: string;
    inactiveHoverBg: string;
  }
> = {
  primary: {
    activeBg: 'luca-bg-primary-50',
    activeText: 'luca-text-primary-600',
    inactiveText: 'luca-text-neutral-500',
    inactiveHover: 'hover:luca-text-primary-600',
    inactiveHoverBg: 'hover:luca-bg-neutral-50',
  },
  accent: {
    activeBg: 'luca-bg-accent-50',
    activeText: 'luca-text-accent-600',
    inactiveText: 'luca-text-neutral-500',
    inactiveHover: 'hover:luca-text-accent-600',
    inactiveHoverBg: 'hover:luca-bg-neutral-50',
  },
  success: {
    activeBg: 'luca-bg-success-50',
    activeText: 'luca-text-success-600',
    inactiveText: 'luca-text-neutral-500',
    inactiveHover: 'hover:luca-text-success-600',
    inactiveHoverBg: 'hover:luca-bg-neutral-50',
  },
  warning: {
    activeBg: 'luca-bg-warning-50',
    activeText: 'luca-text-warning-600',
    inactiveText: 'luca-text-neutral-500',
    inactiveHover: 'hover:luca-text-warning-600',
    inactiveHoverBg: 'hover:luca-bg-neutral-50',
  },
  danger: {
    activeBg: 'luca-bg-danger-50',
    activeText: 'luca-text-danger-600',
    inactiveText: 'luca-text-neutral-500',
    inactiveHover: 'hover:luca-text-danger-600',
    inactiveHoverBg: 'hover:luca-bg-neutral-50',
  },
  info: {
    activeBg: 'luca-bg-info-50',
    activeText: 'luca-text-info-600',
    inactiveText: 'luca-text-neutral-500',
    inactiveHover: 'hover:luca-text-info-600',
    inactiveHoverBg: 'hover:luca-bg-neutral-50',
  },
  neutral: {
    activeBg: 'luca-bg-neutral-100',
    activeText: 'luca-text-neutral-700',
    inactiveText: 'luca-text-neutral-500',
    inactiveHover: 'hover:luca-text-neutral-700',
    inactiveHoverBg: 'hover:luca-bg-neutral-50',
  },
};

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  activeKey,
  onActiveKeyChange,
  variant = 'primary',
  collapsed: controlledCollapsed,
  onCollapseChange,
  logo,
  logoIcon,
  logoWidth,
  logoHeight,
  footer,
  defaultFooter = true,
  footerText = 'V1.0 © 2025',
  className,
  showCollapseButton = true,
}) => {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const [expandedSubmenus, setExpandedSubmenus] = useState<Set<string>>(new Set());
  const colors = variantColors[variant];

  const isCollapsedControlled = controlledCollapsed !== undefined;
  const collapsed = isCollapsedControlled ? controlledCollapsed : internalCollapsed;

  const handleCollapse = () => {
    const newCollapsed = !collapsed;
    if (!isCollapsedControlled) {
      setInternalCollapsed(newCollapsed);
    }
    onCollapseChange?.(newCollapsed);
    // Colapsar todos los submenús cuando se colapsa el sidebar
    if (newCollapsed) {
      setExpandedSubmenus(new Set());
    }
  };

  const handleMenuClick = (item: SidebarMenuItem) => {
    if (item.disabled) return;

    if (item.submenu && item.submenu.length > 0) {
      // Toggle submenu
      setExpandedSubmenus((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(item.key)) {
          newSet.delete(item.key);
        } else {
          newSet.add(item.key);
        }
        return newSet;
      });
    } else {
      // Seleccionar item
      onActiveKeyChange?.(item.key);
      item.onClick?.();
    }
  };

  const handleSubmenuClick = (parentKey: string, submenuItem: SidebarSubmenuItem) => {
    if (submenuItem.disabled) return;
    const fullKey = `${parentKey}-${submenuItem.key}`;
    onActiveKeyChange?.(fullKey);
  };

  const isItemActive = (item: SidebarMenuItem): boolean => {
    if (activeKey === item.key) return true;
    if (item.submenu) {
      return item.submenu.some((sub) => activeKey === `${item.key}-${sub.key}`);
    }
    return false;
  };

  const isSubmenuItemActive = (parentKey: string, submenuItem: SidebarSubmenuItem): boolean => {
    return activeKey === `${parentKey}-${submenuItem.key}`;
  };

  const sidebarWidth = collapsed ? 'luca-w-16' : 'luca-w-[244px]';

  return (
    <div
      className={cn(
        'luca-relative luca-bg-white luca-flex luca-flex-col luca-h-full luca-shadow-[2px_0px_4px_0px_rgba(224,224,224,0.5)]',
        sidebarWidth,
        className
      )}
    >
      {/* Header con Logo */}
      <div className="luca-flex luca-flex-col luca-gap-6 luca-items-center luca-px-4 luca-pt-6 luca-pb-0 luca-shrink-0">
        <div
          className={cn(
            'luca-flex luca-flex-col luca-gap-2.5',
            collapsed ? 'luca-items-center' : 'luca-items-start luca-w-full'
          )}
        >
          {collapsed ? (
            logoIcon ? (
              <div
                className="luca-bg-primary-600 luca-rounded-lg luca-flex luca-items-center luca-justify-center luca-shrink-0"
                style={{
                  width: logoWidth || 48,
                  height: logoHeight || 48,
                }}
              >
                {logoIcon}
              </div>
            ) : (
              <LucaLogoSmall />
            )
          ) : (
            <div
              className="luca-h-12 luca-flex luca-items-center luca-justify-start"
              style={{
                width: logoWidth || 'auto',
                height: logoHeight || 48,
              }}
            >
              {logo || <LucaLogoLarge />}
            </div>
          )}
        </div>

        {/* Menús */}
        <div className="luca-flex luca-flex-col luca-gap-4 luca-items-start luca-w-full luca-overflow-y-auto luca-flex-1 luca-min-h-0 luca-py-4">
          {items.map((item) => {
            const isActive = isItemActive(item);
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            const isSubmenuExpanded = expandedSubmenus.has(item.key);

            return (
              <div key={item.key} className="luca-w-full">
                <button
                  type="button"
                  onClick={() => handleMenuClick(item)}
                  disabled={item.disabled}
                  className={cn(
                    'luca-flex luca-gap-2 luca-items-center luca-p-2 luca-rounded-lg luca-transition-all luca-duration-200 luca-w-full',
                    collapsed ? 'luca-justify-center' : 'luca-justify-start',
                    isActive
                      ? cn(colors.activeBg, colors.activeText)
                      : cn(colors.inactiveText, colors.inactiveHoverBg, colors.inactiveHover),
                    item.disabled &&
                      'luca-cursor-not-allowed luca-opacity-60 hover:luca-bg-transparent hover:luca-text-neutral-500'
                  )}
                  title={
                    collapsed ? (typeof item.label === 'string' ? item.label : item.key) : undefined
                  }
                >
                  {item.icon && (
                    <span className="luca-shrink-0 luca-size-6 luca-flex luca-items-center luca-justify-center">
                      {item.icon}
                    </span>
                  )}
                  {!collapsed && (
                    <>
                      <span className='luca-font-["Poppins"] luca-font-medium luca-text-sm luca-leading-5 luca-flex-1 luca-text-left'>
                        {item.label}
                      </span>
                      {hasSubmenu && (
                        <span className="luca-shrink-0">
                          <ChevronDownIcon
                            size={16}
                            className={cn(
                              'luca-transition-transform luca-duration-200',
                              isSubmenuExpanded && 'luca-rotate-180'
                            )}
                          />
                        </span>
                      )}
                    </>
                  )}
                </button>

                {/* Submenús */}
                {!collapsed && hasSubmenu && isSubmenuExpanded && (
                  <div className="luca-mt-1 luca-ml-4 luca-flex luca-flex-col luca-gap-1">
                    {item.submenu?.map((submenuItem) => {
                      const isSubActive = isSubmenuItemActive(item.key, submenuItem);
                      return (
                        <button
                          key={submenuItem.key}
                          type="button"
                          onClick={() => handleSubmenuClick(item.key, submenuItem)}
                          disabled={submenuItem.disabled}
                          className={cn(
                            'luca-flex luca-gap-2 luca-items-center luca-px-2 luca-py-1.5 luca-rounded-lg luca-transition-all luca-duration-200 luca-w-full luca-text-left',
                            isSubActive
                              ? cn(colors.activeBg, colors.activeText)
                              : cn(
                                  colors.inactiveText,
                                  colors.inactiveHoverBg,
                                  colors.inactiveHover
                                ),
                            submenuItem.disabled &&
                              'luca-cursor-not-allowed luca-opacity-60 hover:luca-bg-transparent hover:luca-text-neutral-500'
                          )}
                        >
                          {submenuItem.icon && (
                            <span className="luca-shrink-0 luca-size-5 luca-flex luca-items-center luca-justify-center">
                              {submenuItem.icon}
                            </span>
                          )}
                          <span className='luca-font-["Poppins"] luca-font-normal luca-text-sm luca-leading-5 luca-flex-1'>
                            {submenuItem.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="luca-flex luca-flex-1 luca-flex-col luca-gap-2 luca-items-center luca-justify-end luca-pb-6 luca-px-2 luca-shrink-0">
        {footer ||
          (defaultFooter && (
            <div className='luca-flex luca-flex-col luca-font-["Poppins"] luca-font-light luca-justify-center luca-leading-none luca-text-[10px] luca-text-neutral-500 luca-whitespace-nowrap'>
              <p className="luca-leading-normal">{footerText}</p>
            </div>
          ))}
      </div>

      {/* Botón de colapsar/expandir */}
      {showCollapseButton && (
        <button
          type="button"
          onClick={handleCollapse}
          className={cn(
            'luca-absolute luca-bg-white luca-flex luca-items-center luca-justify-center luca-h-20 luca-px-0.5 luca-rounded-br-md luca-rounded-tr-md luca-top-1/2 luca-transform luca-translate-y-[-50%]',
            collapsed ? 'luca-left-[63px]' : 'luca-left-[234px]',
            'luca-transition-all luca-duration-200 luca-shadow-sm hover:luca-shadow-md luca-z-10'
          )}
          aria-label={collapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
        >
          {collapsed ? (
            <ChevronRightIcon size={16} className="luca-text-neutral-600" />
          ) : (
            <ChevronLeftIcon size={16} className="luca-text-neutral-600" />
          )}
        </button>
      )}
    </div>
  );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
