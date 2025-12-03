import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardLesson } from '../components/CardLesson';
const meta = {
  title: 'Components/CardLesson',
  component: CardLesson,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'],
      description: 'Color variant of the card',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the card',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'disabled'],
      description: 'State of the card',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is clickable',
    },
  },
} satisfies Meta<typeof CardLesson>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Personas en el mundo',
    badges: [
      { label: '6°', color: 'success' },
      { label: 'P. Matemático', color: 'danger' },
    ],
    dateText: 'Finaliza 31 agosto',
    showVideoOverlay: true,
    showGems: true,
    gemsCount: 2,
  },
};

export const WithTodayBadge: Story = {
  args: {
    title: 'Personas en el mundo',
    badges: [
      { label: '6°', color: 'success' },
      { label: 'P. Matemático', color: 'danger' },
    ],
    dateText: 'Finaliza 31 agosto',
    showTodayBadge: true,
    showVideoOverlay: true,
    showGems: true,
    gemsCount: 2,
  },
};

export const Hover: Story = {
  args: {
    title: 'Personas en el mundo',
    badges: [
      { label: '6°', color: 'success' },
      { label: 'P. Matemático', color: 'danger' },
    ],
    dateText: 'Finaliza 31 agosto',
    state: 'hover',
    showVideoOverlay: true,
    showGems: true,
    gemsCount: 2,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Personas en el mundo',
    badges: [
      { label: '6°', color: 'success' },
      { label: 'P. Matemático', color: 'danger' },
    ],
    dateText: 'Finaliza 31 agosto',
    state: 'disabled',
    showVideoOverlay: true,
    showGems: true,
    gemsCount: 2,
  },
};

export const AllVariants: Story = {
  args: {
    title: 'Personas en el mundo',
    badges: [
      { label: '6°', color: 'success' },
      { label: 'P. Matemático', color: 'danger' },
    ],
    dateText: 'Finaliza 31 agosto',
  },
  render: () => (
    <div className="luca-flex luca-flex-wrap luca-gap-4 luca-p-8">
      {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
        (variant) => (
          <CardLesson
            key={variant}
            variant={variant}
            title="Personas en el mundo"
            badges={[
              { label: '6°', color: 'success' },
              { label: 'P. Matemático', color: 'danger' },
            ]}
            dateText="Finaliza 31 agosto"
            showVideoOverlay
            showGems
            gemsCount={2}
          />
        )
      )}
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    title: 'Personas en el mundo',
    badges: [
      { label: '6°', color: 'success' },
      { label: 'P. Matemático', color: 'danger' },
    ],
    dateText: 'Finaliza 31 agosto',
  },
  render: () => (
    <div className="luca-flex luca-flex-wrap luca-gap-4 luca-p-8">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <CardLesson
          key={size}
          size={size}
          title="Personas en el mundo"
          badges={[
            { label: '6°', color: 'success' },
            { label: 'P. Matemático', color: 'danger' },
          ]}
          dateText="Finaliza 31 agosto"
          showVideoOverlay
          showGems
          gemsCount={2}
        />
      ))}
    </div>
  ),
};

export const AllStates: Story = {
  args: {
    title: 'Personas en el mundo',
    badges: [
      { label: '6°', color: 'success' },
      { label: 'P. Matemático', color: 'danger' },
    ],
    dateText: 'Finaliza 31 agosto',
  },
  render: () => (
    <div className="luca-flex luca-gap-4 luca-p-8">
      <CardLesson
        state="default"
        title="Personas en el mundo"
        badges={[
          { label: '6°', color: 'success' },
          { label: 'P. Matemático', color: 'danger' },
        ]}
        dateText="Finaliza 31 agosto"
        showVideoOverlay
        showGems
        gemsCount={2}
      />
      <CardLesson
        state="hover"
        title="Personas en el mundo"
        badges={[
          { label: '6°', color: 'success' },
          { label: 'P. Matemático', color: 'danger' },
        ]}
        dateText="Finaliza 31 agosto"
        showVideoOverlay
        showGems
        gemsCount={2}
      />
      <CardLesson
        state="disabled"
        title="Personas en el mundo"
        badges={[
          { label: '6°', color: 'success' },
          { label: 'P. Matemático', color: 'danger' },
        ]}
        dateText="Finaliza 31 agosto"
        showVideoOverlay
        showGems
        gemsCount={2}
      />
    </div>
  ),
};

export const WithCustomImage: Story = {
  args: {
    title: 'Personas en el mundo',
    badges: [
      { label: '6°', color: 'success' },
      { label: 'P. Matemático', color: 'danger' },
    ],
    dateText: 'Finaliza 31 agosto',
  },
  render: () => (
    <CardLesson
      title="Personas en el mundo"
      badges={[
        { label: '6°', color: 'success' },
        { label: 'P. Matemático', color: 'danger' },
      ]}
      dateText="Finaliza 31 agosto"
      showVideoOverlay
      showGems
      gemsCount={2}
      image={
        <div className="luca-h-full luca-w-full luca-bg-gradient-to-br luca-from-primary-300 luca-to-primary-500 luca-flex luca-items-center luca-justify-center">
          <span className="luca-text-4xl">📚</span>
        </div>
      }
    />
  ),
};

export const Minimal: Story = {
  args: {
    title: 'Personas en el mundo',
  },
};

export const WithAllGems: Story = {
  args: {
    title: 'Personas en el mundo',
    badges: [
      { label: '6°', color: 'success' },
      { label: 'P. Matemático', color: 'danger' },
    ],
    dateText: 'Finaliza 31 agosto',
    showVideoOverlay: true,
    showGems: true,
    gemsCount: 3,
  },
};
