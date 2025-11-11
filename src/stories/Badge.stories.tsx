import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['fill', 'outline', 'duotone'],
      description: 'Visual variant of the badge',
      table: {
        defaultValue: { summary: 'fill' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'gray', 'light', 'warning', 'danger', 'success', 'info'],
      description: 'Color theme of the badge',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    rounded: {
      control: 'select',
      options: ['semi', 'full'],
      description: 'Border radius style',
      table: {
        defaultValue: { summary: 'semi' },
      },
    },
    showIcon: {
      control: 'boolean',
      description: 'Show check icon (only visible in full rounded duotone badges)',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'fill',
    color: 'primary',
    rounded: 'semi',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'fill',
    color: 'secondary',
    rounded: 'semi',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'fill',
    color: 'success',
    rounded: 'semi',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    variant: 'fill',
    color: 'danger',
    rounded: 'semi',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'fill',
    color: 'warning',
    rounded: 'semi',
  },
};

export const Info: Story = {
  args: {
    children: 'Info',
    variant: 'fill',
    color: 'info',
    rounded: 'semi',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
    color: 'primary',
    rounded: 'semi',
  },
};

export const Duotone: Story = {
  args: {
    children: 'Duotone',
    variant: 'duotone',
    color: 'primary',
    rounded: 'semi',
  },
};

export const FullRounded: Story = {
  args: {
    children: 'Full Rounded',
    variant: 'fill',
    color: 'primary',
    rounded: 'full',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'With Icon',
    variant: 'duotone',
    color: 'success',
    rounded: 'full',
    showIcon: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="luca-space-y-6">
      {/* Fill Variants - Semi Rounded */}
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-3 luca-text-neutral-700">Fill - Semi Rounded</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-2">
          <Badge variant="fill" color="primary" rounded="semi">Primary</Badge>
          <Badge variant="fill" color="secondary" rounded="semi">Secondary</Badge>
          <Badge variant="fill" color="gray" rounded="semi">Gray</Badge>
          <Badge variant="fill" color="light" rounded="semi">Light</Badge>
          <Badge variant="fill" color="warning" rounded="semi">Warning</Badge>
          <Badge variant="fill" color="danger" rounded="semi">Danger</Badge>
          <Badge variant="fill" color="success" rounded="semi">Success</Badge>
          <Badge variant="fill" color="info" rounded="semi">Info</Badge>
        </div>
      </div>

      {/* Outline Variants - Semi Rounded */}
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-3 luca-text-neutral-700">Outline - Semi Rounded</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-2">
          <Badge variant="outline" color="primary" rounded="semi">Primary</Badge>
          <Badge variant="outline" color="secondary" rounded="semi">Secondary</Badge>
          <Badge variant="outline" color="gray" rounded="semi">Gray</Badge>
          <Badge variant="outline" color="light" rounded="semi">Light</Badge>
          <Badge variant="outline" color="warning" rounded="semi">Warning</Badge>
          <Badge variant="outline" color="danger" rounded="semi">Danger</Badge>
          <Badge variant="outline" color="success" rounded="semi">Success</Badge>
          <Badge variant="outline" color="info" rounded="semi">Info</Badge>
        </div>
      </div>

      {/* Fill Variants - Full Rounded */}
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-3 luca-text-neutral-700">Fill - Full Rounded</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-2">
          <Badge variant="fill" color="primary" rounded="full">Primary</Badge>
          <Badge variant="fill" color="secondary" rounded="full">Secondary</Badge>
          <Badge variant="fill" color="gray" rounded="full">Gray</Badge>
          <Badge variant="fill" color="light" rounded="full">Light</Badge>
          <Badge variant="fill" color="warning" rounded="full">Warning</Badge>
          <Badge variant="fill" color="danger" rounded="full">Danger</Badge>
          <Badge variant="fill" color="success" rounded="full">Success</Badge>
          <Badge variant="fill" color="info" rounded="full">Info</Badge>
        </div>
      </div>

      {/* Outline Variants - Full Rounded */}
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-3 luca-text-neutral-700">Outline - Full Rounded</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-2">
          <Badge variant="outline" color="primary" rounded="full">Primary</Badge>
          <Badge variant="outline" color="secondary" rounded="full">Secondary</Badge>
          <Badge variant="outline" color="gray" rounded="full">Gray</Badge>
          <Badge variant="outline" color="light" rounded="full">Light</Badge>
          <Badge variant="outline" color="warning" rounded="full">Warning</Badge>
          <Badge variant="outline" color="danger" rounded="full">Danger</Badge>
          <Badge variant="outline" color="success" rounded="full">Success</Badge>
          <Badge variant="outline" color="info" rounded="full">Info</Badge>
        </div>
      </div>

      {/* Duotone Variants - Semi Rounded */}
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-3 luca-text-neutral-700">Duotone - Semi Rounded</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-2">
          <Badge variant="duotone" color="primary" rounded="semi">Primary</Badge>
          <Badge variant="duotone" color="secondary" rounded="semi">Secondary</Badge>
          <Badge variant="duotone" color="gray" rounded="semi">Gray</Badge>
          <Badge variant="duotone" color="light" rounded="semi">Light</Badge>
          <Badge variant="duotone" color="warning" rounded="semi">Warning</Badge>
          <Badge variant="duotone" color="danger" rounded="semi">Danger</Badge>
          <Badge variant="duotone" color="success" rounded="semi">Success</Badge>
          <Badge variant="duotone" color="info" rounded="semi">Info</Badge>
        </div>
      </div>

      {/* Duotone Variants - Full Rounded with Icon */}
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-3 luca-text-neutral-700">Duotone - Full Rounded with Icon</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-2">
          <Badge variant="duotone" color="primary" rounded="full" showIcon>Primary</Badge>
          <Badge variant="duotone" color="secondary" rounded="full" showIcon>Secondary</Badge>
          <Badge variant="duotone" color="gray" rounded="full" showIcon>Gray</Badge>
          <Badge variant="duotone" color="light" rounded="full" showIcon>Light</Badge>
          <Badge variant="duotone" color="warning" rounded="full" showIcon>Warning</Badge>
          <Badge variant="duotone" color="danger" rounded="full" showIcon>Danger</Badge>
          <Badge variant="duotone" color="success" rounded="full" showIcon>Success</Badge>
          <Badge variant="duotone" color="info" rounded="full" showIcon>Info</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
