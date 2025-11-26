import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '../components/ProgressBar';
import { Button } from '../components/Button';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A flexible progress bar component with multiple variants, sizes, and customization options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100)',
      table: {
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: 'number',
      description: 'Maximum value',
      table: {
        defaultValue: { summary: '100' },
      },
    },
    variant: {
      control: 'radio',
      options: ['default', 'success', 'warning', 'danger', 'info'],
      description: 'Visual variant of the progress bar',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the progress bar',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    showLabel: {
      control: 'boolean',
      description: 'Show percentage label',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Custom label text (overrides percentage)',
    },
    labelPosition: {
      control: 'radio',
      options: ['inside', 'outside', 'top'],
      description: 'Label position',
      table: {
        defaultValue: { summary: 'inside' },
      },
    },
    striped: {
      control: 'boolean',
      description: 'Enable striped pattern',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    animated: {
      control: 'boolean',
      description: 'Enable animated stripes (requires striped to be true)',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic story
export const Default: Story = {
  args: {
    value: 60,
    variant: 'default',
    size: 'md',
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Small</h3>
        <ProgressBar value={45} size="sm" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Medium (Default)</h3>
        <ProgressBar value={60} size="md" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Large</h3>
        <ProgressBar value={75} size="lg" showLabel labelPosition="outside" />
      </div>
    </div>
  ),
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Default (Primary)</h3>
        <ProgressBar value={60} variant="default" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Success</h3>
        <ProgressBar value={100} variant="success" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Warning</h3>
        <ProgressBar value={50} variant="warning" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Danger</h3>
        <ProgressBar value={25} variant="danger" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Info</h3>
        <ProgressBar value={80} variant="info" showLabel labelPosition="outside" />
      </div>
    </div>
  ),
};

// Label positions
export const LabelPositions: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Inside Label</h3>
        <ProgressBar value={70} showLabel labelPosition="inside" size="lg" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Outside Label</h3>
        <ProgressBar value={70} showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Top Label</h3>
        <ProgressBar value={70} showLabel labelPosition="top" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Custom Label</h3>
        <ProgressBar value={70} label="7 of 10 completed" labelPosition="top" />
      </div>
    </div>
  ),
};

// Striped variants
export const Striped: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Striped (Static)</h3>
        <ProgressBar value={60} variant="default" striped showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Striped (Animated)
        </h3>
        <ProgressBar
          value={60}
          variant="success"
          striped
          animated
          showLabel
          labelPosition="outside"
        />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          All Variants with Animation
        </h3>
        <div className="luca-flex luca-flex-col luca-gap-3">
          <ProgressBar
            value={45}
            variant="default"
            striped
            animated
            showLabel
            labelPosition="outside"
          />
          <ProgressBar
            value={60}
            variant="success"
            striped
            animated
            showLabel
            labelPosition="outside"
          />
          <ProgressBar
            value={50}
            variant="warning"
            striped
            animated
            showLabel
            labelPosition="outside"
          />
          <ProgressBar
            value={30}
            variant="danger"
            striped
            animated
            showLabel
            labelPosition="outside"
          />
          <ProgressBar
            value={75}
            variant="info"
            striped
            animated
            showLabel
            labelPosition="outside"
          />
        </div>
      </div>
    </div>
  ),
};

// Interactive progress
export const Interactive: Story = {
  args: { value: 0 },
  render: () => {
    const [progress, setProgress] = useState(0);

    const handleIncrease = () => {
      setProgress((prev) => Math.min(prev + 10, 100));
    };

    const handleDecrease = () => {
      setProgress((prev) => Math.max(prev - 10, 0));
    };

    const handleReset = () => {
      setProgress(0);
    };

    return (
      <div className="luca-flex luca-flex-col luca-gap-6">
        <ProgressBar value={progress} variant="default" showLabel labelPosition="top" size="lg" />
        <div className="luca-flex luca-gap-3">
          <Button onClick={handleDecrease} disabled={progress === 0}>
            Decrease
          </Button>
          <Button onClick={handleIncrease} disabled={progress === 100}>
            Increase
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    );
  },
};

// Auto-progressing
export const AutoProgress: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
      if (!isRunning) return;

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => {
      setProgress(0);
      setIsRunning(true);
    };

    const handlePause = () => {
      setIsRunning(false);
    };

    const handleReset = () => {
      setProgress(0);
      setIsRunning(false);
    };

    return (
      <div className="luca-flex luca-flex-col luca-gap-6">
        <ProgressBar
          value={progress}
          variant={progress === 100 ? 'success' : 'default'}
          showLabel
          labelPosition="top"
          striped={isRunning}
          animated={isRunning}
          size="lg"
        />
        <div className="luca-flex luca-gap-3">
          <Button onClick={handleStart} disabled={isRunning}>
            Start
          </Button>
          <Button onClick={handlePause} disabled={!isRunning}>
            Pause
          </Button>
          <Button variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    );
  },
};

// Multiple progress bars (dashboard example)
export const MultipleProgressBars: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-max-w-2xl">
      <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">
        Course Progress Dashboard
      </h3>

      <div className="luca-space-y-4">
        <div className="luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <ProgressBar
            value={100}
            variant="success"
            label="Mathematics - Completed"
            labelPosition="top"
            size="md"
          />
        </div>

        <div className="luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <ProgressBar
            value={75}
            variant="default"
            label="Science - 15 of 20 lessons"
            labelPosition="top"
            size="md"
          />
        </div>

        <div className="luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <ProgressBar
            value={45}
            variant="warning"
            label="History - 9 of 20 lessons"
            labelPosition="top"
            size="md"
          />
        </div>

        <div className="luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <ProgressBar
            value={15}
            variant="danger"
            label="Literature - Behind schedule"
            labelPosition="top"
            size="md"
          />
        </div>

        <div className="luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <ProgressBar
            value={90}
            variant="info"
            label="Art - 18 of 20 lessons"
            labelPosition="top"
            size="md"
          />
        </div>
      </div>
    </div>
  ),
};

// File upload example
export const FileUpload: Story = {
  render: () => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const simulateUpload = () => {
      setUploadProgress(0);
      setIsUploading(true);

      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };

    return (
      <div className="luca-flex luca-flex-col luca-gap-6 luca-max-w-lg">
        <div className="luca-p-6 luca-border-2 luca-border-dashed luca-border-neutral-300 luca-rounded-lg luca-text-center">
          <p className="luca-text-sm luca-text-neutral-600 luca-mb-4">
            {isUploading ? 'Uploading file...' : 'Click to upload a file'}
          </p>

          {uploadProgress > 0 && (
            <div className="luca-mb-4">
              <ProgressBar
                value={uploadProgress}
                variant={uploadProgress === 100 ? 'success' : 'default'}
                showLabel
                labelPosition="top"
                striped
                animated={isUploading}
              />
            </div>
          )}

          <Button onClick={simulateUpload} disabled={isUploading} variant="primary">
            {uploadProgress === 100 ? 'Upload Complete!' : 'Upload File'}
          </Button>
        </div>
      </div>
    );
  },
};

// With custom styles
export const WithCustomStyles: Story = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Custom Track Color
        </h3>
        <ProgressBar
          value={60}
          showLabel
          labelPosition="outside"
          trackClassName="luca-bg-purple-100"
          barClassName="luca-bg-purple-500"
        />
      </div>

      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Custom Gradient</h3>
        <ProgressBar
          value={75}
          showLabel
          labelPosition="outside"
          barClassName="luca-bg-gradient-to-r luca-from-pink-500 luca-to-orange-500"
        />
      </div>

      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Custom Height via Styles
        </h3>
        <ProgressBar
          value={50}
          showLabel
          labelPosition="outside"
          customStyles={{ height: '20px' }}
          trackClassName="!luca-h-auto"
        />
      </div>
    </div>
  ),
};
