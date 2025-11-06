import type { Meta, StoryObj } from '@storybook/react';
import { LayoutHeader, LayoutHeaderProps } from '../cross/LayoutHeader';

const meta: Meta<LayoutHeaderProps> = {
  title: 'Cross/LayoutHeader',
  component: LayoutHeader,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<LayoutHeaderProps>;

export const Default: Story = {
  args: {
    backgroundImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    title: 'Título de ejemplo',
    subtitle: 'Subtítulo de ejemplo',
    avatarImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    avatarAlt: 'Avatar',
  },
};
