import React from 'react';
import { MicrophoneIcon, TrashIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { cn } from '../utils/cn';
import { VoiceRecordingVisualizer } from './VoiceRecordingVisualizer';

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
}) => {
  // Internal state for uncontrolled mode
  const [internalState, setInternalState] = React.useState<ButtonRecordVoiceState>('default');
  const [internalAudioLevels, setInternalAudioLevels] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  // Use controlled state if provided, otherwise use internal state
  const state = controlledState ?? internalState;
  const audioLevels = controlledAudioLevels ?? internalAudioLevels;

  const isDefault = state === 'default';
  const isDisabled = state === 'disabled';

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
    if (!analyserRef.current || !controlledAudioLevels) {
      const analyser = analyserRef.current;
      if (!analyser) return;

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(dataArray);

      // Split frequency data into 9 bars
      const barCount = 9;
      const barSize = Math.floor(dataArray.length / barCount);
      const newLevels = [];

      for (let i = 0; i < barCount; i++) {
        const start = i * barSize;
        const end = start + barSize;
        const barData = dataArray.slice(start, end);
        const average = barData.reduce((sum, value) => sum + value, 0) / barData.length;
        // Convert to 0-100 scale
        newLevels.push(Math.min(100, (average / 255) * 100));
      }

      setInternalAudioLevels(newLevels);

      animationFrameRef.current = requestAnimationFrame(analyzeAudio);
    }
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
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.8;

        source.connect(analyser);
        analyserRef.current = analyser;

        // Start analyzing audio
        analyzeAudio();
      }

      // Check if the browser supports the requested format
      let mimeType = audioFormat;
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        // Fallback to webm if requested format not supported
        mimeType = 'audio/webm';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
          // Last fallback
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

      // Update internal state if not controlled
      if (controlledState === undefined) {
        setInternalState('recording');
      }

      // Set max duration timer if specified
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

  // Sync external state changes with internal MediaRecorder (only for controlled mode)
  React.useEffect(() => {
    if (controlledState === undefined) return;

    if (controlledState === 'recording') {
      // If external state changes to recording but we're not recording, start
      if (!mediaRecorderRef.current || mediaRecorderRef.current.state === 'inactive') {
        startRecording();
      }
    } else if (controlledState === 'default') {
      // If external state changes to default, stop and cleanup
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        cleanup();
      }
    }
  }, [controlledState, startRecording, cleanup]);

  // Check permission on mount if hasPermission is undefined
  React.useEffect(() => {
    if (hasPermission === undefined) {
      checkPermission();
    }
  }, [hasPermission, checkPermission]);

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

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
      <div
        className="luca-flex-1 luca-flex luca-items-center luca-justify-center luca-animate-[fadeIn_0.4s_ease-out_0.1s] luca-opacity-0"
        style={{
          animation: 'fadeIn 0.4s ease-out 0.1s forwards',
        }}
      >
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
