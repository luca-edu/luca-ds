import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../components/Toast';
import { variantOptions } from './shared/notificationShared';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: variantOptions,
      description: 'Define el tono visual del toast',
    },
    dismissible: {
      control: 'boolean',
      description: 'Permite cerrar el toast',
    },
    message: {
      control: 'text',
      description: 'Contenido principal del toast',
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: 'success',
    message: 'El elemento se agregó correctamente.',
  },
};

export const Controlled: Story = {
  args: {
    variant: 'success',
    message: 'El elemento se agregó correctamente.',
    dismissible: true,
  },
  render: (args) => {
    const [visible, setVisible] = React.useState(true);

    if (!visible) {
      return (
        <button
          type="button"
          className="luca-rounded-lg luca-border luca-border-primary-200 luca-bg-white luca-px-4 luca-py-2 luca-text-sm luca-font-medium luca-text-primary-600"
          onClick={() => setVisible(true)}
        >
          Mostrar toast
        </button>
      );
    }

    return (
      <Toast
        {...args}
        onDismiss={() => setVisible(false)}
      />
    );
  },
};

