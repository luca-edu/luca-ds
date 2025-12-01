import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../components/Tag';
import { CalculatorIcon } from '../shared/icons';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'],
      description: 'Color variant of the tag',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the tag',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focused', 'disabled'],
      description: 'State of the tag',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the tag is clickable',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Title',
    icon: <CalculatorIcon size={24} />,
  },
};

export const WithoutIcon: Story = {
  args: {
    children: 'Title',
  },
};

export const Hover: Story = {
  args: {
    children: 'Title',
    icon: <CalculatorIcon size={24} />,
    state: 'hover',
  },
};

export const Focused: Story = {
  args: {
    children: 'Title',
    icon: <CalculatorIcon size={24} />,
    state: 'focused',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Title',
    icon: <CalculatorIcon size={24} />,
    state: 'disabled',
  },
};

export const NotClickable: Story = {
  args: {
    children: 'Title',
    icon: <CalculatorIcon size={24} />,
    clickable: false,
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Title',
    icon: <CalculatorIcon size={24} />,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8">
      {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
        (variant) => (
          <div key={variant} className="luca-flex luca-flex-col luca-gap-2">
            <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </h3>
            <div className="luca-flex luca-flex-wrap luca-gap-3">
              <Tag variant={variant} state="default" icon={<CalculatorIcon size={24} />}>
                Default
              </Tag>
              <Tag variant={variant} state="hover" icon={<CalculatorIcon size={24} />}>
                Hover
              </Tag>
              <Tag variant={variant} state="focused" icon={<CalculatorIcon size={24} />}>
                Focused
              </Tag>
              <Tag variant={variant} state="disabled" icon={<CalculatorIcon size={24} />}>
                Disabled
              </Tag>
            </div>
          </div>
        )
      )}
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    children: 'Title',
    icon: <CalculatorIcon size={24} />,
    size: 'md',
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="luca-flex luca-items-center luca-gap-3">
          <span className="luca-w-16 luca-text-sm luca-font-medium luca-text-neutral-600">
            {size.toUpperCase()}
          </span>
          <Tag
            size={size}
            icon={<CalculatorIcon size={size === 'xs' ? 12 : size === 'sm' ? 16 : 24} />}
          >
            Title
          </Tag>
        </div>
      ))}
    </div>
  ),
};
