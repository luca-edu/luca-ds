import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AwardInteraction } from '../components/AwardInteraction';

const meta: Meta<typeof AwardInteraction> = {
  title: 'Components/AwardInteraction',
  component: AwardInteraction,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tamaño del componente',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'accent', 'success', 'warning', 'danger', 'info', 'neutral'],
      description: 'Variante de color',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'active', 'disabled'],
      description: 'Estado del componente',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    value: {
      control: 'text',
      description: 'Valor numérico a mostrar',
    },
    description: {
      control: 'text',
      description: 'Descripción o etiqueta',
    },
    clickable: {
      control: 'boolean',
      description: 'Si es clickeable',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AwardInteraction>;

export const Default: Story = {
  args: {
    value: 0,
    description: 'Description',
    size: 'md',
    color: 'primary',
    state: 'default',
  },
};

export const WithValue: Story = {
  args: {
    value: 42,
    description: 'Premios ganados',
    size: 'md',
    color: 'primary',
    state: 'default',
  },
};

export const Hover: Story = {
  args: {
    value: 15,
    description: 'Logros desbloqueados',
    size: 'md',
    color: 'primary',
    state: 'hover',
  },
};

export const Active: Story = {
  args: {
    value: 8,
    description: 'Recompensas activas',
    size: 'md',
    color: 'primary',
    state: 'active',
  },
};

export const Disabled: Story = {
  args: {
    value: 0,
    description: 'No disponible',
    size: 'md',
    color: 'primary',
    state: 'disabled',
  },
};

export const Clickable: Story = {
  args: {
    value: 25,
    description: 'Click para ver más',
    size: 'md',
    color: 'primary',
    state: 'default',
    clickable: true,
    onClick: () => alert('AwardInteraction clicked!'),
  },
};

// Variantes de color
export const Primary: Story = {
  args: {
    value: 10,
    description: 'Primary',
    color: 'primary',
    size: 'md',
  },
};

export const Accent: Story = {
  args: {
    value: 10,
    description: 'Accent',
    color: 'accent',
    size: 'md',
  },
};

export const Success: Story = {
  args: {
    value: 10,
    description: 'Success',
    color: 'success',
    size: 'md',
  },
};

export const Warning: Story = {
  args: {
    value: 10,
    description: 'Warning',
    color: 'warning',
    size: 'md',
  },
};

export const Danger: Story = {
  args: {
    value: 10,
    description: 'Danger',
    color: 'danger',
    size: 'md',
  },
};

export const Info: Story = {
  args: {
    value: 10,
    description: 'Info',
    color: 'info',
    size: 'md',
  },
};

export const Neutral: Story = {
  args: {
    value: 10,
    description: 'Neutral',
    color: 'neutral',
    size: 'md',
  },
};

// Tamaños
export const ExtraSmall: Story = {
  args: {
    value: 5,
    description: 'XS Size',
    size: 'xs',
    color: 'primary',
  },
};

export const Small: Story = {
  args: {
    value: 7,
    description: 'Small Size',
    size: 'sm',
    color: 'primary',
  },
};

export const Medium: Story = {
  args: {
    value: 10,
    description: 'Medium Size',
    size: 'md',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    value: 15,
    description: 'Large Size',
    size: 'lg',
    color: 'primary',
  },
};

export const ExtraLarge: Story = {
  args: {
    value: 20,
    description: 'XL Size',
    size: 'xl',
    color: 'primary',
  },
};

// Todos los estados
export const AllStates: Story = {
  render: () => (
    <div className="luca-space-y-6">
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-3 luca-text-neutral-700">Estados</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          <AwardInteraction
            value={0}
            description="Default"
            size="md"
            color="primary"
            state="default"
          />
          <AwardInteraction value={5} description="Hover" size="md" color="primary" state="hover" />
          <AwardInteraction
            value={10}
            description="Active"
            size="md"
            color="primary"
            state="active"
          />
          <AwardInteraction
            value={0}
            description="Disabled"
            size="md"
            color="primary"
            state="disabled"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Todas las variantes de color
export const AllColors: Story = {
  render: () => (
    <div className="luca-space-y-6">
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-3 luca-text-neutral-700">
          Variantes de Color
        </h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          <AwardInteraction value={10} description="Primary" size="md" color="primary" />
          <AwardInteraction value={10} description="Accent" size="md" color="accent" />
          <AwardInteraction value={10} description="Success" size="md" color="success" />
          <AwardInteraction value={10} description="Warning" size="md" color="warning" />
          <AwardInteraction value={10} description="Danger" size="md" color="danger" />
          <AwardInteraction value={10} description="Info" size="md" color="info" />
          <AwardInteraction value={10} description="Neutral" size="md" color="neutral" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Todos los tamaños
export const AllSizes: Story = {
  render: () => (
    <div className="luca-space-y-6">
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-3 luca-text-neutral-700">Tamaños</h3>
        <div className="luca-flex luca-flex-wrap luca-items-end luca-gap-4">
          <AwardInteraction value={5} description="XS" size="xs" color="primary" />
          <AwardInteraction value={7} description="Small" size="sm" color="primary" />
          <AwardInteraction value={10} description="Medium" size="md" color="primary" />
          <AwardInteraction value={15} description="Large" size="lg" color="primary" />
          <AwardInteraction value={20} description="XL" size="xl" color="primary" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Ejemplo responsive
export const Responsive: Story = {
  render: () => (
    <div className="luca-space-y-6">
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-3 luca-text-neutral-700">
          Responsive - El componente se adapta según el tamaño de pantalla
        </h3>
        <div className="luca-w-full luca-max-w-md">
          <AwardInteraction
            value={42}
            description="Responsive Component"
            size="md"
            color="primary"
          />
        </div>
        <p className="luca-text-xs luca-text-neutral-500 luca-mt-2">
          Redimensiona la ventana para ver cómo el componente se adapta
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Ejemplo con icono personalizado
export const CustomIcon: Story = {
  render: () => {
    const CustomStarIcon = () => (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    );

    return (
      <div className="luca-space-y-6">
        <div>
          <h3 className="luca-text-sm luca-font-semibold luca-mb-3 luca-text-neutral-700">
            Con Icono Personalizado
          </h3>
          <div className="luca-flex luca-flex-wrap luca-gap-4">
            <AwardInteraction
              value={25}
              description="Estrellas"
              size="md"
              color="accent"
              icon={<CustomStarIcon />}
            />
            <AwardInteraction value={10} description="Trofeo (default)" size="md" color="primary" />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// Ejemplo completo con todas las combinaciones
export const AllVariants: Story = {
  render: () => (
    <div className="luca-space-y-8">
      {/* Estados */}
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-4 luca-text-neutral-700">Estados</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          <AwardInteraction
            value={0}
            description="Default"
            size="md"
            color="primary"
            state="default"
          />
          <AwardInteraction value={5} description="Hover" size="md" color="primary" state="hover" />
          <AwardInteraction
            value={10}
            description="Active"
            size="md"
            color="primary"
            state="active"
          />
          <AwardInteraction
            value={0}
            description="Disabled"
            size="md"
            color="primary"
            state="disabled"
          />
        </div>
      </div>

      {/* Colores */}
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-4 luca-text-neutral-700">
          Variantes de Color
        </h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          <AwardInteraction value={10} description="Primary" size="md" color="primary" />
          <AwardInteraction value={10} description="Accent" size="md" color="accent" />
          <AwardInteraction value={10} description="Success" size="md" color="success" />
          <AwardInteraction value={10} description="Warning" size="md" color="warning" />
          <AwardInteraction value={10} description="Danger" size="md" color="danger" />
          <AwardInteraction value={10} description="Info" size="md" color="info" />
          <AwardInteraction value={10} description="Neutral" size="md" color="neutral" />
        </div>
      </div>

      {/* Tamaños */}
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-4 luca-text-neutral-700">Tamaños</h3>
        <div className="luca-flex luca-flex-wrap luca-items-end luca-gap-4">
          <AwardInteraction value={5} description="XS" size="xs" color="primary" />
          <AwardInteraction value={7} description="Small" size="sm" color="primary" />
          <AwardInteraction value={10} description="Medium" size="md" color="primary" />
          <AwardInteraction value={15} description="Large" size="lg" color="primary" />
          <AwardInteraction value={20} description="XL" size="xl" color="primary" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
