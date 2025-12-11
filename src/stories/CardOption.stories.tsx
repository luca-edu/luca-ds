import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardOption } from '../components/CardOption';

const meta = {
  title: 'Components/CardOption',
  component: CardOption,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'],
      description: 'Color variant of the card',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the card',
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success', 'hover', 'disabled'],
      description: 'State of the card',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is clickable',
    },
  },
} satisfies Meta<typeof CardOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primaryText: '789 654 321',
    secondaryText: '-',
  },
};

export const Error: Story = {
  args: {
    primaryText: '876 543 210',
    secondaryText: 'Seleccionado',
    state: 'error',
  },
};

export const Success: Story = {
  args: {
    primaryText: 'Son iguales',
    secondaryText: 'Correcto',
    state: 'success',
  },
};

export const Hover: Story = {
  args: {
    primaryText: '789 654 321',
    secondaryText: '-',
    state: 'hover',
  },
};

export const Disabled: Story = {
  args: {
    primaryText: '789 654 321',
    secondaryText: '-',
    state: 'disabled',
  },
};

export const AllVariants: Story = {
  args: {
    primaryText: '789 654 321',
    secondaryText: '-',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-wrap luca-gap-4 luca-p-8 luca-w-full luca-max-w-4xl">
      {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
        (variant) => (
          <div key={variant} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
            <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </h3>
            <CardOption {...args} variant={variant} />
          </div>
        )
      )}
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    primaryText: '789 654 321',
    secondaryText: '-',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
          <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
            {size.toUpperCase()}
          </h3>
          <CardOption {...args} size={size} />
        </div>
      ))}
    </div>
  ),
};

export const AllStates: Story = {
  args: {
    primaryText: '789 654 321',
    secondaryText: '-',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-wrap luca-gap-4 luca-p-8 luca-w-full luca-max-w-4xl">
      {(['default', 'error', 'success', 'hover', 'disabled'] as const).map((state) => (
        <div key={state} className="luca-flex luca-flex-col luca-gap-2 luca-items-center">
          <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
            {state.charAt(0).toUpperCase() + state.slice(1)}
          </h3>
          <CardOption
            {...args}
            state={state}
            primaryText={
              state === 'error'
                ? '876 543 210'
                : state === 'success'
                  ? 'Son iguales'
                  : '789 654 321'
            }
            secondaryText={
              state === 'error' ? 'Seleccionado' : state === 'success' ? 'Correcto' : '-'
            }
          />
        </div>
      ))}
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    primaryText: '789 654 321',
    secondaryText: '-',
    clickable: true,
    onClick: () => {
      console.log('CardOption clicked!');
    },
  },
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-wrap luca-gap-4">
        <CardOption
          primaryText={
            <span>
              <strong>123</strong> <span className="luca-text-neutral-500">456</span> 789
            </span>
          }
          secondaryText={<span className="luca-text-success-600">✓ Válido</span>}
          state="success"
        />
        <CardOption
          primaryText={
            <span>
              <strong>999</strong> <span className="luca-text-neutral-500">888</span> 777
            </span>
          }
          secondaryText={<span className="luca-text-danger-600">✗ Error</span>}
          state="error"
        />
        <CardOption
          primaryText="ABC 123"
          secondaryText={<span className="luca-text-primary-600">Pendiente</span>}
          variant="primary"
        />
      </div>
    </div>
  ),
};

export const NumberOptions: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-4xl">
      <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
        Selecciona un número
      </h3>
      <div className="luca-flex luca-flex-wrap luca-gap-3">
        <CardOption primaryText="123 456 789" secondaryText="-" clickable />
        <CardOption primaryText="234 567 890" secondaryText="-" clickable />
        <CardOption
          primaryText="345 678 901"
          secondaryText="Seleccionado"
          state="error"
          clickable
        />
        <CardOption primaryText="456 789 012" secondaryText="-" clickable />
        <CardOption primaryText="567 890 123" secondaryText="Correcto" state="success" clickable />
      </div>
    </div>
  ),
};

export const ComparisonExample: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-4xl">
      <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
        Comparación de opciones
      </h3>
      <div className="luca-flex luca-flex-wrap luca-gap-4">
        <div className="luca-flex luca-flex-col luca-gap-2">
          <p className="luca-text-xs luca-text-neutral-600">Opción 1</p>
          <CardOption primaryText="789 654 321" secondaryText="-" />
        </div>
        <div className="luca-flex luca-flex-col luca-gap-2">
          <p className="luca-text-xs luca-text-neutral-600">Opción 2 (Error)</p>
          <CardOption primaryText="876 543 210" secondaryText="Seleccionado" state="error" />
        </div>
        <div className="luca-flex luca-flex-col luca-gap-2">
          <p className="luca-text-xs luca-text-neutral-600">Opción 3 (Correcto)</p>
          <CardOption primaryText="Son iguales" secondaryText="Correcto" state="success" />
        </div>
      </div>
    </div>
  ),
};

export const ResponsiveExample: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-w-full">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Desktop</h3>
        <div className="luca-w-full luca-max-w-6xl">
          <div className="luca-flex luca-flex-wrap luca-gap-4">
            <CardOption primaryText="789 654 321" secondaryText="-" size="lg" clickable />
            <CardOption
              primaryText="876 543 210"
              secondaryText="Seleccionado"
              state="error"
              size="lg"
              clickable
            />
            <CardOption
              primaryText="Son iguales"
              secondaryText="Correcto"
              state="success"
              size="lg"
              clickable
            />
          </div>
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Tablet</h3>
        <div className="luca-w-full luca-max-w-2xl">
          <div className="luca-flex luca-flex-wrap luca-gap-3">
            <CardOption primaryText="789 654 321" secondaryText="-" size="md" clickable />
            <CardOption
              primaryText="876 543 210"
              secondaryText="Seleccionado"
              state="error"
              size="md"
              clickable
            />
            <CardOption
              primaryText="Son iguales"
              secondaryText="Correcto"
              state="success"
              size="md"
              clickable
            />
          </div>
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Mobile</h3>
        <div className="luca-w-full luca-max-w-sm">
          <div className="luca-flex luca-flex-wrap luca-gap-2">
            <CardOption primaryText="789 654 321" secondaryText="-" size="sm" clickable />
            <CardOption
              primaryText="876 543 210"
              secondaryText="Seleccionado"
              state="error"
              size="sm"
              clickable
            />
            <CardOption
              primaryText="Son iguales"
              secondaryText="Correcto"
              state="success"
              size="sm"
              clickable
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const InteractiveExample: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<string | null>(null);
    const [correct, setCorrect] = React.useState<string | null>(null);

    const options = [
      { id: '1', primary: '789 654 321', secondary: '-' },
      { id: '2', primary: '876 543 210', secondary: 'Seleccionado' },
      { id: '3', primary: 'Son iguales', secondary: 'Correcto' },
    ];

    const handleClick = (id: string) => {
      setSelected(id);
      if (id === '3') {
        setCorrect(id);
      } else {
        setCorrect(null);
      }
    };

    return (
      <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-4xl">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Selecciona la opción correcta
        </h3>
        <div className="luca-flex luca-flex-wrap luca-gap-3">
          {options.map((option) => (
            <CardOption
              key={option.id}
              primaryText={option.primary}
              secondaryText={option.secondary}
              state={
                correct === option.id
                  ? 'success'
                  : selected === option.id && correct !== option.id
                    ? 'error'
                    : 'default'
              }
              clickable
              onClick={() => handleClick(option.id)}
            />
          ))}
        </div>
        {selected && (
          <p className="luca-text-xs luca-text-neutral-600">
            Opción seleccionada: {options.find((o) => o.id === selected)?.primary}
          </p>
        )}
        {correct && (
          <p className="luca-text-xs luca-text-success-600">
            ¡Correcto! Has seleccionado la opción correcta.
          </p>
        )}
      </div>
    );
  },
};
