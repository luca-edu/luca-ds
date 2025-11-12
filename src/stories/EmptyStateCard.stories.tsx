import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { EmptyStateCard } from '../components/EmptyStateCard';
import { Button } from '../components/Button';

const meta = {
  title: 'Components/EmptyStateCard',
  component: EmptyStateCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'No has creado contenidos aún',
    description:
      'Comienza agregando recursos para tus estudiantes. Aquí aparecerán todas tus actividades y materiales.',
    wrapperClassName: 'luca-w-[600px]',
  },
} satisfies Meta<typeof EmptyStateCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    compact: true,
    title: undefined,
    description: 'Parece que todavía no hay nada aquí.',
  },
};

export const WithAction: Story = {
  args: {
    footer: <Button>Crear recurso</Button>,
  },
};

export const CustomIllustration: Story = {
  args: {
    illustrationAlt: 'Robot personalizado',
  },
};

