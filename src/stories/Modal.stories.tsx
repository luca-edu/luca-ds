import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from '../components/Modal';
import { CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons';

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
    buttons: {
      control: 'object',
      description: 'Buttons for the modal',
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
        buttons={[
          {
            text: 'CANCELAR',
            variant: 'secondary',
            rightIcon: <DeleteOutlined />,
            onClick: () => {
            console.log('Primary button clicked');
            setIsOpen(false);
          }},
          {
            text: 'Aceptar',
            variant: 'tertiary',
            leftIcon: <CloseCircleOutlined />,
            onClick: () => {
              console.log('Tertiary button clicked');
              setIsOpen(false);
            },
          },
        ]}
      />
    </>
  )
};

export const WithSubtitle: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    isOpen: false,
    onClose: () => {},
    title: 'Eliminar elemento',
    subtitle: 'Esta acción no se puede deshacer',
    description:
      'Al eliminar este elemento, se perderán todos los datos asociados. ¿Estás seguro de que deseas continuar?',
    buttons: [
      {
        text: 'CANCELAR',
        variant: 'secondary',
        leftIcon: <CloseCircleOutlined />,
      },
      {
        text: 'ELIMINAR',
        variant: 'primary',
        leftIcon: <DeleteOutlined />,
      },
    ],
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
};

export const LongContent: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    isOpen: false,
    onClose: () => {},
    title: 'Términos y condiciones',
    subtitle: 'Por favor, lee cuidadosamente',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    buttons: [
      {
        text: 'RECHAZAR',
        variant: 'secondary',
      },
      {
        text: 'ACEPTAR',
        variant: 'primary',
      },
    ],
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
};

export const NoOverlayClose: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    isOpen: false,
    onClose: () => {},
    title: 'Acción requerida',
    description:
      'Debes tomar una decisión para continuar. No puedes cerrar este modal haciendo clic fuera.',
    buttons: [
      {
        text: 'CANCELAR',
        variant: 'secondary',
      },
      {
        text: 'CONTINUAR',
        variant: 'primary',
      },
    ],
    closeOnOverlayClick: false,
    closeOnEscape: true,
  },
};

export const NoEscapeClose: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    isOpen: false,
    onClose: () => {},
    title: 'Confirmación crítica',
    description:
      'Esta es una acción crítica. No puedes cerrar este modal con la tecla Escape.',
    buttons: [
      {
        text: 'CANCELAR',
        variant: 'secondary',
      },
      {
        text: 'Aceptar',
        variant: 'tertiary',
      },
    ],
    closeOnOverlayClick: true,
    closeOnEscape: false,
  },
};

export const CustomButtons: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    isOpen: false,
    onClose: () => {},
    title: 'Guardar cambios',
    description: '¿Deseas guardar los cambios realizados?',
    buttons: [
      {
        text: 'NO GUARDAR',
        variant: 'secondary',
      },
      {
        text: 'GUARDAR',
        variant: 'primary',
      },
    ],
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
};

export const SimpleMessage: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    isOpen: false,
    onClose: () => {},
    title: 'Operación exitosa',
    description: 'Los cambios se han guardado correctamente.',
    buttons: [
      {
        text: 'CERRAR',
        variant: 'secondary',
      },
      {
        text: 'VER DETALLES',
        variant: 'primary',
      },
    ],
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
};

export const TitleOnly: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    isOpen: false,
    onClose: () => {},
    title: 'Notificación',
    buttons: [
      {
        text: 'ENTENDIDO',
        variant: 'primary',
      },
    ],
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
};

export const SingleButton: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    isOpen: false,
    onClose: () => {},
    title: 'Información',
    description: 'Este es un modal con un solo botón de confirmación.',
    buttons: [
      {
        text: 'ACEPTAR',
        variant: 'primary',
      },
    ],
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
};

export const ThreeButtons: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    isOpen: false,
    onClose: () => {},
    title: 'Selecciona una opción',
    description: 'Elige cómo deseas proceder con esta acción.',
    buttons: [
      {
        text: 'CANCELAR',
        variant: 'tertiary',
      },
      {
        text: 'GUARDAR BORRADOR',
        variant: 'secondary',
      },
      {
        text: 'PUBLICAR',
        variant: 'primary',
      },
    ],
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
};

export const TertiaryButtons: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    isOpen: false, 
    onClose: () => {},
    title: 'Opciones adicionales',
    description: 'Estos botones usan la variante terciaria.',
    buttons: [
      {
        text: 'OPCIÓN 1',
        variant: 'tertiary',
      },
      {
        text: 'OPCIÓN 2',
        variant: 'tertiary',
      },
    ],
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
};

export const CustomMaxWidth: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    isOpen: false,
    onClose: () => {},
    title: 'Modal con ancho personalizado',
    description: 'Este modal tiene un ancho máximo de 600px.',
    maxWidth: 600,
    buttons: [
      {
        text: 'CERRAR',
        variant: 'primary',
      },
    ],
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
};

export const WithCustomChildren: Story = {
  render: (args) => {
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
          buttons={[
            {
              text: 'CANCELAR',
              variant: 'secondary',
              onClick: () => setIsOpen(false),
            },
            {
              text: 'ENVIAR',
              variant: 'primary',
              onClick: () => {
                console.log('Form submitted');
                setIsOpen(false);
              },
            },
          ]}
        >
          <div className="luca-space-y-4 luca-mb-6">
            <div>
              <label className="luca-block luca-text-sm luca-font-medium luca-text-gray-700 luca-mb-2">
                Nombre
              </label>
              <input
                type="text"
                className="luca-w-full luca-px-3 luca-py-2 luca-border luca-border-gray-300 luca-rounded-lg focus:luca-outline-none focus:luca-ring-2 focus:luca-ring-primary-500"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label className="luca-block luca-text-sm luca-font-medium luca-text-gray-700 luca-mb-2">
                Email
              </label>
              <input
                type="email"
                className="luca-w-full luca-px-3 luca-py-2 luca-border luca-border-gray-300 luca-rounded-lg focus:luca-outline-none focus:luca-ring-2 focus:luca-ring-primary-500"
                placeholder="tu@email.com"
              />
            </div>
          </div>
        </Modal>
      </>
    );
  },
  args: {
    isOpen: false,
    onClose: () => {},
    title: 'Formulario de contacto',
    subtitle: 'Completa los campos',
    description: 'Por favor, proporciona tu información de contacto.',
  },
};

export const NoButtons: Story = {
  render: (args) => {
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
        >
          <div className="luca-mb-6">
            <p className="luca-text-gray-700">
              Este modal no tiene botones predefinidos. El contenido personalizado va aquí.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="luca-mt-4 luca-px-4 luca-py-2 luca-bg-primary-500 luca-text-white luca-rounded-lg hover:luca-bg-primary-600"
            >
              Cerrar desde contenido personalizado
            </button>
          </div>
        </Modal>
      </>
    );
  },
  args: {
    isOpen: false,
    onClose: () => {},
    title: 'Modal sin botones',
    description: 'Los botones pueden ser personalizados dentro del children.',
  },
};
