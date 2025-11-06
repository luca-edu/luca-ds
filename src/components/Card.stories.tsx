import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from './Card';

const examIllustration =
  'https://www.figma.com/api/mcp/asset/e4737da7-cdfe-472d-b28a-2bd49f3bd188';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'hover'],
      description: 'Visual style of the card',
    },
    align: {
      control: 'select',
      options: ['center', 'start'],
    },
    interactive: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    iconSrc: examIllustration,
    className: 'max-w-md min-w-[600px]',
    align: 'center',
    children: (
      <>
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quaerat.</CardDescription>
      </>
    ),
  },
};

export const HoverState: Story = {
  args: {
    className: 'max-w-md',
    variant: 'hover',
    iconSrc: examIllustration,
    children: (
      <>
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quaerat consequuntur assumenda, magnam harum facere repudiandae aperiam? Totam, libero consectetur!</CardDescription>
      </>
    ),
  },
};

export const AlignedContent: Story = {
  args: {
    align: 'start',
    interactive: false,
    className: 'max-w-md',
    iconSrc: examIllustration,
    children: (
      <>
        <CardHeader>
          <CardTitle>Start Aligned</CardTitle>
          <CardDescription>
            Use the align prop to match content-heavy layouts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Cards can host any rich content inside CardContent while preserving
          the hero icon and top header.
        </CardContent>
      </>
    ),
  },
};
