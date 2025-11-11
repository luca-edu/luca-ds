import type { NotificationVariant } from '../../types/variants';

export const notificationCopy: Record<
  NotificationVariant,
  { title: string; description: string }
> = {
  success: {
    title: 'Operación completada',
    description:
      'La solicitud se ha procesado exitosamente. Puedes continuar con el siguiente paso cuando prefieras.',
  },
  danger: {
    title: 'Se detectó un error',
    description:
      'No pudimos completar la acción solicitada. Intenta nuevamente o ponte en contacto con soporte.',
  },
  warning: {
    title: 'Revisa la información',
    description:
      'Algunos campos requieren tu atención. Valida los datos antes de continuar.',
  },
  info: {
    title: 'Actualización disponible',
    description:
      'Hay nuevas funcionalidades listas para ser exploradas. Revisa los detalles en la sección de novedades.',
  },
};

export const variantOptions: NotificationVariant[] = [
  'success',
  'danger',
  'warning',
  'info',
];

