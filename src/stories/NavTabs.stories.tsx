import type { Meta, StoryObj } from '@storybook/react';
import { NavTabs } from '../components/NavTabs';
import React, { useState } from 'react';

// Icono de ejemplo (Home)
const HomeIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M8 2L3 7V14H6V10H10V14H13V7L8 2Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta = {
  title: 'Components/NavTabs',
  component: NavTabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'success', 'warning', 'danger', 'info', 'neutral'],
      description: 'Color variant of the nav tabs',
    },
    style: {
      control: 'select',
      options: ['default', 'underline', 'pills'],
      description: 'Visual style of the nav tabs',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the tabs should stretch to fill the available width',
    },
  },
  args: {
    variant: 'primary',
    style: 'default',
    fullWidth: false,
  },
} satisfies Meta<typeof NavTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About' },
  { key: 'services', label: 'Services' },
  { key: 'contact', label: 'Contact' },
];

const itemsWithIcons = [
  { key: 'home', label: 'Home', icon: <HomeIcon /> },
  { key: 'about', label: 'About', icon: <HomeIcon /> },
  { key: 'services', label: 'Services', icon: <HomeIcon /> },
  { key: 'contact', label: 'Contact', icon: <HomeIcon /> },
];

// Story básico
export const Default: Story = {
  args: {
    items: defaultItems,
  },
  render: (args) => {
    const [value, setValue] = useState('home');
    return (
      <NavTabs
        {...args}
        items={defaultItems}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

// Story con estilo underline
export const Underline: Story = {
  args: {
    items: defaultItems,
  },
  render: (args) => {
    const [value, setValue] = useState('home');
    return (
      <NavTabs
        {...args}
        items={defaultItems}
        value={value}
        onValueChange={setValue}
        style="underline"
      />
    );
  },
};

// Story con estilo pills
export const Pills: Story = {
  args: {
    items: defaultItems,
  },
  render: (args) => {
    const [value, setValue] = useState('home');
    return (
      <NavTabs
        {...args}
        items={defaultItems}
        value={value}
        onValueChange={setValue}
        style="pills"
      />
    );
  },
};

// Story con iconos
export const WithIcons: Story = {
  args: {
    items: itemsWithIcons,
  },
  render: (args) => {
    const [value, setValue] = useState('home');
    return (
      <NavTabs
        {...args}
        items={itemsWithIcons}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

// Story con todas las variantes
export const AllVariants: Story = {
  args: {
    items: defaultItems,
  },
  render: () => {
    const [values, setValues] = useState<Record<string, string>>({
      primary: 'home',
      accent: 'home',
      success: 'home',
      warning: 'home',
      danger: 'home',
      info: 'home',
      neutral: 'home',
    });

    return (
      <div className="luca-flex luca-flex-col luca-gap-6">
        {(['primary', 'accent', 'success', 'warning', 'danger', 'info', 'neutral'] as const).map((variant) => (
          <div key={variant} className="luca-flex luca-flex-col luca-gap-2">
            <span className="luca-text-sm luca-font-medium luca-text-neutral-700">
              {variant}:
            </span>
            <NavTabs
              variant={variant}
              items={defaultItems}
              value={values[variant]}
              onValueChange={(newValue) =>
                setValues((prev) => ({ ...prev, [variant]: newValue }))
              }
            />
          </div>
        ))}
      </div>
    );
  },
};

// Story con todos los estilos
export const AllStyles: Story = {
  args: {
    items: defaultItems,
  },
  render: () => {
    const [value1, setValue1] = useState('home');
    const [value2, setValue2] = useState('home');
    const [value3, setValue3] = useState('home');

    return (
      <div className="luca-flex luca-flex-col luca-gap-6">
        <div className="luca-flex luca-flex-col luca-gap-2">
          <span className="luca-text-sm luca-font-medium luca-text-neutral-700">
            Default:
          </span>
          <NavTabs
            items={defaultItems}
            value={value1}
            onValueChange={setValue1}
            style="default"
          />
        </div>
        <div className="luca-flex luca-flex-col luca-gap-2">
          <span className="luca-text-sm luca-font-medium luca-text-neutral-700">
            Underline:
          </span>
          <NavTabs
            items={defaultItems}
            value={value2}
            onValueChange={setValue2}
            style="underline"
          />
        </div>
        <div className="luca-flex luca-flex-col luca-gap-2">
          <span className="luca-text-sm luca-font-medium luca-text-neutral-700">
            Pills:
          </span>
          <NavTabs
            items={defaultItems}
            value={value3}
            onValueChange={setValue3}
            style="pills"
          />
        </div>
      </div>
    );
  },
};

// Story con disabled
export const WithDisabled: Story = {
  args: {
    items: [
      { key: 'home', label: 'Home' },
      { key: 'about', label: 'About', disabled: true },
      { key: 'services', label: 'Services' },
      { key: 'contact', label: 'Contact', disabled: true },
    ],
  },
  render: (args) => {
    const [value, setValue] = useState('home');
    const itemsWithDisabled = [
      { key: 'home', label: 'Home' },
      { key: 'about', label: 'About', disabled: true },
      { key: 'services', label: 'Services' },
      { key: 'contact', label: 'Contact', disabled: true },
    ];
    return (
      <NavTabs
        {...args}
        items={itemsWithDisabled}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

// Story fullWidth
export const FullWidth: Story = {
  args: {
    items: defaultItems,
  },
  render: (args) => {
    const [value, setValue] = useState('home');
    return (
      <div className="luca-w-full luca-max-w-2xl">
        <NavTabs
          {...args}
          items={defaultItems}
          value={value}
          onValueChange={setValue}
          fullWidth
        />
      </div>
    );
  },
};

