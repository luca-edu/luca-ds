import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/Checkbox';
import { CalculatorIcon } from '../shared/icons';

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
        {(['primary', 'accent', 'success', 'warning', 'danger', 'info', 'neutral'] as const).map(
          (variant) => (
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
          )
        )}
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
            onChange={(e) => setCheckedItems((prev) => ({ ...prev, item1: e.target.checked }))}
          />
          <Checkbox
            label="Item 2"
            checked={checkedItems.item2}
            onChange={(e) => setCheckedItems((prev) => ({ ...prev, item2: e.target.checked }))}
          />
          <Checkbox
            label="Item 3"
            checked={checkedItems.item3}
            onChange={(e) => setCheckedItems((prev) => ({ ...prev, item3: e.target.checked }))}
          />
        </div>
      </div>
    );
  },
};

// Story con contenido dinámico (iconos)
export const WithIcon: Story = {
  render: () => {
    const [checkedStates, setCheckedStates] = useState({
      math: false,
      art: false,
      music: false,
    });

    return (
      <div className="luca-flex luca-flex-col luca-gap-3">
        <Checkbox
          checked={checkedStates.math}
          onChange={(e) => setCheckedStates((prev) => ({ ...prev, math: e.target.checked }))}
        >
          <div className="luca-flex luca-items-center luca-gap-2">
            <CalculatorIcon size={20} className="luca-text-primary-600" />
            <span>Matemáticas</span>
          </div>
        </Checkbox>
        <Checkbox
          checked={checkedStates.art}
          onChange={(e) => setCheckedStates((prev) => ({ ...prev, art: e.target.checked }))}
        >
          <div className="luca-flex luca-items-center luca-gap-2">
            <span className="luca-text-2xl">🎨</span>
            <span>Arte</span>
          </div>
        </Checkbox>
        <Checkbox
          checked={checkedStates.music}
          onChange={(e) => setCheckedStates((prev) => ({ ...prev, music: e.target.checked }))}
        >
          <div className="luca-flex luca-items-center luca-gap-2">
            <span className="luca-text-2xl">🎵</span>
            <span>Música</span>
          </div>
        </Checkbox>
      </div>
    );
  },
};

// Story con contenido HTML personalizado
export const WithCustomHTML: Story = {
  render: () => {
    const [checkedStates, setCheckedStates] = useState({
      notifications: false,
      newsletter: false,
      updates: false,
    });

    return (
      <div className="luca-flex luca-flex-col luca-gap-3">
        <Checkbox
          checked={checkedStates.notifications}
          onChange={(e) =>
            setCheckedStates((prev) => ({ ...prev, notifications: e.target.checked }))
          }
        >
          <div className="luca-flex luca-flex-col">
            <span className="luca-font-semibold">Notificaciones por email</span>
            <span className="luca-text-xs luca-text-neutral-500">
              Recibe actualizaciones importantes en tu correo
            </span>
          </div>
        </Checkbox>
        <Checkbox
          checked={checkedStates.newsletter}
          onChange={(e) => setCheckedStates((prev) => ({ ...prev, newsletter: e.target.checked }))}
        >
          <div className="luca-flex luca-flex-col">
            <span className="luca-font-semibold">Newsletter semanal</span>
            <span className="luca-text-xs luca-text-neutral-500">
              Contenido exclusivo cada semana
            </span>
          </div>
        </Checkbox>
        <Checkbox
          checked={checkedStates.updates}
          onChange={(e) => setCheckedStates((prev) => ({ ...prev, updates: e.target.checked }))}
        >
          <div className="luca-flex luca-flex-col">
            <span className="luca-font-semibold">Actualizaciones de producto</span>
            <span className="luca-text-xs luca-text-neutral-500">
              Entérate de nuevas funcionalidades
            </span>
          </div>
        </Checkbox>
      </div>
    );
  },
};

// Story con badges/chips
export const WithBadges: Story = {
  render: () => {
    const [checkedStates, setCheckedStates] = useState({
      feature1: false,
      feature2: false,
      feature3: false,
    });

    return (
      <div className="luca-flex luca-flex-col luca-gap-3">
        <Checkbox
          checked={checkedStates.feature1}
          onChange={(e) => setCheckedStates((prev) => ({ ...prev, feature1: e.target.checked }))}
        >
          <div className="luca-flex luca-items-center luca-gap-2">
            <span>Característica Premium</span>
            <span className="luca-bg-accent-100 luca-text-accent-700 luca-px-2 luca-py-0.5 luca-rounded luca-text-xs luca-font-medium">
              NUEVO
            </span>
          </div>
        </Checkbox>
        <Checkbox
          checked={checkedStates.feature2}
          onChange={(e) => setCheckedStates((prev) => ({ ...prev, feature2: e.target.checked }))}
        >
          <div className="luca-flex luca-items-center luca-gap-2">
            <span>Soporte 24/7</span>
            <span className="luca-bg-success-50 luca-text-success-700 luca-px-2 luca-py-0.5 luca-rounded luca-text-xs luca-font-medium">
              POPULAR
            </span>
          </div>
        </Checkbox>
        <Checkbox
          checked={checkedStates.feature3}
          onChange={(e) => setCheckedStates((prev) => ({ ...prev, feature3: e.target.checked }))}
        >
          <div className="luca-flex luca-items-center luca-gap-2">
            <span>Acceso API</span>
            <span className="luca-bg-primary-50 luca-text-primary-700 luca-px-2 luca-py-0.5 luca-rounded luca-text-xs luca-font-medium">
              PRO
            </span>
          </div>
        </Checkbox>
      </div>
    );
  },
};
