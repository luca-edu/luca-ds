import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardAvatar } from '../components/CardAvatar';

const meta = {
  title: 'Components/CardAvatar',
  component: CardAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['class', 'student'],
      description: 'Type of card',
    },
    state: {
      control: 'select',
      options: ['default', 'disabled', 'selected'],
      description: 'State of the card',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is clickable',
    },
  },
} satisfies Meta<typeof CardAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClassDefault: Story = {
  args: {
    type: 'class',
    state: 'default',
    label: 'Radiobutton text',
    iconSrc: undefined,
  },
};

export const ClassDisabled: Story = {
  args: {
    type: 'class',
    state: 'disabled',
    label: 'Radiobutton text',
  },
};

export const ClassSelected: Story = {
  args: {
    type: 'class',
    state: 'selected',
    label: 'Radiobutton text',
  },
};

export const StudentDefault: Story = {
  args: {
    type: 'student',
    state: 'default',
    studentName: 'Student_name',
    points: 0,
  },
};

export const StudentDisabled: Story = {
  args: {
    type: 'student',
    state: 'disabled',
    studentName: 'Student_name',
    points: 0,
  },
};

export const StudentSelected: Story = {
  args: {
    type: 'student',
    state: 'selected',
    studentName: 'Student_name',
    points: 0,
  },
};

export const AllClassStates: Story = {
  render: () => (
    <div className="luca-flex luca-gap-4 luca-p-8">
      <CardAvatar type="class" state="default" label="Radiobutton text" />
      <CardAvatar type="class" state="disabled" label="Radiobutton text" />
      <CardAvatar type="class" state="selected" label="Radiobutton text" />
    </div>
  ),
};

export const AllStudentStates: Story = {
  render: () => (
    <div className="luca-flex luca-gap-4 luca-p-8">
      <CardAvatar type="student" state="default" studentName="Student_name" points={0} />
      <CardAvatar type="student" state="disabled" studentName="Student_name" points={0} />
      <CardAvatar type="student" state="selected" studentName="Student_name" points={0} />
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8">
      <CardAvatar
        type="class"
        state="selected"
        label="Matemáticas Avanzadas"
        icon={
          <div className="luca-h-full luca-w-full luca-rounded-lg luca-bg-success-200 luca-border-2 luca-border-accent-400 luca-flex luca-items-center luca-justify-center">
            <span className="luca-text-2xl">📚</span>
          </div>
        }
      />
      <CardAvatar
        type="student"
        state="selected"
        studentName="María García"
        points={1250}
        avatar={
          <div className="luca-h-full luca-w-full luca-rounded-full luca-bg-gradient-to-br luca-from-primary-300 luca-to-primary-500 luca-flex luca-items-center luca-justify-center">
            <span className="luca-text-3xl">👤</span>
          </div>
        }
      />
    </div>
  ),
};
