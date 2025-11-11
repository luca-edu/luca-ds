import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Notification,
  NotificationAction,
  NotificationActions,
} from '../components/Notification';
import type { NotificationVariant } from '../types/variants';
import { notificationCopy, variantOptions } from './shared/notificationShared';

const meta = {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: variantOptions,
      description: 'Define el tono visual de la notificación',
    },
    title: {
      control: 'text',
      description: 'Título principal de la notificación',
    },
    description: {
      control: 'text',
      description: 'Contenido descriptivo de la notificación',
    },
    dismissible: {
      control: 'boolean',
      description: 'Permite cerrar la notificación',
    },
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variants: Story = {
  render: (args) => (
    <div className="luca-flex luca-max-w-[940px] luca-flex-col luca-gap-6 luca-p-6">
      {(Object.entries(notificationCopy) as [
        NotificationVariant,
        { title: string; description: string },
      ][]).map(([variant, copy]) => (
        <Notification
          key={variant}
          {...args}
          variant={variant}
          title={copy.title}
          description={copy.description}
          actions={
            <NotificationActions>
              <NotificationAction>Ver estado</NotificationAction>
              <NotificationAction actionVariant="secondary">
                Descartar
              </NotificationAction>
            </NotificationActions>
          }
          onDismiss={() => undefined}
        />
      ))}
    </div>
  ),
  args: {
    dismissible: true,
  },
};

export const InlineControlled: Story = {
  render: (args) => {
    const [visible, setVisible] = React.useState(true);

    if (!visible) {
      return (
        <button
          type="button"
          className="luca-rounded-lg luca-border luca-border-primary-200 luca-bg-white luca-px-4 luca-py-2 luca-text-sm luca-font-medium luca-text-primary-600"
          onClick={() => setVisible(true)}
        >
          Mostrar notificación
        </button>
      );
    }

    return (
      <Notification
        {...args}
        onDismiss={() => setVisible(false)}
        actions={
          <NotificationActions>
            <NotificationAction>Ver estado</NotificationAction>
            <NotificationAction actionVariant="secondary">
              Descartar
            </NotificationAction>
          </NotificationActions>
        }
      />
    );
  },
  args: {
    variant: 'success',
    title: notificationCopy.success.title,
    description: notificationCopy.success.description,
    dismissible: true,
  },
};

