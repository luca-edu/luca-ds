import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '../components/Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'],
      description: 'Color variant of the pagination',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the pagination',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the pagination is disabled',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    total: 100,
    current: 1,
    pageSize: 10,
  },
};

export const Desktop: Story = {
  args: {
    total: 100,
    current: 1,
    pageSize: 10,
    className: 'luca-w-[1280px]',
  },
};

export const Tablet: Story = {
  args: {
    total: 100,
    current: 1,
    pageSize: 10,
    className: 'luca-w-[768px]',
  },
};

export const Mobile: Story = {
  args: {
    total: 100,
    current: 1,
    pageSize: 10,
    className: 'luca-w-[380px]',
  },
  render: (args) => (
    <div className="luca-flex luca-flex-col luca-w-full">
      <Pagination {...args} />
    </div>
  ),
};

export const FirstPage: Story = {
  args: {
    total: 100,
    current: 1,
    pageSize: 10,
  },
};

export const MiddlePage: Story = {
  args: {
    total: 100,
    current: 5,
    pageSize: 10,
  },
};

export const LastPage: Story = {
  args: {
    total: 100,
    current: 10,
    pageSize: 10,
  },
};

export const Disabled: Story = {
  args: {
    total: 100,
    current: 5,
    pageSize: 10,
    disabled: true,
  },
};

export const AllVariants: Story = {
  args: {
    total: 100,
    current: 5,
    pageSize: 10,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full">
      {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
        (variant) => (
          <div key={variant} className="luca-flex luca-flex-col luca-gap-2">
            <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </h3>
            <Pagination variant={variant} total={100} current={5} pageSize={10} />
          </div>
        )
      )}
    </div>
  ),
};

export const AllSizes: Story = {
  args: {
    total: 100,
    current: 5,
    pageSize: 10,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8 luca-w-full">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="luca-flex luca-flex-col luca-gap-2">
          <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
            {size.toUpperCase()}
          </h3>
          <Pagination size={size} total={100} current={5} pageSize={10} />
        </div>
      ))}
    </div>
  ),
};

export const Controlled: Story = {
  args: {
    total: 100,
    current: 1,
    pageSize: 10,
  },
  render: () => {
    const [current, setCurrent] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);

    const handleChange = (page: number, size: number) => {
      setCurrent(page);
      setPageSize(size);
      console.log('Page:', page, 'Size:', size);
    };

    return (
      <div className="luca-flex luca-flex-col luca-gap-4">
        <div className="luca-text-sm luca-text-neutral-600">
          Página actual: {current} | Tamaño: {pageSize}
        </div>
        <Pagination
          total={237}
          current={current}
          pageSize={pageSize}
          onChange={handleChange}
          onShowSizeChange={handleChange}
        />
      </div>
    );
  },
};

export const CustomPageSizes: Story = {
  args: {
    total: 500,
    current: 1,
    pageSize: 25,
    pageSizeOptions: [5, 25, 50, 100, 250],
  },
};

export const WithoutSizeChanger: Story = {
  args: {
    total: 100,
    current: 1,
    pageSize: 10,
    showSizeChanger: false,
  },
};

export const WithoutTotal: Story = {
  args: {
    total: 100,
    current: 1,
    pageSize: 10,
    showTotal: false,
  },
};

export const CustomTemplate: Story = {
  args: {
    total: 100,
    current: 1,
    pageSize: 10,
    showTotalTemplate: '{start}-{end} de {total}',
  },
};

export const CustomLabels: Story = {
  args: {
    total: 100,
    current: 1,
    pageSize: 10,
    rowsLabel: 'Items',
    prevText: 'Prev',
    nextText: 'Next',
  },
};
