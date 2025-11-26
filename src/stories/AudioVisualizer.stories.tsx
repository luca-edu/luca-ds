import type { Meta, StoryObj } from '@storybook/react';
import { AudioVisualizer } from '../components/AudioVisualizer';
import React, { useState, useEffect } from 'react';

const meta = {
  title: 'Components/AudioVisualizer',
  component: AudioVisualizer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isPlaying: {
      control: 'boolean',
      description: 'Whether the audio is currently playing',
    },
    showCompleted: {
      control: 'boolean',
      description: 'Whether to show the completion checkmark',
    },
    currentTime: {
      control: 'number',
      description: 'Current time in seconds',
    },
    duration: {
      control: 'number',
      description: 'Total duration in seconds',
    },
    waveformColor: {
      control: 'color',
      description: 'Color for the waveform bars',
    },
    waveformPlayedColor: {
      control: 'color',
      description: 'Color for the played portion of waveform',
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the component',
    },
  },
} satisfies Meta<typeof AudioVisualizer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isPlaying: false,
    showCompleted: false,
  },
};

export const WithProgress: Story = {
  args: {
    isPlaying: true,
    showCompleted: false,
    currentTime: 45,
    duration: 180,
  },
};

export const HalfwayThrough: Story = {
  args: {
    isPlaying: true,
    showCompleted: false,
    currentTime: 90,
    duration: 180,
  },
};

export const Completed: Story = {
  args: {
    isPlaying: false,
    showCompleted: true,
    currentTime: 180,
    duration: 180,
  },
};

export const CustomColors: Story = {
  args: {
    isPlaying: true,
    showCompleted: false,
    currentTime: 60,
    duration: 180,
    waveformColor: '#ff6b6b',
    waveformPlayedColor: '#ffffff',
    backgroundColor: '#4c1d95',
  },
};

// Interactive example with state management and simulated audio playback
export const Interactive = {
  render: () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showCompleted, setShowCompleted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const duration = 180; // 3 minutes

    // Simulate audio playback
    useEffect(() => {
      if (!isPlaying) return;

      const interval = setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 1;
          if (next >= duration) {
            setIsPlaying(false);
            setShowCompleted(true);
            return duration;
          }
          return next;
        });
      }, 1000);

      return () => clearInterval(interval);
    }, [isPlaying, duration]);

    const handlePlayPause = () => {
      setIsPlaying(!isPlaying);
      if (currentTime >= duration) {
        setCurrentTime(0);
        setShowCompleted(false);
      }
    };

    const handleSeek = (progress: number) => {
      const newTime = (progress / 100) * duration;
      setCurrentTime(newTime);
    };

    return (
      <div className="luca-flex luca-flex-col luca-gap-4 luca-p-8">
        <AudioVisualizer
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          showCompleted={showCompleted}
          currentTime={currentTime}
          duration={duration}
          onSeek={handleSeek}
        />
        <div className="luca-flex luca-gap-2">
          <button
            onClick={handlePlayPause}
            className="luca-px-4 luca-py-2 luca-bg-blue-500 luca-text-white luca-rounded luca-text-sm"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            onClick={() => setShowCompleted(!showCompleted)}
            className="luca-px-4 luca-py-2 luca-bg-green-500 luca-text-white luca-rounded luca-text-sm"
          >
            {showCompleted ? 'Hide' : 'Show'} Completed
          </button>
          <button
            onClick={() => {
              setCurrentTime(0);
              setIsPlaying(false);
              setShowCompleted(false);
            }}
            className="luca-px-4 luca-py-2 luca-bg-gray-500 luca-text-white luca-rounded luca-text-sm"
          >
            Reset
          </button>
        </div>
      </div>
    );
  },
};

// Custom waveform data example
const customWaveformData = [
  0.1, 0.3, 0.5, 0.7, 0.9, 1.0, 0.9, 0.7, 0.5, 0.3, 0.1, 0.2, 0.4, 0.6, 0.8, 0.6, 0.4, 0.2, 0.3,
  0.5, 0.7, 0.5, 0.3, 0.1, 0.2, 0.4, 0.6, 0.4, 0.2, 0.1,
];

export const CustomWaveform: Story = {
  args: {
    isPlaying: false,
    showCompleted: false,
    waveformData: customWaveformData,
  },
};

// All variations showcase
export const AllVariations = {
  render: () => (
    <div className="luca-flex luca-flex-col luca-gap-6 luca-p-8 luca-bg-gray-50">
      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-gray-700">
          Default (No Duration)
        </h3>
        <AudioVisualizer isPlaying={false} showCompleted={false} />
      </div>

      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-gray-700">
          With Progress Bar - Beginning
        </h3>
        <AudioVisualizer isPlaying={true} showCompleted={false} currentTime={15} duration={180} />
      </div>

      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-gray-700">
          With Progress Bar - Halfway
        </h3>
        <AudioVisualizer isPlaying={true} showCompleted={false} currentTime={90} duration={180} />
      </div>

      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-gray-700">Completed</h3>
        <AudioVisualizer isPlaying={false} showCompleted={true} currentTime={180} duration={180} />
      </div>

      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-gray-700">Custom Colors</h3>
        <AudioVisualizer
          isPlaying={true}
          showCompleted={false}
          currentTime={60}
          duration={180}
          waveformColor="#ff6b6b"
          waveformPlayedColor="#ffffff"
          backgroundColor="#4c1d95"
        />
      </div>

      <div className="luca-flex luca-flex-col luca-gap-2">
        <h3 className="luca-text-sm luca-font-semibold luca-text-gray-700">Custom Waveform</h3>
        <AudioVisualizer
          isPlaying={true}
          showCompleted={false}
          currentTime={45}
          duration={120}
          waveformData={customWaveformData}
        />
      </div>
    </div>
  ),
};
