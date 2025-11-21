import type { Meta, StoryObj } from '@storybook/react';
import { AmountButton } from '../components/AmountButton';
import React, { useState } from 'react';

const meta = {
  title: 'Components/AmountButton',
  component: AmountButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'success', 'warning', 'danger', 'info', 'neutral'],
      description: 'Color variant of the amount button',
    },
    value: {
      control: { type: 'number', min: 0, max: 10 },
      description: 'Current value',
    },
    min: {
      control: { type: 'number', min: 0 },
      description: 'Minimum value',
    },
    max: {
      control: { type: 'number', min: 0 },
      description: 'Maximum value',
    },
    step: {
      control: { type: 'number', min: 1 },
      description: 'Step increment/decrement',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the amount button is disabled',
    },
    allowManualInput: {
      control: 'boolean',
      description: 'Whether to allow manual input in the value display',
    },
  },
  args: {
    value: 1,
    min: 0,
    step: 1,
    allowManualInput: false,
  },
} satisfies Meta<typeof AmountButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story básico controlado
export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || 1);
    return (
      <AmountButton
        {...args}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
};

// Story con valor mínimo (0)
export const AtMinimum: Story = {
  render: (args) => {
    const [value, setValue] = useState(0);
    return (
      <AmountButton
        {...args}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
};

// Story con valor intermedio (1)
export const AtIntermediate: Story = {
  render: (args) => {
    const [value, setValue] = useState(1);
    return (
      <AmountButton
        {...args}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
};

// Story con valor mayor (2+)
export const AtNormal: Story = {
  render: (args) => {
    const [value, setValue] = useState(2);
    return (
      <AmountButton
        {...args}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
};

// Story disabled
export const Disabled: Story = {
  args: {
    value: 0,
    disabled: true,
  },
};

// Story con máximo
export const WithMax: Story = {
  render: (args) => {
    const [value, setValue] = useState(5);
    return (
      <AmountButton
        {...args}
        value={value}
        max={10}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
};

// Story con step personalizado
export const CustomStep: Story = {
  render: (args) => {
    const [value, setValue] = useState(10);
    return (
      <AmountButton
        {...args}
        value={value}
        step={5}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
};

// Story con input manual habilitado
export const WithManualInput: Story = {
  render: (args) => {
    const [value, setValue] = useState(5);
    return (
      <AmountButton
        {...args}
        value={value}
        allowManualInput={true}
        min={0}
        max={100}
        onChange={(newValue) => setValue(newValue)}
      />
    );
  },
};

// Story comparando con y sin input manual
export const ManualInputComparison: Story = {
  render: () => {
    const [value1, setValue1] = useState(5);
    const [value2, setValue2] = useState(5);

    return (
      <div className="luca-flex luca-flex-col luca-gap-4">
        <div className="luca-flex luca-items-center luca-gap-4">
          <span className="luca-w-40 luca-text-sm luca-font-medium">Sin input manual:</span>
          <AmountButton
            value={value1}
            onChange={setValue1}
            allowManualInput={false}
          />
        </div>
        <div className="luca-flex luca-items-center luca-gap-4">
          <span className="luca-w-40 luca-text-sm luca-font-medium">Con input manual:</span>
          <AmountButton
            value={value2}
            onChange={setValue2}
            allowManualInput={true}
            min={0}
            max={100}
          />
        </div>
      </div>
    );
  },
};

// Story con todas las variantes
export const AllVariants: Story = {
  render: () => {
    const [values, setValues] = useState<Record<string, number>>({
      primary: 1,
      accent: 2,
      success: 1,
      warning: 3,
      danger: 1,
      info: 2,
      neutral: 1,
    });

    return (
      <div className="luca-flex luca-flex-col luca-gap-4">
        {(['primary', 'accent', 'success', 'warning', 'danger', 'info', 'neutral'] as const).map((variant) => (
          <div key={variant} className="luca-flex luca-items-center luca-gap-4">
            <span className="luca-w-20 luca-text-sm luca-font-medium luca-text-neutral-700">
              {variant}:
            </span>
            <AmountButton
              variant={variant}
              value={values[variant]}
              onChange={(newValue) =>
                setValues((prev) => ({ ...prev, [variant]: newValue }))
              }
            />
          </div>
        ))}
      </div>
    );
  },
};

// Story mostrando todos los estados
export const AllStates: Story = {
  render: () => {
    const [value0, setValue0] = useState(0);
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(2);
    const [value3, setValue3] = useState(3);

    return (
      <div className="luca-flex luca-flex-col luca-gap-4">
        <div className="luca-flex luca-items-center luca-gap-4">
          <span className="luca-w-20 luca-text-sm luca-font-medium">Disabled (0):</span>
          <AmountButton value={value0} onChange={setValue0} disabled />
        </div>
        <div className="luca-flex luca-items-center luca-gap-4">
          <span className="luca-w-20 luca-text-sm luca-font-medium">At Min (1):</span>
          <AmountButton value={value1} onChange={setValue1} />
        </div>
        <div className="luca-flex luca-items-center luca-gap-4">
          <span className="luca-w-20 luca-text-sm luca-font-medium">Normal (2):</span>
          <AmountButton value={value2} onChange={setValue2} />
        </div>
        <div className="luca-flex luca-items-center luca-gap-4">
          <span className="luca-w-20 luca-text-sm luca-font-medium">Normal (3):</span>
          <AmountButton value={value3} onChange={setValue3} />
        </div>
      </div>
    );
  },
};

