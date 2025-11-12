import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputField, type InputFieldProps } from '../components/InputField';

const meta = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'radio',
      options: ['default', 'danger'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
  },
  args: {
    label: 'Label',
    required: true,
    tooltip: 'Información adicional del campo',
    helpText: 'Help-text',
    placeholder: 'Contenido',
    wrapperClassName: 'luca-w-[352px]',
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextDefault: Story = {
  args: {
    defaultValue: 'Contenido',
    maxLength: 300,
    showCounter: true,
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'correo@dominio.com',
    showCounter: false,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Contraseña',
    showCounter: false,
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '12345',
    showCounter: false,
  },
};

export const Danger: Story = {
  args: {
    status: 'danger',
    message: 'Este campo es obligatorio',
    defaultValue: 'Contenido',
    maxLength: 300,
    showCounter: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Contenido',
    showCounter: false,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<InputFieldProps['value']>('Contenido');

    return (
      <InputField
        {...args}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        maxLength={120}
        showCounter
      />
    );
  },
  args: {
    label: 'Controlado',
    tooltip: 'Este ejemplo usa estado local para controlar el valor',
    helpText: 'Escribe algo para ver el contador',
  },
};


