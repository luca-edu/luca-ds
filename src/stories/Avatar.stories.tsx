import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../components/Avatar';
import { Badge } from '../components/Badge';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'],
      description: 'Color variant of the avatar',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the avatar',
    },
    state: {
      control: 'select',
      options: ['default', 'disabled'],
      description: 'State of the avatar',
    },
    type: {
      control: 'select',
      options: ['text', 'image'],
      description: 'Type of avatar',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    text: 'TG',
  },
};

export const WithImage: Story = {
  args: {
    type: 'image',
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'Avatar',
  },
};

export const WithName: Story = {
  args: {
    type: 'text',
    name: 'John Doe',
  },
};

export const AllVariants: Story = {
  args: {
    type: 'text',
    text: 'TG',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Text Avatars</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
            (variant) => (
              <div key={variant} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
                <span className="luca-text-xs luca-text-neutral-600">{variant}</span>
                <Avatar {...args} variant={variant} text="TG" />
              </div>
            )
          )}
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Image Avatars</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
            (variant, index) => (
              <div key={variant} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
                <span className="luca-text-xs luca-text-neutral-600">{variant}</span>
                <Avatar
                  type="image"
                  variant={variant}
                  src={`https://i.pravatar.cc/150?img=${index + 1}`}
                  alt={`Avatar ${variant}`}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    type: 'text',
    text: 'TG',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Text Avatars</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <div key={size} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
              <span className="luca-text-xs luca-text-neutral-600">{size.toUpperCase()}</span>
              <Avatar {...args} size={size} text="TG" />
            </div>
          ))}
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Image Avatars</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size, index) => (
            <div key={size} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
              <span className="luca-text-xs luca-text-neutral-600">{size.toUpperCase()}</span>
              <Avatar
                type="image"
                size={size}
                src={`https://i.pravatar.cc/150?img=${index + 1}`}
                alt={`Avatar ${size}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  args: {
    type: 'text',
    text: 'TG',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Text Avatars</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['default', 'disabled'] as const).map((state) => (
            <div key={state} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
              <span className="luca-text-xs luca-text-neutral-600">{state}</span>
              <Avatar {...args} state={state} text="TG" />
            </div>
          ))}
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Image Avatars</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['default', 'disabled'] as const).map((state) => (
            <div key={state} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
              <span className="luca-text-xs luca-text-neutral-600">{state}</span>
              <Avatar
                type="image"
                state={state}
                src="https://i.pravatar.cc/150?img=1"
                alt={`Avatar ${state}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const WithStatus: Story = {
  args: {
    type: 'image',
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'Avatar',
    showStatus: true,
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Status Indicators</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['online', 'offline', 'away', 'busy'] as const).map((status) => (
            <div key={status} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
              <span className="luca-text-xs luca-text-neutral-600">{status}</span>
              <Avatar {...args} status={status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const WithBadge: Story = {
  args: {
    type: 'image',
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'Avatar',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">With Badge</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          <Avatar
            {...args}
            badge={
              <Badge variant="fill" color="danger" rounded="semi">
                3
              </Badge>
            }
          />
          <Avatar
            {...args}
            badge={
              <Badge variant="fill" color="success" rounded="semi">
                New
              </Badge>
            }
          />
          <Avatar
            {...args}
            badge={
              <Badge variant="fill" color="primary" rounded="semi">
                5
              </Badge>
            }
          />
        </div>
      </div>
    </div>
  ),
};

export const WithNameInitials: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Auto-generated Initials
        </h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          <Avatar type="text" name="John Doe" variant="primary" />
          <Avatar type="text" name="Jane Smith" variant="accent" />
          <Avatar type="text" name="Bob" variant="success" />
          <Avatar type="text" name="Alice Johnson Williams" variant="warning" />
          <Avatar type="text" name="Charlie" variant="danger" />
        </div>
      </div>
    </div>
  ),
};

export const UserListExample: Story = {
  render: () => {
    const users = [
      { name: 'John Doe', status: 'online' as const, variant: 'primary' as const },
      { name: 'Jane Smith', status: 'away' as const, variant: 'accent' as const },
      { name: 'Bob Johnson', status: 'offline' as const, variant: 'success' as const },
      { name: 'Alice Williams', status: 'busy' as const, variant: 'warning' as const },
      { name: 'Charlie Brown', status: 'online' as const, variant: 'danger' as const },
    ];

    return (
      <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-md">
        <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">Team Members</h3>
        <div className="luca-flex luca-flex-col luca-gap-3">
          {users.map((user, index) => (
            <div
              key={index}
              className="luca-flex luca-items-center luca-gap-3 luca-p-3 luca-rounded-lg luca-bg-neutral-50 hover:luca-bg-neutral-100 luca-transition-colors"
            >
              <Avatar
                type="text"
                name={user.name}
                variant={user.variant}
                size="md"
                showStatus
                status={user.status}
              />
              <div className="luca-flex luca-flex-col">
                <span className="luca-text-sm luca-font-medium luca-text-neutral-900">
                  {user.name}
                </span>
                <span className="luca-text-xs luca-text-neutral-500">
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const NotificationExample: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-md">
      <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">Notifications</h3>
      <div className="luca-flex luca-flex-col luca-gap-3">
        <div className="luca-flex luca-items-center luca-gap-3 luca-p-3 luca-rounded-lg luca-bg-neutral-50">
          <Avatar
            type="image"
            src="https://i.pravatar.cc/150?img=1"
            alt="User"
            size="md"
            badge={
              <Badge variant="fill" color="danger" rounded="semi">
                5
              </Badge>
            }
          />
          <div className="luca-flex luca-flex-col luca-flex-1">
            <span className="luca-text-sm luca-font-medium luca-text-neutral-900">
              New messages
            </span>
            <span className="luca-text-xs luca-text-neutral-500">You have 5 unread messages</span>
          </div>
        </div>
        <div className="luca-flex luca-items-center luca-gap-3 luca-p-3 luca-rounded-lg luca-bg-neutral-50">
          <Avatar
            type="image"
            src="https://i.pravatar.cc/150?img=2"
            alt="User"
            size="md"
            showStatus
            status="online"
          />
          <div className="luca-flex luca-flex-col luca-flex-1">
            <span className="luca-text-sm luca-font-medium luca-text-neutral-900">
              Sarah is online
            </span>
            <span className="luca-text-xs luca-text-neutral-500">Active now</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveExample: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-w-full">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Desktop</h3>
        <div className="luca-w-full luca-max-w-6xl">
          <Avatar type="text" text="TG" size="xl" variant="primary" showStatus status="online" />
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Tablet</h3>
        <div className="luca-w-full luca-max-w-2xl">
          <Avatar type="text" text="TG" size="lg" variant="primary" showStatus status="online" />
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Mobile</h3>
        <div className="luca-w-full luca-max-w-sm">
          <Avatar type="text" text="TG" size="md" variant="primary" showStatus status="online" />
        </div>
      </div>
    </div>
  ),
};
