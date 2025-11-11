import type { Meta, StoryObj } from '@storybook/react';
import { Chips, ChipItem } from '../components/Chips';
import React, { useState } from 'react';

const sampleChips: ChipItem[] = [
  { id: 1, title: 'React' },
  { id: 2, title: 'TypeScript' },
  { id: 3, title: 'Tailwind CSS' },
  { id: 4, title: 'Storybook' },
  { id: 5, title: 'Vite' },
];

const longTitleChips: ChipItem[] = [
  { id: 1, title: 'This is a very long chip title that should truncate' },
  { id: 2, title: 'Short' },
  { id: 3, title: 'Another extremely long chip title that demonstrates text overflow behavior' },
];

const meta = {
  title: 'Components/Chips',
  component: Chips,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    chips: {
      control: 'object',
      description: 'Array of chip items to display',
    },
    removable: {
      control: 'boolean',
      description: 'Whether chips can be removed',
    },
    onRemove: {
      action: 'chip-removed',
      description: 'Callback when a chip is removed',
    },
  },
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    chips: sampleChips,
    removable: true,
    onRemove: (id) => console.log('Removed chip:', id),
  },
};

export const NonRemovable: Story = {
  args: {
    chips: sampleChips,
    removable: false,
  },
};

export const SingleChip: Story = {
  args: {
    chips: [{ id: 1, title: 'Single Chip' }],
    removable: true,
    onRemove: (id) => console.log('Removed chip:', id),
  },
};

export const LongTitles: Story = {
  args: {
    chips: longTitleChips,
    removable: true,
    onRemove: (id) => console.log('Removed chip:', id),
  },
};

export const ManyChips: Story = {
  args: {
    chips: [
      { id: 1, title: 'React' },
      { id: 2, title: 'TypeScript' },
      { id: 3, title: 'Tailwind CSS' },
      { id: 4, title: 'Storybook' },
      { id: 5, title: 'Vite' },
      { id: 6, title: 'JavaScript' },
      { id: 7, title: 'CSS' },
      { id: 8, title: 'HTML' },
      { id: 9, title: 'Node.js' },
      { id: 10, title: 'NPM' },
      { id: 11, title: 'Git' },
      { id: 12, title: 'GitHub' },
    ],
    removable: true,
    onRemove: (id) => console.log('Removed chip:', id),
  },
};

export const Empty: Story = {
  args: {
    chips: [],
    removable: true,
  },
};

// Interactive example with state management
export const Interactive = {
  render: () => {
    const [chips, setChips] = useState<ChipItem[]>(sampleChips);

    const handleRemove = (id: string | number) => {
      setChips((prev) => prev.filter((chip) => chip.id !== id));
    };

    const handleReset = () => {
      setChips(sampleChips);
    };

    return (
      <div className="luca-flex luca-flex-col luca-gap-4">
        <div className="luca-flex luca-items-center luca-gap-4">
          <h3 className="luca-text-sm luca-font-semibold luca-text-gray-700">
            Interactive Chips ({chips.length} items)
          </h3>
          <button
            onClick={handleReset}
            className="luca-px-3 luca-py-1 luca-text-sm luca-bg-blue-500 luca-text-white luca-rounded luca-hover:bg-blue-600"
          >
            Reset
          </button>
        </div>
        <Chips chips={chips} onRemove={handleRemove} removable={true} />
        {chips.length === 0 && (
          <p className="luca-text-sm luca-text-gray-500">
            All chips removed. Click Reset to restore them.
          </p>
        )}
      </div>
    );
  },
};

// Showcase all variations
export const AllVariations = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-4">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-gray-700">
          Removable Chips (Default)
        </h3>
        <Chips
          chips={sampleChips}
          removable={true}
          onRemove={(id) => console.log('Removed:', id)}
        />
      </div>

      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-gray-700">
          Non-Removable Chips
        </h3>
        <Chips chips={sampleChips} removable={false} />
      </div>

      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-gray-700">
          Long Titles with Ellipsis
        </h3>
        <Chips
          chips={longTitleChips}
          removable={true}
          onRemove={(id) => console.log('Removed:', id)}
        />
      </div>

      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-gray-700">
          Many Chips (Wrapping)
        </h3>
        <Chips
          chips={[
            { id: 1, title: 'React' },
            { id: 2, title: 'TypeScript' },
            { id: 3, title: 'Tailwind CSS' },
            { id: 4, title: 'Storybook' },
            { id: 5, title: 'Vite' },
            { id: 6, title: 'JavaScript' },
            { id: 7, title: 'CSS' },
            { id: 8, title: 'HTML' },
          ]}
          removable={true}
          onRemove={(id) => console.log('Removed:', id)}
        />
      </div>

      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-gray-700">
          Single Chip
        </h3>
        <Chips
          chips={[{ id: 1, title: 'Single Item' }]}
          removable={true}
          onRemove={(id) => console.log('Removed:', id)}
        />
      </div>
    </div>
  ),
};
