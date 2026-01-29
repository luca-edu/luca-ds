import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileUploadField } from '../components/FileUploadField';

const meta = {
  title: 'Components/FileUploadField',
  component: FileUploadField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Componente para subir archivos con soporte para vista previa de imágenes y videos.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Etiqueta del campo',
    },
    placeholder: {
      control: 'text',
      description: 'Texto del botón de selección',
      table: {
        defaultValue: { summary: 'Seleccionar archivo' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Marca el campo como requerido',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el campo',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    status: {
      control: 'select',
      options: ['default', 'danger'],
      description: 'Estado visual del campo',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    accept: {
      control: 'text',
      description: 'Tipos de archivo aceptados',
      table: {
        defaultValue: { summary: 'image/*' },
      },
    },
    maxSizeMB: {
      control: 'number',
      description: 'Tamaño máximo del archivo en MB',
      table: {
        defaultValue: { summary: '5' },
      },
    },
    showPreview: {
      control: 'boolean',
      description: 'Muestra vista previa del archivo',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    tooltip: {
      control: 'text',
      description: 'Contenido del tooltip de ayuda',
    },
    helpText: {
      control: 'text',
      description: 'Texto de ayuda debajo del label',
    },
    message: {
      control: 'text',
      description: 'Mensaje de error o información',
    },
  },
  args: {
    label: 'Subir archivo',
    placeholder: 'Seleccionar archivo',
    accept: 'image/*',
    maxSizeMB: 5,
    showPreview: true,
  },
} satisfies Meta<typeof FileUploadField>;

export default meta;

type Story = StoryObj<typeof meta>;

// Story básico
export const Default: Story = {
  args: {
    label: 'Subir imagen',
    placeholder: 'Seleccionar imagen',
  },
  render: (args) => {
    const [file, setFile] = React.useState<File | null>(null);
    return (
      <div className="luca-w-[400px]">
        <FileUploadField {...args} value={file} onChange={setFile} />
      </div>
    );
  },
};

// Story con campo requerido
export const Required: Story = {
  args: {
    label: 'Imagen de perfil',
    required: true,
    placeholder: 'Seleccionar imagen',
  },
  render: (args) => {
    const [file, setFile] = React.useState<File | null>(null);
    return (
      <div className="luca-w-[400px]">
        <FileUploadField {...args} value={file} onChange={setFile} />
      </div>
    );
  },
};

// Story con tooltip y texto de ayuda
export const WithTooltipAndHelp: Story = {
  args: {
    label: 'Documento',
    tooltip: 'Sube un documento válido para verificar tu identidad',
    helpText: 'Formatos aceptados: JPG, PNG. Tamaño máximo: 5MB',
    required: true,
  },
  render: (args) => {
    const [file, setFile] = React.useState<File | null>(null);
    return (
      <div className="luca-w-[400px]">
        <FileUploadField {...args} value={file} onChange={setFile} />
      </div>
    );
  },
};

// Story con error
export const WithError: Story = {
  args: {
    label: 'Subir archivo',
    status: 'danger',
    message: 'El archivo seleccionado no es válido',
  },
  render: (args) => {
    const [file, setFile] = React.useState<File | null>(null);
    return (
      <div className="luca-w-[400px]">
        <FileUploadField {...args} value={file} onChange={setFile} />
      </div>
    );
  },
};

// Story deshabilitado
export const Disabled: Story = {
  args: {
    label: 'Subir archivo',
    disabled: true,
    placeholder: 'No disponible',
  },
  render: (args) => {
    const [file, setFile] = React.useState<File | null>(null);
    return (
      <div className="luca-w-[400px]">
        <FileUploadField {...args} value={file} onChange={setFile} />
      </div>
    );
  },
};

// Story aceptando videos
export const AcceptVideo: Story = {
  args: {
    label: 'Subir video',
    accept: 'video/*',
    maxSizeMB: 50,
    placeholder: 'Seleccionar video',
    helpText: 'Formatos aceptados: MP4, WebM. Tamaño máximo: 50MB',
  },
  render: (args) => {
    const [file, setFile] = React.useState<File | null>(null);
    return (
      <div className="luca-w-[400px]">
        <FileUploadField {...args} value={file} onChange={setFile} />
      </div>
    );
  },
};

// Story aceptando múltiples tipos
export const AcceptMultipleTypes: Story = {
  args: {
    label: 'Subir documento',
    accept: '.pdf,.doc,.docx,image/*',
    maxSizeMB: 10,
    placeholder: 'Seleccionar documento',
    helpText: 'Formatos aceptados: PDF, DOC, DOCX, imágenes',
  },
  render: (args) => {
    const [file, setFile] = React.useState<File | null>(null);
    return (
      <div className="luca-w-[400px]">
        <FileUploadField {...args} value={file} onChange={setFile} />
      </div>
    );
  },
};

// Story sin vista previa
export const NoPreview: Story = {
  args: {
    label: 'Subir archivo',
    showPreview: false,
    placeholder: 'Seleccionar archivo',
  },
  render: (args) => {
    const [file, setFile] = React.useState<File | null>(null);
    return (
      <div className="luca-w-[400px]">
        <FileUploadField {...args} value={file} onChange={setFile} />
      </div>
    );
  },
};

// Story con tamaño máximo pequeño
export const SmallMaxSize: Story = {
  args: {
    label: 'Subir imagen pequeña',
    maxSizeMB: 1,
    helpText: 'Tamaño máximo: 1MB',
  },
  render: (args) => {
    const [file, setFile] = React.useState<File | null>(null);
    return (
      <div className="luca-w-[400px]">
        <FileUploadField {...args} value={file} onChange={setFile} />
      </div>
    );
  },
};
