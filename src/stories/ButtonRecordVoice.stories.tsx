import React from 'react';
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
    // Levels will be reordered to display from center outwards
    // Order [0, 1, 2, 3, 4, 5, 6, 7, 8] -> Display [4, 3, 5, 2, 6, 1, 7, 0, 8]
    // This creates a center-to-sides pattern
    audioLevels: [20, 40, 60, 80, 100, 85, 65, 45, 25],
  },
};

// Recording with animated audio levels
export const RecordingAnimated: Story = {
  render: () => {
    const [audioLevels, setAudioLevels] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

    useEffect(() => {
      const interval = setInterval(() => {
        // Simulate more realistic audio levels with variation
        setAudioLevels(Array.from({ length: 9 }, () => 20 + Math.random() * 80));
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

// Uncontrolled example - Component manages its own state and records real audio
export const Uncontrolled: Story = {
  render: () => {
    const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
    const [hasPermission, setHasPermission] = useState<boolean | undefined>(undefined);

    const handleRecordingData = (blob: Blob) => {
      console.log('Recording data received:', blob.size, 'bytes');
      setRecordedBlob(blob);

      // Create URL for playback
      const url = URL.createObjectURL(blob);
      console.log('Audio URL:', url);
    };

    const handlePermissionChange = (granted: boolean) => {
      console.log('Permission changed:', granted);
      setHasPermission(granted);
    };

    const handleStartRecording = () => {
      console.log('Recording started');
      setRecordedBlob(null);
    };

    const handleStopRecording = () => {
      console.log('Recording stopped');
    };

    const handleDeleteRecording = () => {
      console.log('Recording deleted');
      setRecordedBlob(null);
    };

    return (
      <div className="luca-space-y-4">
        <div className="luca-text-center luca-space-y-2">
          <p className="luca-text-sm luca-font-semibold luca-text-neutral-700">
            Uncontrolled Mode - Real Audio Recording
          </p>
          <p className="luca-text-xs luca-text-neutral-500">
            Component manages its own state and captures real microphone audio
          </p>
          {hasPermission !== undefined && (
            <p className="luca-text-xs luca-text-neutral-500">
              Microphone: {hasPermission ? '✓ Granted' : '✗ Denied'}
            </p>
          )}
          {recordedBlob && (
            <div className="luca-space-y-1">
              <p className="luca-text-xs luca-text-success-600 luca-font-semibold">
                Recorded: {(recordedBlob.size / 1024).toFixed(2)} KB
              </p>
              <audio controls src={URL.createObjectURL(recordedBlob)} className="luca-w-full" />
            </div>
          )}
        </div>
        <ButtonRecordVoice
          onStartRecording={handleStartRecording}
          onStopRecording={handleStopRecording}
          onDeleteRecording={handleDeleteRecording}
          onRecordingData={handleRecordingData}
          onPermissionChange={handlePermissionChange}
        />
      </div>
    );
  },
};

// Interactive example with controlled state management
export const Controlled: Story = {
  render: () => {
    const [state, setState] = useState<'default' | 'recording' | 'disabled'>('default');
    const [audioLevels, setAudioLevels] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [hasPermission, setHasPermission] = useState<boolean | undefined>(undefined);
    const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);

    const handleStartRecording = () => {
      console.log('Starting recording...');
      setState('recording');

      // Simulate audio levels
      const id = setInterval(() => {
        setAudioLevels(Array.from({ length: 9 }, () => Math.random() * 100));
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
      setRecordedBlob(null);
    };

    const handleRecordingData = (blob: Blob) => {
      console.log('Recording data received:', blob.size, 'bytes');
      setRecordedBlob(blob);
    };

    const handlePermissionChange = (granted: boolean) => {
      console.log('Permission changed:', granted);
      setHasPermission(granted);
    };

    return (
      <div className="luca-space-y-4">
        <div className="luca-text-center luca-space-y-2">
          <p className="luca-text-sm luca-font-semibold luca-text-neutral-700">
            Controlled Mode - Simulated Audio Levels
          </p>
          <p className="luca-text-xs luca-text-neutral-500">
            Parent component manages state and provides simulated audio levels
          </p>
          <p className="luca-text-sm luca-font-semibold">
            Current State: <span className="luca-text-primary-600">{state}</span>
          </p>
          {hasPermission !== undefined && (
            <p className="luca-text-xs luca-text-neutral-500">
              Microphone: {hasPermission ? '✓ Granted' : '✗ Denied'}
            </p>
          )}
          {recordedBlob && (
            <p className="luca-text-xs luca-text-success-600">
              Recorded: {(recordedBlob.size / 1024).toFixed(2)} KB
            </p>
          )}
        </div>
        <ButtonRecordVoice
          state={state}
          audioLevels={audioLevels}
          hasPermission={hasPermission}
          onStartRecording={handleStartRecording}
          onStopRecording={handleStopRecording}
          onDeleteRecording={handleDeleteRecording}
          onRecordingData={handleRecordingData}
          onPermissionChange={handlePermissionChange}
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
        <ButtonRecordVoice state="recording" audioLevels={[30, 60, 40, 80, 100, 70, 50, 60, 40]} />
      </div>
      <div>
        <h3 className="luca-text-sm luca-font-semibold luca-mb-2">Disabled</h3>
        <ButtonRecordVoice state="disabled" />
      </div>
    </div>
  ),
};

// With max duration (uncontrolled)
export const WithMaxDuration: Story = {
  render: () => {
    const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
    const maxDuration = 5; // 5 seconds

    const handleRecordingData = (blob: Blob) => {
      console.log('Recording data received:', blob.size, 'bytes');
      setRecordedBlob(blob);
    };

    const handleStartRecording = () => {
      console.log('Recording started');
      setRecordedBlob(null);
    };

    const handleStopRecording = () => {
      console.log('Recording stopped (max duration reached or manually stopped)');
    };

    const handleDeleteRecording = () => {
      console.log('Recording deleted');
      setRecordedBlob(null);
    };

    return (
      <div className="luca-space-y-4">
        <div className="luca-text-center luca-space-y-2">
          <p className="luca-text-sm luca-font-semibold luca-text-neutral-700">
            Auto-Stop with Max Duration
          </p>
          <p className="luca-text-sm">
            Max duration:{' '}
            <span className="luca-font-semibold luca-text-primary-600">{maxDuration}s</span>
          </p>
          <p className="luca-text-xs luca-text-neutral-500">
            Recording will automatically stop after {maxDuration} seconds
          </p>
          {recordedBlob && (
            <div className="luca-space-y-1">
              <p className="luca-text-xs luca-text-success-600 luca-font-semibold">
                Recorded: {(recordedBlob.size / 1024).toFixed(2)} KB
              </p>
              <audio controls src={URL.createObjectURL(recordedBlob)} className="luca-w-full" />
            </div>
          )}
        </div>
        <ButtonRecordVoice
          maxDuration={maxDuration}
          onStartRecording={handleStartRecording}
          onStopRecording={handleStopRecording}
          onDeleteRecording={handleDeleteRecording}
          onRecordingData={handleRecordingData}
        />
      </div>
    );
  },
};

