import type { Meta, StoryObj } from '@storybook/react';
import { ButtonIcon } from '../components/ButtonIcon';

// Importamos el SVG de la flecha como componente React
const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7 7.33333H2V8.66667H10.7L6.7 12.6667L7.63333 13.6L13.2333 8L7.63333 2.4L6.7 3.33333L10.7 7.33333Z"
      fill="currentColor"
    />
  </svg>
);

const meta = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'selected', 'disabled'],
      description: 'Estado visual del botón',
    },
    outline: {
      control: 'select',
      options: ['default', 'rounded'],
      description: 'Estilo del borde del botón',
    },
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Historia por defecto
export const Default: Story = {
  args: {
    state: 'default',
    outline: 'default',
    icon: <ArrowIcon />,
  },
};

// Estado hover
export const Hover: Story = {
  args: {
    state: 'hover',
    outline: 'default',
    icon: <ArrowIcon />,
  },
};

// Estado seleccionado
export const Selected: Story = {
  args: {
    state: 'selected',
    outline: 'default',
    icon: <ArrowIcon />,
  },
};

// Estado deshabilitado
export const Disabled: Story = {
  args: {
    state: 'disabled',
    outline: 'default',
    icon: <ArrowIcon />,
  },
};

// Borde redondeado
export const Rounded: Story = {
  args: {
    state: 'default',
    outline: 'rounded',
    icon: <ArrowIcon />,
  },
};

// Todos los estados
export const AllStates: Story = {
  render: () => (
    <div className="flex gap-4">
      <ButtonIcon state="default" icon={<ArrowIcon />} />
      <ButtonIcon state="hover" icon={<ArrowIcon />} />
      <ButtonIcon state="selected" icon={<ArrowIcon />} />
      <ButtonIcon state="disabled" icon={<ArrowIcon />} />
    </div>
  ),
};