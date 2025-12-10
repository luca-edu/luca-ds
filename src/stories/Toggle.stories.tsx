import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../components/Toggle';
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'],
      description: 'Color variant of the toggle',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the toggle',
    },
    state: {
      control: 'select',
      options: ['default', 'focus', 'disabled'],
      description: 'State of the toggle',
    },
    layout: {
      control: 'select',
      options: ['default', 'left-right-label', 'left-right-icons'],
      description: 'Layout variant',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultChecked: false,
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Label text',
    defaultChecked: false,
  },
};

export const WithLabelAndHelper: Story = {
  args: {
    label: 'Label text',
    helperText: 'Write helper text here',
    defaultChecked: false,
  },
};

export const Focus: Story = {
  args: {
    state: 'focus',
    defaultChecked: false,
  },
};

export const FocusChecked: Story = {
  args: {
    state: 'focus',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    defaultChecked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    state: 'disabled',
    defaultChecked: true,
  },
};

export const AllVariants: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Unchecked</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
            (variant) => (
              <div key={variant} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
                <span className="luca-text-xs luca-text-neutral-600">{variant}</span>
                <Toggle {...args} variant={variant} defaultChecked={false} />
              </div>
            )
          )}
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Checked</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
            (variant) => (
              <div key={variant} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
                <span className="luca-text-xs luca-text-neutral-600">{variant}</span>
                <Toggle {...args} variant={variant} defaultChecked={true} />
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
    defaultChecked: true,
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Unchecked</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <div key={size} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
              <span className="luca-text-xs luca-text-neutral-600">{size.toUpperCase()}</span>
              <Toggle {...args} size={size} defaultChecked={false} />
            </div>
          ))}
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Checked</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-center">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <div key={size} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
              <span className="luca-text-xs luca-text-neutral-600">{size.toUpperCase()}</span>
              <Toggle {...args} size={size} defaultChecked={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  args: {
    defaultChecked: false,
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Unchecked</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          {(['default', 'focus', 'disabled'] as const).map((state) => (
            <div key={state} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
              <span className="luca-text-xs luca-text-neutral-600">{state}</span>
              <Toggle {...args} state={state} defaultChecked={false} />
            </div>
          ))}
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Checked</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          {(['default', 'focus', 'disabled'] as const).map((state) => (
            <div key={state} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
              <span className="luca-text-xs luca-text-neutral-600">{state}</span>
              <Toggle {...args} state={state} defaultChecked={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const LeftRightLabel: Story = {
  args: {
    layout: 'left-right-label',
    leftLabel: 'Monthly',
    rightLabel: 'Yearly',
    defaultChecked: false,
  },
};

export const LeftRightIcons: Story = {
  args: {
    layout: 'left-right-icons',
    leftIcon: <SpeakerXMarkIcon className="luca-w-5 luca-h-5 luca-text-neutral-600" />,
    rightIcon: <SpeakerWaveIcon className="luca-w-5 luca-h-5 luca-text-neutral-600" />,
    defaultChecked: false,
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8">
        <Toggle
          checked={checked}
          onChange={(newChecked) => {
            setChecked(newChecked);
            console.log('Toggle changed to:', newChecked);
          }}
          label="Controlled Toggle"
          helperText="This toggle is controlled by React state"
        />
        <p className="luca-text-sm luca-text-neutral-600">
          Current state: {checked ? 'Checked' : 'Unchecked'}
        </p>
      </div>
    );
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState(true);
    const [emailUpdates, setEmailUpdates] = React.useState(false);
    const [marketing, setMarketing] = React.useState(false);

    return (
      <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-md">
        <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">
          Notification Settings
        </h3>
        <div className="luca-flex luca-flex-col luca-gap-4">
          <Toggle
            checked={notifications}
            onChange={setNotifications}
            label="Push Notifications"
            helperText="Receive push notifications on your device"
          />
          <Toggle
            checked={emailUpdates}
            onChange={setEmailUpdates}
            label="Email Updates"
            helperText="Get updates via email"
          />
          <Toggle
            checked={marketing}
            onChange={setMarketing}
            label="Marketing Emails"
            helperText="Receive marketing and promotional emails"
            variant="accent"
          />
        </div>
      </div>
    );
  },
};

export const BillingExample: Story = {
  render: () => {
    const [isYearly, setIsYearly] = React.useState(false);

    return (
      <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-md">
        <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">Billing Period</h3>
        <Toggle
          layout="left-right-label"
          leftLabel="Monthly"
          rightLabel="Yearly"
          checked={isYearly}
          onChange={setIsYearly}
        />
        <div className="luca-mt-4 luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <p className="luca-text-sm luca-text-neutral-600">
            Selected plan: <strong>{isYearly ? 'Yearly' : 'Monthly'}</strong>
          </p>
          <p className="luca-text-xs luca-text-neutral-500 luca-mt-2">
            {isYearly ? 'Save 20% with yearly billing' : 'Switch to yearly to save 20%'}
          </p>
        </div>
      </div>
    );
  },
};

export const VolumeControlExample: Story = {
  render: () => {
    const [volume, setVolume] = React.useState(false);

    return (
      <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-md">
        <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">Volume Control</h3>
        <Toggle
          layout="left-right-icons"
          leftIcon={<SpeakerXMarkIcon className="luca-w-5 luca-h-5 luca-text-neutral-600" />}
          rightIcon={<SpeakerWaveIcon className="luca-w-5 luca-h-5 luca-text-neutral-600" />}
          checked={volume}
          onChange={setVolume}
        />
        <p className="luca-text-sm luca-text-neutral-600">Volume: {volume ? 'High' : 'Low'}</p>
      </div>
    );
  },
};

export const ResponsiveExample: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-w-full">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Desktop</h3>
        <div className="luca-w-full luca-max-w-6xl">
          <Toggle
            label="Desktop Toggle"
            helperText="This toggle is optimized for desktop screens"
            size="lg"
            defaultChecked={true}
          />
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Tablet</h3>
        <div className="luca-w-full luca-max-w-2xl">
          <Toggle
            label="Tablet Toggle"
            helperText="This toggle is optimized for tablet screens"
            size="md"
            defaultChecked={true}
          />
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Mobile</h3>
        <div className="luca-w-full luca-max-w-sm">
          <Toggle
            label="Mobile Toggle"
            helperText="This toggle is optimized for mobile screens"
            size="sm"
            defaultChecked={true}
          />
        </div>
      </div>
    </div>
  ),
};
