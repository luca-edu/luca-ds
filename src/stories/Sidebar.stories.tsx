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
  },
  {
    key: 'programs',
    label: 'Programas',
    icon: <BookIcon />,
  },
  {
    key: 'ai-tools',
    label: 'Herramientas IA',
    icon: <RobotIcon />,
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

// Story colapsado
/*export const Collapsed: Story = {
  args: {
    items: defaultItems,
  },
  render: (args) => {
    const [activeKey, setActiveKey] = useState('home');
    return (
      <div className="luca-h-screen luca-flex">
        <Sidebar
          {...args}
          items={defaultItems}
          activeKey={activeKey}
          onActiveKeyChange={setActiveKey}
          collapsed={true}
        />
        <div className="luca-flex-1 luca-p-8">
          <h1 className="luca-text-2xl luca-font-bold luca-mb-4">Contenido Principal</h1>
        </div>
      </div>
    );
  },
};

// Story con submenús
export const WithSubmenus: Story = {
  args: {
    items: defaultItems,
  },
  render: (args) => {
    const [activeKey, setActiveKey] = useState('home');
    const [collapsed, setCollapsed] = useState(false);

    const itemsWithSubmenus = [
      {
        key: 'home',
        label: 'Mis clases',
        icon: <HomeIcon />,
      },
      {
        key: 'programs',
        label: 'Programas',
        icon: <BookIcon />,
        submenu: [
          { key: 'all', label: 'Todos los programas' },
          { key: 'active', label: 'Programas activos' },
          { key: 'archived', label: 'Programas archivados' },
        ],
      },
      {
        key: 'tournaments',
        label: 'Torneos',
        icon: <TrophyIcon />,
        submenu: [
          { key: 'active', label: 'Torneos activos', icon: <TrophyIcon /> },
          { key: 'past', label: 'Torneos pasados' },
          { key: 'upcoming', label: 'Próximos torneos' },
        ],
      },
    ];

    return (
      <div className="luca-h-screen luca-flex">
        <Sidebar
          {...args}
          items={itemsWithSubmenus}
          activeKey={activeKey}
          onActiveKeyChange={setActiveKey}
          collapsed={collapsed}
          onCollapseChange={setCollapsed}
        />
        <div className="luca-flex-1 luca-p-8">
          <h1 className="luca-text-2xl luca-font-bold luca-mb-4">Contenido Principal</h1>
          <p>Active Key: {activeKey}</p>
        </div>
      </div>
    );
  },
};

// Story con disabled items
export const WithDisabled: Story = {
  args: {
    items: defaultItems,
  },
  render: (args) => {
    const [activeKey, setActiveKey] = useState('home');
    const itemsWithDisabled = [
      {
        key: 'home',
        label: 'Mis clases',
        icon: <HomeIcon />,
      },
      {
        key: 'programs',
        label: 'Programas',
        icon: <BookIcon />,
        disabled: true,
      },
      {
        key: 'ai-tools',
        label: 'Herramientas IA',
        icon: <RobotIcon />,
      },
      {
        key: 'tournaments',
        label: 'Torneos',
        icon: <TrophyIcon />,
        submenu: [
          { key: 'active', label: 'Torneos activos' },
          { key: 'past', label: 'Torneos pasados', disabled: true },
          { key: 'upcoming', label: 'Próximos torneos' },
        ],
      },
    ];

    return (
      <div className="luca-h-screen luca-flex">
        <Sidebar
          {...args}
          items={itemsWithDisabled}
          activeKey={activeKey}
          onActiveKeyChange={setActiveKey}
        />
        <div className="luca-flex-1 luca-p-8">
          <h1 className="luca-text-2xl luca-font-bold luca-mb-4">Contenido Principal</h1>
        </div>
      </div>
    );
  },
};

// Story con logo personalizado
export const CustomLogo: Story = {
  args: {
    items: defaultItems,
  },
  render: (args) => {
    const [activeKey, setActiveKey] = useState('home');
    const customLogo = (
      <div className="luca-flex luca-items-center luca-gap-2">
        <div className="luca-bg-primary-600 luca-text-white luca-w-8 luca-h-8 luca-rounded luca-flex luca-items-center luca-justify-center luca-font-bold">
          L
        </div>
        <span className="luca-text-primary-600 luca-font-bold luca-text-xl">Mi App</span>
      </div>
    );

    const logoIcon = <div className="luca-text-white luca-font-bold luca-text-lg">L</div>;

    return (
      <div className="luca-h-screen luca-flex">
        <Sidebar
          {...args}
          items={defaultItems}
          activeKey={activeKey}
          onActiveKeyChange={setActiveKey}
          logo={customLogo}
          logoIcon={logoIcon}
          logoWidth={200}
          logoHeight={48}
        />
        <div className="luca-flex-1 luca-p-8">
          <h1 className="luca-text-2xl luca-font-bold luca-mb-4">Contenido Principal</h1>
        </div>
      </div>
    );
  },
};

// Story sin botón de colapsar
export const WithoutCollapseButton: Story = {
  args: {
    items: defaultItems,
  },
  render: (args) => {
    const [activeKey, setActiveKey] = useState('home');
    return (
      <div className="luca-h-screen luca-flex">
        <Sidebar
          {...args}
          items={defaultItems}
          activeKey={activeKey}
          onActiveKeyChange={setActiveKey}
          showCollapseButton={false}
        />
        <div className="luca-flex-1 luca-p-8">
          <h1 className="luca-text-2xl luca-font-bold luca-mb-4">Contenido Principal</h1>
        </div>
      </div>
    );
  },
};*/
