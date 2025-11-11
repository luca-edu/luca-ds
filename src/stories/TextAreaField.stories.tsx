import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextAreaField } from '../components/InputField';

const meta = {
  title: 'Components/TextAreaField',
  component: TextAreaField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'radio',
      options: ['default', 'danger'],
    },
  },
  args: {
    label: 'Label',
    required: true,
    tooltip: 'Información adicional del campo',
    helpText: 'Help-text',
    placeholder: 'Contenido',
    wrapperClassName: 'luca-w-[352px]',
    maxLength: 3000,
    showCounter: true,
  },
} satisfies Meta<typeof TextAreaField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 'Contenido',
  },
};

export const Danger: Story = {
  args: {
    status: 'danger',
    message: 'El contenido es requerido',
    defaultValue: 'Contenido',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Contenido',
  },
};

export const Scrollable: Story = {
  args: {
    defaultValue:
      'Contenido\n\n' +
      Array.from({ length: 12 })
        .map(
          () =>
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae gravida arcu.'
        )
        .join('\n'),
    rows: 8,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('Contenido inicial');

    return (
      <TextAreaField
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  },
  args: {
    tooltip: 'Ejemplo controlado',
    helpText: 'Usa estado local para seguir el valor',
    maxLength: 500,
  },
};



