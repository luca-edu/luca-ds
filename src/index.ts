// Styles
import './styles.css';
import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    token: {
      fontFamily:
        'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
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
export type { ButtonProps, ButtonVariant, ButtonState, ButtonSize } from './components/Button';

export { ButtonIcon } from './components/ButtonIcon';
export type { ButtonIconProps, ButtonIconSize } from './components/ButtonIcon';

export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { Tag } from './components/Tag';
export type { TagProps, TagVariant, TagSize, TagState } from './components/Tag';

export { TabList } from './components/TabList';
export type { TabListProps, TabListItem } from './components/TabList';

export { Layout, LayoutContent } from './components/Layout';
export type { LayoutProps } from './components/Layout';
export { LayoutHeader } from './components/LayoutHeader';
export type { LayoutHeaderProps } from './components/LayoutHeader';

export { Modal } from './components/Modal';
export type { ModalProps } from './components/Modal';

export { Drawer } from './components/Drawer';
export type { DrawerProps, DrawerPlacement } from './components/Drawer';

export { ProfileDrawer } from './components/ProfileDrawer';
export type {
  ProfileDrawerProps,
  ProfileDrawerSection,
  PasswordSubmitData,
  PasswordFormLabels,
} from './components/ProfileDrawer';

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
  useNotification,
  notification,
  NotificationProvider,
} from './components/Notification';
export type {
  NotificationProps,
  NotificationVariant,
  NotificationActionProps,
  NotificationActionVariant,
  NotificationActionsProps,
  NotificationPosition,
  NotificationApiConfig,
  NotificationApi,
} from './components/Notification';

export { Toast, useToast, toast, ToastProvider } from './components/Toast';
export type { ToastProps, ToastPosition, ToastApiConfig, ToastApi } from './components/Toast';

export { Selector, SelectorAction, SelectorDetail, SelectorLabel } from './components/Selector';
export type {
  SelectorProps,
  SelectorActionProps,
  SelectorDetailProps,
  SelectorLabelProps,
} from './components/Selector';

export { InputField, TextAreaField } from './components/InputField';
export type { InputFieldProps, TextAreaFieldProps } from './components/InputField';

export { FileUploadField } from './components/FileUploadField';
export type { FileUploadFieldProps } from './components/FileUploadField';

export { Tooltip } from './components/Tooltip';
export type { TooltipProps, TooltipVariant, TooltipPlacement } from './components/Tooltip';

export { Dropdown, DropdownItem } from './components/Dropdown';
export type {
  DropdownProps,
  DropdownOption,
  DropdownItemProps,
  DropdownVariant,
} from './components/Dropdown';

export { EmptyStateCard } from './components/EmptyStateCard';
export type { EmptyStateCardProps } from './components/EmptyStateCard';

export { CardAvatar } from './components/CardAvatar';
export type { CardAvatarProps, CardAvatarType, CardAvatarState } from './components/CardAvatar';

export { CardLesson } from './components/CardLesson';
export type {
  CardLessonProps,
  CardLessonVariant,
  CardLessonSize,
  CardLessonState,
  CardLessonBadge,
} from './components/CardLesson';

export { Pagination } from './components/Pagination';
export type { PaginationProps, PaginationVariant, PaginationSize } from './components/Pagination';

export { Accordion } from './components/Accordion';
export type {
  AccordionProps,
  AccordionVariant,
  AccordionSize,
  AccordionItemType,
} from './components/Accordion';

export { CardKPI } from './components/CardKPI';
export type { CardKPIProps, CardKPIVariant, CardKPISize, CardKPIState } from './components/CardKPI';

export { CardClass } from './components/CardClass';
export type {
  CardClassProps,
  CardClassVariant,
  CardClassSize,
  CardClassState,
  CardClassKPI,
  CardClassStatus,
} from './components/CardClass';

export { CardStudentClass } from './components/CardStudentClass';
export type {
  CardStudentClassProps,
  CardStudentClassVariant,
  CardStudentClassSize,
  CardStudentClassState,
  CardStudentClassMissionStatus,
  MissionStatusType,
} from './components/CardStudentClass';

export { CardOption } from './components/CardOption';
export type {
  CardOptionProps,
  CardOptionVariant,
  CardOptionSize,
  CardOptionState,
} from './components/CardOption';

export { Toggle } from './components/Toggle';
export type { ToggleProps, ToggleVariant, ToggleSize, ToggleState } from './components/Toggle';

export { Avatar } from './components/Avatar';
export type {
  AvatarProps,
  AvatarVariant,
  AvatarSize,
  AvatarState,
  AvatarType,
  AvatarListImage,
} from './components/Avatar';

export { TextButton } from './components/TextButton';
export type {
  TextButtonProps,
  TextButtonVariant,
  TextButtonSize,
  TextButtonState,
} from './components/TextButton';

export { SubsectionStore } from './components/SubsectionStore';
export type {
  SubsectionStoreProps,
  SubsectionStoreVariant,
  SubsectionStoreSize,
  SubsectionStoreState,
} from './components/SubsectionStore';

export { ProgressBar } from './components/ProgressBar';
export type {
  ProgressBarProps,
  ProgressBarVariant,
  ProgressBarSize,
  ProgressBarState,
} from './components/ProgressBar';

export { ProgressBarCustom } from './components/ProgressBarCustom';
export type {
  ProgressBarCustomProps,
  ProgressBarCustomVariant,
  ProgressBarCustomSize,
  ProgressBarCustomState,
} from './components/ProgressBarCustom';

export { Steps } from './components/Steps';
export type { StepsProps, Step } from './components/Steps';
export { RadioButton } from './components/RadioButton';
export type {
  RadioButtonProps,
  RadioButtonVariant,
  RadioButtonStyle,
} from './components/RadioButton';
export { Checkbox } from './components/Checkbox';
export type { CheckboxProps, CheckboxVariant, CheckboxStyle } from './components/Checkbox';
export { AmountButton } from './components/AmountButton';
export type { AmountButtonProps, AmountButtonVariant } from './components/AmountButton';

export { NavTabs } from './components/NavTabs';
export type { NavTabsProps, NavTabsVariant, NavTabsStyle, NavTabItem } from './components/NavTabs';

export { Sidebar } from './components/Sidebar';
export type {
  SidebarProps,
  SidebarVariant,
  SidebarMenuItem,
  SidebarSubmenuItem,
} from './components/Sidebar';

export { AudioVisualizer } from './components/AudioVisualizer';
export type { AudioVisualizerProps } from './components/AudioVisualizer';

export { TextBox } from './components/TextBox';
export type { TextBoxProps } from './components/TextBox';

export { ButtonRecordVoice } from './components/ButtonRecordVoice';
export type {
  ButtonRecordVoiceProps,
  ButtonRecordVoiceState,
} from './components/ButtonRecordVoice';

export { AwardInteraction } from './components/AwardInteraction';
export type {
  AwardInteractionProps,
  AwardInteractionSize,
  AwardInteractionColor,
  AwardInteractionState,
} from './components/AwardInteraction';

export { CardProduct } from './components/CardProduct';
export type {
  CardProductProps,
  CardProductSize,
  CardProductColor,
  CardProductState,
} from './components/CardProduct';

export { CardProductStore } from './components/CardProductStore';
export type {
  CardProductStoreProps,
  CardProductStoreSize,
  CardProductStoreColor,
  CardProductStoreState,
} from './components/CardProductStore';

export { Profile } from './components/Profile';
export type { ProfileProps, ProfileVariant, ProfileSize, ProfileState } from './components/Profile';

// Utils
export { cn } from './utils/cn';
