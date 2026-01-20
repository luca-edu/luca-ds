import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '../components/Sidebar';
import React, { useState } from 'react';

// Iconos de ejemplo
const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3L3 10V20H8V14H16V20H21V10L12 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const BookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 19.5C4 18.837 4.263 18.201 4.732 17.732C5.201 17.263 5.837 17 6.5 17H20"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M6.5 2H20V22H6.5C5.837 22 5.201 21.737 4.732 21.268C4.263 20.799 4 20.163 4 19.5V4.5C4 3.837 4.263 3.201 4.732 2.732C5.201 2.263 5.837 2 6.5 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const RobotIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect
      x="6"
      y="8"
      width="12"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="9" cy="13" r="1" fill="currentColor" />
    <circle cx="15" cy="13" r="1" fill="currentColor" />
    <path d="M9 5V8M15 5V8" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M6 9H4C3.44772 9 3 9.44772 3 10V11C3 13.7614 5.23858 16 8 16H16C18.7614 16 21 13.7614 21 11V10C21 9.44772 20.5523 9 20 9H18"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path d="M8 9V4H16V9" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M12 16V20M9 20H15" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const HomeIconOff = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 3L3 10V20H8V14H16V20H21V10L12 3Z" stroke="#E4E7EC" strokeWidth="1.5" fill="none" />
  </svg>
);

const BookIconOff = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 19.5C4 18.837 4.263 18.201 4.732 17.732C5.201 17.263 5.837 17 6.5 17H20"
      stroke="#E4E7EC"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M6.5 2H20V22H6.5C5.837 22 5.201 21.737 4.732 21.268C4.263 20.799 4 20.163 4 19.5V4.5C4 3.837 4.263 3.201 4.732 2.732C5.201 2.263 5.837 2 6.5 2Z"
      stroke="#E4E7EC"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const RobotIconOff = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect
      x="6"
      y="8"
      width="12"
      height="10"
      rx="2"
      stroke="#E4E7EC"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="9" cy="13" r="1" fill="#E4E7EC" />
    <circle cx="15" cy="13" r="1" fill="#E4E7EC" />
    <path d="M9 5V8M15 5V8" stroke="#E4E7EC" strokeWidth="1.5" />
  </svg>
);

const TrophyIconOff = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M6 9H4C3.44772 9 3 9.44772 3 10V11C3 13.7614 5.23858 16 8 16H16C18.7614 16 21 13.7614 21 11V10C21 9.44772 20.5523 9 20 9H18"
      stroke="#E4E7EC"
      strokeWidth="1.5"
      fill="none"
    />
    <path d="M8 9V4H16V9" stroke="#E4E7EC" strokeWidth="1.5" fill="none" />
    <path d="M12 16V20M9 20H15" stroke="#E4E7EC" strokeWidth="1.5" />
  </svg>
);

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'success', 'warning', 'danger', 'info', 'neutral'],
      description: 'Color variant of the sidebar',
    },
    collapsed: {
      control: 'boolean',
      description: 'Whether the sidebar is collapsed',
    },
    showCollapseButton: {
      control: 'boolean',
      description: 'Whether to show the collapse button',
    },
    profile: {
      control: 'object',
      description: 'Profile props',
    },
  },
  args: {
    variant: 'primary',
    collapsed: false,
    showCollapseButton: true,
    profile: {
      name: 'Roxana García',
      subtitle: '5° A',
      avatar: {
        type: 'image',
        src: 'https://i.pravatar.cc/150?img=1',
        alt: 'Roxana',
        size: 'sm',
      },
      useTooltip: true,
      size: 'md',
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    key: 'home',
    label: 'Mis clases',
    icon: <HomeIcon />,
    iconOff: <HomeIconOff />,
  },
  {
    key: 'subjects',
    label: 'Materias',
    icon: <BookIcon />,
    iconOff: <BookIconOff />,
    submenu: [
      { key: 'active', label: 'Todos los programas' },
      { key: 'active', label: 'Programas activos' },
      { key: 'archived', label: 'Programas archivados' },
    ],
  },
  {
    key: 'programs',
    label: 'Programas',
    icon: <BookIcon />,
    iconOff: <BookIconOff />,
  },
  {
    key: 'ai-tools',
    label: 'Herramientas IA',
    icon: <RobotIcon />,
    iconOff: <RobotIconOff />,
  },
  {
    key: 'tournaments',
    label: 'Torneos',
    icon: <TrophyIcon />,
    submenu: [
      { key: 'active', label: 'Torneos activos' },
      { key: 'past', label: 'Torneos pasados' },
      { key: 'upcoming', label: 'Próximos torneos' },
    ],
    iconOff: <TrophyIconOff />,
  },
];

// Story básico
export const Default: Story = {
  args: {
    items: defaultItems,
  },
  render: (args) => {
    const [activeKey, setActiveKey] = useState('home');
    const [collapsed, setCollapsed] = useState(false);

    return (
      <div className="luca-h-screen luca-flex">
        <Sidebar
          {...args}
          items={defaultItems}
          activeKey={activeKey}
          onActiveKeyChange={setActiveKey}
          collapsed={collapsed}
          onCollapseChange={setCollapsed}
        />
        <div className="luca-flex-1 luca-p-8">
          <h1 className="luca-text-2xl luca-font-bold luca-mb-4">Contenido Principal</h1>
          <p>Active Key: {activeKey}</p>
          <p>Collapsed: {collapsed ? 'Sí' : 'No'}</p>
        </div>
      </div>
    );
  },
};
