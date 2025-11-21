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
export {
  Notification,
  NotificationAction,
  NotificationActions,
} from './components/Notification';
export type {
  NotificationProps,
  NotificationVariant,
  NotificationActionProps,
  NotificationActionVariant,
  NotificationActionsProps,
  NotificationPosition,
} from './components/Notification';

export { Toast } from './components/Toast';
export type { ToastProps } from './components/Toast';

export {
  Selector,
  SelectorAction,
  SelectorDetail,
  SelectorLabel,
} from './components/Selector';
export type {
  SelectorProps,
  SelectorActionProps,
  SelectorDetailProps,
  SelectorLabelProps,
} from './components/Selector';

export { InputField, TextAreaField } from './components/InputField';
export type {
  InputFieldProps,
  TextAreaFieldProps,
} from './components/InputField';

export { Tooltip } from './components/Tooltip';
export type { TooltipProps } from './components/Tooltip';

export { Dropdown, DropdownItem } from './components/Dropdown';
export type {
  DropdownProps,
  DropdownOption,
  DropdownItemProps,
} from './components/Dropdown';

export { EmptyStateCard } from './components/EmptyStateCard';
export type { EmptyStateCardProps } from './components/EmptyStateCard';
export { Steps } from './components/Steps';
export type { StepsProps, Step } from './components/Steps';
export { RadioButton } from './components/RadioButton';
export type {
  RadioButtonProps,
  RadioButtonVariant,
  RadioButtonStyle,
} from './components/RadioButton';
export { Checkbox } from './components/Checkbox';
export type {
  CheckboxProps,
  CheckboxVariant,
  CheckboxStyle,
} from './components/Checkbox';
export { AmountButton } from './components/AmountButton';
export type {
  AmountButtonProps,
  AmountButtonVariant,
} from './components/AmountButton';

// Utils
export { cn } from './utils/cn';
