import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Breadcrumb } from '../components/Breadcrumb';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.5 7.49999L10 2.5L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 18.3333V10H12.5V18.3333"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.BackButton onClick={() => alert('Back button clicked')} />
      <Breadcrumb.Item href="/" icon={<HomeIcon />}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/projects">Projects</Breadcrumb.Item>
      <Breadcrumb.Item href="/projects/design">Design</Breadcrumb.Item>
      <Breadcrumb.Item isCurrentPage>Current Page</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

export const WithoutBackButton: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="/" icon={<HomeIcon />}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
      <Breadcrumb.Item isCurrentPage>Electronics</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

export const SimpleNavigation: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.BackButton onClick={() => alert('Back')} />
      <Breadcrumb.Item href="/" icon={<HomeIcon />}>
        Dashboard
      </Breadcrumb.Item>
      <Breadcrumb.Item isCurrentPage>Settings</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

export const LongPath: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.BackButton onClick={() => alert('Back')} />
      <Breadcrumb.Item href="/" icon={<HomeIcon />}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/level1">Level 1</Breadcrumb.Item>
      <Breadcrumb.Item href="/level1/level2">Level 2</Breadcrumb.Item>
      <Breadcrumb.Item href="/level1/level2/level3">Level 3</Breadcrumb.Item>
      <Breadcrumb.Item href="/level1/level2/level3/level4">Level 4</Breadcrumb.Item>
      <Breadcrumb.Item isCurrentPage>Current Page</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumb separator={<Breadcrumb.Separator>›</Breadcrumb.Separator>}>
      <Breadcrumb.BackButton onClick={() => alert('Back')} />
      <Breadcrumb.Item href="/" icon={<HomeIcon />}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/docs">Documentation</Breadcrumb.Item>
      <Breadcrumb.Item isCurrentPage>Components</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

const FolderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.5 15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V7.5C17.5 7.05797 17.3244 6.63405 17.0118 6.32149C16.6993 6.00893 16.2754 5.83333 15.8333 5.83333H10L8.33333 3.33333H4.16667C3.72464 3.33333 3.30072 3.50893 2.98816 3.82149C2.67559 4.13405 2.5 4.55797 2.5 5V15.8333Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.6667 2.5H5C4.55797 2.5 4.13405 2.67559 3.82149 2.98816C3.50893 3.30072 3.33333 3.72464 3.33333 4.16667V15.8333C3.33333 16.2754 3.50893 16.6993 3.82149 17.0118C4.13405 17.3244 4.55797 17.5 5 17.5H15C15.442 17.5 15.866 17.3244 16.1785 17.0118C16.4911 16.6993 16.6667 16.2754 16.6667 15.8333V7.5L11.6667 2.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.6667 2.5V7.5H16.6667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const WithCustomIcons: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.BackButton onClick={() => alert('Back')} />
      <Breadcrumb.Item href="/" icon={<HomeIcon />}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/projects" icon={<FolderIcon />}>
        Projects
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/projects/design" icon={<FolderIcon />}>
        Design
      </Breadcrumb.Item>
      <Breadcrumb.Item isCurrentPage icon={<FileIcon />}>
        readme.md
      </Breadcrumb.Item>
    </Breadcrumb>
  ),
};
