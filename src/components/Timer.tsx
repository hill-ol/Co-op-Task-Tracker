// src/components/Timer.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Clock } from 'lucide-react';
import '../styles/Timer.css';

interface TimerProps {
    taskId: string;
    onTimeUpdate: (taskId: string, seconds: number) => void;
    initialTime?: number;
}

const Timer: React.FC<TimerProps> = ({ taskId, onTimeUpdate, initialTime = 0 }) => {
    const [seconds, setSeconds] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
    const [mode, setMode] = useState<'focus' | 'short-break' | 'long-break'>('focus');
    const intervalRef = useRef<number | null>(null);  // ← Changed from NodeJS.Timeout

    // Pomodoro durations in seconds
    const durations = {
        focus: 25 * 60,        // 25 minutes
        'short-break': 5 * 60,  // 5 minutes
        'long-break': 15 * 60   // 15 minutes
    };

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => {
                    const newTime = prev + 1;
                    onTimeUpdate(taskId, newTime);
                    return newTime;
                });
            }, 1000);
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRunning, taskId, onTimeUpdate]);

    const formatTime = (totalSeconds: number): string => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        return `${minutes}:${secs.toString().padStart(2, '0')}`;
    };

    const handlePlayPause = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
        onTimeUpdate(taskId, 0);
    };

    const startPomodoro = (newMode: 'focus' | 'short-break' | 'long-break') => {
        setMode(newMode);
        setIsRunning(false);
        setSeconds(0);
    };

    const pomodoroTimeLeft = durations[mode] - (seconds % durations[mode]);
    const pomodoroProgress = ((seconds % durations[mode]) / durations[mode]) * 100;

    return (
        <div className="timer-container">
            <div className="timer-display">
                <Clock className="timer-icon" />
                <span className="timer-text">{formatTime(seconds)}</span>
            </div>

            <div className="timer-controls">
                <button
                    onClick={handlePlayPause}
                    className={`timer-button ${isRunning ? 'pause' : 'play'}`}
                    title={isRunning ? 'Pause' : 'Start'}
                >
                    {isRunning ? <Pause className="control-icon" /> : <Play className="control-icon" />}
                </button>
                <button
                    onClick={handleReset}
                    className="timer-button reset"
                    title="Reset"
                >
                    <RotateCcw className="control-icon" />
                </button>
            </div>

            <div className="pomodoro-section">
                <div className="pomodoro-modes">
                    <button
                        onClick={() => startPomodoro('focus')}
                        className={`pomodoro-mode ${mode === 'focus' ? 'active' : ''}`}
                    >
                        Focus (25m)
                    </button>
                    <button
                        onClick={() => startPomodoro('short-break')}
                        className={`pomodoro-mode ${mode === 'short-break' ? 'active' : ''}`}
                    >
                        Short Break (5m)
                    </button>
                    <button
                        onClick={() => startPomodoro('long-break')}
                        className={`pomodoro-mode ${mode === 'long-break' ? 'active' : ''}`}
                    >
                        Long Break (15m)
                    </button>
                </div>

                {mode !== 'focus' || seconds > 0 ? (
                    <div className="pomodoro-progress">
                        <div className="pomodoro-progress-bar">
                            <div
                                className="pomodoro-progress-fill"
                                style={{ width: `${pomodoroProgress}%` }}
                            />
                        </div>
                        <span className="pomodoro-time-left">
              {formatTime(pomodoroTimeLeft)} remaining
            </span>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Timer;