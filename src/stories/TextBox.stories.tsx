import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TextBox } from '../components/TextBox';

const meta = {
  title: 'Components/TextBox',
  component: TextBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when textarea is empty',
    },
    value: {
      control: 'text',
      description: 'Current value of the textarea',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum number of characters allowed',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    onSubmit: {
      action: 'submitted',
      description: 'Callback fired when submit button is clicked or Enter is pressed',
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired when value changes',
    },
    maxWidth: {
      control: 'text',
      description: 'Maximum width of the container (e.g. "500px", "50%")',
    },
  },
} satisfies Meta<typeof TextBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default state (empty)
export const Default: Story = {
  args: {
    placeholder: 'Write answer',
  },
};

// With custom max width
export const WithMaxWidth: Story = {
  args: {
    placeholder: 'This box has a max-width of 400px',
    maxWidth: '400px',
  },
};

// With controlled value
export const WithValue: Story = {
  args: {
    value: 'This is a sample message that the user is typing.',
    placeholder: 'Write answer',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    value: 'This message cannot be edited',
    disabled: true,
  },
};

// With max length
export const WithMaxLength: Story = {
  args: {
    placeholder: 'Write answer (max 100 characters)',
    maxLength: 100,
  },
};

// Interactive example with state
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    const handleSubmit = (message: string) => {
      setMessages([...messages, message]);
      setValue('');
      console.log('Message submitted:', message);
    };

    return (
      <div className="luca-w-[718px] luca-space-y-4">
        <div className="luca-space-y-2">
          <h3 className="luca-text-lg luca-font-semibold">Submitted Messages:</h3>
          {messages.length === 0 ? (
            <p className="luca-text-neutral-400">
              No messages yet. Type and press Enter or click send.
            </p>
          ) : (
            <div className="luca-space-y-2">
              {messages.map((msg, idx) => (
                <div key={idx} className="luca-p-3 luca-bg-neutral-100 luca-rounded-lg">
                  {msg}
                </div>
              ))}
            </div>
          )}
        </div>
        <TextBox
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSubmit={handleSubmit}
          placeholder="Write answer"
        />
      </div>
    );
  },
};

// Multi-line content example
export const MultiLineContent: Story = {
  args: {
    value: `This is a longer message
that spans multiple lines
to demonstrate the auto-resize
functionality of the TextBox component.`,
    placeholder: 'Write answer',
  },
};

// States comparison
export const StatesComparison: Story = {
  render: () => (
    <div className="luca-space-y-8 luca-w-[718px]">
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-2">Default (Empty)</h3>
        <TextBox placeholder="Write answer" />
      </div>
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-2">With Content</h3>
        <TextBox value="This is some content" placeholder="Write answer" />
      </div>
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-2">Disabled</h3>
        <TextBox value="Cannot edit this" disabled placeholder="Write answer" />
      </div>
    </div>
  ),
};
