import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../components/Accordion';
import { CalculatorIcon, CheckIcon } from '../shared/icons';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'],
      description: 'Color variant of the accordion',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the accordion',
    },
    accordion: {
      control: 'boolean',
      description: 'Only allow one panel open at a time',
    },
    bordered: {
      control: 'boolean',
      description: 'Show border around items',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable all items',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems = [
  {
    key: '1',
    header: 'Información General',
    content:
      'Este es el contenido del primer panel del accordion. Aquí puedes colocar cualquier información relevante.',
  },
  {
    key: '2',
    header: 'Detalles Adicionales',
    content:
      'Contenido del segundo panel con información adicional que el usuario puede ver al expandir.',
  },
  {
    key: '3',
    header: 'Configuración Avanzada',
    content: 'Panel con configuraciones avanzadas y opciones para usuarios expertos.',
  },
];

export const Default: Story = {
  args: {
    items: basicItems,
    defaultActiveKey: ['1'],
  },
};

export const WithDescriptions: Story = {
  args: {
    items: [
      {
        key: '1',
        header: 'Información General',
        headerDescription: 'Datos básicos y esenciales del sistema',
        content: 'Este es el contenido del primer panel del accordion.',
      },
      {
        key: '2',
        header: 'Detalles Adicionales',
        headerDescription: 'Información complementaria y específica',
        content: 'Contenido del segundo panel con información adicional.',
      },
      {
        key: '3',
        header: 'Configuración Avanzada',
        headerDescription: 'Opciones para usuarios expertos',
        content: 'Panel con configuraciones avanzadas.',
      },
    ],
    defaultActiveKey: ['1'],
  },
};

export const AccordionMode: Story = {
  args: {
    items: basicItems,
    accordion: true,
    defaultActiveKey: '1',
  },
};

export const AllVariants: Story = {
  args: {
    items: basicItems,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-3xl">
      {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
        (variant) => (
          <div key={variant} className="luca-flex luca-flex-col luca-gap-2">
            <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </h3>
            <Accordion variant={variant} items={basicItems} defaultActiveKey={['1']} />
          </div>
        )
      )}
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    items: basicItems,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-3xl">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="luca-flex luca-flex-col luca-gap-2">
          <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
            {size.toUpperCase()}
          </h3>
          <Accordion size={size} items={basicItems} defaultActiveKey={['1']} />
        </div>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    items: basicItems,
    disabled: true,
    defaultActiveKey: ['1'],
  },
};

export const DisabledItem: Story = {
  args: {
    items: [
      {
        key: '1',
        header: 'Panel Activo',
        content: 'Este panel está habilitado.',
      },
      {
        key: '2',
        header: 'Panel Deshabilitado',
        content: 'Este panel está deshabilitado.',
        disabled: true,
      },
      {
        key: '3',
        header: 'Otro Panel Activo',
        content: 'Este panel también está habilitado.',
      },
    ],
    defaultActiveKey: ['1'],
  },
};

export const WithoutBorder: Story = {
  args: {
    items: basicItems,
    bordered: false,
    defaultActiveKey: ['1'],
  },
};

export const WithCustomHTML: Story = {
  args: {
    items: [
      {
        key: '1',
        header: 'Matemáticas',
        content: 'Contenido de matemáticas para el curso',
      },
    ],
  },
  render: () => (
    <Accordion
      items={[
        {
          key: '1',
          header: (
            <div className="luca-flex luca-items-center luca-gap-3">
              <CalculatorIcon size={24} className="luca-text-primary-600" />
              <span>Matemáticas</span>
              <span className="luca-ml-auto luca-bg-primary-50 luca-text-primary-700 luca-px-2 luca-py-0.5 luca-rounded luca-text-xs luca-font-medium">
                12 lecciones
              </span>
            </div>
          ),
          headerDescription: 'Contenido de matemáticas para el curso',
          content: (
            <div className="luca-flex luca-flex-col luca-gap-4">
              <p>Este módulo contiene contenido de matemáticas avanzadas.</p>
              <div className="luca-flex luca-gap-2">
                <button className="luca-px-4 luca-py-2 luca-bg-primary-600 luca-text-white luca-rounded-lg luca-text-sm">
                  Ver Lecciones
                </button>
                <button className="luca-px-4 luca-py-2 luca-border luca-border-neutral-200 luca-text-neutral-700 luca-rounded-lg luca-text-sm">
                  Descargar
                </button>
              </div>
            </div>
          ),
        },
        {
          key: '2',
          header: (
            <div className="luca-flex luca-items-center luca-gap-3">
              <span className="luca-text-2xl">🎨</span>
              <span>Arte y Cultura</span>
              <span className="luca-ml-auto luca-bg-success-50 luca-text-success-700 luca-px-2 luca-py-0.5 luca-rounded luca-text-xs luca-font-medium">
                8 lecciones
              </span>
            </div>
          ),
          headerDescription: 'Explora el mundo del arte',
          content: (
            <div className="luca-flex luca-flex-col luca-gap-3">
              <p>Módulo de arte y expresión cultural.</p>
              <ul className="luca-list-disc luca-list-inside luca-space-y-1">
                <li>Historia del arte</li>
                <li>Técnicas de pintura</li>
                <li>Arte contemporáneo</li>
              </ul>
            </div>
          ),
        },
        {
          key: '3',
          header: (
            <div className="luca-flex luca-items-center luca-gap-3">
              <span className="luca-text-2xl">🎵</span>
              <span>Música</span>
              <CheckIcon size={16} className="luca-ml-auto luca-text-success-600" />
            </div>
          ),
          content: 'Contenido sobre teoría musical y práctica instrumental.',
        },
      ]}
      defaultActiveKey={['1']}
    />
  ),
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        key: '1',
        header: 'Biblioteca',
        content: 'Accede a todos los recursos de la biblioteca digital.',
      },
    ],
  },
  render: () => (
    <Accordion
      items={[
        {
          key: '1',
          header: (
            <div className="luca-flex luca-items-center luca-gap-2">
              <span className="luca-text-2xl">📚</span>
              <span>Biblioteca</span>
            </div>
          ),
          content: 'Accede a todos los recursos de la biblioteca digital.',
        },
        {
          key: '2',
          header: (
            <div className="luca-flex luca-items-center luca-gap-2">
              <span className="luca-text-2xl">🎯</span>
              <span>Objetivos</span>
            </div>
          ),
          content: 'Define y rastrea tus objetivos de aprendizaje.',
        },
        {
          key: '3',
          header: (
            <div className="luca-flex luca-items-center luca-gap-2">
              <span className="luca-text-2xl">📊</span>
              <span>Estadísticas</span>
            </div>
          ),
          content: 'Visualiza tu progreso y estadísticas detalladas.',
        },
      ]}
      defaultActiveKey={['1']}
    />
  ),
};

export const WithBadges: Story = {
  args: {
    items: [
      {
        key: '1',
        header: 'Módulo Premium',
        content: 'Contenido exclusivo para usuarios premium',
      },
    ],
  },
  render: () => (
    <Accordion
      variant="primary"
      items={[
        {
          key: '1',
          header: (
            <div className="luca-flex luca-items-center luca-gap-2">
              <span>Módulo Premium</span>
              <span className="luca-bg-accent-100 luca-text-accent-700 luca-px-2 luca-py-0.5 luca-rounded luca-text-xs luca-font-medium">
                NUEVO
              </span>
            </div>
          ),
          headerDescription: 'Contenido exclusivo para usuarios premium',
          content:
            'Aquí encontrarás contenido exclusivo disponible solo para suscriptores premium.',
        },
        {
          key: '2',
          header: (
            <div className="luca-flex luca-items-center luca-gap-2">
              <span>Curso Completado</span>
              <CheckIcon size={16} className="luca-text-success-600" />
            </div>
          ),
          content: 'Has completado este curso exitosamente.',
        },
        {
          key: '3',
          header: (
            <div className="luca-flex luca-items-center luca-gap-2">
              <span>En Progreso</span>
              <span className="luca-bg-warning-50 luca-text-warning-700 luca-px-2 luca-py-0.5 luca-rounded luca-text-xs luca-font-medium">
                50%
              </span>
            </div>
          ),
          content: 'Estás a mitad de camino en este módulo.',
        },
      ]}
      defaultActiveKey={['1']}
    />
  ),
};

export const Controlled: Story = {
  args: {
    items: basicItems,
  },
  render: (args) => {
    const [activeKey, setActiveKey] = React.useState<string | string[]>(['1']);

    return (
      <div className="luca-flex luca-flex-col luca-gap-4">
        <div className="luca-text-sm luca-text-neutral-600">
          Paneles activos: {Array.isArray(activeKey) ? activeKey.join(', ') : activeKey}
        </div>
        <Accordion
          {...args}
          activeKey={activeKey}
          onChange={(key) => {
            setActiveKey(key);
            console.log('Active panels:', key);
          }}
        />
      </div>
    );
  },
};

export const NestedContent: Story = {
  args: {
    items: [
      {
        key: '1',
        header: 'Módulo 1: Introducción',
        content: 'Contenido de matemáticas para el curso',
      },
    ],
  },
  render: () => (
    <Accordion
      items={[
        {
          key: '1',
          header: 'Módulo 1: Introducción',
          headerDescription: 'Conceptos básicos y fundamentales',
          content: (
            <div className="luca-flex luca-flex-col luca-gap-3">
              <h4 className="luca-font-semibold luca-text-neutral-900">Lecciones</h4>
              <ul className="luca-list-none luca-space-y-2">
                <li className="luca-flex luca-items-center luca-gap-2">
                  <CheckIcon size={16} className="luca-text-success-600" />
                  <span>Lección 1: Conceptos básicos</span>
                </li>
                <li className="luca-flex luca-items-center luca-gap-2">
                  <CheckIcon size={16} className="luca-text-success-600" />
                  <span>Lección 2: Primeros pasos</span>
                </li>
                <li className="luca-flex luca-items-center luca-gap-2">
                  <span className="luca-w-4" />
                  <span className="luca-text-neutral-500">Lección 3: Práctica</span>
                </li>
              </ul>
            </div>
          ),
        },
        {
          key: '2',
          header: 'Módulo 2: Intermedio',
          headerDescription: 'Avanza en tu aprendizaje',
          content: (
            <div className="luca-grid luca-grid-cols-2 luca-gap-4">
              <div className="luca-p-3 luca-border luca-border-neutral-200 luca-rounded-lg">
                <h5 className="luca-font-semibold luca-mb-2">Teoría</h5>
                <p className="luca-text-sm luca-text-neutral-600">4 lecciones disponibles</p>
              </div>
              <div className="luca-p-3 luca-border luca-border-neutral-200 luca-rounded-lg">
                <h5 className="luca-font-semibold luca-mb-2">Práctica</h5>
                <p className="luca-text-sm luca-text-neutral-600">6 ejercicios</p>
              </div>
            </div>
          ),
        },
      ]}
      defaultActiveKey={['1']}
    />
  ),
};

export const ResponsiveExample: Story = {
  args: {
    items: basicItems,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-w-full">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Desktop</h3>
        <div className="luca-w-full luca-max-w-4xl">
          <Accordion size="lg" items={basicItems} defaultActiveKey={['1']} />
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Tablet</h3>
        <div className="luca-w-full luca-max-w-2xl">
          <Accordion size="md" items={basicItems} defaultActiveKey={['1']} />
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Mobile</h3>
        <div className="luca-w-full luca-max-w-sm">
          <Accordion size="sm" items={basicItems} defaultActiveKey={['1']} />
        </div>
      </div>
    </div>
  ),
};
