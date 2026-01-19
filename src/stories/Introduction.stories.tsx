import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

// Import AllVariants stories from each component
import { AllVariants as ButtonAllVariants } from './Button.stories';
import { AllVariants as BadgeAllVariants } from './Badge.stories';
import { AllVariations as ChipsAllVariations } from './Chips.stories';
import { AllVariants as CheckboxAllVariants } from './Checkbox.stories';
import { AllVariants as RadioButtonAllVariants } from './RadioButton.stories';
import { AllVariants as TooltipAllVariants } from './Tooltip.stories';
import { AllVariants as NavTabsAllVariants } from './NavTabs.stories';
import { Default as SidebarAllVariants } from './Sidebar.stories';
import { AllVariants as NotificationAllVariants } from './Notification.stories';
import { AllVariants as ToastAllVariants } from './Toast.stories';
import { AllVariants as AmountButtonAllVariants } from './AmountButton.stories';
import { AllStates as ButtonIconAllStates } from './ButtonIcon.stories';
import { AllVariants as ProgressBarAllVariants } from './ProgressBar.stories';
import { AllVariations as AudioVisualizerAllVariations } from './AudioVisualizer.stories';

// Import actual components for rendering
import { useState } from 'react';
import { Button } from '../components/Button';
import { Card, CardHeader, CardTitle, CardDescription } from '../components/Card';
import { InputField } from '../components/InputField';
import { SearchBar } from '../components/SearchBar';
import { Breadcrumb } from '../components/Breadcrumb';
import { Steps } from '../components/Steps';
import { Modal } from '../components/Modal';
import { Dropdown } from '../components/Dropdown';
import { Selector, SelectorLabel, SelectorDetail, SelectorAction } from '../components/Selector';
import { EmptyStateCard } from '../components/EmptyStateCard';
import { TabList, TabListItem } from '../components/TabList';

const ComponentShowcase = () => {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Hero Section */}
      <div
        style={{
          textAlign: 'center',
          padding: '48px 24px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          color: 'white',
          marginBottom: '48px',
        }}
      >
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 700,
            marginBottom: '16px',
            margin: 0,
          }}
        >
          Luca Design System
        </h1>
        <p
          style={{
            fontSize: '20px',
            opacity: 0.9,
            maxWidth: '600px',
            margin: '16px auto 32px',
          }}
        >
          A comprehensive React component library built with TypeScript and Tailwind CSS
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            marginTop: '32px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: 700 }}>25+</div>
            <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '4px' }}>Components</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '36px', fontWeight: 700 }}>100%</div>
            <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '4px' }}>TypeScript</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 700 }}>Tree-shakeable</div>
            <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '4px' }}>ES Modules</div>
          </div>
        </div>
      </div>

      {/* Section Title */}
      <h2
        style={{
          fontSize: '32px',
          fontWeight: 700,
          marginBottom: '16px',
          color: '#111827',
        }}
      >
        Component Library
      </h2>
      <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '32px' }}>
        Explore our collection of carefully crafted components designed for modern web applications.
      </p>
      {/* Getting Started Section */}
      <div
        style={{
          marginTop: '48px',
          padding: '32px',
          backgroundColor: '#f9fafb',
          borderRadius: '12px',
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: 700,
            marginBottom: '16px',
            color: '#111827',
          }}
        >
          Getting Started
        </h2>

        <h3
          style={{
            fontSize: '18px',
            fontWeight: 600,
            marginTop: '24px',
            marginBottom: '12px',
          }}
        >
          Installation
        </h3>
        <pre
          style={{
            backgroundColor: '#1f2937',
            color: '#e5e7eb',
            padding: '16px',
            borderRadius: '8px',
            overflow: 'auto',
          }}
        >
          <code>npm install luca-ui-kit</code>
        </pre>

        <h3
          style={{
            fontSize: '18px',
            fontWeight: 600,
            marginTop: '24px',
            marginBottom: '12px',
          }}
        >
          Basic Usage
        </h3>
        <pre
          style={{
            backgroundColor: '#1f2937',
            color: '#e5e7eb',
            padding: '16px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '14px',
            lineHeight: '1.6',
          }}
        >
          <code>{`import { Button, Card, Badge } from 'luca-ui-kit';
import 'luca-ui-kit/styles.css';

function App() {
  return (
    <Card>
      <Button variant="primary">Click me</Button>
      <Badge variant="success">New</Badge>
    </Card>
  );
}`}</code>
        </pre>

        <h3
          style={{
            fontSize: '18px',
            fontWeight: 600,
            marginTop: '24px',
            marginBottom: '12px',
          }}
        >
          Tree-shakeable Imports
        </h3>
        <p style={{ color: '#6b7280', marginBottom: '12px' }}>
          For selective imports without automatic global styles:
        </p>
        <pre
          style={{
            backgroundColor: '#1f2937',
            color: '#e5e7eb',
            padding: '16px',
            borderRadius: '8px',
            overflow: 'auto',
          }}
        >
          <code>{`import { Button } from 'luca-ui-kit/cross';`}</code>
        </pre>

        <h3
          style={{
            fontSize: '18px',
            fontWeight: 600,
            marginTop: '24px',
            marginBottom: '12px',
          }}
        >
          Features
        </h3>
        <ul style={{ color: '#4b5563', lineHeight: '1.8', paddingLeft: '24px' }}>
          <li>
            <strong>TypeScript Support:</strong> Full type definitions for all components
          </li>
          <li>
            <strong>Tailwind CSS:</strong> Customizable with Tailwind utility classes (prefixed with{' '}
            <code>luca-</code>)
          </li>
          <li>
            <strong>Compound Components:</strong> Flexible composition patterns for complex UIs
          </li>
          <li>
            <strong>Accessible:</strong> Built with accessibility best practices
          </li>
          <li>
            <strong>Tree-shakeable:</strong> Import only what you need
          </li>
        </ul>

        <p style={{ marginTop: '24px', color: '#6b7280' }}>
          Click on any component in the sidebar to view detailed documentation, interactive
          examples, and usage guidelines.
        </p>
      </div>

      {/* Components Showcase */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* Button */}
        <ComponentSection
          title="Button"
          description="Primary, secondary, and tertiary button variants with icon support"
        >
          {ButtonAllVariants.render?.()}
        </ComponentSection>

        {/* Badge */}
        <ComponentSection
          title="Badge"
          description="Status indicators with multiple color variants and sizes"
        >
          {/* eslint-disable @typescript-eslint/no-explicit-any */}
          {BadgeAllVariants.render?.({} as any, {} as any)}
        </ComponentSection>

        {/* Chips */}
        <ComponentSection title="Chips" description="Interactive tags with removable functionality">
          {ChipsAllVariations.render?.()}
        </ComponentSection>

        {/* Checkbox */}
        <ComponentSection title="Checkbox" description="Customizable checkbox with label support">
          {CheckboxAllVariants.render?.({} as any, {} as any)}
        </ComponentSection>

        {/* Radio Button */}
        <ComponentSection title="Radio Button" description="Single selection input with label">
          {RadioButtonAllVariants.render?.({} as any, {} as any)}
        </ComponentSection>

        {/* Tooltip */}
        <ComponentSection
          title="Tooltip"
          description="Contextual information on hover with positioning options"
        >
          {TooltipAllVariants.render?.({} as any, {} as any)}
        </ComponentSection>

        {/* Notification */}
        <ComponentSection
          title="Notification"
          description="Alert messages with different severity levels"
        >
          {NotificationAllVariants.render?.({} as any, {} as any)}
        </ComponentSection>

        {/* Toast */}
        <ComponentSection title="Toast" description="Temporary notification messages">
          {ToastAllVariants.render?.({} as any, {} as any)}
        </ComponentSection>

        {/* Nav Tabs */}
        <ComponentSection title="Nav Tabs" description="Tab navigation for content organization">
          {NavTabsAllVariants.render?.({} as any, {} as any)}
        </ComponentSection>

        {/* Sidebar */}
        <ComponentSection
          title="Sidebar"
          description="Navigation sidebar with menu items and icons"
        >
          {SidebarAllVariants.render?.({} as any, {} as any)}
        </ComponentSection>

        {/* Amount Button */}
        <ComponentSection title="Amount Button" description="Increment/decrement numeric input">
          {AmountButtonAllVariants.render?.({} as any, {} as any)}
        </ComponentSection>

        {/* Button Icon */}
        <ComponentSection title="Button Icon" description="Icon-only buttons in various sizes">
          {ButtonIconAllStates.render?.({} as any, {} as any)}
        </ComponentSection>

        {/* Progress Bar */}
        <ComponentSection
          title="Progress Bar"
          description="Visual progress indicator with multiple variants and customization options"
        >
          {ProgressBarAllVariants.render?.({} as any, {} as any)}
        </ComponentSection>

        {/* Audio Visualizer */}
        <ComponentSection
          title="Audio Visualizer"
          description="Audio player with waveform visualization and progress tracking"
        >
          {AudioVisualizerAllVariations.render?.()}
        </ComponentSection>

        {/* Card */}
        <ComponentSection
          title="Card"
          description="Flexible container with header, content, and multiple variants"
        >
          <CardExample />
        </ComponentSection>

        {/* Input Field */}
        <ComponentSection
          title="Input Field"
          description="Text input with label, placeholder, and validation states"
        >
          <InputFieldExample />
        </ComponentSection>

        {/* Search Bar */}
        <ComponentSection
          title="Search Bar"
          description="Search input with icon and clear functionality"
        >
          <SearchBarExample />
        </ComponentSection>

        {/* Breadcrumb */}
        <ComponentSection
          title="Breadcrumb"
          description="Navigation hierarchy with customizable separators"
        >
          <BreadcrumbExample />
        </ComponentSection>

        {/* Steps */}
        <ComponentSection
          title="Steps"
          description="Multi-step progress indicator for forms and workflows"
        >
          <StepsExample />
        </ComponentSection>

        {/* Modal */}
        <ComponentSection title="Modal" description="Overlay dialog for focused user interactions">
          <ModalExample />
        </ComponentSection>

        {/* Dropdown */}
        <ComponentSection title="Dropdown" description="Contextual menu with multiple actions">
          <DropdownExample />
        </ComponentSection>

        {/* Selector */}
        <ComponentSection title="Selector" description="Dropdown selection with searchable options">
          <SelectorExample />
        </ComponentSection>

        {/* Empty State Card */}
        <ComponentSection
          title="Empty State Card"
          description="Placeholder for empty content states"
        >
          <EmptyStateCardExample />
        </ComponentSection>

        {/* Tab List */}
        <ComponentSection
          title="Tab List"
          description="Segmented control for switching between views"
        >
          <TabListExample />
        </ComponentSection>
      </div>
    </div>
  );
};

// Example Components
const examIllustration = 'https://www.figma.com/api/mcp/asset/e4737da7-cdfe-472d-b28a-2bd49f3bd188';

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

const CardExample = () => (
  <div className="luca-flex luca-justify-center">
    <Card iconSrc={examIllustration} className="luca-max-w-md luca-min-w-[600px]" align="center">
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quaerat.
      </CardDescription>
    </Card>
  </div>
);

const InputFieldExample = () => (
  <div className="luca-flex luca-justify-center">
    <InputField
      label="Label"
      required
      tooltip="Información adicional del campo"
      helpText="Help-text"
      placeholder="Contenido"
      wrapperClassName="luca-w-[352px]"
      defaultValue="Contenido"
      maxLength={300}
      showCounter
    />
  </div>
);

const SearchBarExample = () => {
  const [value, setValue] = useState('');
  return (
    <div className="luca-flex luca-justify-center">
      <SearchBar searchInput={value} setSearchInput={setValue} />
    </div>
  );
};

const BreadcrumbExample = () => (
  <div className="luca-flex luca-justify-center">
    <Breadcrumb>
      <Breadcrumb.BackButton onClick={() => console.log('Back')} />
      <Breadcrumb.Item href="/" icon={<HomeIcon />}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/projects">Projects</Breadcrumb.Item>
      <Breadcrumb.Item>Current</Breadcrumb.Item>
    </Breadcrumb>
  </div>
);

const StepsExample = () => (
  <div className="luca-flex luca-justify-center">
    <Steps
      steps={[
        { title: 'Step 1', subtitle: 'First step' },
        { title: 'Step 2', subtitle: 'Second step' },
        { title: 'Step 3', subtitle: 'Third step' },
      ]}
      currentStep={2}
    />
  </div>
);

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="luca-flex luca-justify-center">
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Modal"
        description="This is an example modal dialog"
        buttons={[
          {
            text: 'Cancel',
            variant: 'secondary',
            onClick: () => setIsOpen(false),
          },
          {
            text: 'Confirm',
            variant: 'primary',
            onClick: () => setIsOpen(false),
          },
        ]}
      />
    </div>
  );
};

const DropdownExample = () => (
  <div className="luca-flex luca-justify-center">
    <Dropdown
      label="Grade"
      placeholder="Select grade"
      items={[
        { key: '1', label: 'First' },
        { key: '2', label: 'Second' },
        { key: '3', label: 'Third' },
      ]}
      wrapperClassName="luca-w-[240px]"
      defaultValue={['1']}
    />
  </div>
);

const SelectorExample = () => (
  <div className="luca-flex luca-justify-center">
    <Selector className="luca-w-[600px]">
      <SelectorLabel>Subject</SelectorLabel>
      <div className="luca-flex luca-flex-1 luca-items-center luca-justify-start">
        <SelectorDetail>Geographic representations of the community</SelectorDetail>
      </div>
      <SelectorAction aria-label="Add" />
    </Selector>
  </div>
);

const EmptyStateCardExample = () => (
  <div className="luca-flex luca-justify-center">
    <EmptyStateCard
      title="No content created yet"
      description="Start by adding resources for your students. All your activities and materials will appear here."
      className="luca-w-[600px]"
    />
  </div>
);

const TabListExample = () => {
  const items: TabListItem[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'students', label: 'Students' },
  ];
  const [value, setValue] = useState(items[0]?.key ?? '');

  return (
    <div className="luca-flex luca-justify-center">
      <TabList items={items} value={value} onValueChange={setValue} />
    </div>
  );
};

// Component Section Helper
interface ComponentSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ComponentSection: React.FC<ComponentSectionProps> = ({ title, description, children }) => {
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        padding: '24px',
        backgroundColor: 'white',
      }}
    >
      <h3
        style={{
          fontSize: '20px',
          fontWeight: 600,
          marginBottom: '8px',
          color: '#111827',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '24px',
          lineHeight: '1.5',
        }}
      >
        {description}
      </p>
      <div style={{ position: 'relative' }}>{children}</div>
    </div>
  );
};

const meta = {
  title: 'Introduction/Welcome',
  component: ComponentShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Luca Design System - A comprehensive React component library built with TypeScript and Tailwind CSS',
      },
    },
  },
} satisfies Meta<typeof ComponentShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {};
