import React from 'react';
import { cn } from '../utils/cn';

export interface AudioVisualizerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the audio is currently playing
   */
  isPlaying?: boolean;
  /**
   * Callback when play/pause button is clicked
   */
  onPlayPause?: () => void;
  /**
   * Whether to show the completion checkmark
   */
  showCompleted?: boolean;
  /**
   * Current time in seconds
   */
  currentTime?: number;
  /**
   * Total duration in seconds
   */
  duration?: number;
  /**
   * Progress percentage (0-100)
   * If not provided, will be calculated from currentTime/duration
   */
  progress?: number;
  /**
   * Callback when user seeks to a position (0-100)
   */
  onSeek?: (progress: number) => void;
  /**
   * Custom waveform data (heights for each bar, 0-1 scale)
   * If not provided, uses default waveform pattern
   */
  waveformData?: number[];
  /**
   * Color for the waveform bars
   */
  waveformColor?: string;
  /**
   * Color for the played portion of waveform
   */
  waveformPlayedColor?: string;
  /**
   * Background color of the component
   */
  backgroundColor?: string;
}

// Default waveform pattern based on Figma design (normalized 0-1)
const defaultWaveform = [
  0.08, 0.25, 0.25, 0.33, 0.33, 0.33, 0.67, 0.58, 0.42, 0.33, 0.25, 0.25, 0.33, 0.25, 0.33, 0.33,
  0.42, 0.58, 0.42, 0.33, 0.25, 0.25, 0.25, 0.08, 0.08, 0.08, 0.08, 0.08, 0.17, 0.17, 0.25, 0.25,
  0.33, 0.33, 0.42, 0.42, 0.33, 0.33, 0.33, 0.25, 0.25, 0.25, 0.25, 0.25,
];

// Helper function to format time in MM:SS
const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const AudioVisualizer = React.forwardRef<HTMLDivElement, AudioVisualizerProps>(
  (
    {
      isPlaying = false,
      onPlayPause,
      showCompleted = false,
      currentTime = 0,
      duration = 0,
      progress: propProgress,
      onSeek,
      waveformData = defaultWaveform,
      waveformColor = '#32c8bd',
      waveformPlayedColor = '#ffffff',
      backgroundColor = '#5e77f6',
      className,
      ...props
    },
    ref
  ) => {
    // Calculate progress from current time between duration
    const progress =
      propProgress !== undefined ? propProgress : duration > 0 ? (currentTime / duration) * 100 : 0;

    const progressBarRef = React.useRef<HTMLDivElement>(null);

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!onSeek || !progressBarRef.current) return;

      const rect = progressBarRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      onSeek(Math.max(0, Math.min(100, percentage)));
    };

    return (
      <div
        ref={ref}
        className={cn('luca-bg-primary-400 luca-rounded-xl luca-p-1 luca-pt-1', className)}
        style={{ backgroundColor }}
        {...props}
      >
        <div className="luca-p-2 luca-pt-2">
          {/* Audio Controls */}
          <div className="luca-flex luca-gap-3 luca-items-start luca-w-full">
            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={onPlayPause}
              className="luca-relative luca-rounded-full luca-shrink-0 luca-w-8 luca-h-8 luca-bg-white hover:luca-bg-gray-50 luca-transition-colors luca-flex luca-items-center luca-justify-center focus:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-white focus-visible:luca-ring-offset-2 focus-visible:luca-ring-offset-primary-400"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                // Pause icon
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="4" y="3" width="2.5" height="10" rx="0.5" fill={backgroundColor} />
                  <rect x="9.5" y="3" width="2.5" height="10" rx="0.5" fill={backgroundColor} />
                </svg>
              ) : (
                // Play icon
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 3.5C5 3.03406 5.52199 2.76504 5.90211 3.02513L12.5 7.52513C12.8329 7.75623 12.8329 8.24377 12.5 8.47487L5.90211 12.9749C5.52199 13.235 5 12.9659 5 12.5V3.5Z"
                    fill={backgroundColor}
                  />
                </svg>
              )}
            </button>

            {/* Waveform Container */}
            <div className="luca-flex-1 luca-min-w-0 luca-flex luca-flex-col luca-gap-0.5">
              {/* Waveform Bars */}
              <div className="luca-flex luca-gap-0.5 luca-items-center luca-overflow-hidden luca-w-full">
                <div className="luca-flex luca-gap-[2.7px] luca-h-6 luca-items-center luca-overflow-hidden luca-w-full">
                  {waveformData.map((height, index) => {
                    // Calculate height in pixels (max 16px for tallest bars)
                    const barHeight = Math.max(2, Math.round(height * 16));
                    // Determine if this bar is in the played portion
                    const barProgress = (index / waveformData.length) * 100;
                    const isPlayed = barProgress <= progress;

                    return (
                      <div
                        key={index}
                        className="luca-flex-1 luca-min-w-0 luca-rounded-full luca-transition-all"
                        style={{
                          height: `${barHeight}px`,
                          backgroundColor: isPlayed ? waveformPlayedColor : waveformColor,
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Duration / Progress Bar */}
              {duration > 0 && (
                <div className="luca-flex luca-gap-1 luca-items-center luca-w-full">
                  <div
                    ref={progressBarRef}
                    className="luca-flex-1 luca-h-1 luca-bg-white/20 luca-rounded-full luca-cursor-pointer luca-relative luca-overflow-hidden"
                    onClick={handleProgressClick}
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="luca-absolute luca-left-0 luca-top-0 luca-h-full luca-bg-white luca-rounded-full luca-transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="luca-text-[10px] luca-text-white luca-font-medium luca-whitespace-nowrap">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Completion Checkmark */}
          {showCompleted && (
            <div className="luca-flex luca-gap-1 luca-h-6 luca-items-center luca-justify-end luca-rounded-full luca-w-full luca-mt-0.5">
              <div className="luca-w-5 luca-h-5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

AudioVisualizer.displayName = 'AudioVisualizer';
