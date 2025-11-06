import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';

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
      options: ['default', 'outlined', 'elevated'],
      description: 'The visual style variant of the card',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          This is a default card with some content. It has a simple border and white background.
        </CardContent>
      </>
    ),
  },
};



export const WithoutHeader: Story = {
  args: {
    variant: 'default',
    children: (
      <CardContent>
        This is a card without a header, containing only content.
      </CardContent>
    ),
  },
};

export const CustomStyling: Story = {
  args: {
    variant: 'default',
    className: 'bg-blue-50 border-blue-300',
    children: (
      <>
        <CardHeader>
          <CardTitle className="text-blue-900">Custom Styled Card</CardTitle>
        </CardHeader>
        <CardContent className="text-blue-700">
          This card demonstrates how to override default styles with custom Tailwind classes.
        </CardContent>
      </>
    ),
  },
};
