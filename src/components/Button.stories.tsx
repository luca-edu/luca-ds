import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Simple upload icon SVG
const UploadIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 8L12 3L7 8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 3V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Visual style of the button',
    },
    state: {
      control: 'select',
      options: ['default', 'alert'],
      description: 'State of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    leftIcon: {
      control: 'boolean',
      description: 'Show icon on the left',
      mapping: {
        true: <UploadIcon />,
        false: undefined,
      },
    },
    rightIcon: {
      control: 'boolean',
      description: 'Show icon on the right',
      mapping: {
        true: <UploadIcon />,
        false: undefined,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryDefault: Story = {
  args: {
    variant: 'primary',
    state: 'default',
    children: 'PRIMARY BUTTON',
    leftIcon: <UploadIcon />,
    rightIcon: <UploadIcon />,
  },
};

export const PrimaryNoIcons: Story = {
  args: {
    variant: 'primary',
    state: 'default',
    children: 'PRIMARY BUTTON',
  },
};

export const PrimaryLeftIcon: Story = {
  args: {
    variant: 'primary',
    state: 'default',
    children: 'PRIMARY BUTTON',
    leftIcon: <UploadIcon />,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    state: 'default',
    children: 'PRIMARY BUTTON',
    leftIcon: <UploadIcon />,
    rightIcon: <UploadIcon />,
    disabled: true,
  },
};

export const PrimaryAlert: Story = {
  args: {
    variant: 'primary',
    state: 'alert',
    children: 'PRIMARY BUTTON',
    leftIcon: <UploadIcon />,
    rightIcon: <UploadIcon />,
  },
};

export const SecondaryDefault: Story = {
  args: {
    variant: 'secondary',
    state: 'default',
    children: 'SECONDARY BUTTON',
    leftIcon: <UploadIcon />,
    rightIcon: <UploadIcon />,
  },
};

export const SecondaryNoIcons: Story = {
  args: {
    variant: 'secondary',
    state: 'default',
    children: 'SECONDARY BUTTON',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    state: 'default',
    children: 'SECONDARY BUTTON',
    leftIcon: <UploadIcon />,
    rightIcon: <UploadIcon />,
    disabled: true,
  },
};

export const SecondaryAlert: Story = {
  args: {
    variant: 'secondary',
    state: 'alert',
    children: 'SECONDARY BUTTON',
    leftIcon: <UploadIcon />,
    rightIcon: <UploadIcon />,
  },
};

export const AllVariants = {
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Primary Variant</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" leftIcon={<UploadIcon />} rightIcon={<UploadIcon />}>
            PRIMARY BUTTON
          </Button>
          <Button variant="primary" disabled leftIcon={<UploadIcon />} rightIcon={<UploadIcon />}>
            PRIMARY BUTTON
          </Button>
          <Button variant="primary" state="alert" leftIcon={<UploadIcon />} rightIcon={<UploadIcon />}>
            PRIMARY BUTTON
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Secondary Variant</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" leftIcon={<UploadIcon />} rightIcon={<UploadIcon />}>
            SECONDARY BUTTON
          </Button>
          <Button variant="secondary" disabled leftIcon={<UploadIcon />} rightIcon={<UploadIcon />}>
            SECONDARY BUTTON
          </Button>
          <Button variant="secondary" state="alert" leftIcon={<UploadIcon />} rightIcon={<UploadIcon />}>
            SECONDARY BUTTON
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Icon Variations</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" leftIcon={<UploadIcon />}>
            Left Icon Only
          </Button>
          <Button variant="primary" rightIcon={<UploadIcon />}>
            Right Icon Only
          </Button>
          <Button variant="primary">
            No Icons
          </Button>
        </div>
      </div>
    </div>
  ),
};
