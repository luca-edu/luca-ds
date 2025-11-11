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
    personalStyles: {
      control: 'select',
      options: [undefined, 'reading', 'examsGenerator'],
      description:
        'Select predefined style variants. Leave undefined for the default appearance.',
    },
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
  args: {
    personalStyles: undefined,
  },
};

export const ReadingStyle: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    personalStyles: 'reading',
  },
};

export const ExamsGeneratorStyle: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    personalStyles: 'examsGenerator',
  },
};


