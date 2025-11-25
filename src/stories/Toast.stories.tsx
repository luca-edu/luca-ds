import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast, toast, type ToastPosition } from '../components/Toast';
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

// ==================== API Hook Stories ====================

// Story usando el hook useToast - Básico
export const WithUseToastHook: Story = {
  args: {
    variant: 'success',
    message: 'Toast con método useToast() - Success',
    position: 'top-right',
    dismissible: true,
  },
  render: () => {
    const [toastApi, toastContextHolder] = toast.useToast();

    return (
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        {toastContextHolder}
        <div className="luca-flex luca-flex-col luca-gap-4">
          <h3 className="luca-text-lg luca-font-semibold">Toast API - Hook useToast</h3>
          <div className="luca-flex luca-flex-wrap luca-gap-4">
            <Button
              onClick={() =>
                toastApi.success({
                  message: 'Operación exitosa usando la API',
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Success Toast
            </Button>
            <Button
              onClick={() =>
                toastApi.error({
                  message: 'Error al procesar la solicitud',
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Error Toast
            </Button>
            <Button
              onClick={() =>
                toastApi.warning({
                  message: 'Advertencia: revisa los datos',
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Warning Toast
            </Button>
            <Button
              onClick={() =>
                toastApi.info({
                  message: 'Información importante',
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Info Toast
            </Button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de uso del hook useToast() para mostrar toasts programáticamente. El contextHolder debe renderizarse una vez en la aplicación.',
      },
    },
  },
};

// Story usando el hook useToast - Con auto-close
export const WithUseToastHookAutoClose: Story = {
  args: {
    variant: 'success',
    message: 'Toast con método autoClose() - Success',
    position: 'top-right',
    dismissible: true,
  },
  render: () => {
    const [toastApi, toastContextHolder] = toast.useToast();

    return (
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        {toastContextHolder}
        <div className="luca-flex luca-flex-col luca-gap-4">
          <h3 className="luca-text-lg luca-font-semibold">Toast API - Con Auto-Close</h3>
          <div className="luca-flex luca-flex-wrap luca-gap-4">
            <Button
              onClick={() =>
                toastApi.success({
                  message: 'Este toast se cerrará en 3 segundos',
                  position: 'top-right',
                  autoClose: 3000,
                  dismissible: true,
                })
              }
            >
              Toast 3 segundos
            </Button>
            <Button
              onClick={() =>
                toastApi.info({
                  message: 'Este toast se cerrará en 5 segundos',
                  position: 'top-center',
                  autoClose: 5000,
                  dismissible: true,
                })
              }
            >
              Toast 5 segundos
            </Button>
            <Button
              onClick={() =>
                toastApi.warning({
                  message: 'Este toast no se cierra automáticamente',
                  position: 'bottom-right',
                  autoClose: false,
                  dismissible: true,
                })
              }
            >
              Toast sin auto-close
            </Button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de toasts con diferentes tiempos de auto-close usando la API.',
      },
    },
  },
};

// Story usando el hook useToast - Múltiples posiciones
export const WithUseToastHookPositions: Story = {
  args: {
    variant: 'success',
    message: 'Toast con método positions() - Success',
    position: 'top-right',
    dismissible: true,
  },
  render: () => {
    const [toastApi, toastContextHolder] = toast.useToast();

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
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        {toastContextHolder}
        <div className="luca-flex luca-flex-col luca-gap-4">
          <h3 className="luca-text-lg luca-font-semibold">Toast API - Todas las Posiciones</h3>
          <div className="luca-grid luca-grid-cols-4 luca-gap-4">
            {positions.map((position) => (
              <Button
                key={position}
                onClick={() =>
                  toastApi.success({
                    message: `Toast en ${position}`,
                    position,
                    dismissible: true,
                  })
                }
              >
                {position}
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demostración de todas las posiciones disponibles usando la API.',
      },
    },
  },
};

// Story usando el hook useToast - Apilado de múltiples toasts
export const WithUseToastHookStacking: Story = {
  args: {
    variant: 'success',
    message: 'Toast con método stacking() - Success',
    position: 'top-right',
    dismissible: true,
  },
  render: () => {
    const [toastApi, toastContextHolder] = toast.useToast();

    return (
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        {toastContextHolder}
        <div className="luca-flex luca-flex-col luca-gap-4">
          <h3 className="luca-text-lg luca-font-semibold">Toast API - Apilado Múltiple</h3>
          <p className="luca-text-sm luca-text-neutral-600">
            Haz clic varias veces para apilar múltiples toasts en la misma posición.
          </p>
          <div className="luca-flex luca-flex-wrap luca-gap-4">
            <Button
              onClick={() =>
                toastApi.success({
                  message: `Toast Success #${Date.now()}`,
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Agregar Success Toast
            </Button>
            <Button
              onClick={() =>
                toastApi.error({
                  message: `Toast Error #${Date.now()}`,
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Agregar Error Toast
            </Button>
            <Button
              onClick={() =>
                toastApi.warning({
                  message: `Toast Warning #${Date.now()}`,
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Agregar Warning Toast
            </Button>
            <Button
              onClick={() =>
                toastApi.info({
                  message: `Toast Info #${Date.now()}`,
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Agregar Info Toast
            </Button>
            <Button
              variant="secondary"
              onClick={() => toastApi.destroy()}
            >
              Limpiar Todos
            </Button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demostración del apilado de múltiples toasts en la misma posición. Usa destroy() para limpiar todos los toasts.',
      },
    },
  },
};

// Story usando el hook useToast - Método open
export const WithUseToastHookOpen: Story = {
  args: {
    variant: 'success',
    message: 'Toast con método open() - Success',
    position: 'top-right',
    dismissible: true,
  },
  render: () => {
    const [toastApi, toastContextHolder] = toast.useToast();

    return (
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        {toastContextHolder}
        <div className="luca-flex luca-flex-col luca-gap-4">
          <h3 className="luca-text-lg luca-font-semibold">Toast API - Método open()</h3>
          <p className="luca-text-sm luca-text-neutral-600">
            El método open() permite especificar cualquier variante manualmente.
          </p>
          <div className="luca-flex luca-flex-wrap luca-gap-4">
            <Button
              onClick={() =>
                toastApi.open({
                  variant: 'success',
                  message: 'Toast con método open() - Success',
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Open Success
            </Button>
            <Button
              onClick={() =>
                toastApi.open({
                  variant: 'danger',
                  message: 'Toast con método open() - Danger',
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Open Danger
            </Button>
            <Button
              onClick={() =>
                toastApi.open({
                  variant: 'warning',
                  message: 'Toast con método open() - Warning',
                  position: 'top-right',
                  autoClose: 4000,
                  dismissible: true,
                })
              }
            >
              Open Warning (Auto-close)
            </Button>
            <Button
              onClick={() =>
                toastApi.open({
                  variant: 'info',
                  message: 'Toast con método open() - Info',
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Open Info
            </Button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Uso del método open() para crear toasts con cualquier variante especificada manualmente.',
      },
    },
  },
};

