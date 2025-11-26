import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from '../components/SearchBar';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    setSearchInput: {
      table: {
        disable: true,
      },
    },
    searchInput: {
      table: {
        disable: true,
      },
    },
    className: {
      control: 'text',
      description: 'Additional classes for the container.',
    },
    inputClassName: {
      control: 'text',
      description: 'Additional classes for the input element.',
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledTemplate = (args: React.ComponentProps<typeof SearchBar>) => {
  const [value, setValue] = useState('');

  return <SearchBar {...args} searchInput={value} setSearchInput={setValue} />;
};

export const Default: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {},
};
