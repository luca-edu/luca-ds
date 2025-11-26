import React from 'react';
import { MicrophoneIcon, TrashIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { cn } from '../utils/cn';
import { VoiceRecordingVisualizer } from './VoiceRecordingVisualizer';

export type ButtonRecordVoiceState = 'default' | 'recording' | 'disabled';

export interface ButtonRecordVoiceProps {
  /**
   * Current state of the recorder
   * @default 'default'
   */
  state?: ButtonRecordVoiceState;

  /**
   * Audio levels for the visualizer (0-100 for each of 9 bars)
   * Only used when state is 'recording'
   */
  audioLevels?: number[];

  /**
   * Callback when recording starts (microphone button clicked)
   */
  onStartRecording?: () => void;

  /**
   * Callback when recording stops/sends (paper airplane button clicked)
   */
  onStopRecording?: () => void;

  /**
   * Callback when recording is deleted (trash button clicked)
   */
  onDeleteRecording?: () => void;

  /**
   * Callback that provides the recorded audio data
   */
  onRecordingData?: (audioBlob: Blob) => void;

  /**
   * Maximum recording duration in seconds
   */
  maxDuration?: number;

  /**
   * Audio format/MIME type
   * @default 'audio/webm'
   */
  audioFormat?: string;

  /**
   * Whether microphone permissions have been granted
   */
  hasPermission?: boolean;

  /**
   * Callback when permission state changes
   */
  onPermissionChange?: (granted: boolean) => void;

  /**
   * Additional className
   */
  className?: string;
}

export const ButtonRecordVoice: React.FC<ButtonRecordVoiceProps> = ({
  state = 'default',
  audioLevels = [0, 0, 0, 0, 0, 0, 0, 0, 0],
  onStartRecording,
  onStopRecording,
  onDeleteRecording,
  maxDuration,
  audioFormat = 'audio/webm',
  hasPermission,
  onPermissionChange,
  className,
}) => {
  const isDefault = state === 'default';
  const isRecording = state === 'recording';
  const isDisabled = state === 'disabled';

  const handleMicrophoneClick = () => {
    if (isDisabled) return;
    onStartRecording?.();
  };

  const handleDeleteClick = () => {
    if (isDisabled) return;
    onDeleteRecording?.();
  };

  const handleSendClick = () => {
    if (isDisabled) return;
    onStopRecording?.();
  };

  // Default state (show microphone)
  if (isDefault) {
    return (
      <button
        type="button"
        onClick={handleMicrophoneClick}
        className={cn(
          'luca-h-[68px] luca-w-[221px] luca-relative luca-rounded-full',
          'luca-bg-primary-600 luca-border luca-border-solid luca-border-primary-300',
          'luca-flex luca-items-center luca-justify-center luca-overflow-clip',
          'hover:luca-bg-primary-700 luca-transition-all luca-duration-300',
          'luca-cursor-pointer',
          className
        )}
        aria-label="Start recording"
      >
        <MicrophoneIcon className="luca-size-8 luca-text-white luca-transition-transform luca-duration-300" />
      </button>
    );
  }

  // Disabled state
  if (isDisabled) {
    return (
      <div
        className={cn(
          'luca-h-[68px] luca-w-[221px] luca-relative luca-rounded-full',
          'luca-bg-neutral-100 luca-border luca-border-solid luca-border-neutral-200',
          'luca-flex luca-items-center luca-justify-center luca-overflow-clip',
          'luca-cursor-not-allowed luca-opacity-60',
          className
        )}
        aria-label="Recording disabled"
      >
        <MicrophoneIcon className="luca-size-8 luca-text-neutral-400" />
      </div>
    );
  }

  // Recording state (show visualizer + controls)
  return (
    <div
      className={cn(
        'luca-h-[68px] luca-w-[221px] luca-relative luca-rounded-full',
        'luca-bg-primary-400 luca-border luca-border-solid luca-border-primary-200',
        'luca-flex luca-items-center luca-gap-4 luca-px-4',
        'luca-box-border luca-overflow-hidden',
        'luca-transition-all luca-duration-300',
        'luca-animate-[pulse_0.5s_ease-in-out]',
        className
      )}
      style={{
        animation: 'pulse 0.5s ease-in-out',
      }}
      aria-label="Recording in progress"
    >
      {/* Delete button */}
      <button
        type="button"
        onClick={handleDeleteClick}
        className={cn(
          'luca-flex luca-items-center luca-justify-center',
          'luca-size-8 luca-rounded-full luca-shrink-0',
          'luca-bg-primary-600 hover:luca-bg-primary-700',
          'luca-transition-all luca-duration-300 luca-ease-out',
          'luca-p-1',
          'luca-animate-[slideInFromLeft_0.3s_ease-out]',
          'hover:luca-scale-110'
        )}
        style={{
          animation: 'slideInFromLeft 0.3s ease-out',
        }}
        aria-label="Delete recording"
      >
        <TrashIcon className="luca-size-4 luca-text-white luca-transition-transform luca-duration-200" />
      </button>

      {/* Audio Visualizer */}
      <div className="luca-flex-1 luca-flex luca-items-center luca-justify-center luca-animate-[fadeIn_0.4s_ease-out_0.1s] luca-opacity-0" style={{
        animation: 'fadeIn 0.4s ease-out 0.1s forwards',
      }}>
        <VoiceRecordingVisualizer audioLevels={audioLevels} />
      </div>

      {/* Send button */}
      <button
        type="button"
        onClick={handleSendClick}
        className={cn(
          'luca-flex luca-items-center luca-justify-center',
          'luca-size-8 luca-rounded-full luca-shrink-0',
          'luca-bg-primary-600 hover:luca-bg-primary-700',
          'luca-transition-all luca-duration-300 luca-ease-out',
          'luca-p-1',
          'luca-animate-[slideInFromRight_0.3s_ease-out]',
          'hover:luca-scale-110'
        )}
        style={{
          animation: 'slideInFromRight 0.3s ease-out',
        }}
        aria-label="Send recording"
      >
        <div className="luca-rotate-[-45deg] luca-transition-transform luca-duration-200">
          <PaperAirplaneIcon className="luca-size-4 luca-text-white" />
        </div>
      </button>
    </div>
  );
};
