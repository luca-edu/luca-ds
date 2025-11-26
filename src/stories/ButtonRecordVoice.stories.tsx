import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { ButtonRecordVoice } from '../components/ButtonRecordVoice';

const meta = {
  title: 'Components/ButtonRecordVoice',
  component: ButtonRecordVoice,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'recording', 'disabled'],
      description: 'Current state of the recorder',
    },
    audioLevels: {
      control: 'object',
      description: 'Audio levels for the visualizer (0-100 for each of 9 bars)',
    },
    maxDuration: {
      control: 'number',
      description: 'Maximum recording duration in seconds',
    },
    audioFormat: {
      control: 'text',
      description: 'Audio format/MIME type',
    },
    hasPermission: {
      control: 'boolean',
      description: 'Whether microphone permissions have been granted',
    },
    onStartRecording: {
      action: 'start recording',
      description: 'Callback when recording starts',
    },
    onStopRecording: {
      action: 'stop recording',
      description: 'Callback when recording stops/sends',
    },
    onDeleteRecording: {
      action: 'delete recording',
      description: 'Callback when recording is deleted',
    },
    onRecordingData: {
      action: 'recording data',
      description: 'Callback that provides the recorded audio data',
    },
    onPermissionChange: {
      action: 'permission change',
      description: 'Callback when permission state changes',
    },
  },
} satisfies Meta<typeof ButtonRecordVoice>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default state
export const Default: Story = {
  args: {
    state: 'default',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    state: 'disabled',
  },
};

// Recording state with static audio levels
export const Recording: Story = {
  args: {
    state: 'recording',
    audioLevels: [30, 60, 40, 80, 100, 70, 50, 60, 40],
  },
};

// Recording with animated audio levels
export const RecordingAnimated: Story = {
  render: () => {
    const [audioLevels, setAudioLevels] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    useEffect(() => {
      const interval = setInterval(() => {
        setAudioLevels(
          Array.from({ length: 9 }, () => Math.random() * 100)
        );
      }, 100);

      return () => clearInterval(interval);
    }, []);

    return (
      <ButtonRecordVoice
        state="recording"
        audioLevels={audioLevels}
        onDeleteRecording={() => console.log('Delete clicked')}
        onStopRecording={() => console.log('Stop clicked')}
      />
    );
  },
};

// Interactive example with state management
export const Interactive: Story = {
  render: () => {
    const [state, setState] = useState<'default' | 'recording' | 'disabled'>('default');
    const [audioLevels, setAudioLevels] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    const handleStartRecording = () => {
      console.log('Starting recording...');
      setState('recording');

      // Simulate audio levels
      const id = setInterval(() => {
        setAudioLevels(
          Array.from({ length: 9 }, () => Math.random() * 100)
        );
      }, 100);
      setIntervalId(id);
    };

    const handleStopRecording = () => {
      console.log('Stopping recording...');
      setState('default');
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
      setAudioLevels([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    };

    const handleDeleteRecording = () => {
      console.log('Deleting recording...');
      setState('default');
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
      setAudioLevels([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    };

    return (
      <div className="luca-space-y-4">
        <div className="luca-text-center">
          <p className="luca-text-sm luca-font-semibold">
            Current State: <span className="luca-text-primary-600">{state}</span>
          </p>
        </div>
        <ButtonRecordVoice
          state={state}
          audioLevels={audioLevels}
          onStartRecording={handleStartRecording}
          onStopRecording={handleStopRecording}
          onDeleteRecording={handleDeleteRecording}
        />
      </div>
    );
  },
};

// States comparison
export const StatesComparison: Story = {
  render: () => (
    <div className="luca-space-y-8">
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-2">Default</h3>
        <ButtonRecordVoice state="default" />
      </div>
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-2">Recording</h3>
        <ButtonRecordVoice
          state="recording"
          audioLevels={[30, 60, 40, 80, 100, 70, 50, 60, 40]}
        />
      </div>
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-2">Disabled</h3>
        <ButtonRecordVoice state="disabled" />
      </div>
    </div>
  ),
};

// With max duration
export const WithMaxDuration: Story = {
  render: () => {
    const [state, setState] = useState<'default' | 'recording' | 'disabled'>('default');
    const [audioLevels, setAudioLevels] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
    const maxDuration = 10; // 10 seconds

    const handleStartRecording = () => {
      console.log('Starting recording...');
      setState('recording');

      // Simulate audio levels
      const id = setInterval(() => {
        setAudioLevels(
          Array.from({ length: 9 }, () => Math.random() * 100)
        );
      }, 100);
      setIntervalId(id);

      // Auto-stop after max duration
      const tid = setTimeout(() => {
        console.log('Max duration reached, stopping...');
        handleStopRecording();
      }, maxDuration * 1000);
      setTimeoutId(tid);
    };

    const handleStopRecording = () => {
      console.log('Stopping recording...');
      setState('default');
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
      setAudioLevels([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    };

    const handleDeleteRecording = () => {
      console.log('Deleting recording...');
      setState('default');
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
      setAudioLevels([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    };

    return (
      <div className="luca-space-y-4">
        <div className="luca-text-center">
          <p className="luca-text-sm">
            Max duration: <span className="luca-font-semibold">{maxDuration}s</span>
          </p>
          <p className="luca-text-sm luca-text-neutral-500">
            Recording will auto-stop after {maxDuration} seconds
          </p>
        </div>
        <ButtonRecordVoice
          state={state}
          audioLevels={audioLevels}
          maxDuration={maxDuration}
          onStartRecording={handleStartRecording}
          onStopRecording={handleStopRecording}
          onDeleteRecording={handleDeleteRecording}
        />
      </div>
    );
  },
};
