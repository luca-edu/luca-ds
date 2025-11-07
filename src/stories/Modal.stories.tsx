import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../components/Modal';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the modal is open',
    },
    title: {
      control: 'text',
      description: 'Modal title',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle',
    },
    description: {
      control: 'text',
      description: 'Modal description text',
    },
    cancelButtonText: {
      control: 'text',
      description: 'Text for cancel button',
    },
    submitButtonText: {
      control: 'text',
      description: 'Text for submit button',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Whether clicking the overlay closes the modal',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Whether pressing Escape closes the modal',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to handle state
const ModalWrapper = (args: React.ComponentProps<typeof Modal>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="luca-px-4 luca-py-2 luca-bg-[#ffba31] luca-text-gray-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
      >
        Abrir Modal
      </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={() => {
          console.log('Submit clicked');
          setIsOpen(false);
        }}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Confirmar acción',
    description: '¿Estás seguro de que deseas continuar con esta acción?',
    cancelButtonText: 'CANCELAR',
    submitButtonText: 'CONFIRMAR',
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
};

export const WithSubtitle: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Eliminar elemento',
    subtitle: 'Esta acción no se puede deshacer',
    description:
      'Al eliminar este elemento, se perderán todos los datos asociados. ¿Estás seguro de que deseas continuar?',
    cancelButtonText: 'CANCELAR',
    submitButtonText: 'ELIMINAR',
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
};

export const LongContent: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Términos y condiciones',
    subtitle: 'Por favor, lee cuidadosamente',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    cancelButtonText: 'RECHAZAR',
    submitButtonText: 'ACEPTAR',
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
};

export const NoOverlayClose: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Acción requerida',
    description:
      'Debes tomar una decisión para continuar. No puedes cerrar este modal haciendo clic fuera.',
    cancelButtonText: 'CANCELAR',
    submitButtonText: 'CONTINUAR',
    closeOnOverlayClick: false,
    closeOnEscape: true,
  },
};

export const NoEscapeClose: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Confirmación crítica',
    description:
      'Esta es una acción crítica. No puedes cerrar este modal con la tecla Escape.',
    cancelButtonText: 'CANCELAR',
    submitButtonText: 'CONFIRMAR',
    closeOnOverlayClick: true,
    closeOnEscape: false,
  },
};

export const CustomButtons: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Guardar cambios',
    description: '¿Deseas guardar los cambios realizados?',
    cancelButtonText: 'NO GUARDAR',
    submitButtonText: 'GUARDAR',
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
};

export const SimpleMessage: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: 'Operación exitosa',
    description: 'Los cambios se han guardado correctamente.',
    cancelButtonText: 'CERRAR',
    submitButtonText: 'VER DETALLES',
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
};
