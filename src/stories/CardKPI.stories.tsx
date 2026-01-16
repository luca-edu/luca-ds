import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardKPI } from '../components/CardKPI';
import { CalculatorIcon, CheckIcon, QuestionIcon } from '../shared/icons';

const meta = {
  title: 'Components/CardKPI',
  component: CardKPI,
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
      options: ['default', 'hover', 'disabled'],
      description: 'State of the card',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is clickable',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the icon',
    },
  },
} satisfies Meta<typeof CardKPI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
    description1: 'Description 1',
    description2: 'Description 2',
    icon: <CalculatorIcon size={16} />,
    icon2: <CheckIcon size={16} />,
    showIcon2: true,
    showIcon: true,
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Total de Estudiantes',
    description1: '1,234',
    description2: '+12%',
    icon: <CheckIcon size={16} />,
    showIcon: true,
    icon2: <CheckIcon size={16} />,
    showIcon2: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    title: 'Total de Estudiantes',
    description1: '1,234',
    description2: '+12%',
    showIcon: false,
    icon2: <CheckIcon size={16} />,
    showIcon2: true,
  },
};

export const SingleDescription: Story = {
  args: {
    title: 'Total de Estudiantes',
    description1: '1,234',
    icon: <CalculatorIcon size={16} />,
    showIcon: true,
    icon2: <CheckIcon size={16} />,
    showIcon2: true,
  },
};

export const AllVariants: Story = {
  args: {
    title: 'Title',
    description1: 'Description 1',
    description2: 'Description 2',
    icon: <CalculatorIcon size={16} />,
    showIcon: true,
    icon2: <CheckIcon size={16} />,
    showIcon2: true,
  },
  render: (args) => (
    <div className="luca-flex luca-flex-wrap luca-gap-4 luca-p-8 luca-w-full luca-max-w-6xl">
      {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
        (variant) => (
          <div key={variant} className="luca-flex luca-flex-col luca-gap-2">
            <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </h3>
            <CardKPI {...args} variant={variant} />
          </div>
        )
      )}
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    title: 'Total de Estudiantes',
    description1: '1,234',
    description2: '+12%',
    icon: <CalculatorIcon size={16} />,
    showIcon: true,
    icon2: <CheckIcon size={16} />,
    showIcon2: true,
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="luca-flex luca-flex-col luca-gap-2">
          <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
            {size.toUpperCase()}
          </h3>
          <CardKPI {...args} size={size} />
        </div>
      ))}
    </div>
  ),
};

export const States: Story = {
  args: {
    title: 'Total de Estudiantes',
    description1: '1,234',
    description2: '+12%',
    icon: <CalculatorIcon size={16} />,
    showIcon: true,
    icon2: <CheckIcon size={16} />,
    showIcon2: true,
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      {(['default', 'hover', 'disabled'] as const).map((state) => (
        <div key={state} className="luca-flex luca-flex-col luca-gap-2">
          <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
            {state.charAt(0).toUpperCase() + state.slice(1)}
          </h3>
          <CardKPI {...args} state={state} />
        </div>
      ))}
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    title: 'Total de Estudiantes',
    description1: '1,234',
    description2: '+12%',
    icon: <CalculatorIcon size={16} />,
    showIcon: true,
    clickable: true,
    onClick: () => {
      console.log('Card clicked!');
    },
    icon2: <CheckIcon size={16} />,
    showIcon2: true,
  },
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-4xl">
      <CardKPI
        title="Estudiantes Activos"
        description1={
          <span>
            <strong>2,456</strong>
          </span>
        }
        description2={<span className="luca-text-success-600 luca-font-semibold">+15.3%</span>}
        icon={<CheckIcon size={16} />}
        variant="success"
        icon2={<CheckIcon size={16} />}
        showIcon2={true}
      />
      <CardKPI
        title="Cursos Completados"
        description1={
          <span>
            <strong>89</strong>
          </span>
        }
        description2={<span className="luca-text-warning-600 luca-font-semibold">-2.1%</span>}
        icon={<QuestionIcon size={16} />}
        variant="warning"
        icon2={<CheckIcon size={16} />}
        showIcon2={true}
      />
      <CardKPI
        title={
          <div className="luca-flex luca-items-center luca-gap-2">
            <span>Ingresos Totales</span>
            <span className="luca-bg-primary-100 luca-text-primary-700 luca-px-2 luca-py-0.5 luca-rounded luca-text-[10px] luca-font-medium">
              NUEVO
            </span>
          </div>
        }
        description1={
          <span>
            <strong>$45,678</strong>
          </span>
        }
        description2={<span className="luca-text-primary-600 luca-font-semibold">+8.5%</span>}
        icon={<CalculatorIcon size={16} />}
        variant="primary"
        icon2={<CheckIcon size={16} />}
        showIcon2={true}
      />
    </div>
  ),
};

export const WithHTMLContent: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-4xl">
      <CardKPI
        title={
          <div>
            <span className="luca-font-semibold">KPI Principal</span>
            <span className="luca-text-neutral-500 luca-ml-2">(Último mes)</span>
          </div>
        }
        description1={
          <div className="luca-flex luca-items-baseline luca-gap-2">
            <span className="luca-text-3xl luca-font-bold">1,234</span>
            <span className="luca-text-sm luca-text-neutral-500">unidades</span>
          </div>
        }
        description2={
          <div className="luca-flex luca-items-center luca-gap-1">
            <span className="luca-text-success-600">↑</span>
            <span className="luca-text-success-600 luca-font-semibold">12%</span>
          </div>
        }
        icon={<CalculatorIcon size={16} />}
        variant="primary"
        size="lg"
        icon2={<CheckIcon size={16} />}
        showIcon2={true}
      />
      <CardKPI
        title="Métricas Avanzadas"
        description1={
          <div>
            <span className="luca-text-2xl luca-font-bold">89.5%</span>
            <span className="luca-text-sm luca-text-neutral-500 luca-ml-2">de eficiencia</span>
          </div>
        }
        description2={
          <div className="luca-flex luca-items-center luca-gap-1">
            <span className="luca-text-danger-600">↓</span>
            <span className="luca-text-danger-600 luca-font-semibold">3.2%</span>
          </div>
        }
        icon={<QuestionIcon size={16} />}
        variant="danger"
        size="lg"
        icon2={<CheckIcon size={16} />}
        showIcon2={true}
      />
    </div>
  ),
};

export const ResponsiveExample: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-w-full">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Desktop</h3>
        <div className="luca-w-full luca-max-w-6xl">
          <div className="luca-grid luca-grid-cols-3 luca-gap-4">
            <CardKPI
              title="Estudiantes"
              description1="1,234"
              description2="+12%"
              icon={<CalculatorIcon size={16} />}
              size="lg"
              icon2={<CheckIcon size={16} />}
              showIcon2={true}
            />
            <CardKPI
              title="Cursos"
              description1="89"
              description2="+5%"
              icon={<CheckIcon size={16} />}
              size="lg"
              variant="success"
              icon2={<CheckIcon size={16} />}
              showIcon2={true}
            />
            <CardKPI
              title="Ingresos"
              description1="$45K"
              description2="+8%"
              icon={<QuestionIcon size={16} />}
              size="lg"
              variant="accent"
              icon2={<CheckIcon size={16} />}
              showIcon2={true}
            />
          </div>
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Tablet</h3>
        <div className="luca-w-full luca-max-w-2xl">
          <div className="luca-grid luca-grid-cols-2 luca-gap-4">
            <CardKPI
              title="Estudiantes"
              description1="1,234"
              description2="+12%"
              icon={<CalculatorIcon size={16} />}
              size="md"
              icon2={<CheckIcon size={16} />}
              showIcon2={true}
            />
            <CardKPI
              title="Cursos"
              description1="89"
              description2="+5%"
              icon={<CheckIcon size={16} />}
              size="md"
              variant="success"
              icon2={<CheckIcon size={16} />}
              showIcon2={true}
            />
          </div>
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Mobile</h3>
        <div className="luca-w-full luca-max-w-sm">
          <div className="luca-flex luca-flex-col luca-gap-4">
            <CardKPI
              title="Estudiantes"
              description1="1,234"
              description2="+12%"
              icon={<CalculatorIcon size={16} />}
              size="sm"
              icon2={<CheckIcon size={16} />}
              showIcon2={true}
            />
            <CardKPI
              title="Cursos"
              description1="89"
              description2="+5%"
              icon={<CheckIcon size={16} />}
              size="sm"
              variant="success"
              icon2={<CheckIcon size={16} />}
              showIcon2={true}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const RealWorldExample: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-6xl">
      <h2 className="luca-text-xl luca-font-bold luca-text-neutral-900">Dashboard de Métricas</h2>
      <div className="luca-grid luca-grid-cols-1 md:luca-grid-cols-2 lg:luca-grid-cols-4 luca-gap-4">
        <CardKPI
          title="Total de Estudiantes"
          description1="2,456"
          description2={<span className="luca-text-success-600 luca-font-semibold">+15.3%</span>}
          icon={<CheckIcon size={16} />}
          variant="primary"
          size="md"
          clickable
          onClick={() => console.log('Estudiantes clicked')}
          icon2={<CheckIcon size={16} />}
          showIcon2={true}
        />
        <CardKPI
          title="Cursos Activos"
          description1="89"
          description2={<span className="luca-text-success-600 luca-font-semibold">+5.2%</span>}
          icon={<CalculatorIcon size={16} />}
          variant="success"
          size="md"
          clickable
          onClick={() => console.log('Cursos clicked')}
          icon2={<CheckIcon size={16} />}
          showIcon2={true}
        />
        <CardKPI
          title="Tasa de Completación"
          description1="78.5%"
          description2={<span className="luca-text-warning-600 luca-font-semibold">-2.1%</span>}
          icon={<QuestionIcon size={16} />}
          variant="warning"
          size="md"
          clickable
          onClick={() => console.log('Tasa clicked')}
          icon2={<CheckIcon size={16} />}
          showIcon2={true}
        />
        <CardKPI
          title="Ingresos Mensuales"
          description1="$45,678"
          description2={<span className="luca-text-primary-600 luca-font-semibold">+8.5%</span>}
          icon={<CalculatorIcon size={16} />}
          variant="accent"
          size="md"
          clickable
          onClick={() => console.log('Ingresos clicked')}
          icon2={<CheckIcon size={16} />}
          showIcon2={true}
        />
      </div>
    </div>
  ),
};
