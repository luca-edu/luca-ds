import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabList, TabListItem } from '../components/TabList';

const baseItems: TabListItem[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'students', label: 'Students' },
];

const meta = {
  title: 'Components/TabList',
  component: TabList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: false,
      description: 'Controlled selected tab key.',
    },
    onValueChange: {
      control: false,
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected tab key when uncontrolled.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether tabs stretch to fill the available width.',
    },
  },
  args: {
    items: baseItems,
    defaultValue: baseItems[0]?.key,
  },
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<string>(
      args.defaultValue ?? args.items[0]?.key ?? ''
    );

    return (
      <TabList
        {...args}
        value={value}
        onValueChange={(next) => {
          setValue(next);
          args.onValueChange?.(next);
        }}
      />
    );
  },
};

export const ThreeTabs: Story = {
  args: {
    items: [
      { key: 'overview', label: 'Overview' },
      { key: 'assignments', label: 'Assignments' },
      { key: 'grades', label: 'Grades' },
    ],
    defaultValue: 'overview',
  },
  render: (args) => {
    const [value, setValue] = React.useState<string>(
      args.defaultValue ?? args.items[0]?.key ?? ''
    );

    return (
      <TabList
        {...args}
        value={value}
        onValueChange={(next) => {
          setValue(next);
          args.onValueChange?.(next);
        }}
      />
    );
  },
};

export const WithDisabledTab: Story = {
  args: {
    items: [
      { key: 'overview', label: 'Overview' },
      { key: 'students', label: 'Students' },
      { key: 'reports', label: 'Reports', disabled: true },
    ],
    defaultValue: 'overview',
  },
  render: (args) => {
    const [value, setValue] = React.useState<string>(
      args.defaultValue ?? args.items[0]?.key ?? ''
    );

    return (
      <TabList
        {...args}
        value={value}
        onValueChange={(next) => {
          setValue(next);
          args.onValueChange?.(next);
        }}
      />
    );
  },
};

export const FullWidth: Story = {
  args: {
    items: [
      { key: 'overview', label: 'Overview' },
      { key: 'students', label: 'Students' },
    ],
    defaultValue: 'overview',
    fullWidth: true,
    className: 'w-[400px]',
  },
  render: (args) => {
    const [value, setValue] = React.useState<string>(
      args.defaultValue ?? args.items[0]?.key ?? ''
    );

    return (
      <TabList
        {...args}
        value={value}
        onValueChange={(next) => {
          setValue(next);
          args.onValueChange?.(next);
        }}
      />
    );
  },
};


