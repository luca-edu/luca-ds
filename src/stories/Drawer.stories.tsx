import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef, useState } from 'react';
import { Drawer } from '../components/Drawer';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the drawer is visible',
    },
    placement: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Which edge the drawer slides from',
    },
    mask: {
      control: 'boolean',
      description: 'Show the backdrop mask',
    },
    maskClosable: {
      control: 'boolean',
      description: 'Allow closing by clicking the mask',
    },
    closable: {
      control: 'boolean',
      description: 'Show the close button',
    },
    keyboard: {
      control: 'boolean',
      description: 'Allow closing with Escape key',
    },
    destroyOnClose: {
      control: 'boolean',
      description: 'Unmount children when closed',
    },
    width: {
      control: 'text',
      description: 'Width of the drawer panel',
    },
    title: {
      control: 'text',
      description: 'Title shown in the header',
    },
    zIndex: {
      control: 'number',
      description: 'z-index for the drawer root',
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ------------------------------------------------------------------ */
/*  Stateful wrapper (drawers need open/onClose state)                  */
/* ------------------------------------------------------------------ */

const DrawerDemo = (args: React.ComponentProps<typeof Drawer>) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
      >
        Open Drawer
      </button>
      <Drawer {...args} open={open} onClose={() => setOpen(false)}>
        {args.children ?? (
          <div className="luca-space-y-4">
            <p className="luca-text-neutral-700">
              This is the drawer body content. It scrolls independently when
              content exceeds the available height.
            </p>
            <p className="luca-text-neutral-500 luca-text-sm">
              Try pressing Escape, clicking the mask, or using the close button.
            </p>
          </div>
        )}
      </Drawer>
    </>
  );
};

/* ------------------------------------------------------------------ */
/*  Stories                                                            */
/* ------------------------------------------------------------------ */

export const Default: Story = {
  render: (args) => <DrawerDemo {...args} />,
  args: {
    open: false,
    onClose: () => {},
    title: 'Drawer title',
    placement: 'right',
    width: 378,
    mask: true,
    maskClosable: true,
    closable: true,
    keyboard: true,
    destroyOnClose: false,
  },
};

export const LeftPlacement: Story = {
  render: (args) => <DrawerDemo {...args} />,
  args: {
    ...Default.args,
    title: 'Left drawer',
    placement: 'left',
  },
};

export const NoMask: Story = {
  render: (args) => <DrawerDemo {...args} />,
  args: {
    ...Default.args,
    title: 'No mask',
    mask: false,
  },
};

export const MaskNotClosable: Story = {
  render: (args) => <DrawerDemo {...args} />,
  args: {
    ...Default.args,
    title: 'Mask not closable',
    maskClosable: false,
  },
};

export const NotClosable: Story = {
  render: (args) => <DrawerDemo {...args} />,
  args: {
    ...Default.args,
    title: 'No close button',
    closable: false,
  },
};

export const CustomCloseIcon: Story = {
  render: (args) => <DrawerDemo {...args} />,
  args: {
    ...Default.args,
    title: 'Custom close icon',
    closeIcon: <span className="luca-text-lg">✕</span>,
  },
};

export const WithFooter: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
        >
          Open Drawer
        </button>
        <Drawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          title="With footer"
          footer={
            <div className="luca-flex luca-justify-end luca-gap-2">
              <button
                onClick={() => setOpen(false)}
                className="luca-px-4 luca-py-2 luca-rounded-lg luca-border luca-border-neutral-300 luca-text-neutral-700 hover:luca-bg-neutral-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                className="luca-px-4 luca-py-2 luca-rounded-lg luca-bg-primary luca-text-white hover:luca-bg-primary-600"
              >
                Save
              </button>
            </div>
          }
        >
          <p className="luca-text-neutral-700">
            This drawer has a pinned footer with action buttons.
          </p>
        </Drawer>
      </>
    );
  },
  args: {
    open: false,
    onClose: () => {},
  },
};

export const WithTitleAndExtra: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
        >
          Open Drawer
        </button>
        <Drawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          title="Settings"
          extra={
            <button className="luca-text-sm luca-text-primary luca-font-medium hover:luca-underline">
              Reset
            </button>
          }
        >
          <p className="luca-text-neutral-700">
            The header has a title on the left and extra content (Reset button)
            to the right of the title, with the close icon at the far right.
          </p>
        </Drawer>
      </>
    );
  },
  args: {
    open: false,
    onClose: () => {},
  },
};

export const DestroyOnClose: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const renderCount = useRef(0);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
        >
          Open Drawer
        </button>
        <Drawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          title="Destroy on close"
          destroyOnClose
        >
          <p className="luca-text-neutral-700">
            Render count: <strong>{++renderCount.current}</strong>
          </p>
          <p className="luca-text-neutral-500 luca-text-sm luca-mt-2">
            With <code>destroyOnClose</code>, the content remounts each time the
            drawer opens. The render count resets to 1 on each open.
          </p>
        </Drawer>
      </>
    );
  },
  args: {
    open: false,
    onClose: () => {},
  },
};

export const ContainerHeight: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
      <div
        ref={containerRef}
        className="luca-relative luca-w-[800px] luca-h-[500px] luca-border-2 luca-border-dashed luca-border-neutral-300 luca-rounded-xl luca-overflow-hidden luca-bg-neutral-50"
      >
        <div className="luca-p-6">
          <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900 luca-mb-2">
            Bounded container (800×500)
          </h3>
          <p className="luca-text-neutral-600 luca-mb-4">
            The drawer renders inside this container, not the viewport. It uses
            the container&apos;s height and absolute positioning.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
          >
            Open Drawer in container
          </button>
        </div>

        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Container drawer"
          getContainer={false}
          width={350}
        >
          <p className="luca-text-neutral-700">
            This drawer is rendered inline and sized to the parent container
            (500px height), not the full viewport.
          </p>
        </Drawer>
      </div>
    );
  },
  args: {
    open: false,
    onClose: () => {},
  },
  parameters: {
    layout: 'padded',
  },
};

export const LongScrollContent: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    const paragraphs = Array.from({ length: 20 }, (_, i) => (
      <p key={i} className="luca-text-neutral-600 luca-text-sm luca-leading-relaxed">
        Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
    ));

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
        >
          Open Drawer
        </button>
        <Drawer
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          title="Long content"
          footer={
            <p className="luca-text-xs luca-text-neutral-500 luca-text-center">
              Footer stays pinned at the bottom
            </p>
          }
        >
          <div className="luca-space-y-4">{paragraphs}</div>
        </Drawer>
      </>
    );
  },
  args: {
    open: false,
    onClose: () => {},
  },
};

export const CustomWidth: Story = {
  render: (args) => <DrawerDemo {...args} />,
  args: {
    ...Default.args,
    title: 'Wide drawer (600px)',
    width: 600,
  },
};

export const FullWidth: Story = {
  render: (args) => <DrawerDemo {...args} />,
  args: {
    ...Default.args,
    title: 'Full width',
    width: '100%',
  },
};
