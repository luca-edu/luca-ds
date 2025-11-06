import type { Meta, StoryObj } from '@storybook/react';
import { Layout, LayoutProps } from '../cross/Layout';

const meta: Meta<LayoutProps> = {
  title: 'Cross/Layout',
  component: Layout,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<LayoutProps>;

export const Composed: Story = {
  render: () => (
    <Layout>
      <Layout.Header
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        title="Título de ejemplo"
        subtitle="Subtítulo de ejemplo"
        avatarImage="https://randomuser.me/api/portraits/men/32.jpg"
        avatarAlt="Avatar"
      />
      <Layout.Content>
        Contenido principal aquí
      </Layout.Content>
    </Layout>
  ),
};

export const OnlyContent: Story = {
  render: () => (
    <Layout>
      <Layout.Content>
        Solo contenido, sin header
      </Layout.Content>
    </Layout>
  ),
};
