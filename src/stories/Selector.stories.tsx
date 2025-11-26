import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Selector, SelectorAction, SelectorDetail, SelectorLabel } from '../components/Selector';
import { MinusIcon } from '../shared/icons';

const meta = {
  title: 'Components/Selector',
  component: Selector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Deshabilita interacciones del selector',
    },
  },
} satisfies Meta<typeof Selector>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({
  disabled,
  label,
  detail,
}: {
  disabled?: boolean;
  label: string;
  detail: string;
}) => (
  <Selector disabled={disabled} className="luca-w-[956px]">
    <SelectorLabel>{label}</SelectorLabel>
    <div className="luca-flex luca-flex-1 luca-items-center luca-justify-start">
      <SelectorDetail>{detail}</SelectorDetail>
    </div>
    <SelectorAction aria-label="Agregar" />
  </Selector>
);

export const Default: Story = {
  render: (args) => (
    <Template {...args} label="Ética" detail="Representaciones cartográficas de la comunidad" />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Template disabled label="Ética" detail="Representaciones cartográficas de la comunidad" />
  ),
};

export const CustomActionIcon: Story = {
  render: (args) => (
    <Selector {...args} className="luca-w-[956px]">
      <SelectorLabel>Historia</SelectorLabel>
      <div className="luca-flex luca-flex-1 luca-items-center">
        <SelectorDetail>Mapas históricos de la región metropolitana</SelectorDetail>
      </div>
      <SelectorAction
        aria-label="Abrir detalle"
        iconVariant="minus"
        icon={<MinusIcon size={12} />}
      />
    </Selector>
  ),
};

export const RemoveAction: Story = {
  render: (args) => (
    <Selector {...args} className="luca-w-[956px]">
      <SelectorLabel>Matemáticas</SelectorLabel>
      <div className="luca-flex luca-flex-1 luca-items-center">
        <SelectorDetail>Álgebra lineal aplicada al modelado de datos</SelectorDetail>
      </div>
      <SelectorAction aria-label="Remover" iconVariant="minus" />
    </Selector>
  ),
};
