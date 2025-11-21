import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast, type ToastPosition } from '../components/Toast';
import { Button } from '../components/Button';
import { variantOptions } from './shared/notificationShared';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Componente Toast con animaciones, posicionamiento y temporizador automático.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: variantOptions,
      description: 'Define el tono visual del toast',
      table: {
        defaultValue: { summary: 'success' },
      },
    },
    dismissible: {
      control: 'boolean',
      description: 'Permite cerrar el toast manualmente',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    message: {
      control: 'text',
      description: 'Contenido principal del toast',
    },
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'left-center',
        'right-center',
      ],
      description: 'Posición del toast en la pantalla',
      table: {
        defaultValue: { summary: 'top-right' },
      },
    },
    autoClose: {
      control: 'number',
      description: 'Tiempo en milisegundos para cerrar automáticamente. Usa false para deshabilitar.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    visible: {
      control: 'boolean',
      description: 'Controla la visibilidad del toast (modo controlado)',
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story básico
export const Base: Story = {
  args: {
    variant: 'success',
    message: 'El elemento se agregó correctamente.',
    position: 'top-right',
  },
};

// Story con todas las posiciones
export const AllPositions: Story = {
  args: {
    variant: 'success',
    message: 'El elemento se agregó correctamente.',
    position: 'top-right',
  },
  render: () => {
    const positions: ToastPosition[] = [
      'top-left',
      'top-center',
      'top-right',
      'bottom-left',
      'bottom-center',
      'bottom-right',
      'left-center',
      'right-center',
    ];
    
    return (
      <div className="luca-relative luca-w-full luca-h-screen luca-bg-neutral-50">
        {positions.map((position) => (
          <Toast
            key={position}
            variant="success"
            message={`Toast en ${position}`}
            position={position}
            dismissible
          />
        ))}
      </div>
    );
  },
};

// Story con temporizador automático
export const WithAutoClose: Story = {
  args: {
    variant: 'success',
    message: 'Este toast se cerrará automáticamente en 3 segundos',
    position: 'top-right',
    autoClose: 3000,
  },
  render: () => {
    const [visible, setVisible] = useState(false);
    
    return (
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        <Button onClick={() => setVisible(true)}>
          Mostrar Toast (se cierra en 3 segundos)
        </Button>
        {visible && (
          <Toast
            variant="success"
            message="Este toast se cerrará automáticamente en 3 segundos"
            position="top-right"
            autoClose={3000}
            visible={visible}
            onVisibleChange={setVisible}
            dismissible
          />
        )}
      </div>
    );
  },
};

// Story con diferentes variantes
export const AllVariants: Story = {
  args: {
    variant: 'success',
    message: 'El elemento se agregó correctamente.',
    position: 'top-right',
  },
  render: () => {
    const variants: Array<'success' | 'danger' | 'warning' | 'info'> = [
      'success',
      'danger',
      'warning',
      'info',
    ];
    
    return (
      <div className="luca-relative luca-w-full luca-h-screen luca-bg-neutral-50">
        {variants.map((variant, index) => (
          <Toast
            key={variant}
            variant={variant}
            message={`Toast de tipo ${variant}`}
            position={
              index === 0
                ? 'top-left'
                : index === 1
                ? 'top-right'
                : index === 2
                ? 'bottom-left'
                : 'bottom-right'
            }
            dismissible
          />
        ))}
      </div>
    );
  },
};

// Story controlado con botón
export const Controlled: Story = {
  args: {
    variant: 'success',
    message: 'El elemento se agregó correctamente.',
    position: 'top-right',
  },
  render: () => {
    const [visible, setVisible] = useState(false);

    return (
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        <div className="luca-flex luca-gap-4">
          <Button onClick={() => setVisible(true)}>
            Mostrar Toast
          </Button>
          <Button variant="secondary" onClick={() => setVisible(false)}>
            Ocultar Toast
          </Button>
        </div>
        {visible && (
          <Toast
            variant="success"
            message="El elemento se agregó correctamente."
            position="top-right"
            dismissible
            visible={visible}
            onVisibleChange={setVisible}
            onDismiss={() => setVisible(false)}
          />
        )}
      </div>
    );
  },
};

// Story con temporizador y cierre manual
export const AutoCloseWithManualDismiss: Story = {
  args: {
    variant: 'info',
    message: 'Este toast se cerrará en 5 segundos, pero puedes cerrarlo manualmente',
    position: 'top-center',
    autoClose: 5000,
  },
  render: () => {
    const [visible, setVisible] = useState(false);
    
    return (
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        <Button onClick={() => setVisible(true)}>
          Mostrar Toast (5 segundos o click para cerrar)
        </Button>
        {visible && (
          <Toast
            variant="info"
            message="Este toast se cerrará en 5 segundos, pero puedes cerrarlo manualmente"
            position="top-center"
            autoClose={5000}
            visible={visible}
            onVisibleChange={setVisible}
            dismissible
            onDismiss={() => setVisible(false)}
          />
        )}
      </div>
    );
  },
};

// Story con animaciones (mostrar múltiples toasts)
export const MultipleToasts: Story = {
  args: {
    variant: 'success',
    message: 'Este toast se cerrará automáticamente en 4 segundos',
    position: 'top-right',
    autoClose: 4000,
  },
  render: () => {
    const [toasts, setToasts] = useState<Array<{ id: number; variant: 'success' | 'danger' | 'warning' | 'info' }>>([]);
    const [idCounter, setIdCounter] = useState(0);
    
    const addToast = (variant: 'success' | 'danger' | 'warning' | 'info') => {
      const newId = idCounter + 1;
      setIdCounter(newId);
      setToasts([...toasts, { id: newId, variant }]);
    };
    
    const removeToast = (id: number) => {
      setToasts(toasts.filter((t) => t.id !== id));
    };
    
    return (
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        <div className="luca-flex luca-gap-4">
          <Button onClick={() => addToast('success')}>Success Toast</Button>
          <Button onClick={() => addToast('danger')}>Danger Toast</Button>
          <Button onClick={() => addToast('warning')}>Warning Toast</Button>
          <Button onClick={() => addToast('info')}>Info Toast</Button>
        </div>
        <div className="luca-relative luca-w-full luca-h-screen">
          {toasts.map((toast, index) => (
            <Toast
              key={toast.id}
              variant={toast.variant}
              message={`Toast ${toast.id} - ${toast.variant}`}
              position="top-right"
              autoClose={4000}
              dismissible
              onDismiss={() => removeToast(toast.id)}
            />
          ))}
        </div>
      </div>
    );
  },
};

