import React from 'react';
import { MicrophoneIcon, TrashIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { cn } from '../utils/cn';

export type ButtonRecordVoiceState = 'default' | 'recording' | 'disabled';

export interface ButtonRecordVoiceProps {
  /**
   * Current state of the recorder (controlled mode)
   * If not provided, component manages its own state (uncontrolled mode)
   */
  state?: ButtonRecordVoiceState;

  /**
   * Audio levels for the visualizer (0-100 for each of 9 bars)
   * If not provided in recording state, component will calculate from microphone
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

  /**
   * Optional text to display when state is 'default' or 'disabled'
   */
  label?: string;
}

export const ButtonRecordVoice: React.FC<ButtonRecordVoiceProps> = ({
  state: controlledState,
  audioLevels: controlledAudioLevels,
  onStartRecording,
  onStopRecording,
  onDeleteRecording,
  onRecordingData,
  maxDuration,
  audioFormat = 'audio/webm',
  hasPermission,
  onPermissionChange,
  className,
  label,
}) => {
  // Internal state for uncontrolled mode
  const [internalState, setInternalState] = React.useState<ButtonRecordVoiceState>('default');
  const [internalAudioLevels, setInternalAudioLevels] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  // Use controlled state if provided, otherwise use internal state
  const state = controlledState ?? internalState;
  const audioLevels = controlledAudioLevels ?? internalAudioLevels;

  const isDefault = state === 'default';
  const isDisabled = state === 'disabled';

  const prepareVisualizerLevels = React.useCallback((levels: number[]) => {
    const normalizedLevels = [...levels];
    while (normalizedLevels.length < 9) {
      normalizedLevels.push(0);
    }
    normalizedLevels.length = 9;

    const levelsWithMin = normalizedLevels.map((level) => Math.max(10, level));

    const centerOutOrder = [4, 5, 3, 2, 0, 2, 3, 6, 8];
    return centerOutOrder.map((i) => levelsWithMin[i]);
  }, []);

  const getBarHeight = React.useCallback((level: number): number => {
    const maxHeight = 36;
    const minHeight = 8;
    const clampedLevel = Math.max(10, Math.min(100, level));
    const percentage = (clampedLevel - 10) / 90;
    return Math.round(minHeight + (maxHeight - minHeight) * percentage);
  }, []);

  const visualizerLevels = prepareVisualizerLevels(audioLevels);

  const mediaRecorderRef = React.useRef<MediaRecorder | null>(null);
  const mediaStreamRef = React.useRef<MediaStream | null>(null);
  const audioChunksRef = React.useRef<Blob[]>([]);
  const maxDurationTimerRef = React.useRef<number | null>(null);
  const audioContextRef = React.useRef<AudioContext | null>(null);
  const analyserRef = React.useRef<AnalyserNode | null>(null);
  const animationFrameRef = React.useRef<number | null>(null);

  // Cleanup function to stop recording and release resources
  const cleanup = React.useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    if (maxDurationTimerRef.current) {
      window.clearTimeout(maxDurationTimerRef.current);
      maxDurationTimerRef.current = null;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    analyserRef.current = null;
    audioChunksRef.current = [];
  }, []);

  // Check microphone permission
  const checkPermission = React.useCallback(async () => {
    try {
      const result = await navigator.permissions.query({ name: 'microphone' as PermissionName });
      const granted = result.state === 'granted';
      onPermissionChange?.(granted);
      return granted;
    } catch (error) {
      console.error('Error checking microphone permission:', error);
      return null;
    }
  }, [onPermissionChange]);

  // Analyze audio levels from microphone
  const analyzeAudio = React.useCallback(() => {
    // Only analyze if we have an analyser and we're NOT using controlled levels
    if (!analyserRef.current || controlledAudioLevels) {
      return;
    }

    const analyser = analyserRef.current;
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(dataArray);

    // Take first 9 values and ensure minimum visibility
    const rawLevels = Array.from(dataArray.slice(0, 9));
    const newLevels = rawLevels.map((v) => {
      // Convert 0-255 to 0-100 and apply minimum of 10
      const percentage = (v / 255) * 100;
      return Math.max(10, percentage);
    });

    setInternalAudioLevels(newLevels);

    animationFrameRef.current = requestAnimationFrame(analyzeAudio);
  }, [controlledAudioLevels]);

  // Request microphone access and start recording
  const startRecording = React.useCallback(async () => {
    try {
      // Check permission if hasPermission prop is not explicitly set
      if (hasPermission === false) {
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      // Notify permission was granted
      onPermissionChange?.(true);

      // Set up audio analysis if not using controlled audio levels
      if (!controlledAudioLevels) {
        const audioContext = new AudioContext();
        audioContextRef.current = audioContext;

        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 32;
        analyser.smoothingTimeConstant = 0.8;

        source.connect(analyser);
        analyserRef.current = analyser;

        analyzeAudio();
      }

      let mimeType = audioFormat;
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'audio/webm';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
          mimeType = '';
        }
      }

      const mediaRecorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType || 'audio/webm' });
        onRecordingData?.(audioBlob);
        cleanup();
      };

      mediaRecorder.start();

      if (controlledState === undefined) {
        setInternalState('recording');
      }
      if (maxDuration && maxDuration > 0) {
        maxDurationTimerRef.current = window.setTimeout(() => {
          if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
            if (controlledState === undefined) {
              setInternalState('default');
              setInternalAudioLevels([0, 0, 0, 0, 0, 0, 0, 0, 0]);
            }
            onStopRecording?.();
          }
        }, maxDuration * 1000);
      }

      onStartRecording?.();
    } catch (error) {
      console.error('Error accessing microphone:', error);
      onPermissionChange?.(false);
      cleanup();
      if (controlledState === undefined) {
        setInternalState('default');
      }
    }
  }, [
    hasPermission,
    audioFormat,
    maxDuration,
    onStartRecording,
    onStopRecording,
    onRecordingData,
    onPermissionChange,
    cleanup,
    controlledState,
    controlledAudioLevels,
    analyzeAudio,
  ]);

  const handleMicrophoneClick = () => {
    if (isDisabled) return;
    startRecording();
  };

  const handleDeleteClick = () => {
    if (isDisabled) return;
    cleanup();
    if (controlledState === undefined) {
      setInternalState('default');
      setInternalAudioLevels([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    onDeleteRecording?.();
  };

  const handleSendClick = () => {
    if (isDisabled) return;
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    if (controlledState === undefined) {
      setInternalState('default');
      setInternalAudioLevels([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    onStopRecording?.();
  };

  React.useEffect(() => {
    if (controlledState === undefined) return;

    if (controlledState === 'recording') {
      if (!mediaRecorderRef.current || mediaRecorderRef.current.state === 'inactive') {
        startRecording();
      }
    } else if (controlledState === 'default') {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        cleanup();
      }
    }
  }, [controlledState, startRecording, cleanup]);

  React.useEffect(() => {
    if (hasPermission === undefined) {
      checkPermission();
    }
  }, [hasPermission, checkPermission]);

  React.useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  if (isDefault) {
    return (
      <button
        type="button"
        onClick={handleMicrophoneClick}
        className={cn(
          'luca-h-[68px] luca-w-[221px] luca-relative luca-rounded-full',
          'luca-bg-primary-600 luca-border luca-border-solid luca-border-primary-300',
          'luca-flex luca-items-center luca-overflow-clip',
          'hover:luca-bg-primary-700 luca-transition-all luca-duration-300',
          'luca-cursor-pointer',
          label ? 'luca-justify-start luca-pl-6 luca-gap-3' : 'luca-justify-center',
          className
        )}
        aria-label="Start recording"
      >
        <MicrophoneIcon className="luca-size-8 luca-text-white luca-transition-transform luca-duration-300" />
        {label && (
          <span className="luca-text-white luca-text-base luca-font-medium luca-leading-none">
            {label}
          </span>
        )}
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
          'luca-flex luca-items-center luca-overflow-clip',
          'luca-cursor-not-allowed luca-opacity-60',
          label ? 'luca-justify-start luca-pl-6 luca-gap-3' : 'luca-justify-center',
          className
        )}
        aria-label="Recording disabled"
      >
        <MicrophoneIcon className="luca-size-8 luca-text-neutral-400" />
        {label && (
          <span className="luca-text-neutral-400 luca-text-base luca-font-medium luca-leading-none">
            {label}
          </span>
        )}
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
      <div
        className="luca-flex-1 luca-flex luca-items-center luca-justify-center luca-animate-[fadeIn_0.4s_ease-out_0.1s] luca-opacity-0"
        style={{
          animation: 'fadeIn 0.4s ease-out 0.1s forwards',
        }}
      >
        <div className="luca-flex luca-gap-[4px] luca-items-center luca-justify-center">
          {visualizerLevels.map((level, index) => (
            <div
              key={index}
              className="luca-bg-accent-500 luca-rounded-full luca-shrink-0 luca-w-[4px] luca-transition-all luca-duration-100"
              style={{
                height: `${getBarHeight(level)}px`,
              }}
            />
          ))}
        </div>
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
