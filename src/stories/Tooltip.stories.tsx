import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, type TooltipVariant } from '../components/Tooltip';
import { Button } from '../components/Button';
import { QuestionIcon } from '../shared/icons';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente Tooltip con soporte para múltiples variantes de color y posiciones.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Contenido del tooltip',
      table: {
        defaultValue: { summary: 'Tooltip' },
      },
    },
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'success', 'warning', 'danger', 'info', 'neutral', 'white'],
      description: 'Variante de color del tooltip',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posición del tooltip',
      table: {
        defaultValue: { summary: 'top' },
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story básico
export const Default: Story = {
  args: {
    content: 'Tooltip',
    variant: 'primary',
    placement: 'top',
  },
  render: (args) => (
    <div className="luca-p-20">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

// Story con todas las variantes de color
export const AllVariants: Story = {
  args: {
    content: 'Tooltip',
    variant: 'primary',
    placement: 'top',
  },
  render: () => {
    const variants: TooltipVariant[] = [
      'primary',
      'accent',
      'success',
      'warning',
      'danger',
      'info',
      'neutral',
      'white',
    ];

    return (
      <div className="luca-flex luca-flex-col luca-gap-8 luca-p-20">
        {variants.map((variant) => (
          <div key={variant} className="luca-flex luca-items-center luca-gap-4">
            <span className="luca-w-24 luca-text-sm luca-font-medium luca-capitalize">
              {variant}:
            </span>
            <Tooltip content={`Tooltip ${variant}`} variant={variant} placement="top">
              <Button variant="secondary">{variant}</Button>
            </Tooltip>
          </div>
        ))}
      </div>
    );
  },
};

// Story con todas las posiciones
export const AllPositions: Story = {
  args: {
    content: 'Tooltip',
    variant: 'primary',
    placement: 'top',
  },
  render: () => {
    return (
      <div className="luca-flex luca-flex-col luca-gap-8 luca-p-20 luca-items-center">
        <div className="luca-flex luca-gap-4">
          <Tooltip content="Tooltip arriba" placement="top" variant="primary">
            <Button variant="secondary">Top</Button>
          </Tooltip>
        </div>
        <div className="luca-flex luca-gap-4">
          <Tooltip content="Tooltip izquierda" placement="left" variant="primary">
            <Button variant="secondary">Left</Button>
          </Tooltip>
          <Tooltip content="Tooltip derecha" placement="right" variant="primary">
            <Button variant="secondary">Right</Button>
          </Tooltip>
        </div>
        <div className="luca-flex luca-gap-4">
          <Tooltip content="Tooltip abajo" placement="bottom" variant="primary">
            <Button variant="secondary">Bottom</Button>
          </Tooltip>
        </div>
      </div>
    );
  },
};

// Story combinando variantes y posiciones
export const VariantsAndPositions: Story = {
  args: {
    content: 'Tooltip',
    variant: 'primary',
    placement: 'top',
  },
  render: () => {
    const variants: TooltipVariant[] = ['primary', 'white'];

    return (
      <div className="luca-flex luca-flex-col luca-gap-12 luca-p-20">
        {variants.map((variant) => (
          <div key={variant} className="luca-flex luca-flex-col luca-gap-4">
            <h3 className="luca-text-lg luca-font-semibold luca-capitalize">{variant}</h3>
            <div className="luca-flex luca-flex-col luca-gap-8 luca-items-center">
              <div className="luca-flex luca-gap-4">
                <Tooltip content={`${variant} - Top`} variant={variant} placement="top">
                  <Button variant="secondary">Top</Button>
                </Tooltip>
              </div>
              <div className="luca-flex luca-gap-4">
                <Tooltip content={`${variant} - Left`} variant={variant} placement="left">
                  <Button variant="secondary">Left</Button>
                </Tooltip>
                <Tooltip content={`${variant} - Right`} variant={variant} placement="right">
                  <Button variant="secondary">Right</Button>
                </Tooltip>
              </div>
              <div className="luca-flex luca-gap-4">
                <Tooltip content={`${variant} - Bottom`} variant={variant} placement="bottom">
                  <Button variant="secondary">Bottom</Button>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  },
};

// Story con contenido largo
export const LongContent: Story = {
  args: {
    content: 'Tooltip',
    variant: 'primary',
    placement: 'top',
  },
  render: () => (
    <div className="luca-p-20">
      <Tooltip
        content="Este es un tooltip con contenido más largo que muestra cómo se comporta el componente con texto extenso"
        variant="primary"
        placement="top"
      >
        <Button>Hover para ver tooltip largo</Button>
      </Tooltip>
    </div>
  ),
};

// Story con icono (caso de uso común)
export const WithIcon: Story = {
  args: {
    content: 'Tooltip',
    variant: 'primary',
    placement: 'top',
  },
  render: () => (
    <div className="luca-p-20 luca-flex luca-gap-4">
      <Tooltip content="Información adicional sobre este campo" variant="primary" placement="top">
        <button
          type="button"
          className="luca-inline-flex luca-h-5 luca-w-5 luca-items-center luca-justify-center luca-text-primary-600 luca-cursor-pointer"
        >
          <QuestionIcon size={16} />
        </button>
      </Tooltip>
      <Tooltip content="Información adicional" variant="white" placement="top">
        <button
          type="button"
          className="luca-inline-flex luca-h-5 luca-w-5 luca-items-center luca-justify-center luca-text-neutral-500 luca-cursor-pointer"
        >
          <QuestionIcon size={16} />
        </button>
      </Tooltip>
    </div>
  ),
};

// Story con diferentes elementos
export const WithDifferentElements: Story = {
  args: {
    content: 'Tooltip',
    variant: 'primary',
    placement: 'top',
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-20">
      <div className="luca-flex luca-gap-4 luca-items-center">
        <Tooltip content="Tooltip en botón" variant="primary" placement="top">
          <Button>Botón</Button>
        </Tooltip>
        <Tooltip content="Tooltip en enlace" variant="accent" placement="top">
          <a href="#" className="luca-text-primary-600 luca-underline luca-cursor-pointer">
            Enlace
          </a>
        </Tooltip>
        <Tooltip content="Tooltip en texto" variant="success" placement="top">
          <span className="luca-cursor-pointer luca-text-neutral-700 luca-font-medium">Texto</span>
        </Tooltip>
      </div>
    </div>
  ),
};
