import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Profile } from '../components/Profile';

const meta = {
  title: 'Components/Profile',
  component: Profile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'],
      description: 'Color variant of the profile',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the profile',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'disabled'],
      description: 'State of the profile',
    },
    name: {
      control: 'text',
      description: 'Name to display',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle or secondary text',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the profile is clickable',
    },
    collapsed: {
      control: 'boolean',
      description: 'Whether the profile is collapsed',
    },
  },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Roxana',
    subtitle: '5° A',
  },
};

export const WithImage: Story = {
  args: {
    name: 'Roxana',
    subtitle: '5° A',
    avatar: {
      type: 'image',
      src: 'https://i.pravatar.cc/150?img=1',
      alt: 'Roxana',
    },
  },
};

export const AllVariants: Story = {
  args: {
    name: 'Roxana',
    subtitle: '5° A',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Default State</h3>
        <div className="luca-flex luca-flex-col luca-gap-3 luca-w-full">
          {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
            (variant) => (
              <Profile key={variant} {...args} variant={variant} />
            )
          )}
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Hover State</h3>
        <div className="luca-flex luca-flex-col luca-gap-3 luca-w-full">
          {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
            (variant) => (
              <Profile key={variant} {...args} variant={variant} state="hover" />
            )
          )}
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    name: 'Roxana',
    subtitle: '5° A',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">All Sizes</h3>
        <div className="luca-flex luca-flex-col luca-gap-4 luca-w-full">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <div key={size} className="luca-flex luca-flex-col luca-gap-2">
              <span className="luca-text-xs luca-text-neutral-600 luca-font-medium">
                {size.toUpperCase()}
              </span>
              <Profile {...args} size={size} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  args: {
    name: 'Roxana',
    subtitle: '5° A',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">All States</h3>
        <div className="luca-flex luca-flex-col luca-gap-3 luca-w-full">
          {(['default', 'hover', 'disabled'] as const).map((state) => (
            <div key={state} className="luca-flex luca-flex-col luca-gap-2">
              <span className="luca-text-xs luca-text-neutral-600 luca-font-medium">
                {state.toUpperCase()}
              </span>
              <Profile {...args} state={state} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const WithAvatarImage: Story = {
  args: {
    name: 'Roxana',
    subtitle: '5° A',
    avatar: {
      type: 'image',
      src: 'https://i.pravatar.cc/150?img=1',
      alt: 'Roxana',
    },
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Profile with Image Avatar
        </h3>
        <div className="luca-flex luca-flex-col luca-gap-3 luca-w-full">
          {(['primary', 'neutral', 'accent', 'success'] as const).map((variant, index) => (
            <Profile
              key={variant}
              {...args}
              variant={variant}
              avatar={{
                ...args.avatar,
                src: `https://i.pravatar.cc/150?img=${index + 1}`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  ),
};

export const WithAvatarText: Story = {
  args: {
    name: 'Roxana',
    subtitle: '5° A',
    avatar: {
      type: 'text',
      text: 'RO',
    },
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Profile with Text Avatar (Auto-generated from name)
        </h3>
        <div className="luca-flex luca-flex-col luca-gap-3 luca-w-full">
          <Profile {...args} name="Roxana García" subtitle="5° A" variant="primary" />
          <Profile {...args} name="Juan Pérez" subtitle="3° B" variant="accent" />
          <Profile {...args} name="María López" subtitle="4° C" variant="success" />
          <Profile {...args} name="Carlos Martínez" subtitle="6° D" variant="warning" />
        </div>
      </div>
    </div>
  ),
};

export const WithAvatarStatus: Story = {
  args: {
    name: 'Roxana',
    subtitle: '5° A',
    avatar: {
      type: 'image',
      src: 'https://i.pravatar.cc/150?img=1',
      alt: 'Roxana',
      showStatus: true,
    },
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          With Status Indicators
        </h3>
        <div className="luca-flex luca-flex-col luca-gap-3 luca-w-full">
          {(['online', 'offline', 'away', 'busy'] as const).map((status) => (
            <Profile
              key={status}
              {...args}
              avatar={{
                ...args.avatar,
                showStatus: true,
                status,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    name: 'Roxana',
    subtitle: '5° A',
    clickable: true,
    onClick: () => {
      alert('Profile clicked!');
    },
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Clickable Profiles (hover to see effect)
        </h3>
        <div className="luca-flex luca-flex-col luca-gap-3 luca-w-full">
          <Profile {...args} variant="primary" />
          <Profile {...args} variant="accent" name="Juan Pérez" subtitle="3° B" />
          <Profile {...args} variant="success" name="María López" subtitle="4° C" />
        </div>
      </div>
    </div>
  ),
};

export const NameOnly: Story = {
  args: {
    name: 'Roxana',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Name Only</h3>
        <div className="luca-flex luca-flex-col luca-gap-3 luca-w-full">
          <Profile {...args} variant="primary" />
          <Profile {...args} variant="accent" name="Juan Pérez" />
          <Profile {...args} variant="success" name="María López" />
        </div>
      </div>
    </div>
  ),
};

export const SubtitleOnly: Story = {
  args: {
    subtitle: '5° A',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Subtitle Only</h3>
        <div className="luca-flex luca-flex-col luca-gap-3 luca-w-full">
          <Profile {...args} variant="primary" />
          <Profile {...args} variant="accent" subtitle="3° B" />
          <Profile {...args} variant="success" subtitle="4° C" />
        </div>
      </div>
    </div>
  ),
};

export const LongText: Story = {
  args: {
    name: 'Roxana García Martínez',
    subtitle: '5° A - Matematicas y Ciencias',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Long Text (truncated)
        </h3>
        <div className="luca-flex luca-flex-col luca-gap-3 luca-w-full">
          <Profile {...args} variant="primary" />
          <Profile {...args} variant="accent" />
          <Profile {...args} variant="success" />
        </div>
      </div>
    </div>
  ),
};

export const Responsive: Story = {
  args: {
    name: 'Roxana',
    subtitle: '5° A',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-w-full luca-p-8">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Desktop (XL)</h3>
        <div className="luca-w-full luca-max-w-6xl">
          <Profile {...args} size="xl" variant="primary" />
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Tablet (MD)</h3>
        <div className="luca-w-full luca-max-w-2xl">
          <Profile {...args} size="md" variant="primary" />
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Mobile (SM)</h3>
        <div className="luca-w-full luca-max-w-sm">
          <Profile {...args} size="sm" variant="primary" />
        </div>
      </div>
    </div>
  ),
};

export const StudentList: Story = {
  render: () => {
    const students = [
      { name: 'Roxana García', subtitle: '5° A', variant: 'primary' as const },
      { name: 'Juan Pérez', subtitle: '3° B', variant: 'accent' as const },
      { name: 'María López', subtitle: '4° C', variant: 'success' as const },
      { name: 'Carlos Martínez', subtitle: '6° D', variant: 'warning' as const },
      { name: 'Ana Rodríguez', subtitle: '2° A', variant: 'info' as const },
    ];

    return (
      <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-md">
        <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">
          Lista de Estudiantes
        </h3>
        <div className="luca-flex luca-flex-col luca-gap-2 luca-w-full">
          {students.map((student, index) => (
            <Profile
              key={index}
              name={student.name}
              subtitle={student.subtitle}
              variant={student.variant}
              clickable
              onClick={() => {
                console.log(`Clicked on ${student.name}`);
              }}
            />
          ))}
        </div>
      </div>
    );
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const [selectedProfile, setSelectedProfile] = React.useState<string | null>(null);

    const profiles = [
      { id: '1', name: 'Roxana García', subtitle: '5° A', variant: 'primary' as const },
      { id: '2', name: 'Juan Pérez', subtitle: '3° B', variant: 'accent' as const },
      { id: '3', name: 'María López', subtitle: '4° C', variant: 'success' as const },
    ];

    return (
      <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-md">
        <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">
          Selecciona un perfil
        </h3>
        <div className="luca-flex luca-flex-col luca-gap-2 luca-w-full">
          {profiles.map((profile) => (
            <Profile
              key={profile.id}
              name={profile.name}
              subtitle={profile.subtitle}
              variant={profile.variant}
              state={selectedProfile === profile.id ? 'hover' : 'default'}
              clickable
              onClick={() => {
                setSelectedProfile(profile.id);
                console.log(`Selected: ${profile.name}`);
              }}
            />
          ))}
        </div>
        {selectedProfile && (
          <p className="luca-text-sm luca-text-neutral-600">
            Perfil seleccionado: {profiles.find((p) => p.id === selectedProfile)?.name}
          </p>
        )}
      </div>
    );
  },
};
