// Styles
import './styles.css';
import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    token: {
      fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    },
  },
});

// Components
export {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardIcon,
} from './components/Card';
export type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardContentProps,
  CardDescriptionProps,
  CardIconProps,
} from './components/Card';

export { Button } from './components/Button';
export type { ButtonProps, ButtonVariant, ButtonState } from './components/Button';

export { ButtonIcon } from './components/ButtonIcon';
export type { ButtonIconProps } from './components/ButtonIcon';

export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { TabList } from './components/TabList';
export type { TabListProps, TabListItem } from './components/TabList';

export { Layout, LayoutContent } from './components/Layout';
export type {
  LayoutProps,
} from './components/Layout';
export { LayoutHeader } from './components/LayoutHeader';
export type { LayoutHeaderProps } from './components/LayoutHeader';

export { Modal } from './components/Modal';
export type { ModalProps } from './components/Modal';

export { SearchBar } from './components/SearchBar';
export type { SearchBarProps, SearchBarStyle } from './components/SearchBar';

export { Breadcrumb } from './components/Breadcrumb';
export type {
  BreadcrumbProps,
  BreadcrumbItemProps,
  BreadcrumbBackButtonProps,
} from './components/Breadcrumb';

export { Chips } from './components/Chips';
export type { ChipsProps, ChipItem } from './components/Chips';

// Utils
export { cn } from './utils/cn';
