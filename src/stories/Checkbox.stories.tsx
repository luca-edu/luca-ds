import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/Checkbox';
import React, { useState } from 'react';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'success', 'warning', 'danger', 'info', 'neutral'],
      description: 'Color variant of the checkbox',
    },
    style: {
      control: 'select',
      options: ['default', 'filled'],
      description: 'Visual style of the checkbox when checked',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is in indeterminate state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the label text',
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
  },
  args: {
    label: 'Checkbox text',
    showLabel: true,
  },
} satisfies Meta<typeof Checkbox>;

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

// Story indeterminate
export const Indeterminate: Story = {
  args: {
    variant: 'primary',
    style: 'default',
    checked: false,
    indeterminate: true,
  },
};

// Story indeterminate filled
export const IndeterminateFilled: Story = {
  args: {
    variant: 'primary',
    style: 'filled',
    checked: false,
    indeterminate: true,
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
    const [checkedStates, setCheckedStates] = useState<Record<string, boolean>>({
      primary: false,
      accent: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
      neutral: false,
    });

    return (
      <div className="luca-flex luca-flex-col luca-gap-4">
        {(['primary', 'accent', 'success', 'warning', 'danger', 'info', 'neutral'] as const).map((variant) => (
          <Checkbox
            key={variant}
            label={`Checkbox ${variant}`}
            variant={variant}
            checked={checkedStates[variant]}
            onChange={(e) =>
              setCheckedStates((prev) => ({
                ...prev,
                [variant]: e.target.checked,
              }))
            }
          />
        ))}
      </div>
    );
  },
};

// Story con grupo de checkboxes
export const CheckboxGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);

    const handleChange = (value: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        setSelected([...selected, value]);
      } else {
        setSelected(selected.filter((v) => v !== value));
      }
    };

    return (
      <div className="luca-flex luca-flex-col luca-gap-3">
        <Checkbox
          label="Opción 1"
          value="option1"
          checked={selected.includes('option1')}
          onChange={handleChange('option1')}
        />
        <Checkbox
          label="Opción 2"
          value="option2"
          checked={selected.includes('option2')}
          onChange={handleChange('option2')}
        />
        <Checkbox
          label="Opción 3"
          value="option3"
          checked={selected.includes('option3')}
          onChange={handleChange('option3')}
        />
      </div>
    );
  },
};

// Story comparando estilos default vs filled
export const StyleComparison: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    return (
      <div className="luca-flex luca-gap-8">
        <div className="luca-flex luca-flex-col luca-gap-3">
          <h3 className="luca-font-semibold luca-text-sm luca-mb-2">Default Style</h3>
          <Checkbox
            label="Opción 1"
            style="default"
            checked={checked1}
            onChange={(e) => setChecked1(e.target.checked)}
          />
          <Checkbox
            label="Opción 2"
            style="default"
            checked={checked2}
            onChange={(e) => setChecked2(e.target.checked)}
          />
        </div>
        <div className="luca-flex luca-flex-col luca-gap-3">
          <h3 className="luca-font-semibold luca-text-sm luca-mb-2">Filled Style</h3>
          <Checkbox
            label="Opción 1"
            style="filled"
            checked={checked1}
            onChange={(e) => setChecked1(e.target.checked)}
          />
          <Checkbox
            label="Opción 2"
            style="filled"
            checked={checked2}
            onChange={(e) => setChecked2(e.target.checked)}
          />
        </div>
      </div>
    );
  },
};

// Story con estado indeterminate
export const IndeterminateExample: Story = {
  render: () => {
    const [checkedItems, setCheckedItems] = useState({
      item1: false,
      item2: false,
      item3: false,
    });

    const allChecked = Object.values(checkedItems).every(Boolean);
    const someChecked = Object.values(checkedItems).some(Boolean);
    const indeterminate = someChecked && !allChecked;

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newState = e.target.checked;
      setCheckedItems({
        item1: newState,
        item2: newState,
        item3: newState,
      });
    };

    return (
      <div className="luca-flex luca-flex-col luca-gap-3">
        <Checkbox
          label="Seleccionar todo"
          checked={allChecked}
          indeterminate={indeterminate}
          onChange={handleSelectAll}
        />
        <div className="luca-ml-6 luca-flex luca-flex-col luca-gap-2">
          <Checkbox
            label="Item 1"
            checked={checkedItems.item1}
            onChange={(e) =>
              setCheckedItems((prev) => ({ ...prev, item1: e.target.checked }))
            }
          />
          <Checkbox
            label="Item 2"
            checked={checkedItems.item2}
            onChange={(e) =>
              setCheckedItems((prev) => ({ ...prev, item2: e.target.checked }))
            }
          />
          <Checkbox
            label="Item 3"
            checked={checkedItems.item3}
            onChange={(e) =>
              setCheckedItems((prev) => ({ ...prev, item3: e.target.checked }))
            }
          />
        </div>
      </div>
    );
  },
};

