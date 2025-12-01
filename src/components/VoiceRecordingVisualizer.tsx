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
  const levels = [...audioLevels];
  while (levels.length < 9) {
    levels.push(0);
  }
  levels.length = 9;

  const normalizedLevels = levels.map((level) => Math.max(10, level));
  const centerOutOrder = [4, 3, 5, 2, 6, 1, 7, 0, 8];
  const reorderedLevels = centerOutOrder.map((i) => normalizedLevels[i]);

  const maxHeight = 36;
  const minHeight = 8;

  const getBarHeight = (level: number): number => {
    const clampedLevel = Math.max(10, Math.min(100, level));
    const percentage = (clampedLevel - 10) / 90;
    return minHeight + (maxHeight - minHeight) * percentage;
  };

  return (
    <div
      className={cn('luca-flex luca-gap-[4px] luca-items-center luca-justify-center', className)}
    >
      {reorderedLevels.map((level, index) => (
        <div
          key={index}
          className="luca-bg-accent-500 luca-rounded-full luca-shrink-0 luca-w-[4px] luca-transition-all luca-duration-100"
          style={{
            height: `${getBarHeight(level)}px`,
          }}
        />
      ))}
    </div>
  );
};
