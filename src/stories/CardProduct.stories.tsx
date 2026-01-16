import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardProduct } from '../components/CardProduct';
import ArmorYellowIcon from '../assets/images/armorYellow.svg';

const meta: Meta<typeof CardProduct> = {
  title: 'Components/CardProduct',
  component: CardProduct,
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
      options: ['default', 'hover', 'disabled', 'blocked', 'exclusive', 'exclusiveHover'],
      description: 'Estado del componente',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    productName: {
      control: 'text',
      description: 'Nombre del producto',
    },
    gemsValue: {
      control: 'text',
      description: 'Valor en gemas',
    },
    showGems: {
      control: 'boolean',
      description: 'Mostrar gemas',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    showText: {
      control: 'boolean',
      description: 'Mostrar texto del producto',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    blockedLevelText: {
      control: 'text',
      description: 'Texto de nivel bloqueado',
      table: {
        defaultValue: { summary: 'Nivel Máster' },
      },
    },
    clickable: {
      control: 'boolean',
      description: 'Si es clickeable',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    imageSrc: {
      control: 'text',
      description: 'Imagen del producto',
      table: {
        defaultValue: { summary: ArmorYellowIcon },
        value: ArmorYellowIcon,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardProduct>;

export const Default: Story = {
  args: {
    productName: 'Name product',
    gemsValue: 550,
    size: 'md',
    color: 'primary',
    state: 'default',
    imageSrc: ArmorYellowIcon,
  },
};

export const Hover: Story = {
  args: {
    productName: 'Name product',
    gemsValue: 550,
    size: 'md',
    color: 'primary',
    state: 'hover',
    imageSrc: ArmorYellowIcon,
  },
};

export const Disabled: Story = {
  args: {
    productName: 'Name product',
    gemsValue: 550,
    size: 'md',
    color: 'primary',
    state: 'disabled',
    imageSrc: ArmorYellowIcon,
  },
};

export const Blocked: Story = {
  args: {
    productName: 'Name product',
    gemsValue: 550,
    size: 'md',
    color: 'primary',
    state: 'blocked',
    blockedLevelText: 'Nivel Máster',
    imageSrc: ArmorYellowIcon,
  },
};

export const Exclusive: Story = {
  args: {
    productName: 'Name product',
    gemsValue: 550,
    size: 'md',
    color: 'primary',
    state: 'exclusive',
    imageSrc: ArmorYellowIcon,
  },
};

export const ExclusiveHover: Story = {
  args: {
    productName: 'Name product',
    gemsValue: 550,
    size: 'md',
    color: 'primary',
    state: 'exclusiveHover',
    imageSrc: ArmorYellowIcon,
  },
};

export const Clickable: Story = {
  args: {
    productName: 'Name product',
    gemsValue: 550,
    size: 'md',
    color: 'primary',
    state: 'default',
    clickable: true,
    onClick: () => alert('CardProduct clicked!'),
    imageSrc: ArmorYellowIcon,
  },
};

// Variantes de color
export const Primary: Story = {
  args: {
    productName: 'Primary Product',
    gemsValue: 550,
    color: 'primary',
    size: 'md',
    imageSrc: ArmorYellowIcon,
  },
};

export const Accent: Story = {
  args: {
    productName: 'Accent Product',
    gemsValue: 550,
    color: 'accent',
    size: 'md',
    imageSrc: ArmorYellowIcon,
  },
};

export const Success: Story = {
  args: {
    productName: 'Success Product',
    gemsValue: 550,
    color: 'success',
    size: 'md',
    imageSrc: ArmorYellowIcon,
  },
};

export const Warning: Story = {
  args: {
    productName: 'Warning Product',
    gemsValue: 550,
    color: 'warning',
    size: 'md',
    imageSrc: ArmorYellowIcon,
  },
};

export const Danger: Story = {
  args: {
    productName: 'Danger Product',
    gemsValue: 550,
    color: 'danger',
    size: 'md',
    imageSrc: ArmorYellowIcon,
  },
};

export const Info: Story = {
  args: {
    productName: 'Info Product',
    gemsValue: 550,
    color: 'info',
    size: 'md',
    imageSrc: ArmorYellowIcon,
  },
};

export const Neutral: Story = {
  args: {
    productName: 'Neutral Product',
    gemsValue: 550,
    color: 'neutral',
    size: 'md',
    imageSrc: ArmorYellowIcon,
  },
};

// Tamaños
export const ExtraSmall: Story = {
  args: {
    productName: 'XS Product',
    gemsValue: 100,
    size: 'xs',
    color: 'primary',
    imageSrc: ArmorYellowIcon,
  },
};

export const Small: Story = {
  args: {
    productName: 'Small Product',
    gemsValue: 250,
    size: 'sm',
    color: 'primary',
    imageSrc: ArmorYellowIcon,
  },
};

export const Medium: Story = {
  args: {
    productName: 'Medium Product',
    gemsValue: 550,
    size: 'md',
    color: 'primary',
    imageSrc: ArmorYellowIcon,
  },
};

export const Large: Story = {
  args: {
    productName: 'Large Product',
    gemsValue: 750,
    size: 'lg',
    color: 'primary',
    imageSrc: ArmorYellowIcon,
  },
};

export const ExtraLarge: Story = {
  args: {
    productName: 'XL Product',
    gemsValue: 1000,
    size: 'xl',
    color: 'primary',
    imageSrc: ArmorYellowIcon,
  },
};

// Todos los estados
export const AllStates: Story = {
  render: () => (
    <div className="luca-space-y-6">
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-3 luca-text-neutral-700">Estados</h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          <CardProduct
            productName="Name product"
            gemsValue={550}
            size="md"
            color="primary"
            state="default"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Name product"
            gemsValue={550}
            size="md"
            color="primary"
            state="hover"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Name product"
            gemsValue={550}
            size="md"
            color="primary"
            state="disabled"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Name product"
            gemsValue={550}
            size="md"
            color="primary"
            state="blocked"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Name product"
            gemsValue={550}
            size="md"
            color="primary"
            state="exclusive"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Name product"
            gemsValue={550}
            size="md"
            color="primary"
            state="exclusiveHover"
            imageSrc={ArmorYellowIcon}
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
          <CardProduct
            productName="Primary"
            gemsValue={550}
            size="md"
            color="primary"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Accent"
            gemsValue={550}
            size="md"
            color="accent"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Success"
            gemsValue={550}
            size="md"
            color="success"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Warning"
            gemsValue={550}
            size="md"
            color="warning"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Danger"
            gemsValue={550}
            size="md"
            color="danger"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Info"
            gemsValue={550}
            size="md"
            color="info"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Neutral"
            gemsValue={550}
            size="md"
            color="neutral"
            imageSrc={ArmorYellowIcon}
          />
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
          <CardProduct
            productName="XS"
            gemsValue={100}
            size="xs"
            color="primary"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Small"
            gemsValue={250}
            size="sm"
            color="primary"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Medium"
            gemsValue={550}
            size="md"
            color="primary"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Large"
            gemsValue={750}
            size="lg"
            color="primary"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="XL"
            gemsValue={1000}
            size="xl"
            color="primary"
            imageSrc={ArmorYellowIcon}
          />
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
          <CardProduct
            productName="Responsive Product"
            gemsValue={550}
            size="md"
            color="primary"
            imageSrc={ArmorYellowIcon}
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

// Ejemplo con imagen personalizada
export const WithCustomImage: Story = {
  render: () => {
    const CustomImage = () => (
      <div className="luca-w-full luca-h-full luca-bg-gradient-to-br luca-from-primary-400 luca-to-primary-600 luca-rounded-lg luca-flex luca-items-center luca-justify-center">
        <span className="luca-text-white luca-font-bold luca-text-2xl">🎮</span>
      </div>
    );

    return (
      <div className="luca-space-y-6">
        <div>
          <h3 className="luca-text-sm luca-font-semibold luca-mb-3 luca-text-neutral-700">
            Con Imagen Personalizada
          </h3>
          <div className="luca-flex luca-flex-wrap luca-gap-4">
            <CardProduct
              productName="Custom Image"
              gemsValue={550}
              size="md"
              color="primary"
              image={<CustomImage />}
            />
            <CardProduct
              productName="Default"
              gemsValue={550}
              size="md"
              color="primary"
              imageSrc={ArmorYellowIcon}
            />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

// Ejemplo sin gemas
export const WithoutGems: Story = {
  args: {
    productName: 'Producto sin gemas',
    showGems: false,
    size: 'md',
    color: 'primary',
    imageSrc: ArmorYellowIcon,
  },
};

// Ejemplo sin texto
export const WithoutText: Story = {
  args: {
    productName: 'Name product',
    gemsValue: 550,
    showText: false,
    size: 'md',
    color: 'primary',
    imageSrc: ArmorYellowIcon,
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
          <CardProduct
            productName="Name product"
            gemsValue={550}
            size="md"
            color="primary"
            state="default"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Name product"
            gemsValue={550}
            size="md"
            color="primary"
            state="hover"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Name product"
            gemsValue={550}
            size="md"
            color="primary"
            state="disabled"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Name product"
            gemsValue={550}
            size="md"
            color="primary"
            state="blocked"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Name product"
            gemsValue={550}
            size="md"
            color="primary"
            state="exclusive"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Name product"
            gemsValue={550}
            size="md"
            color="primary"
            state="exclusiveHover"
            imageSrc={ArmorYellowIcon}
          />
        </div>
      </div>

      {/* Colores */}
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-4 luca-text-neutral-700">
          Variantes de Color
        </h3>
        <div className="luca-flex luca-flex-wrap luca-gap-4">
          <CardProduct
            productName="Primary"
            gemsValue={550}
            size="md"
            color="primary"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Accent"
            gemsValue={550}
            size="md"
            color="accent"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Success"
            gemsValue={550}
            size="md"
            color="success"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Warning"
            gemsValue={550}
            size="md"
            color="warning"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Danger"
            gemsValue={550}
            size="md"
            color="danger"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Info"
            gemsValue={550}
            size="md"
            color="info"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Neutral"
            gemsValue={550}
            size="md"
            color="neutral"
            imageSrc={ArmorYellowIcon}
          />
        </div>
      </div>

      {/* Tamaños */}
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-4 luca-text-neutral-700">Tamaños</h3>
        <div className="luca-flex luca-flex-wrap luca-items-end luca-gap-4">
          <CardProduct
            productName="XS"
            gemsValue={100}
            size="xs"
            color="primary"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Small"
            gemsValue={250}
            size="sm"
            color="primary"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Medium"
            gemsValue={550}
            size="md"
            color="primary"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="Large"
            gemsValue={750}
            size="lg"
            color="primary"
            imageSrc={ArmorYellowIcon}
          />
          <CardProduct
            productName="XL"
            gemsValue={1000}
            size="xl"
            color="primary"
            imageSrc={ArmorYellowIcon}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
