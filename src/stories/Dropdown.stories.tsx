import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../components/Dropdown';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['md', 'lg'],
    },
  },
  args: {
    label: 'Grado',
    placeholder: 'Selecciona grado',
    items: [
      { key: '1', label: 'Primero' },
      { key: '2', label: 'Segundo' },
      { key: '3', label: 'Tercero' },
      { key: '4', label: 'Cuarto' },
      { key: '5', label: 'Quinto' },
      { key: '6', label: 'Sexto' },
      { key: '7', label: 'Séptimo' },
      { key: '8', label: 'Octavo' },
      { key: '9', label: 'Noveno' },
      { key: '10', label: 'Décimo' },
      { key: '11', label: 'Undécimo' },
      { key: '12', label: 'Duodécimo' },
      { key: '13', label: 'Tercero básico' },
      { key: '14', label: 'Cuarto básico' },
      { key: '15', label: 'Quinto básico' },
      { key: '16', label: 'Sexto básico' },
      { key: '17', label: 'Séptimo básico' },
      { key: '18', label: 'Octavo básico' },
      { key: '19', label: 'Noveno básico' },
      { key: '20', label: 'Décimo básico' },
      { key: '21', label: 'Undécimo básico' },
      { key: '22', label: 'Duodécimo básico' },
    ],
    wrapperClassName: 'luca-w-[240px]',
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

const largeItems = Array.from({ length: 100 }, (_, index) => ({
  key: `grade-${index + 1}`,
  label: `Grado ${index + 1}`,
}));

export const SingleSelection: Story = {
  args: {
    multiple: false,
    defaultValue: ['1'],
  },
};

export const MultipleSelection: Story = {
  args: {
    multiple: true,
    defaultValue: ['1', '2', '3'],
  },
};

export const Disabled: Story = {
  args: {
    multiple: false,
    disabled: true,
    defaultValue: ['1'],
  },
};

export const MultipleWithSelectAll: Story = {
  args: {
    multiple: true,
    selectAll: true,
    defaultValue: ['1', '2'],
    allSelectedLabel: 'Todos los grados seleccionados',
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState<string[]>(['2']);

    return (
      <Dropdown
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  args: {
    items: [
      { key: '1', label: 'Primero', description: 'Primer año básico' },
      { key: '2', label: 'Segundo', description: 'Segundo año básico' },
      { key: '3', label: 'Tercero', description: 'Tercer año básico' },
    ],
    multiple: true,
    selectAll: true,
  },
};

export const Searchable: Story = {
  args: {
    multiple: true,
    enableSearch: true,
    selectAll: true,
    defaultValue: ['1', '5', '10'],
  },
};

export const Virtualized: Story = {
  args: {
    items: largeItems,
    multiple: true,
    enableSearch: true,
    selectAll: true,
    virtualizationThreshold: 10,
    virtualListHeight: 300,
    defaultValue: ['grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5'],
  },
};


