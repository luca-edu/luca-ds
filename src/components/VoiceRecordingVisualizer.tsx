import React from 'react';
import { cn } from '../utils/cn';

export interface VoiceRecordingVisualizerProps {
  /**
   * Array of audio levels (0-100) for each bar
   * Should have 9 values for 9 bars
   */
  audioLevels: number[];

  /**
   * Additional className
   */
  className?: string;
}

export const VoiceRecordingVisualizer: React.FC<VoiceRecordingVisualizerProps> = ({
  audioLevels,
  className,
}) => {
  // Ensure we have exactly 9 bars
  const levels = [...audioLevels];
  while (levels.length < 9) {
    levels.push(0);
  }
  levels.length = 9;

  // Convert percentage (0-100) to height in pixels
  // Max height is 37.895px based on Figma design
  const maxHeight = 37.895;
  const minHeight = 4.211; // Minimum height when audio level is 0

  const getBarHeight = (level: number): number => {
    const clampedLevel = Math.max(0, Math.min(100, level));
    return minHeight + (maxHeight - minHeight) * (clampedLevel / 100);
  };

  return (
    <div className={cn('luca-flex luca-gap-[6.316px] luca-items-center luca-justify-center', className)}>
      {levels.map((level, index) => (
        <div
          key={index}
          className="luca-bg-accent-600 luca-rounded-[52.632px] luca-shrink-0 luca-w-[4.211px] luca-transition-all luca-duration-75"
          style={{
            height: `${getBarHeight(level)}px`,
          }}
        />
      ))}
    </div>
  );
};
