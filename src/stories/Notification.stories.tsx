import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Notification,
  NotificationAction,
  NotificationActions,
  notification,
  type NotificationPosition,
} from '../components/Notification';
import type { NotificationVariant } from '../types/variants';
import { Button } from '../components/Button';

const meta = {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente de notificación flexible que soporta múltiples variantes, posicionamiento flotante, cierre automático y acciones personalizadas.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'info', 'warning', 'danger'],
      description: 'Define el tono visual de la notificación',
      table: {
        defaultValue: { summary: 'success' },
      },
    },
    title: {
      control: 'text',
      description: 'Título principal de la notificación',
    },
    description: {
      control: 'text',
      description: 'Contenido descriptivo de la notificación',
    },
    dismissible: {
      control: 'boolean',
      description: 'Permite cerrar la notificación manualmente',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    hideIcon: {
      control: 'boolean',
      description: 'Oculta el icono de la notificación',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    floating: {
      control: 'boolean',
      description: 'Convierte la notificación en flotante con posición fija',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
      description: 'Posición de la notificación cuando está en modo flotante',
      table: {
        defaultValue: { summary: 'top-right' },
      },
    },
    autoClose: {
      control: 'number',
      description: 'Tiempo en milisegundos para cerrar automáticamente la notificación',
    },
    maxWidth: {
      control: 'text',
      description: 'Ancho máximo de la notificación (ej: "400px", "50%", "20rem")',
    },
    closeButtonAriaLabel: {
      control: 'text',
      description: 'Etiqueta ARIA para el botón de cerrar',
      table: {
        defaultValue: { summary: 'Cerrar notificación' },
      },
    },
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story básica con controles interactivos
export const Default: Story = {
  args: {
    variant: 'success',
    title: 'Operación exitosa',
    description: 'Tu cambio se ha guardado correctamente.',
    dismissible: true,
  },
};

// Todas las variantes
export const AllVariants: Story = {
  render: () => (
    <div className="luca-flex luca-max-w-[600px] luca-flex-col luca-gap-4 luca-p-6">
      <Notification
        variant="success"
        title="Operación exitosa"
        description="Los cambios se han guardado correctamente en el sistema."
        dismissible
        onDismiss={() => console.log('Success dismissed')}
      />

      <Notification
        variant="info"
        title="Nueva información disponible"
        description="Hay una actualización disponible para tu aplicación."
        dismissible
        onDismiss={() => console.log('Info dismissed')}
      />

      <Notification
        variant="warning"
        title="Advertencia importante"
        description="Tu sesión expirará en 5 minutos. Guarda tu trabajo."
        dismissible
        onDismiss={() => console.log('Warning dismissed')}
      />

      <Notification
        variant="danger"
        title="Error crítico"
        description="No se pudo completar la operación. Por favor, intenta nuevamente."
        dismissible
        onDismiss={() => console.log('Danger dismissed')}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Muestra todas las variantes visuales disponibles: success, info, warning y danger.',
      },
    },
  },
};

// Con acciones
export const WithActions: Story = {
  render: () => (
    <div className="luca-flex luca-max-w-[600px] luca-flex-col luca-gap-4 luca-p-6">
      <Notification
        variant="success"
        title="Cambios guardados"
        description="Tu documento ha sido guardado exitosamente."
        dismissible
        onDismiss={() => console.log('Dismissed')}
        actions={
          <NotificationActions>
            <NotificationAction onClick={() => console.log('Ver cambios')}>
              Ver cambios
            </NotificationAction>
            <NotificationAction actionVariant="secondary" onClick={() => console.log('Deshacer')}>
              Deshacer
            </NotificationAction>
          </NotificationActions>
        }
      />

      <Notification
        variant="info"
        title="Nueva actualización"
        description="Versión 2.0 disponible con nuevas características."
        dismissible
        actions={
          <NotificationActions>
            <NotificationAction onClick={() => console.log('Actualizar ahora')}>
              Actualizar ahora
            </NotificationAction>
            <NotificationAction actionVariant="secondary" onClick={() => console.log('Recordar después')}>
              Recordar después
            </NotificationAction>
          </NotificationActions>
        }
      />

      <Notification
        variant="warning"
        title="Confirmación requerida"
        description="Esta acción no se puede deshacer. ¿Deseas continuar?"
        dismissible
        actions={
          <NotificationActions>
            <NotificationAction onClick={() => console.log('Confirmar')}>
              Confirmar
            </NotificationAction>
            <NotificationAction actionVariant="secondary" onClick={() => console.log('Cancelar')}>
              Cancelar
            </NotificationAction>
          </NotificationActions>
        }
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Notificaciones con botones de acción primarios y secundarios.',
      },
    },
  },
};

// Sin icono
export const WithoutIcon: Story = {
  render: () => (
    <div className="luca-flex luca-max-w-[600px] luca-flex-col luca-gap-4 luca-p-6">
      <Notification
        variant="success"
        title="Notificación sin icono"
        description="Esta notificación no muestra el icono lateral."
        hideIcon
        dismissible
      />

      <Notification
        variant="info"
        title="Mensaje simple"
        description="Ideal para notificaciones minimalistas."
        hideIcon
        dismissible
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Notificaciones sin icono usando la propiedad hideIcon.',
      },
    },
  },
};

// Solo título o solo descripción
export const TitleAndDescriptionCombinations: Story = {
  render: () => (
    <div className="luca-flex luca-max-w-[600px] luca-flex-col luca-gap-4 luca-p-6">
      <Notification
        variant="success"
        title="Solo título"
        dismissible
      />

      <Notification
        variant="info"
        description="Solo descripción, sin título definido."
        dismissible
      />

      <Notification
        variant="warning"
        title="Título y descripción"
        description="Ambos elementos presentes para máxima claridad."
        dismissible
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Diferentes combinaciones de título y descripción.',
      },
    },
  },
};

// Notificaciones flotantes - Posiciones
export const FloatingPositions: Story = {
  render: () => {
    const [activePosition, setActivePosition] = React.useState<NotificationPosition | null>(null);

    const positions: Array<{ value: NotificationPosition; label: string }> = [
      { value: 'top-left', label: 'Top Left' },
      { value: 'top-center', label: 'Top Center' },
      { value: 'top-right', label: 'Top Right' },
      { value: 'bottom-left', label: 'Bottom Left' },
      { value: 'bottom-center', label: 'Bottom Center' },
      { value: 'bottom-right', label: 'Bottom Right' },
    ];

    return (
      <div className="luca-flex luca-min-h-[500px] luca-w-[800px] luca-flex-col luca-gap-6 luca-p-6">
        <div>
          <h3 className="luca-mb-2 luca-text-lg luca-font-semibold luca-text-neutral-900">
            Notificaciones Flotantes - Posiciones
          </h3>
          <p className="luca-mb-4 luca-text-sm luca-text-neutral-600">
            Haz clic en un botón para mostrar una notificación flotante en esa posición.
          </p>
        </div>

        <div className="luca-grid luca-grid-cols-3 luca-gap-3">
          {positions.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className="luca-rounded-lg luca-border luca-border-primary-200 luca-bg-white luca-px-4 luca-py-3 luca-text-sm luca-font-medium luca-text-primary-600 luca-transition-colors hover:luca-bg-primary-50 active:luca-bg-primary-100"
              onClick={() => setActivePosition(value)}
            >
              {label}
            </button>
          ))}
        </div>

        {activePosition && (
          <Notification
            floating
            position={activePosition}
            maxWidth="400px"
            variant="info"
            title="Notificación flotante"
            description={`Posicionada en: ${activePosition}`}
            dismissible
            onDismiss={() => setActivePosition(null)}
            actions={
              <NotificationActions>
                <NotificationAction onClick={() => console.log('Acción ejecutada')}>
                  Acción
                </NotificationAction>
                <NotificationAction actionVariant="secondary" onClick={() => setActivePosition(null)}>
                  Cerrar
                </NotificationAction>
              </NotificationActions>
            }
          />
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demuestra las 6 posiciones disponibles para notificaciones flotantes: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right.',
      },
    },
  },
};

// Cierre automático
export const AutoClose: Story = {
  render: () => {
    const [visible, setVisible] = React.useState(false);
    const [countdown, setCountdown] = React.useState(5);

    React.useEffect(() => {
      if (visible && countdown > 0) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
      }
    }, [visible, countdown]);

    const handleShow = () => {
      setVisible(true);
      setCountdown(5);
    };

    return (
      <div className="luca-flex luca-min-h-[400px] luca-w-[700px] luca-flex-col luca-items-center luca-justify-center luca-gap-6 luca-p-6">
        <div className="luca-text-center">
          <h3 className="luca-mb-2 luca-text-lg luca-font-semibold luca-text-neutral-900">
            Cierre Automático
          </h3>
          <p className="luca-text-sm luca-text-neutral-600">
            La notificación se cerrará automáticamente después de 5 segundos.
          </p>
        </div>

        <button
          type="button"
          className="luca-rounded-lg luca-bg-primary-600 luca-px-6 luca-py-3 luca-text-sm luca-font-medium luca-text-white luca-transition-colors hover:luca-bg-primary-700 disabled:luca-cursor-not-allowed disabled:luca-opacity-50"
          onClick={handleShow}
          disabled={visible}
        >
          Mostrar notificación con auto-cierre
        </button>

        {visible && (
          <Notification
            floating
            position="top-center"
            maxWidth="500px"
            variant="warning"
            title="Cierre automático activado"
            description={`Esta notificación se cerrará automáticamente en ${countdown} segundos.`}
            autoClose={5000}
            dismissible
            onDismiss={() => setVisible(false)}
          />
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Notificación que se cierra automáticamente después de un tiempo especificado usando la propiedad autoClose (en milisegundos).',
      },
    },
  },
};

// Diferentes anchos máximos
export const WithMaxWidth: Story = {
  render: () => (
    <div className="luca-flex luca-w-full luca-max-w-[1000px] luca-flex-col luca-gap-6 luca-p-6">
      <div>
        <h3 className="luca-mb-2 luca-text-lg luca-font-semibold luca-text-neutral-900">
          Control de Ancho Máximo
        </h3>
        <p className="luca-mb-4 luca-text-sm luca-text-neutral-600">
          Usa la propiedad maxWidth para controlar el ancho de las notificaciones.
        </p>
      </div>

      <div className="luca-flex luca-flex-col luca-gap-6">
        <div>
          <p className="luca-mb-2 luca-text-xs luca-font-medium luca-uppercase luca-tracking-wide luca-text-neutral-500">
            maxWidth: 300px
          </p>
          <Notification
            variant="success"
            title="Notificación compacta"
            description="Ancho limitado ideal para notificaciones breves."
            maxWidth="300px"
            dismissible
          />
        </div>

        <div>
          <p className="luca-mb-2 luca-text-xs luca-font-medium luca-uppercase luca-tracking-wide luca-text-neutral-500">
            maxWidth: 500px
          </p>
          <Notification
            variant="info"
            title="Notificación mediana"
            description="Ancho medio que balancea espacio y legibilidad para mensajes de longitud moderada."
            maxWidth="500px"
            dismissible
            actions={
              <NotificationActions>
                <NotificationAction>Ver detalles</NotificationAction>
                <NotificationAction actionVariant="secondary">
                  Omitir
                </NotificationAction>
              </NotificationActions>
            }
          />
        </div>

        <div>
          <p className="luca-mb-2 luca-text-xs luca-font-medium luca-uppercase luca-tracking-wide luca-text-neutral-500">
            maxWidth: 800px
          </p>
          <Notification
            variant="danger"
            title="Notificación amplia"
            description="Ancho extendido perfecto para mensajes detallados que requieren más espacio para mostrar información completa, explicaciones extensas o múltiples acciones."
            maxWidth="800px"
            dismissible
            actions={
              <NotificationActions>
                <NotificationAction>Acción principal</NotificationAction>
                <NotificationAction actionVariant="secondary">
                  Acción secundaria
                </NotificationAction>
              </NotificationActions>
            }
          />
        </div>

        <div>
          <p className="luca-mb-2 luca-text-xs luca-font-medium luca-uppercase luca-tracking-wide luca-text-neutral-500">
            Sin maxWidth (ancho completo)
          </p>
          <Notification
            variant="info"
            title="Notificación de ancho completo"
            description="Sin restricción de ancho, se adapta al contenedor padre."
            dismissible
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de notificaciones con diferentes anchos máximos configurados.',
      },
    },
  },
};

// Demo interactivo - Notificaciones flotantes múltiples
export const FloatingWithAutoClose: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState<
      Array<{ id: number; variant: NotificationVariant; position: NotificationPosition }>
    >([]);
    const [nextId, setNextId] = React.useState(0);

    const addNotification = (variant: NotificationVariant, position: NotificationPosition) => {
      const id = nextId;
      setNotifications((prev) => [...prev, { id, variant, position }]);
      setNextId((prev) => prev + 1);
    };

    const removeNotification = (id: number) => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    };

    const notificationConfig: Record<NotificationVariant, { title: string; description: string }> = {
      success: {
        title: 'Operación exitosa',
        description: 'Los cambios se guardaron correctamente.',
      },
      info: {
        title: 'Nueva información',
        description: 'Hay actualizaciones disponibles.',
      },
      warning: {
        title: 'Advertencia',
        description: 'Por favor revisa esta acción.',
      },
      danger: {
        title: 'Error',
        description: 'Ocurrió un problema.',
      },
    };

    return (
      <div className="luca-flex luca-min-h-[600px] luca-w-[900px] luca-flex-col luca-gap-6 luca-p-6">
        <div>
          <h3 className="luca-mb-2 luca-text-lg luca-font-semibold luca-text-neutral-900">
            Múltiples Notificaciones Flotantes
          </h3>
          <p className="luca-mb-4 luca-text-sm luca-text-neutral-600">
            Haz clic en los botones para crear notificaciones flotantes que se cierran automáticamente en 3 segundos.
          </p>
        </div>

        <div className="luca-grid luca-grid-cols-2 luca-gap-3">
          <button
            type="button"
            className="luca-rounded-lg luca-border luca-border-success-300 luca-bg-success-50 luca-px-4 luca-py-3 luca-text-sm luca-font-medium luca-text-success-700 luca-transition-colors hover:luca-bg-success-100"
            onClick={() => addNotification('success', 'top-right')}
          >
            Success (Top Right)
          </button>

          <button
            type="button"
            className="luca-rounded-lg luca-border luca-border-info-300 luca-bg-info-50 luca-px-4 luca-py-3 luca-text-sm luca-font-medium luca-text-info-700 luca-transition-colors hover:luca-bg-info-100"
            onClick={() => addNotification('info', 'top-left')}
          >
            Info (Top Left)
          </button>

          <button
            type="button"
            className="luca-rounded-lg luca-border luca-border-warning-300 luca-bg-warning-50 luca-px-4 luca-py-3 luca-text-sm luca-font-medium luca-text-warning-700 luca-transition-colors hover:luca-bg-warning-100"
            onClick={() => addNotification('warning', 'bottom-right')}
          >
            Warning (Bottom Right)
          </button>

          <button
            type="button"
            className="luca-rounded-lg luca-border luca-border-danger-300 luca-bg-danger-50 luca-px-4 luca-py-3 luca-text-sm luca-font-medium luca-text-danger-700 luca-transition-colors hover:luca-bg-danger-100"
            onClick={() => addNotification('danger', 'bottom-left')}
          >
            Danger (Bottom Left)
          </button>

          <button
            type="button"
            className="luca-rounded-lg luca-border luca-border-success-300 luca-bg-success-50 luca-px-4 luca-py-3 luca-text-sm luca-font-medium luca-text-success-700 luca-transition-colors hover:luca-bg-success-100"
            onClick={() => addNotification('success', 'top-center')}
          >
            Success (Top Center)
          </button>

          <button
            type="button"
            className="luca-rounded-lg luca-border luca-border-primary-300 luca-bg-primary-50 luca-px-4 luca-py-3 luca-text-sm luca-font-medium luca-text-primary-700 luca-transition-colors hover:luca-bg-primary-100"
            onClick={() => addNotification('info', 'bottom-center')}
          >
            Info (Bottom Center)
          </button>
        </div>

        {notifications.length > 0 && (
          <div className="luca-rounded-lg luca-border luca-border-neutral-200 luca-bg-neutral-50 luca-p-3">
            <p className="luca-text-xs luca-text-neutral-600">
              Notificaciones activas: {notifications.length}
            </p>
          </div>
        )}

        {notifications.map(({ id, variant, position }) => (
          <Notification
            key={id}
            floating
            position={position}
            maxWidth="400px"
            variant={variant}
            title={notificationConfig[variant].title}
            description={notificationConfig[variant].description}
            autoClose={3000}
            dismissible
            onDismiss={() => removeNotification(id)}
          />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demo interactiva que combina notificaciones flotantes en diferentes posiciones con cierre automático. Ideal para sistemas de notificaciones en tiempo real.',
      },
    },
  },
};

// Notificación controlada (con estado)
export const Controlled: Story = {
  render: () => {
    const [visible, setVisible] = React.useState(true);

    return (
      <div className="luca-flex luca-min-h-[300px] luca-w-[600px] luca-flex-col luca-items-center luca-justify-center luca-gap-4 luca-p-6">
        {visible ? (
          <Notification
            variant="success"
            title="Notificación controlada"
            description="Esta notificación está controlada por estado de React. Haz clic en cerrar para ocultarla."
            dismissible
            onDismiss={() => setVisible(false)}
            actions={
              <NotificationActions>
                <NotificationAction onClick={() => console.log('Acción ejecutada')}>
                  Ejecutar acción
                </NotificationAction>
                <NotificationAction actionVariant="secondary" onClick={() => setVisible(false)}>
                  Cerrar
                </NotificationAction>
              </NotificationActions>
            }
          />
        ) : (
          <div className="luca-text-center">
            <p className="luca-mb-4 luca-text-sm luca-text-neutral-600">
              La notificación está oculta
            </p>
            <button
              type="button"
              className="luca-rounded-lg luca-bg-primary-600 luca-px-6 luca-py-2 luca-text-sm luca-font-medium luca-text-white luca-transition-colors hover:luca-bg-primary-700"
              onClick={() => setVisible(true)}
            >
              Mostrar notificación
            </button>
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de notificación controlada mediante estado de React. Útil para manejar la visibilidad programáticamente.',
      },
    },
  },
};

// Icono personalizado
export const CustomIcon: Story = {
  render: () => (
    <div className="luca-flex luca-max-w-[600px] luca-flex-col luca-gap-4 luca-p-6">
      <Notification
        variant="success"
        title="Icono personalizado"
        description="Esta notificación usa un icono SVG personalizado."
        dismissible
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM13.7071 8.70711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L12.2929 7.29289C12.6834 6.90237 13.3166 6.90237 13.7071 7.29289C14.0976 7.68342 14.0976 8.31658 13.7071 8.70711Z" />
          </svg>
        }
      />

      <Notification
        variant="info"
        title="Emoji como icono"
        description="También puedes usar emojis o cualquier contenido React."
        dismissible
        icon={<span style={{ fontSize: '20px' }}>🚀</span>}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Puedes personalizar el icono pasando cualquier elemento React a la propiedad icon.',
      },
    },
  },
};

// ==================== API Hook Stories ====================

// Story usando el hook useNotification - Básico
export const WithUseNotificationHook: Story = {
  render: () => {
    const [notificationApi, notificationContextHolder] = notification.useNotification();

    return (
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        {notificationContextHolder}
        <div className="luca-flex luca-flex-col luca-gap-4">
          <h3 className="luca-text-lg luca-font-semibold">Notification API - Hook useNotification</h3>
          <div className="luca-flex luca-flex-wrap luca-gap-4">
            <Button
              onClick={() =>
                notificationApi.success({
                  title: 'Operación exitosa',
                  description: 'Los cambios se guardaron correctamente usando la API',
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Success Notification
            </Button>
            <Button
              onClick={() =>
                notificationApi.error({
                  title: 'Error',
                  description: 'No se pudo completar la operación',
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Error Notification
            </Button>
            <Button
              onClick={() =>
                notificationApi.warning({
                  title: 'Advertencia',
                  description: 'Por favor revisa esta acción',
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Warning Notification
            </Button>
            <Button
              onClick={() =>
                notificationApi.info({
                  title: 'Información',
                  description: 'Hay nueva información disponible',
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Info Notification
            </Button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de uso del hook useNotification() para mostrar notificaciones programáticamente. El contextHolder debe renderizarse una vez en la aplicación.',
      },
    },
  },
};

// Story usando el hook useNotification - Con auto-close
export const WithUseNotificationHookAutoClose: Story = {
  render: () => {
    const [notificationApi, notificationContextHolder] = notification.useNotification();

    return (
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        {notificationContextHolder}
        <div className="luca-flex luca-flex-col luca-gap-4">
          <h3 className="luca-text-lg luca-font-semibold">Notification API - Con Auto-Close</h3>
          <div className="luca-flex luca-flex-wrap luca-gap-4">
            <Button
              onClick={() =>
                notificationApi.success({
                  title: 'Éxito',
                  description: 'Esta notificación se cerrará en 3 segundos',
                  position: 'top-right',
                  autoClose: 3000,
                  dismissible: true,
                })
              }
            >
              Notification 3 segundos
            </Button>
            <Button
              onClick={() =>
                notificationApi.info({
                  title: 'Información',
                  description: 'Esta notificación se cerrará en 5 segundos',
                  position: 'top-center',
                  autoClose: 5000,
                  dismissible: true,
                })
              }
            >
              Notification 5 segundos
            </Button>
            <Button
              onClick={() =>
                notificationApi.warning({
                  title: 'Advertencia',
                  description: 'Esta notificación no se cierra automáticamente',
                  position: 'bottom-right',
                  dismissible: true,
                })
              }
            >
              Notification sin auto-close
            </Button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de notificaciones con diferentes tiempos de auto-close usando la API.',
      },
    },
  },
};

// Story usando el hook useNotification - Todas las posiciones
export const WithUseNotificationHookPositions: Story = {
  render: () => {
    const [notificationApi, notificationContextHolder] = notification.useNotification();

    const positions: NotificationPosition[] = [
      'top-left',
      'top-center',
      'top-right',
      'bottom-left',
      'bottom-center',
      'bottom-right',
    ];

    return (
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        {notificationContextHolder}
        <div className="luca-flex luca-flex-col luca-gap-4">
          <h3 className="luca-text-lg luca-font-semibold">Notification API - Todas las Posiciones</h3>
          <div className="luca-grid luca-grid-cols-3 luca-gap-4">
            {positions.map((position) => (
              <Button
                key={position}
                onClick={() =>
                  notificationApi.success({
                    title: 'Notificación',
                    description: `Posición: ${position}`,
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

// Story usando el hook useNotification - Apilado de múltiples notificaciones
export const WithUseNotificationHookStacking: Story = {
  render: () => {
    const [notificationApi, notificationContextHolder] = notification.useNotification();

    return (
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        {notificationContextHolder}
        <div className="luca-flex luca-flex-col luca-gap-4">
          <h3 className="luca-text-lg luca-font-semibold">Notification API - Apilado Múltiple</h3>
          <p className="luca-text-sm luca-text-neutral-600">
            Haz clic varias veces para apilar múltiples notificaciones en la misma posición.
          </p>
          <div className="luca-flex luca-flex-wrap luca-gap-4">
            <Button
              onClick={() =>
                notificationApi.success({
                  title: 'Éxito',
                  description: `Notificación Success #${Date.now()}`,
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Agregar Success
            </Button>
            <Button
              onClick={() =>
                notificationApi.error({
                  title: 'Error',
                  description: `Notificación Error #${Date.now()}`,
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Agregar Error
            </Button>
            <Button
              onClick={() =>
                notificationApi.warning({
                  title: 'Advertencia',
                  description: `Notificación Warning #${Date.now()}`,
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Agregar Warning
            </Button>
            <Button
              onClick={() =>
                notificationApi.info({
                  title: 'Información',
                  description: `Notificación Info #${Date.now()}`,
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Agregar Info
            </Button>
            <Button
              variant="secondary"
              onClick={() => notificationApi.destroy()}
            >
              Limpiar Todas
            </Button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Demostración del apilado de múltiples notificaciones en la misma posición. Usa destroy() para limpiar todas las notificaciones.',
      },
    },
  },
};

// Story usando el hook useNotification - Con acciones
export const WithUseNotificationHookActions: Story = {
  render: () => {
    const [notificationApi, notificationContextHolder] = notification.useNotification();

    return (
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        {notificationContextHolder}
        <div className="luca-flex luca-flex-col luca-gap-4">
          <h3 className="luca-text-lg luca-font-semibold">Notification API - Con Acciones</h3>
          <div className="luca-flex luca-flex-wrap luca-gap-4">
            <Button
              onClick={() =>
                notificationApi.success({
                  title: 'Cambios guardados',
                  description: 'Tu documento ha sido guardado exitosamente.',
                  position: 'top-right',
                  dismissible: true,
                  actions: (
                    <NotificationActions>
                      <NotificationAction onClick={() => console.log('Ver cambios')}>
                        Ver cambios
                      </NotificationAction>
                      <NotificationAction actionVariant="secondary" onClick={() => console.log('Deshacer')}>
                        Deshacer
                      </NotificationAction>
                    </NotificationActions>
                  ),
                })
              }
            >
              Notification con Acciones
            </Button>
            <Button
              onClick={() =>
                notificationApi.info({
                  title: 'Nueva actualización',
                  description: 'Versión 2.0 disponible con nuevas características.',
                  position: 'top-right',
                  dismissible: true,
                  actions: (
                    <NotificationActions>
                      <NotificationAction onClick={() => console.log('Actualizar ahora')}>
                        Actualizar ahora
                      </NotificationAction>
                      <NotificationAction actionVariant="secondary" onClick={() => console.log('Recordar después')}>
                        Recordar después
                      </NotificationAction>
                    </NotificationActions>
                  ),
                })
              }
            >
              Notification con Acciones (Info)
            </Button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Notificaciones con acciones usando la API. Puedes incluir NotificationActions y NotificationAction en la propiedad actions.',
      },
    },
  },
};

// Story usando el hook useNotification - Método open
export const WithUseNotificationHookOpen: Story = {
  render: () => {
    const [notificationApi, notificationContextHolder] = notification.useNotification();

    return (
      <div className="luca-p-20 luca-flex luca-flex-col luca-gap-4">
        {notificationContextHolder}
        <div className="luca-flex luca-flex-col luca-gap-4">
          <h3 className="luca-text-lg luca-font-semibold">Notification API - Método open()</h3>
          <p className="luca-text-sm luca-text-neutral-600">
            El método open() permite especificar cualquier variante manualmente.
          </p>
          <div className="luca-flex luca-flex-wrap luca-gap-4">
            <Button
              onClick={() =>
                notificationApi.open({
                  variant: 'success',
                  title: 'Éxito',
                  description: 'Notificación con método open() - Success',
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Open Success
            </Button>
            <Button
              onClick={() =>
                notificationApi.open({
                  variant: 'danger',
                  title: 'Error',
                  description: 'Notificación con método open() - Danger',
                  position: 'top-right',
                  dismissible: true,
                })
              }
            >
              Open Danger
            </Button>
            <Button
              onClick={() =>
                notificationApi.open({
                  variant: 'warning',
                  title: 'Advertencia',
                  description: 'Notificación con método open() - Warning (Auto-close)',
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
                notificationApi.open({
                  variant: 'info',
                  title: 'Información',
                  description: 'Notificación con método open() - Info',
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
        story: 'Uso del método open() para crear notificaciones con cualquier variante especificada manualmente.',
      },
    },
  },
};
