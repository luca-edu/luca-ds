import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CardClass } from '../components/CardClass';
import { CalculatorIcon } from '../shared/icons';

const meta = {
  title: 'Components/CardClass',
  component: CardClass,
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
      options: ['default', 'hover', 'disabled', 'empty'],
      description: 'State of the card',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is clickable',
    },
    showAlternateBadge: {
      control: 'boolean',
      description: 'Show alternate class badge',
    },
  },
} satisfies Meta<typeof CardClass>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultSubjectIcon = (
  <div className="luca-w-full luca-h-full luca-bg-accent-50 luca-rounded-full luca-flex luca-items-center luca-justify-center">
    <span className="luca-text-2xl">📚</span>
  </div>
);

export const Default: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classId: '1° A Español',
    studentsCount: 10,
    kpis: [
      { label: 'Avance entrega', value: '5%' },
      { label: 'Calificación promedio', value: '7.5' },
    ],
    statuses: [
      { type: 'completed', count: 10, label: 'Finalizadas' },
      { type: 'in-progress', count: 2, label: 'En curso' },
      { type: 'scheduled', count: 0, label: 'Programadas' },
    ],
  },
};

export const WithAlternateBadge: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classId: '1° A Sociales',
    studentsCount: 10,
    showAlternateBadge: true,
    alternateBadgeText: 'Clase alterna',
    kpis: [
      { label: 'Avance entrega', value: '5%' },
      { label: 'Calificación promedio', value: '7.5' },
    ],
    statuses: [
      { type: 'completed', count: 10, label: 'Finalizadas' },
      { type: 'in-progress', count: 2, label: 'En curso' },
      { type: 'scheduled', count: 0, label: 'Programadas' },
    ],
  },
};

export const Hover: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classId: '1° A Español',
    studentsCount: 10,
    state: 'hover',
    kpis: [
      { label: 'Avance entrega', value: '5%' },
      { label: 'Calificación promedio', value: '7.5' },
    ],
    statuses: [
      { type: 'completed', count: 2, label: 'Finalizadas' },
      { type: 'in-progress', count: 10, label: 'En curso' },
      { type: 'scheduled', count: 0, label: 'Programadas' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classId: '1° A Español',
    studentsCount: 10,
    state: 'disabled',
    kpis: [
      { label: 'Avance entrega', value: '5%' },
      { label: 'Calificación promedio', value: '7.5' },
    ],
    statuses: [
      { type: 'completed', count: 10, label: 'Finalizadas' },
      { type: 'in-progress', count: 2, label: 'En curso' },
      { type: 'scheduled', count: 0, label: 'Programadas' },
    ],
  },
};

export const Empty: Story = {
  args: {
    classId: '1° A Español',
    state: 'empty',
    buttonText: 'Asignar tarea',
  },
};

export const AllVariants: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classId: '1° A Español',
    studentsCount: 10,
    kpis: [
      { label: 'Avance entrega', value: '5%' },
      { label: 'Calificación promedio', value: '7.5' },
    ],
    statuses: [
      { type: 'completed', count: 10, label: 'Finalizadas' },
      { type: 'in-progress', count: 2, label: 'En curso' },
      { type: 'scheduled', count: 0, label: 'Programadas' },
    ],
  },
  render: (args) => (
    <div className="luca-flex luca-flex-wrap luca-gap-4 luca-p-8 luca-w-full luca-max-w-6xl">
      {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
        (variant) => (
          <div key={variant} className="luca-flex luca-flex-col luca-gap-2">
            <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </h3>
            <CardClass {...args} variant={variant} />
          </div>
        )
      )}
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classId: '1° A Español',
    studentsCount: 10,
    kpis: [
      { label: 'Avance entrega', value: '5%' },
      { label: 'Calificación promedio', value: '7.5' },
    ],
    statuses: [
      { type: 'completed', count: 10, label: 'Finalizadas' },
      { type: 'in-progress', count: 2, label: 'En curso' },
      { type: 'scheduled', count: 0, label: 'Programadas' },
    ],
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="luca-flex luca-flex-col luca-gap-2">
          <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
            {size.toUpperCase()}
          </h3>
          <CardClass {...args} size={size} />
        </div>
      ))}
    </div>
  ),
};

export const WithCustomIcon: Story = {
  args: {
    subjectIcon: (
      <div className="luca-w-full luca-h-full luca-bg-primary-50 luca-rounded-full luca-flex luca-items-center luca-justify-center">
        <CalculatorIcon size={24} className="luca-text-primary-600" />
      </div>
    ),
    classId: '1° A Matemáticas',
    studentsCount: 25,
    kpis: [
      { label: 'Avance entrega', value: '85%' },
      { label: 'Calificación promedio', value: '8.9' },
    ],
    statuses: [
      { type: 'completed', count: 20, label: 'Finalizadas' },
      { type: 'in-progress', count: 5, label: 'En curso' },
      { type: 'scheduled', count: 3, label: 'Programadas' },
    ],
  },
};

export const WithCustomContent: Story = {
  args: {
    classId: '2° B Ciencias',
    studentsCount: 15,
    showAlternateBadge: true,
    alternateBadgeText: 'Clase premium',
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-4xl">
      <CardClass
        subjectIcon={
          <div className="luca-w-full luca-h-full luca-bg-success-50 luca-rounded-full luca-flex luca-items-center luca-justify-center">
            <span className="luca-text-2xl">✅</span>
          </div>
        }
        classId="2° B Ciencias"
        studentsText="15 Estudiantes activos"
        showAlternateBadge={true}
        alternateBadgeText="Clase premium"
        kpis={[
          { label: 'Avance entrega', value: <span className="luca-text-success-600">92%</span> },
          {
            label: 'Calificación promedio',
            value: (
              <div className="luca-bg-success-50 luca-text-success-600 luca-px-1 luca-py-0.5 luca-rounded">
                9.2
              </div>
            ),
          },
        ]}
        statuses={[
          { type: 'completed', count: 12, label: 'Finalizadas' },
          { type: 'in-progress', count: 3, label: 'En curso' },
          { type: 'scheduled', count: 2, label: 'Programadas' },
        ]}
        buttonText="Ver detalles"
        onButtonClick={() => console.log('Button clicked')}
        variant="success"
      />
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classId: '1° A Español',
    studentsCount: 10,
    clickable: true,
    onClick: () => {
      console.log('Card clicked!');
    },
    kpis: [
      { label: 'Avance entrega', value: '5%' },
      { label: 'Calificación promedio', value: '7.5' },
    ],
    statuses: [
      { type: 'completed', count: 10, label: 'Finalizadas' },
      { type: 'in-progress', count: 2, label: 'En curso' },
      { type: 'scheduled', count: 0, label: 'Programadas' },
    ],
  },
};

export const MinimalContent: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classId: '3° C Historia',
    studentsCount: 8,
  },
};

export const WithSingleKPI: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classId: '1° A Español',
    studentsCount: 10,
    kpis: [{ label: 'Avance entrega', value: '5%' }],
  },
};

export const WithSingleStatus: Story = {
  args: {
    subjectIcon: defaultSubjectIcon,
    classId: '1° A Español',
    studentsCount: 10,
    statuses: [{ type: 'completed', count: 10, label: 'Finalizadas' }],
  },
};

export const ResponsiveExample: Story = {
  args: {
    classId: '1° A Español',
    studentsCount: 10,
    size: 'lg',
    variant: 'success',
    kpis: [
      { label: 'Avance entrega', value: '5%' },
      { label: 'Calificación promedio', value: '7.5' },
    ],
    statuses: [
      { type: 'completed', count: 10, label: 'Finalizadas' },
      { type: 'in-progress', count: 2, label: 'En curso' },
      { type: 'scheduled', count: 0, label: 'Programadas' },
    ],
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-w-full">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Desktop</h3>
        <div className="luca-w-full luca-max-w-6xl">
          <div className="luca-grid luca-grid-cols-3 luca-gap-4">
            <CardClass
              subjectIcon={defaultSubjectIcon}
              classId="1° A Español"
              studentsCount={10}
              size="lg"
              kpis={[
                { label: 'Avance entrega', value: '5%' },
                { label: 'Calificación promedio', value: '7.5' },
              ]}
              statuses={[
                { type: 'completed', count: 10, label: 'Finalizadas' },
                { type: 'in-progress', count: 2, label: 'En curso' },
                { type: 'scheduled', count: 0, label: 'Programadas' },
              ]}
            />
            <CardClass
              subjectIcon={defaultSubjectIcon}
              classId="2° B Matemáticas"
              studentsCount={15}
              size="lg"
              variant="success"
              kpis={[
                { label: 'Avance entrega', value: '85%' },
                { label: 'Calificación promedio', value: '8.9' },
              ]}
              statuses={[
                { type: 'completed', count: 20, label: 'Finalizadas' },
                { type: 'in-progress', count: 5, label: 'En curso' },
                { type: 'scheduled', count: 3, label: 'Programadas' },
              ]}
            />
            <CardClass
              subjectIcon={defaultSubjectIcon}
              classId="3° C Ciencias"
              studentsCount={12}
              size="lg"
              variant="info"
              showAlternateBadge={true}
              kpis={[
                { label: 'Avance entrega', value: '60%' },
                { label: 'Calificación promedio', value: '7.8' },
              ]}
              statuses={[
                { type: 'completed', count: 8, label: 'Finalizadas' },
                { type: 'in-progress', count: 4, label: 'En curso' },
                { type: 'scheduled', count: 2, label: 'Programadas' },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Tablet</h3>
        <div className="luca-w-full luca-max-w-2xl">
          <div className="luca-grid luca-grid-cols-2 luca-gap-4">
            <CardClass
              subjectIcon={defaultSubjectIcon}
              classId="1° A Español"
              studentsCount={10}
              size="md"
              kpis={[
                { label: 'Avance entrega', value: '5%' },
                { label: 'Calificación promedio', value: '7.5' },
              ]}
              statuses={[
                { type: 'completed', count: 10, label: 'Finalizadas' },
                { type: 'in-progress', count: 2, label: 'En curso' },
                { type: 'scheduled', count: 0, label: 'Programadas' },
              ]}
            />
            <CardClass
              subjectIcon={defaultSubjectIcon}
              classId="2° B Matemáticas"
              studentsCount={15}
              size="md"
              variant="success"
              kpis={[
                { label: 'Avance entrega', value: '85%' },
                { label: 'Calificación promedio', value: '8.9' },
              ]}
              statuses={[
                { type: 'completed', count: 20, label: 'Finalizadas' },
                { type: 'in-progress', count: 5, label: 'En curso' },
                { type: 'scheduled', count: 3, label: 'Programadas' },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Mobile</h3>
        <div className="luca-w-full luca-max-w-sm">
          <div className="luca-flex luca-flex-col luca-gap-4">
            <CardClass
              subjectIcon={defaultSubjectIcon}
              classId="1° A Español"
              studentsCount={10}
              size="sm"
              kpis={[
                { label: 'Avance entrega', value: '5%' },
                { label: 'Calificación promedio', value: '7.5' },
              ]}
              statuses={[
                { type: 'completed', count: 10, label: 'Finalizadas' },
                { type: 'in-progress', count: 2, label: 'En curso' },
                { type: 'scheduled', count: 0, label: 'Programadas' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
