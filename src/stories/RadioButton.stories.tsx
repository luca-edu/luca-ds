import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '../components/RadioButton';
import { CalculatorIcon } from '../shared/icons';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'success', 'warning', 'danger', 'info', 'neutral'],
      description: 'Color variant of the radio button',
    },
    style: {
      control: 'select',
      options: ['default', 'filled'],
      description: 'Visual style of the radio button when checked',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio button is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio button is disabled',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the label text',
    },
    label: {
      control: 'text',
      description: 'Label text for the radio button',
    },
  },
  args: {
    label: 'Radiobutton text',
    showLabel: true,
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story básico
export const Default: Story = {
  args: {
    variant: 'primary',
    style: 'default',
    checked: false,
  },
};

// Story checked
export const Checked: Story = {
  args: {
    variant: 'primary',
    style: 'default',
    checked: true,
  },
};

// Story con estilo filled
export const FilledStyle: Story = {
  args: {
    variant: 'primary',
    style: 'filled',
    checked: true,
  },
};

// Story disabled
export const Disabled: Story = {
  args: {
    variant: 'primary',
    style: 'default',
    checked: false,
    disabled: true,
  },
};

// Story disabled checked
export const DisabledChecked: Story = {
  args: {
    variant: 'primary',
    style: 'default',
    checked: true,
    disabled: true,
  },
};

// Story sin label
export const WithoutLabel: Story = {
  args: {
    variant: 'primary',
    style: 'default',
    checked: false,
    showLabel: false,
  },
};

// Story con todas las variantes
export const AllVariants: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>('primary');

    return (
      <div className="luca-flex luca-flex-col luca-gap-4">
        {(['primary', 'accent', 'success', 'warning', 'danger', 'info', 'neutral'] as const).map(
          (variant) => (
            <RadioButton
              key={variant}
              label={`Radio button ${variant}`}
              variant={variant}
              checked={selected === variant}
              onChange={() => setSelected(variant)}
            />
          )
        )}
      </div>
    );
  },
};

// Story con grupo de radio buttons
export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>('option1');

    return (
      <div className="luca-flex luca-flex-col luca-gap-3">
        <RadioButton
          label="Opción 1"
          name="group1"
          value="option1"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <RadioButton
          label="Opción 2"
          name="group1"
          value="option2"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <RadioButton
          label="Opción 3"
          name="group1"
          value="option3"
          checked={selected === 'option3'}
          onChange={(e) => setSelected(e.target.value)}
        />
      </div>
    );
  },
};

// Story comparando estilos default vs filled
export const StyleComparison: Story = {
  render: () => {
    const [selected1, setSelected1] = useState<string>('default1');
    const [selected2, setSelected2] = useState<string>('filled1');

    return (
      <div className="luca-flex luca-gap-8">
        <div className="luca-flex luca-flex-col luca-gap-3">
          <h3 className="luca-font-semibold luca-text-sm luca-mb-2">Default Style</h3>
          <RadioButton
            label="Opción 1"
            name="default"
            value="default1"
            style="default"
            checked={selected1 === 'default1'}
            onChange={(e) => setSelected1(e.target.value)}
          />
          <RadioButton
            label="Opción 2"
            name="default"
            value="default2"
            style="default"
            checked={selected1 === 'default2'}
            onChange={(e) => setSelected1(e.target.value)}
          />
        </div>
        <div className="luca-flex luca-flex-col luca-gap-3">
          <h3 className="luca-font-semibold luca-text-sm luca-mb-2">Filled Style</h3>
          <RadioButton
            label="Opción 1"
            name="filled"
            value="filled1"
            style="filled"
            checked={selected2 === 'filled1'}
            onChange={(e) => setSelected2(e.target.value)}
          />
          <RadioButton
            label="Opción 2"
            name="filled"
            value="filled2"
            style="filled"
            checked={selected2 === 'filled2'}
            onChange={(e) => setSelected2(e.target.value)}
          />
        </div>
      </div>
    );
  },
};

// Story con contenido dinámico (iconos)
export const WithIcon: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>('option1');

    return (
      <div className="luca-flex luca-flex-col luca-gap-3">
        <RadioButton
          name="withIcon"
          value="option1"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
        >
          <div className="luca-flex luca-items-center luca-gap-2">
            <CalculatorIcon size={20} className="luca-text-primary-600" />
            <span>Matemáticas</span>
          </div>
        </RadioButton>
        <RadioButton
          name="withIcon"
          value="option2"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
        >
          <div className="luca-flex luca-items-center luca-gap-2">
            <span className="luca-text-2xl">🎨</span>
            <span>Arte</span>
          </div>
        </RadioButton>
        <RadioButton
          name="withIcon"
          value="option3"
          checked={selected === 'option3'}
          onChange={(e) => setSelected(e.target.value)}
        >
          <div className="luca-flex luca-items-center luca-gap-2">
            <span className="luca-text-2xl">🎵</span>
            <span>Música</span>
          </div>
        </RadioButton>
      </div>
    );
  },
};

// Story con contenido HTML personalizado
export const WithCustomHTML: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>('premium');

    return (
      <div className="luca-flex luca-flex-col luca-gap-3">
        <RadioButton
          name="plan"
          value="basic"
          checked={selected === 'basic'}
          onChange={(e) => setSelected(e.target.value)}
        >
          <div className="luca-flex luca-flex-col">
            <span className="luca-font-semibold">Plan Básico</span>
            <span className="luca-text-xs luca-text-neutral-500">Gratis para siempre</span>
          </div>
        </RadioButton>
        <RadioButton
          name="plan"
          value="premium"
          checked={selected === 'premium'}
          onChange={(e) => setSelected(e.target.value)}
        >
          <div className="luca-flex luca-flex-col">
            <span className="luca-font-semibold">Plan Premium</span>
            <span className="luca-text-xs luca-text-neutral-500">$9.99/mes</span>
          </div>
        </RadioButton>
        <RadioButton
          name="plan"
          value="enterprise"
          checked={selected === 'enterprise'}
          onChange={(e) => setSelected(e.target.value)}
        >
          <div className="luca-flex luca-flex-col">
            <span className="luca-font-semibold">Plan Empresarial</span>
            <span className="luca-text-xs luca-text-neutral-500">Contactar ventas</span>
          </div>
        </RadioButton>
      </div>
    );
  },
};
