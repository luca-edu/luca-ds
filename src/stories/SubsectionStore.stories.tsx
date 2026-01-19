import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SubsectionStore } from '../components/SubsectionStore';

const meta = {
  title: 'Components/SubsectionStore',
  component: SubsectionStore,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'],
      description: 'Color variant of the subsection',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the subsection',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'disabled'],
      description: 'State of the subsection',
    },
  },
} satisfies Meta<typeof SubsectionStore>;

export default meta;
type Story = StoryObj<typeof meta>;

const StoreIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    className={className}
  >
    <path
      d="M0 8C0 3.58172 3.58172 0 8 0H112C116.418 0 120 3.58172 120 8V112C120 116.418 116.418 120 112 120H8C3.58172 120 0 116.418 0 112V8Z"
      fill="url(#paint0_linear_1115_5791)"
    />
    <path
      d="M22.5 22.5C22.5 18.3579 25.8579 15 30 15H90C94.1421 15 97.5 18.3579 97.5 22.5V97.5C97.5 101.642 94.1421 105 90 105H30C25.8579 105 22.5 101.642 22.5 97.5V22.5Z"
      fill="url(#paint1_linear_1115_5791)"
    />
    <path
      d="M30 71.25C30 69.1789 31.6789 67.5 33.75 67.5H41.25C43.3211 67.5 45 69.1789 45 71.25V86.25C45 88.3211 43.3211 90 41.25 90H33.75C31.6789 90 30 88.3211 30 86.25V71.25Z"
      fill="url(#paint2_linear_1115_5791)"
    />
    <path
      d="M48.75 71.25C48.75 69.1789 50.4289 67.5 52.5 67.5H60C62.0711 67.5 63.75 69.1789 63.75 71.25V86.25C63.75 88.3211 62.0711 90 60 90H52.5C50.4289 90 48.75 88.3211 48.75 86.25V71.25Z"
      fill="url(#paint3_linear_1115_5791)"
    />
    <path
      d="M75 71.25C75 69.1789 76.6789 67.5 78.75 67.5H86.25C88.3211 67.5 90 69.1789 90 71.25V105H75V71.25Z"
      fill="url(#paint4_linear_1115_5791)"
    />
    <path
      d="M21.0797 31.9311C21.9144 28.5922 24.9142 26.25 28.3558 26.25H91.6442C95.0856 26.25 98.0856 28.5922 98.9201 31.9311L103.835 51.5904C104.427 53.9573 102.637 56.25 100.197 56.25H19.8028C17.3632 56.25 15.5731 53.9573 16.1648 51.5904L21.0797 31.9311Z"
      fill="url(#paint5_linear_1115_5791)"
    />
    <path
      d="M52.5 26.25H67.5L69.375 56.25H50.625L52.5 26.25Z"
      fill="url(#paint6_linear_1115_5791)"
    />
    <path
      d="M16.1649 51.5904L21.0797 31.9311C21.9145 28.5922 24.9143 26.25 28.3558 26.25H37.5L33.75 56.25H19.803C17.3633 56.25 15.5732 53.9573 16.1649 51.5904Z"
      fill="url(#paint7_linear_1115_5791)"
    />
    <path
      d="M103.835 51.5904L98.9203 31.9311C98.0856 28.5922 95.0857 26.25 91.6442 26.25H82.5L86.25 56.25H100.197C102.637 56.25 104.427 53.9573 103.835 51.5904Z"
      fill="url(#paint8_linear_1115_5791)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1115_5791"
        x1="60"
        y1="-32.234"
        x2="60"
        y2="170.426"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.1" stopColor="#5E77F6" />
        <stop offset="1" stopColor="#3843D0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1115_5791"
        x1="60"
        y1="15"
        x2="60"
        y2="105"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBA31" stopOpacity="0.5" />
        <stop offset="1" stopColor="#FFBA31" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1115_5791"
        x1="37.5"
        y1="67.5"
        x2="37.5"
        y2="90"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBA31" stopOpacity="0.5" />
        <stop offset="1" stopColor="#FFBA31" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_1115_5791"
        x1="56.25"
        y1="67.5"
        x2="56.25"
        y2="90"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBA31" stopOpacity="0.5" />
        <stop offset="1" stopColor="#FFBA31" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_1115_5791"
        x1="82.5"
        y1="67.5"
        x2="82.5"
        y2="105"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBA31" stopOpacity="0.5" />
        <stop offset="1" stopColor="#FFBA31" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_1115_5791"
        x1="54.8288"
        y1="26.25"
        x2="54.8288"
        y2="56.25"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBA31" stopOpacity="0.8" />
        <stop offset="1" stopColor="#FFBA31" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_1115_5791"
        x1="58.8975"
        y1="26.25"
        x2="58.8975"
        y2="56.25"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBA31" stopOpacity="0.8" />
        <stop offset="1" stopColor="#FFBA31" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_1115_5791"
        x1="28.0369"
        y1="26.25"
        x2="28.0369"
        y2="56.25"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBA31" stopOpacity="0.8" />
        <stop offset="1" stopColor="#FFBA31" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_1115_5791"
        x1="91.9631"
        y1="26.25"
        x2="91.9631"
        y2="56.25"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBA31" stopOpacity="0.8" />
        <stop offset="1" stopColor="#FFBA31" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const SecondaryIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    className={className}
  >
    <path
      d="M0 8C0 3.58172 3.58172 0 8 0H112C116.418 0 120 3.58172 120 8V112C120 116.418 116.418 120 112 120H8C3.58172 120 0 116.418 0 112V8Z"
      fill="url(#paint0_linear_1115_5701)"
    />
    <path
      d="M28.5797 20.6811C29.4144 17.3422 32.4143 15 35.8558 15H84.1442C87.5857 15 90.5856 17.3422 91.4203 20.6811L104.418 72.6703C104.713 73.8536 103.818 75 102.599 75H17.4014C16.1816 75 15.2866 73.8536 15.5824 72.6703L28.5797 20.6811Z"
      fill="url(#paint1_linear_1115_5701)"
    />
    <path
      d="M32.7358 23.0968C33.3298 20.5509 35.5995 18.75 38.2136 18.75H81.7864C84.4007 18.75 86.6702 20.5509 87.2644 23.0968L98.8382 72.699C99.1125 73.875 98.2198 75 97.0122 75H22.9879C21.7802 75 20.8875 73.875 21.162 72.699L32.7358 23.0968Z"
      fill="url(#paint2_linear_1115_5701)"
    />
    <path
      d="M15 78.75C15 76.6789 16.6789 75 18.75 75H101.25C103.321 75 105 76.6789 105 78.75V101.25C105 103.321 103.321 105 101.25 105H18.75C16.6789 105 15 103.321 15 101.25V78.75Z"
      fill="url(#paint3_linear_1115_5701)"
    />
    <path
      d="M28.125 84.375C28.125 86.4461 26.4461 88.125 24.375 88.125C22.3039 88.125 20.625 86.4461 20.625 84.375C20.625 82.3039 22.3039 80.625 24.375 80.625C26.4461 80.625 28.125 82.3039 28.125 84.375Z"
      fill="url(#paint4_linear_1115_5701)"
    />
    <path
      d="M39.375 84.375C39.375 86.4461 37.6961 88.125 35.625 88.125C33.5539 88.125 31.875 86.4461 31.875 84.375C31.875 82.3039 33.5539 80.625 35.625 80.625C37.6961 80.625 39.375 82.3039 39.375 84.375Z"
      fill="url(#paint5_linear_1115_5701)"
    />
    <path
      d="M50.625 84.375C50.625 86.4461 48.9461 88.125 46.875 88.125C44.8039 88.125 43.125 86.4461 43.125 84.375C43.125 82.3039 44.8039 80.625 46.875 80.625C48.9461 80.625 50.625 82.3039 50.625 84.375Z"
      fill="url(#paint6_linear_1115_5701)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1115_5701"
        x1="60"
        y1="-32.234"
        x2="60"
        y2="170.426"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.1" stopColor="#5E77F6" />
        <stop offset="1" stopColor="#3843D0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1115_5701"
        x1="60"
        y1="15"
        x2="60"
        y2="75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBA31" stopOpacity="0.5" />
        <stop offset="1" stopColor="#FFBA31" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1115_5701"
        x1="60"
        y1="18.75"
        x2="60"
        y2="75"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBA31" stopOpacity="0.5" />
        <stop offset="1" stopColor="#FFBA31" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_1115_5701"
        x1="60"
        y1="75"
        x2="60"
        y2="105"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBA31" stopOpacity="0.5" />
        <stop offset="1" stopColor="#FFBA31" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_1115_5701"
        x1="23.9344"
        y1="80.625"
        x2="23.9344"
        y2="88.125"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBA31" stopOpacity="0.8" />
        <stop offset="1" stopColor="#FFBA31" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_1115_5701"
        x1="35.1844"
        y1="80.625"
        x2="35.1844"
        y2="88.125"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBA31" stopOpacity="0.8" />
        <stop offset="1" stopColor="#FFBA31" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_1115_5701"
        x1="46.4344"
        y1="80.625"
        x2="46.4344"
        y2="88.125"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBA31" stopOpacity="0.8" />
        <stop offset="1" stopColor="#FFBA31" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const Default: Story = {
  args: {
    title: 'MIS COLECCIONES',
    leftIcon: <StoreIcon />,
    rightIcon: <SecondaryIcon />,
  },
};

export const Store: Story = {
  args: {
    title: 'TIENDA',
    leftIcon: <StoreIcon />,
    rightIcon: <SecondaryIcon />,
  },
};

export const Hover: Story = {
  args: {
    title: 'MIS COLECCIONES',
    state: 'hover',
    leftIcon: <StoreIcon />,
    rightIcon: <SecondaryIcon />,
  },
};

export const Disabled: Story = {
  args: {
    title: 'MIS COLECCIONES',
    state: 'disabled',
    leftIcon: <StoreIcon />,
    rightIcon: <SecondaryIcon />,
  },
};

export const WithoutArrow: Story = {
  args: {
    title: 'MIS COLECCIONES',
    showArrow: false,
    leftIcon: <StoreIcon />,
    rightIcon: <SecondaryIcon />,
  },
};

export const OnlyLeftIcon: Story = {
  args: {
    title: 'MIS COLECCIONES',
    leftIcon: <StoreIcon />,
  },
};

export const OnlyRightIcon: Story = {
  args: {
    title: 'TIENDA',
    rightIcon: <StoreIcon />,
  },
};

export const AllVariants: Story = {
  args: {
    title: 'MIS COLECCIONES',
    leftIcon: <StoreIcon />,
    rightIcon: <SecondaryIcon />,
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Default State</h3>
        <div className="luca-flex luca-flex-col luca-gap-3">
          {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
            (variant) => (
              <SubsectionStore
                key={variant}
                {...args}
                variant={variant}
                title={`${variant.toUpperCase()} VARIANT`}
              />
            )
          )}
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Hover State</h3>
        <div className="luca-flex luca-flex-col luca-gap-3">
          {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
            (variant) => (
              <SubsectionStore
                key={variant}
                {...args}
                variant={variant}
                state="hover"
                title={`${variant.toUpperCase()} VARIANT`}
              />
            )
          )}
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    title: 'MIS COLECCIONES',
    leftIcon: <StoreIcon />,
    rightIcon: <SecondaryIcon />,
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">All Sizes</h3>
        <div className="luca-flex luca-flex-col luca-gap-3">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <SubsectionStore
              key={size}
              {...args}
              size={size}
              title={`${size.toUpperCase()} SIZE - MIS COLECCIONES`}
            />
          ))}
        </div>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  args: {
    title: 'MIS COLECCIONES',
    leftIcon: <StoreIcon />,
    rightIcon: <SecondaryIcon />,
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-w-full luca-max-w-4xl">
      <div className="luca-flex luca-flex-col luca-gap-4">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">All States</h3>
        <div className="luca-flex luca-flex-col luca-gap-3">
          {(['default', 'hover', 'disabled'] as const).map((state) => (
            <SubsectionStore
              key={state}
              {...args}
              state={state}
              title={`${state.toUpperCase()} STATE`}
            />
          ))}
        </div>
      </div>
    </div>
  ),
};

export const CollectionsExample: Story = {
  args: {
    title: 'MIS COLECCIONES',
    leftIcon: <StoreIcon />,
    rightIcon: <SecondaryIcon />,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-4xl">
      <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">My Collections</h3>
      <div className="luca-flex luca-flex-col luca-gap-3">
        <SubsectionStore
          title="MIS COLECCIONES"
          leftIcon={<StoreIcon />}
          rightIcon={<SecondaryIcon />}
          onClick={() => console.log('Collections clicked')}
        />
        <SubsectionStore
          title="MIS COLECCIONES"
          leftIcon={<StoreIcon />}
          rightIcon={<SecondaryIcon />}
          state="hover"
          onClick={() => console.log('Collections hover clicked')}
        />
      </div>
    </div>
  ),
};

export const StoreExample: Story = {
  args: {
    title: 'TIENDA',
    leftIcon: <StoreIcon />,
    rightIcon: <SecondaryIcon />,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-4xl">
      <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">Store</h3>
      <div className="luca-flex luca-flex-col luca-gap-3">
        <SubsectionStore
          title="TIENDA"
          leftIcon={<StoreIcon />}
          rightIcon={<SecondaryIcon />}
          onClick={() => console.log('Store clicked')}
        />
        <SubsectionStore
          title="TIENDA"
          leftIcon={<StoreIcon />}
          rightIcon={<SecondaryIcon />}
          state="hover"
          onClick={() => console.log('Store hover clicked')}
        />
      </div>
    </div>
  ),
};

export const ResponsiveExample: Story = {
  args: {
    title: 'MIS COLECCIONES',
    leftIcon: <StoreIcon />,
    rightIcon: <SecondaryIcon />,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-w-full">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Desktop</h3>
        <div className="luca-w-full luca-max-w-6xl">
          <SubsectionStore
            title="MIS COLECCIONES"
            size="lg"
            leftIcon={<StoreIcon />}
            rightIcon={<SecondaryIcon />}
          />
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Tablet</h3>
        <div className="luca-w-full luca-max-w-2xl">
          <SubsectionStore
            title="MIS COLECCIONES"
            size="md"
            leftIcon={<StoreIcon />}
            rightIcon={<SecondaryIcon />}
          />
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Mobile</h3>
        <div className="luca-w-full luca-max-w-sm">
          <SubsectionStore
            title="MIS COLECCIONES"
            size="sm"
            leftIcon={<StoreIcon />}
            rightIcon={<SecondaryIcon />}
          />
        </div>
      </div>
    </div>
  ),
};

export const CustomContentExample: Story = {
  args: {
    title: 'MIS COLECCIONES',
    leftIcon: <StoreIcon />,
    rightIcon: <SecondaryIcon />,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-4xl">
      <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">Custom Content</h3>
      <div className="luca-flex luca-flex-col luca-gap-3">
        <SubsectionStore
          title={
            <span>
              MIS <span className="luca-text-primary-600">COLECCIONES</span>
            </span>
          }
          leftIcon={<StoreIcon />}
          rightIcon={<SecondaryIcon />}
        />
        <SubsectionStore
          title="TIENDA CON TEXTO LARGO QUE SE TRUNCA"
          leftIcon={<StoreIcon />}
          rightIcon={<SecondaryIcon />}
        />
        <SubsectionStore title="SIN ICONOS" showArrow={false} />
      </div>
    </div>
  ),
};

export const InteractiveExample: Story = {
  args: {
    title: 'MIS COLECCIONES',
    leftIcon: <StoreIcon />,
    rightIcon: <SecondaryIcon />,
  },
  render: () => {
    const [selected, setSelected] = React.useState<string | null>(null);

    return (
      <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full luca-max-w-4xl">
        <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">Select a Section</h3>
        <div className="luca-flex luca-flex-col luca-gap-3">
          <SubsectionStore
            title="MIS COLECCIONES"
            leftIcon={<StoreIcon />}
            rightIcon={<SecondaryIcon />}
            state={selected === 'collections' ? 'hover' : 'default'}
            onClick={() => {
              setSelected('collections');
              console.log('Collections selected');
            }}
          />
          <SubsectionStore
            title="TIENDA"
            leftIcon={<StoreIcon />}
            rightIcon={<SecondaryIcon />}
            state={selected === 'store' ? 'hover' : 'default'}
            onClick={() => {
              setSelected('store');
              console.log('Store selected');
            }}
          />
        </div>
        {selected && (
          <p className="luca-text-sm luca-text-neutral-600 luca-mt-2">
            Selected: {selected === 'collections' ? 'Collections' : 'Store'}
          </p>
        )}
      </div>
    );
  },
};
