import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardProductStore } from '../components/CardProductStore';

const meta: Meta<typeof CardProductStore> = {
  title: 'Components/CardProductStore',
  component: CardProductStore,
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
      options: ['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'],
      description: 'Variante de color',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    state: {
      control: 'select',
      options: ['default', 'disabled'],
      description: 'Estado del componente',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    title: {
      control: 'text',
      description: 'Título del producto',
    },
    availableCount: {
      control: 'number',
      description: 'Número de unidades disponibles',
    },
    showAvailability: {
      control: 'boolean',
      description: 'Mostrar información de disponibilidad',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    showSoldOutBadge: {
      control: 'boolean',
      description: 'Mostrar badge "AGOTADO"',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    description: {
      control: 'text',
      description: 'Descripción secundaria',
    },
    showDescription: {
      control: 'boolean',
      description: 'Mostrar descripción',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    dateText: {
      control: 'text',
      description: 'Texto de fecha límite',
    },
    showDateText: {
      control: 'boolean',
      description: 'Mostrar texto de fecha',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    crystalsValue: {
      control: 'text',
      description: 'Valor en cristales',
    },
    showPriceButton: {
      control: 'boolean',
      description: 'Mostrar botón de precio',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    showPurchasedBadge: {
      control: 'boolean',
      description: 'Mostrar badge "¡Comprado!"',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    collectionLinkText: {
      control: 'text',
      description: 'Texto del link de colección',
    },
    showCollectionLink: {
      control: 'boolean',
      description: 'Mostrar link de colección',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    clickable: {
      control: 'boolean',
      description: 'Si es clickeable',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    showNotAvailableBadge: {
      control: 'boolean',
      description: 'Mostrar badge "Ya no está disponible"',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    notAvailableText: {
      control: 'text',
      description: 'Texto del badge "Ya no está disponible"',
    },
    purchasedText: {
      control: 'text',
      description: 'Texto del badge "¡Comprado!"',
    },
    showNextLevelOnlyBadge: {
      control: 'boolean',
      description: 'Mostrar badge "Premio disponible en Nivel Maestro"',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    nextLevelOnlyText: {
      control: 'text',
      description: 'Texto del badge "Premio disponible en Nivel Maestro"',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardProductStore>;

export const Default: Story = {
  args: {
    title: 'Title',
    availableCount: 5,
    description: 'Description 2',
    dateText: 'Termina en n días',
    crystalsValue: 850,
    imageSrc: 'https://i.pravatar.cc/150?img=1',
    showNotAvailableBadge: true,
    notAvailableText: 'Ya no está disponible',
    purchasedText: '¡Comprado!',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Title',
    availableCount: 5,
    description: 'Description 2',
    dateText: 'Termina en n días',
    crystalsValue: 850,
    state: 'disabled',
    imageSrc: 'https://i.pravatar.cc/150?img=1',
    showNotAvailableBadge: true,
    notAvailableText: 'Ya no está disponible',
    purchasedText: '¡Comprado!',
  },
};

export const WithSoldOutBadge: Story = {
  args: {
    title: 'Title',
    availableCount: 5,
    description: 'Description 2',
    dateText: 'Termina en n días',
    crystalsValue: 850,
    showSoldOutBadge: true,
    imageSrc: 'https://i.pravatar.cc/150?img=1',
  },
};

export const WithPurchasedBadge: Story = {
  args: {
    title: 'Title',
    availableCount: 5,
    description: 'Description 2',
    dateText: 'Termina en n días',
    crystalsValue: 850,
    showPurchasedBadge: true,
    imageSrc: 'https://i.pravatar.cc/150?img=1',
    showNotAvailableBadge: true,
    notAvailableText: 'Ya no está disponible',
    purchasedText: '¡Comprado!',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="luca-flex luca-flex-wrap luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Estados</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          <CardProductStore
            title="Title"
            availableCount={5}
            description="Description 2"
            dateText="Termina en n días"
            crystalsValue={850}
            state="default"
            imageSrc="https://i.pravatar.cc/150?img=1"
          />
          <CardProductStore
            title="Title"
            availableCount={5}
            description="Description 2"
            dateText="Termina en n días"
            crystalsValue={850}
            state="disabled"
            imageSrc="https://i.pravatar.cc/150?img=1"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-6xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Variantes de Color
        </h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
            (color) => (
              <CardProductStore
                key={color}
                title="Title"
                availableCount={5}
                description="Description 2"
                dateText="Termina en n días"
                crystalsValue={850}
                color={color}
                imageSrc="https://i.pravatar.cc/150?img=1"
              />
            )
          )}
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-6xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Tamaños</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-end">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <CardProductStore
              key={size}
              title="Title"
              availableCount={5}
              description="Description 2"
              dateText="Termina en n días"
              crystalsValue={850}
              size={size}
              imageSrc="https://i.pravatar.cc/150?img=1"
            />
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const Responsive: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Responsive - El componente se adapta según el tamaño de pantalla
        </h3>
        <div className="luca-w-full luca-max-w-md">
          <CardProductStore
            title="Responsive Product"
            availableCount={5}
            description="Description 2"
            dateText="Termina en n días"
            crystalsValue={850}
            size="md"
            imageSrc="https://i.pravatar.cc/150?img=1"
          />
        </div>
        <p className="luca-text-xs luca-text-neutral-500">
          Redimensiona la ventana para ver cómo el componente se adapta
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Title',
    availableCount: 5,
    description: 'Description 2',
    dateText: 'Termina en n días',
    crystalsValue: 850,
    clickable: true,
    onClick: () => alert('CardProductStore clicked!'),
    onPriceClick: () => alert('Price button clicked!'),
    onCollectionLinkClick: () => alert('Collection link clicked!'),
    imageSrc: 'https://i.pravatar.cc/150?img=1',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-8 luca-p-8 luca-w-full luca-max-w-6xl">
      {/* Estados */}
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Estados</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          <CardProductStore
            title="Title"
            availableCount={5}
            description="Description 2"
            dateText="Termina en n días"
            crystalsValue={850}
            state="default"
            imageSrc="https://i.pravatar.cc/150?img=1"
          />
          <CardProductStore
            title="Title"
            availableCount={5}
            description="Description 2"
            dateText="Termina en n días"
            crystalsValue={850}
            state="disabled"
            imageSrc="https://i.pravatar.cc/150?img=1"
          />
        </div>
      </div>

      {/* Con badges */}
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Con Badges de Estado
        </h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          <CardProductStore
            title="Title"
            availableCount={0}
            description="Description 2"
            dateText="Termina en n días"
            crystalsValue={850}
            showSoldOutBadge={true}
            imageSrc="https://i.pravatar.cc/150?img=1"
          />
          <CardProductStore
            title="Title"
            availableCount={5}
            description="Description 2"
            dateText="Termina en n días"
            crystalsValue={850}
            showPurchasedBadge={true}
            imageSrc="https://i.pravatar.cc/150?img=2"
          />
        </div>
      </div>

      {/* Variantes de color */}
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Variantes de Color
        </h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
            (color) => (
              <CardProductStore
                key={color}
                title="Title"
                availableCount={5}
                description="Description 2"
                dateText="Termina en n días"
                crystalsValue={850}
                color={color}
                imageSrc="https://i.pravatar.cc/150?img=1"
              />
            )
          )}
        </div>
      </div>

      {/* Tamaños */}
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Tamaños</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4 luca-items-end">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <CardProductStore
              key={size}
              title="Title"
              availableCount={5}
              description="Description 2"
              dateText="Termina en n días"
              crystalsValue={850}
              size={size}
              imageSrc="https://i.pravatar.cc/150?img=1"
            />
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const StoreExample: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-6xl">
      <h2 className="luca-text-xl luca-font-semibold luca-text-neutral-900">Tienda de Productos</h2>
      <div className="luca-grid luca-grid-cols-1 sml:luca-grid-cols-2 lg:luca-grid-cols-3 luca-gap-6">
        <CardProductStore
          title="Balón de Fútbol"
          availableCount={3}
          description="Balón oficial del campeonato"
          dateText="Termina en 5 días"
          crystalsValue={850}
          imageSrc="https://i.pravatar.cc/150?img=1"
        />
        <CardProductStore
          title="Uniforme Deportivo"
          availableCount={0}
          description="Uniforme completo de equipo"
          dateText="Termina en 3 días"
          crystalsValue={1200}
          showSoldOutBadge={true}
          imageSrc="https://i.pravatar.cc/150?img=2"
        />
        <CardProductStore
          title="Botines Deportivos"
          availableCount={8}
          description="Botines de alta calidad"
          dateText="Termina en 10 días"
          crystalsValue={650}
          showPurchasedBadge={true}
          imageSrc="https://i.pravatar.cc/150?img=3"
        />
        <CardProductStore
          title="Equipo de Entrenamiento"
          availableCount={12}
          description="Kit completo para entrenar"
          dateText="Termina en 7 días"
          crystalsValue={950}
          imageSrc="https://i.pravatar.cc/150?img=4"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
