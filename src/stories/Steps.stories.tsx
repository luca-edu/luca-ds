import type { Meta, StoryObj } from '@storybook/react';
import { Steps } from '../components/Steps';
import React, { useState } from 'react';
import { Button } from '../components/Button';

const meta = {
  title: 'Components/Steps',
  component: Steps,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    currentStep: {
      control: { type: 'number', min: 0, max: 2 },
      description: 'Current active step index (0-based)',
    },
    steps: {
      control: 'object',
      description: 'Array of step objects with title and subtitle',
    },
  },
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultSteps = [
  {
    title: 'Contexto',
    subtitle: 'Define tu proyecto',
  },
  {
    title: 'Contenidos',
    subtitle: 'Selecciona temas',
  },
  {
    title: 'Vista previa',
    subtitle: 'Revisa y guarda',
  },
];

// Story interactivo con controles
export const Default: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 0,
  },
  render: (args) => {
    const [currentStep, setCurrentStep] = useState(args.currentStep || 0);

    return (
      <div className="luca-w-full luca-max-w-4xl">
        <Steps {...args} currentStep={currentStep} />
        <div className="luca-mt-8 luca-flex luca-gap-4 luca-justify-center">
          <Button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            Anterior
          </Button>
          <Button
            onClick={() =>
              setCurrentStep(
                Math.min((args.steps?.length || 3) - 1, currentStep + 1)
              )
            }
            disabled={currentStep === (args.steps?.length || 3) - 1}
          >
            Siguiente
          </Button>
        </div>
      </div>
    );
  },
};

// Story con todos los pasos completados
export const AllStepsCompleted: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 2,
  },
};

// Story con paso intermedio
export const MiddleStep: Story = {
  args: {
    steps: defaultSteps,
    currentStep: 1,
  },
};

// Story con más pasos
export const MoreSteps: Story = {
  args: {
    steps: [
      {
        title: 'Paso 1',
        subtitle: 'Configuración inicial',
      },
      {
        title: 'Paso 2',
        subtitle: 'Selección de opciones',
      },
      {
        title: 'Paso 3',
        subtitle: 'Configuración avanzada',
      },
      {
        title: 'Paso 4',
        subtitle: 'Revisión final',
      },
      {
        title: 'Paso 5',
        subtitle: 'Confirmación',
      },
    ],
    currentStep: 2,
  },
};

