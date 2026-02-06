import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBarCustom } from '../components/ProgressBarCustom';
import { Button } from '../components/Button';

const meta = {
  title: 'Components/ProgressBarCustom',
  component: ProgressBarCustom,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A custom progress bar component with enhanced visual effects, multiple variants, sizes, and customization options. Features custom border effects and shadow styling.',
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
      control: 'select',
      options: ['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'],
      description: 'Visual variant (uses tailwind colors)',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the progress bar (responsive)',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'disabled'],
      description: 'State of the progress bar',
      table: {
        defaultValue: { summary: 'default' },
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
      control: 'select',
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
    showBorder: {
      control: 'boolean',
      description: 'Show border/outline effect',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof ProgressBarCustom>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic story
export const Default: Story = {
  args: {
    value: 70,
    variant: 'primary',
    size: 'md',
    state: 'default',
    showBorder: true,
  },
};

// All sizes
export const AllSizes: Story = {
  args: {
    value: 70,
    variant: 'primary',
    size: 'md',
    state: 'default',
    showBorder: true,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Extra Small (XS)</h3>
        <ProgressBarCustom value={45} size="xs" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Small (SM)</h3>
        <ProgressBarCustom value={45} size="sm" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Medium (MD) - Default
        </h3>
        <ProgressBarCustom value={60} size="md" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Large (LG)</h3>
        <ProgressBarCustom value={75} size="lg" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Extra Large (XL)</h3>
        <ProgressBarCustom value={85} size="xl" showLabel labelPosition="outside" />
      </div>
    </div>
  ),
};

// All variants
export const AllVariants: Story = {
  args: {
    value: 70,
    variant: 'primary',
    size: 'md',
    state: 'default',
    showBorder: true,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Primary</h3>
        <ProgressBarCustom value={60} variant="primary" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Neutral</h3>
        <ProgressBarCustom value={60} variant="neutral" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Accent</h3>
        <ProgressBarCustom value={60} variant="accent" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Success</h3>
        <ProgressBarCustom value={100} variant="success" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Warning</h3>
        <ProgressBarCustom value={50} variant="warning" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Danger</h3>
        <ProgressBarCustom value={25} variant="danger" showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Info</h3>
        <ProgressBarCustom value={80} variant="info" showLabel labelPosition="outside" />
      </div>
    </div>
  ),
};

// States
export const States: Story = {
  args: {
    value: 70,
    variant: 'primary',
    size: 'md',
    state: 'default',
    showBorder: true,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Default</h3>
        <ProgressBarCustom
          value={70}
          variant="primary"
          state="default"
          showLabel
          labelPosition="outside"
        />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Hover</h3>
        <ProgressBarCustom
          value={70}
          variant="primary"
          state="hover"
          showLabel
          labelPosition="outside"
        />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Disabled</h3>
        <ProgressBarCustom
          value={70}
          variant="primary"
          state="disabled"
          showLabel
          labelPosition="outside"
        />
      </div>
    </div>
  ),
};

// Border variations
export const BorderVariations: Story = {
  args: {
    value: 70,
    variant: 'primary',
    size: 'md',
    state: 'default',
    showBorder: true,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          With Border (Default)
        </h3>
        <ProgressBarCustom
          value={70}
          variant="primary"
          showBorder={true}
          showLabel
          labelPosition="outside"
        />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Without Border</h3>
        <ProgressBarCustom
          value={70}
          variant="primary"
          showBorder={false}
          showLabel
          labelPosition="outside"
        />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          All Variants with Border
        </h3>
        <div className="luca-flex luca-flex-col luca-gap-3">
          <ProgressBarCustom value={60} variant="primary" showBorder={true} />
          <ProgressBarCustom value={60} variant="success" showBorder={true} />
          <ProgressBarCustom value={60} variant="warning" showBorder={true} />
          <ProgressBarCustom value={60} variant="danger" showBorder={true} />
          <ProgressBarCustom value={60} variant="info" showBorder={true} />
        </div>
      </div>
    </div>
  ),
};

// Label positions
export const LabelPositions: Story = {
  args: {
    value: 70,
    variant: 'primary',
    size: 'md',
    state: 'default',
    showBorder: true,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Inside Label</h3>
        <ProgressBarCustom value={70} showLabel labelPosition="inside" size="lg" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Outside Label</h3>
        <ProgressBarCustom value={70} showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Top Label</h3>
        <ProgressBarCustom value={70} showLabel labelPosition="top" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Custom Label</h3>
        <ProgressBarCustom value={70} label="7 of 10 completed" labelPosition="top" />
      </div>
    </div>
  ),
};

// Striped variants
export const Striped: Story = {
  args: {
    value: 70,
    variant: 'primary',
    size: 'md',
    state: 'default',
    showBorder: true,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Striped (Static)</h3>
        <ProgressBarCustom value={60} variant="primary" striped showLabel labelPosition="outside" />
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Striped (Animated)
        </h3>
        <ProgressBarCustom
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
          <ProgressBarCustom
            value={45}
            variant="primary"
            striped
            animated
            showLabel
            labelPosition="outside"
          />
          <ProgressBarCustom
            value={60}
            variant="success"
            striped
            animated
            showLabel
            labelPosition="outside"
          />
          <ProgressBarCustom
            value={50}
            variant="warning"
            striped
            animated
            showLabel
            labelPosition="outside"
          />
          <ProgressBarCustom
            value={30}
            variant="danger"
            striped
            animated
            showLabel
            labelPosition="outside"
          />
          <ProgressBarCustom
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
        <ProgressBarCustom
          value={progress}
          variant="primary"
          showLabel
          labelPosition="top"
          size="lg"
        />
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
  args: {
    value: 70,
    variant: 'primary',
    size: 'md',
    state: 'default',
    showBorder: true,
  },
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
        <ProgressBarCustom
          value={progress}
          variant={progress === 100 ? 'success' : 'primary'}
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
  args: {
    value: 70,
    variant: 'primary',
    size: 'md',
    state: 'default',
    showBorder: true,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-max-w-2xl">
      <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">
        Course Progress Dashboard
      </h3>

      <div className="luca-space-y-4">
        <div className="luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <ProgressBarCustom
            value={100}
            variant="success"
            label="Mathematics - Completed"
            labelPosition="top"
            size="md"
          />
        </div>

        <div className="luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <ProgressBarCustom
            value={75}
            variant="primary"
            label="Science - 15 of 20 lessons"
            labelPosition="top"
            size="md"
          />
        </div>

        <div className="luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <ProgressBarCustom
            value={45}
            variant="warning"
            label="History - 9 of 20 lessons"
            labelPosition="top"
            size="md"
          />
        </div>

        <div className="luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <ProgressBarCustom
            value={15}
            variant="danger"
            label="Literature - Behind schedule"
            labelPosition="top"
            size="md"
          />
        </div>

        <div className="luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <ProgressBarCustom
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
  args: {
    value: 70,
    variant: 'primary',
    size: 'md',
    state: 'default',
    showBorder: true,
  },
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
              <ProgressBarCustom
                value={uploadProgress}
                variant={uploadProgress === 100 ? 'success' : 'primary'}
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

// Responsive example
export const Responsive: Story = {
  args: {
    value: 70,
    variant: 'primary',
    size: 'md',
    state: 'default',
    showBorder: true,
  },
  render: () => (
    <div className="luca-p-8 luca-w-full luca-max-w-2xl luca-border luca-border-neutral-200 luca-rounded-lg luca-bg-neutral-50">
      <p className="luca-text-sm luca-text-neutral-600 luca-mb-4">
        Redimensiona la ventana para ver el comportamiento responsive del progress bar custom.
      </p>
      <div className="luca-flex luca-flex-col luca-gap-4">
        <ProgressBarCustom
          value={70}
          variant="primary"
          size="xs"
          showLabel
          labelPosition="outside"
        />
        <ProgressBarCustom
          value={70}
          variant="primary"
          size="sm"
          showLabel
          labelPosition="outside"
        />
        <ProgressBarCustom
          value={70}
          variant="primary"
          size="md"
          showLabel
          labelPosition="outside"
        />
        <ProgressBarCustom
          value={70}
          variant="primary"
          size="lg"
          showLabel
          labelPosition="outside"
        />
        <ProgressBarCustom
          value={70}
          variant="primary"
          size="xl"
          showLabel
          labelPosition="outside"
        />
      </div>
    </div>
  ),
};

// With custom styles
export const WithCustomStyles: Story = {
  args: {
    value: 70,
    variant: 'primary',
    size: 'md',
    state: 'default',
    showBorder: true,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          Custom Track Color
        </h3>
        <ProgressBarCustom
          value={60}
          showLabel
          labelPosition="outside"
          trackClassName="luca-bg-purple-100"
          barClassName="luca-bg-purple-500"
        />
      </div>

      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">Custom Gradient</h3>
        <ProgressBarCustom
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
        <ProgressBarCustom
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

// All variants with all states
export const AllVariantsWithStates: Story = {
  args: {
    value: 70,
    variant: 'primary',
    size: 'md',
    state: 'default',
    showBorder: true,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-8">
      {(['primary', 'neutral', 'accent', 'success', 'warning', 'danger', 'info'] as const).map(
        (variant) => (
          <div key={variant} className="luca-flex luca-flex-col luca-gap-4">
            <h3 className="luca-text-base luca-font-semibold luca-text-neutral-900">
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </h3>
            <div className="luca-flex luca-flex-col luca-gap-3">
              <div className="luca-flex luca-flex-col luca-gap-2">
                <span className="luca-text-xs luca-text-neutral-600">Default</span>
                <ProgressBarCustom
                  value={70}
                  variant={variant}
                  state="default"
                  showLabel
                  labelPosition="outside"
                />
              </div>
              <div className="luca-flex luca-flex-col luca-gap-2">
                <span className="luca-text-xs luca-text-neutral-600">Hover</span>
                <ProgressBarCustom
                  value={70}
                  variant={variant}
                  state="hover"
                  showLabel
                  labelPosition="outside"
                />
              </div>
              <div className="luca-flex luca-flex-col luca-gap-2">
                <span className="luca-text-xs luca-text-neutral-600">Disabled</span>
                <ProgressBarCustom
                  value={70}
                  variant={variant}
                  state="disabled"
                  showLabel
                  labelPosition="outside"
                />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  ),
};

// Comparison with regular ProgressBar
export const Comparison: Story = {
  args: {
    value: 70,
    variant: 'primary',
    size: 'md',
    state: 'default',
    showBorder: true,
  },
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          ProgressBar (Standard)
        </h3>
        <div className="luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <p className="luca-text-xs luca-text-neutral-600 luca-mb-2">
            Standard progress bar without custom border effects
          </p>
          {/* Note: This would require importing ProgressBar if needed for comparison */}
        </div>
      </div>
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-neutral-700">
          ProgressBarCustom (Enhanced)
        </h3>
        <div className="luca-p-4 luca-bg-neutral-50 luca-rounded-lg">
          <p className="luca-text-xs luca-text-neutral-600 luca-mb-2">
            Custom progress bar with enhanced border effects and styling
          </p>
          <ProgressBarCustom value={70} variant="primary" showLabel labelPosition="outside" />
        </div>
      </div>
    </div>
  ),
};
