import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextButton } from '../components/TextButton';
import { ArrowRightIcon, ArrowLeftIcon, PlusIcon } from '@heroicons/react/24/outline';

const meta = {
  title: 'Components/TextButton',
  component: TextButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'],
      description: 'Color variant of the text button',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the text button',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'disabled'],
      description: 'State of the text button',
    },
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Text button',
  },
};

export const Hover: Story = {
  args: {
    children: 'Text button',
    state: 'hover',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Text button',
    state: 'disabled',
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Text button',
    leftIcon: <ArrowLeftIcon />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Text button',
    rightIcon: <ArrowRightIcon />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Text button',
    leftIcon: <ArrowLeftIcon />,
    rightIcon: <ArrowRightIcon />,
  },
};

export const AllVariants: Story = {
  args: {
    children: 'Text button',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Default State</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
            (variant) => (
              <TextButton key={variant} {...args} variant={variant}>
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </TextButton>
            )
          )}
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Hover State</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
            (variant) => (
              <TextButton key={variant} {...args} variant={variant} state="hover">
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </TextButton>
            )
          )}
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Disabled State</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
            (variant) => (
              <TextButton key={variant} {...args} variant={variant} state="disabled">
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </TextButton>
            )
          )}
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    children: 'Text button',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Default State</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <div key={size} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
              <span className="luca-text-xs luca-text-neutral-600">{size.toUpperCase()}</span>
              <TextButton {...args} size={size}>
                Text button
              </TextButton>
            </div>
          ))}
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Hover State</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <div key={size} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
              <span className="luca-text-xs luca-text-neutral-600">{size.toUpperCase()}</span>
              <TextButton {...args} size={size} state="hover">
                Text button
              </TextButton>
            </div>
          ))}
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Disabled State</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <div key={size} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
              <span className="luca-text-xs luca-text-neutral-600">{size.toUpperCase()}</span>
              <TextButton {...args} size={size} state="disabled">
                Text button
              </TextButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  args: {
    children: 'Text button',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Primary Variant</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['default', 'hover', 'disabled'] as const).map((state) => (
            <div key={state} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
              <span className="luca-text-xs luca-text-neutral-600">{state}</span>
              <TextButton {...args} variant="primary" state={state}>
                Text button
              </TextButton>
            </div>
          ))}
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Danger Variant</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['default', 'hover', 'disabled'] as const).map((state) => (
            <div key={state} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
              <span className="luca-text-xs luca-text-neutral-600">{state}</span>
              <TextButton {...args} variant="danger" state={state}>
                Text button
              </TextButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    children: 'Text button',
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Buttons with Icons
        </h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          <TextButton leftIcon={<ArrowLeftIcon />}>Previous</TextButton>
          <TextButton rightIcon={<ArrowRightIcon />}>Next</TextButton>
          <TextButton leftIcon={<PlusIcon />} rightIcon={<ArrowRightIcon />}>
            Add Item
          </TextButton>
          <TextButton leftIcon={<ArrowLeftIcon />} variant="danger">
            Delete
          </TextButton>
          <TextButton rightIcon={<ArrowRightIcon />} variant="success">
            Save
          </TextButton>
        </div>
      </div>
    </div>
  ),
};

export const InteractiveExample: Story = {
  args: {
    children: 'Text button',
  },
  render: () => {
    const [count, setCount] = React.useState(0);

    return (
      <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-md">
        <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">Counter Example</h3>
        <div className="luca-flex luca-items-center luca-gap-4">
          <TextButton
            variant="danger"
            onClick={() => setCount((prev) => Math.max(0, prev - 1))}
            disabled={count === 0}
          >
            Decrease
          </TextButton>
          <span className="luca-text-lg luca-font-semibold luca-text-neutral-900">{count}</span>
          <TextButton variant="success" onClick={() => setCount((prev) => prev + 1)}>
            Increase
          </TextButton>
        </div>
        <div className="luca-mt-4">
          <TextButton variant="primary" onClick={() => setCount(0)}>
            Reset
          </TextButton>
        </div>
      </div>
    );
  },
};

export const NavigationExample: Story = {
  args: {
    children: 'Text button',
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-md">
      <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">Navigation</h3>
      <nav className="luca-flex luca-flex-col luca-gap-2">
        <TextButton leftIcon={<ArrowLeftIcon />} variant="primary">
          Back to Dashboard
        </TextButton>
        <TextButton variant="neutral">View Profile</TextButton>
        <TextButton variant="accent">Settings</TextButton>
        <TextButton variant="danger">Logout</TextButton>
      </nav>
    </div>
  ),
};

export const ActionButtonsExample: Story = {
  args: {
    children: 'Text button',
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-md">
      <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">Action Buttons</h3>
      <div className="luca-flex luca-flex-col luca-gap-3">
        <div className="luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <p className="luca-text-sm luca-text-neutral-700 luca-mb-3">
            Are you sure you want to delete this item?
          </p>
          <div className="luca-flex luca-gap-2">
            <TextButton variant="danger">Delete</TextButton>
            <TextButton variant="neutral">Cancel</TextButton>
          </div>
        </div>
        <div className="luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <p className="luca-text-sm luca-text-neutral-700 luca-mb-3">
            Save your changes before leaving?
          </p>
          <div className="luca-flex luca-gap-2">
            <TextButton variant="success" rightIcon={<ArrowRightIcon />}>
              Save
            </TextButton>
            <TextButton variant="neutral">Discard</TextButton>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveExample: Story = {
  args: {
    children: 'Text button',
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-w-full">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Desktop</h3>
        <div className="luca-w-full luca-max-w-6xl">
          <TextButton size="xl" variant="primary">
            Large Text Button
          </TextButton>
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Tablet</h3>
        <div className="luca-w-full luca-max-w-2xl">
          <TextButton size="lg" variant="primary">
            Medium Text Button
          </TextButton>
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Mobile</h3>
        <div className="luca-w-full luca-max-w-sm">
          <TextButton size="sm" variant="primary">
            Small Text Button
          </TextButton>
        </div>
      </div>
    </div>
  ),
};

export const LinkLikeExample: Story = {
  args: {
    children: 'Text button',
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-md">
      <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">Link-like Buttons</h3>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <p className="luca-text-sm luca-text-neutral-600">
          Click <TextButton variant="primary">here</TextButton> to learn more.
        </p>
        <p className="luca-text-sm luca-text-neutral-600">
          Need help? <TextButton variant="accent">Contact support</TextButton>
        </p>
        <p className="luca-text-sm luca-text-neutral-600">
          <TextButton variant="success" rightIcon={<ArrowRightIcon />}>
            Read our documentation
          </TextButton>{' '}
          for more information.
        </p>
      </div>
    </div>
  ),
};
