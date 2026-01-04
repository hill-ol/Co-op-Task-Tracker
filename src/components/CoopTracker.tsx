// src/components/CoopTracker.tsx - UPDATED
import React, { useState, useMemo, useEffect } from 'react';
import { Calendar, Code, Briefcase, Users, BookOpen, Award, BookMarked, Eye, EyeOff, Bell, BellOff } from 'lucide-react';
import { weeks } from '../data/weeks';
import type {Category, CategoryConfig, TaskNote, AppState} from '../types';
import { useFirestore } from '../hooks/useFirestore';
import { requestNotificationPermission, sendNotification } from '../utils';
import Auth from './Auth';
import WeekCard from './WeekCard';
import StatsView from './StatsView';
import ResourcesView from './ResourcesView';
import NoteEditor from './NoteEditor';
import '../styles/CoopTracker.css';

const STORAGE_KEY = 'coop-tracker-state';

const CoopTracker: React.FC = () => {
    const { saveToFirestore, subscribeToFirestore, syncing, user } = useFirestore();

    const [completedTasks, setCompletedTasks] = useState<Set<string>>(() => {
        const savedState = localStorage.getItem(STORAGE_KEY);
        if (savedState) {
            try {
                const state: AppState = JSON.parse(savedState);
                return new Set(state.completedTasks);
            } catch (error) {
                console.error('Error loading saved state:', error);
            }
        }
        return new Set();
    });

    const [taskNotes, setTaskNotes] = useState<Record<string, TaskNote>>(() => {
        const savedState = localStorage.getItem(STORAGE_KEY);
        if (savedState) {
            try {
                const state: AppState = JSON.parse(savedState);
                return state.taskNotes;
            } catch (error) {
                console.error('Error loading saved state:', error);
            }
        }
        return {};
    });

    const [taskTimeSpent, setTaskTimeSpent] = useState<Record<string, number>>(() => {
        const savedState = localStorage.getItem(STORAGE_KEY);
        if (savedState) {
            try {
                const state: AppState = JSON.parse(savedState);
                return state.taskTimeSpent || {};
            } catch (error) {
                console.error('Error loading saved state:', error);
            }
        }
        return {};
    });

    const [currentView, setCurrentView] = useState<'calendar' | 'stats' | 'resources'>('calendar');
    const [editingNote, setEditingNote] = useState<string | null>(null);
    const [noteText, setNoteText] = useState<string>('');
    const [hideCompletedWeeks, setHideCompletedWeeks] = useState<boolean>(true);
    const [activeTimer, setActiveTimer] = useState<string | null>(null);
    const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(
        () => Notification.permission === 'granted'
    );

    const categoryConfig: Record<Category, CategoryConfig> = {
        leetcode: { label: 'LeetCode', color: 'orange', icon: Code },
        interview: { label: 'BigInterview', color: 'blue', icon: Users },
        applications: { label: 'Applications', color: 'green', icon: Briefcase },
        linkedin: { label: 'LinkedIn', color: 'purple', icon: Users },
        admin: { label: 'Admin/Meetings', color: 'gray', icon: Calendar },
        project: { label: 'Projects', color: 'pink', icon: BookOpen },
        research: { label: 'Research', color: 'indigo', icon: Award }
    };

    // Save to localStorage AND Firestore
    useEffect(() => {
        const state: AppState = {
            completedTasks: Array.from(completedTasks),
            taskNotes: taskNotes,
            customTasks: [],
            timerSessions: [],
            taskTimeSpent: taskTimeSpent
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

        if (user) {
            saveToFirestore(state);
        }
    }, [completedTasks, taskNotes, taskTimeSpent, user, saveToFirestore]);

    // Subscribe to Firestore updates
    useEffect(() => {
        if (!user) return;

        const unsubscribe = subscribeToFirestore((data) => {
            setCompletedTasks(new Set(data.completedTasks));
            setTaskNotes(data.taskNotes);
            setTaskTimeSpent(data.taskTimeSpent || {});
        });

        return unsubscribe;
    }, [user, subscribeToFirestore]);

    // Daily notification check
    useEffect(() => {
        if (!notificationsEnabled) return;

        const checkDailyProgress = () => {
            const today = new Date();
            const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

            // Don't send notifications on weekends
            if (dayOfWeek === 0 || dayOfWeek === 6) return;

            // Count incomplete tasks for today
            let incompleteTasks = 0;
            weeks.forEach(week => {
                week.tasks.forEach(task => {
                    if (!completedTasks.has(task.id)) {
                        incompleteTasks++;
                    }
                });
            });

            if (incompleteTasks > 0) {
                sendNotification(
                    'Co-op Tracker Reminder',
                    `You have ${incompleteTasks} tasks remaining. Keep up the momentum!`
                );
            }
        };

        // Check at 9 AM daily
        const now = new Date();
        const scheduledTime = new Date();
        scheduledTime.setHours(9, 0, 0, 0);

        // If it's past 9 AM today, schedule for tomorrow
        if (now > scheduledTime) {
            scheduledTime.setDate(scheduledTime.getDate() + 1);
        }

        const timeUntilNotification = scheduledTime.getTime() - now.getTime();
        const timeout = setTimeout(() => {
            checkDailyProgress();
            // Then set up daily interval
            const interval = setInterval(checkDailyProgress, 24 * 60 * 60 * 1000);
            return () => clearInterval(interval);
        }, timeUntilNotification);

        return () => clearTimeout(timeout);
    }, [notificationsEnabled, completedTasks]);

    const toggleTask = (taskId: string): void => {
        setCompletedTasks(prev => {
            const newSet = new Set(prev);
            if (newSet.has(taskId)) {
                newSet.delete(taskId);
            } else {
                newSet.add(taskId);
            }
            return newSet;
        });
    };

    const openNoteEditor = (taskId: string, e: React.MouseEvent): void => {
        e.stopPropagation();
        setEditingNote(taskId);
        setNoteText(taskNotes[taskId]?.note || '');
    };

    const saveNote = (): void => {
        if (editingNote && noteText.trim()) {
            setTaskNotes(prev => ({
                ...prev,
                [editingNote]: {
                    taskId: editingNote,
                    note: noteText.trim(),
                    updatedAt: new Date().toISOString(),
                },
            }));
        } else if (editingNote && !noteText.trim()) {
            setTaskNotes(prev => {
                const newNotes = { ...prev };
                delete newNotes[editingNote];
                return newNotes;
            });
        }
        setEditingNote(null);
        setNoteText('');
    };

    const cancelNote = (): void => {
        setEditingNote(null);
        setNoteText('');
    };

    const deleteNote = (taskId: string, e: React.MouseEvent): void => {
        e.stopPropagation();
        setTaskNotes(prev => {
            const newNotes = { ...prev };
            delete newNotes[taskId];
            return newNotes;
        });
    };

    const toggleTimer = (taskId: string, e: React.MouseEvent): void => {
        e.stopPropagation();
        setActiveTimer(activeTimer === taskId ? null : taskId);
    };

    const updateTaskTime = (taskId: string, seconds: number): void => {
        setTaskTimeSpent(prev => ({
            ...prev,
            [taskId]: seconds
        }));
    };

    const handleNotificationToggle = async (): Promise<void> => {
        if (!notificationsEnabled) {
            const granted = await requestNotificationPermission();
            setNotificationsEnabled(granted);
            if (granted) {
                sendNotification(
                    'Notifications Enabled! 🎉',
                    'You will receive daily reminders at 9 AM on weekdays.'
                );
            }
        } else {
            setNotificationsEnabled(false);
            sendNotification(
                'Notifications Disabled',
                'You will no longer receive daily reminders.'
            );
        }
    };

    // Filter weeks based on completion status
    const visibleWeeks = useMemo(() => {
        if (!hideCompletedWeeks) return weeks;

        return weeks.filter(week => {
            const allTasksComplete = week.tasks.every(task => completedTasks.has(task.id));
            return !allTasksComplete;
        });
    }, [weeks, completedTasks, hideCompletedWeeks]);

    const stats = useMemo(() => {
        const totalTasks = weeks.reduce((sum, week) => sum + week.tasks.length, 0);
        const completedCount = completedTasks.size;
        const byCategory: Record<Category, { total: number; completed: number }> = {
            leetcode: { total: 0, completed: 0 },
            interview: { total: 0, completed: 0 },
            applications: { total: 0, completed: 0 },
            linkedin: { total: 0, completed: 0 },
            admin: { total: 0, completed: 0 },
            project: { total: 0, completed: 0 },
            research: { total: 0, completed: 0 }
        };

        weeks.forEach(week => {
            week.tasks.forEach(task => {
                byCategory[task.category].total++;
                if (completedTasks.has(task.id)) {
                    byCategory[task.category].completed++;
                }
            });
        });

        return { totalTasks, completedCount, byCategory };
    }, [completedTasks]);

    const completedWeeksCount = weeks.filter(week =>
        week.tasks.every(task => completedTasks.has(task.id))
    ).length;

    return (
        <div className="app-container">
            <div className="max-width-container">
                {/* Header */}
                <div className="header-card">
                    <div className="header-content">
                        <div>
                            <h1 className="main-title">Fall 2026 Co-op Tracker</h1>
                            <p className="subtitle">Stay organized and land your dream co-op!</p>
                        </div>
                        <div className="header-actions">
                            <Auth user={user} />
                            {syncing && <span className="sync-indicator">☁️ Syncing...</span>}
                            <button
                                onClick={handleNotificationToggle}
                                className={`notification-button ${notificationsEnabled ? 'active' : ''}`}
                                title={notificationsEnabled ? 'Disable notifications' : 'Enable notifications'}
                            >
                                {notificationsEnabled ? (
                                    <>
                                        <Bell className="notification-icon" />
                                        Notifications On
                                    </>
                                ) : (
                                    <>
                                        <BellOff className="notification-icon" />
                                        Enable Reminders
                                    </>
                                )}
                            </button>
                            <div className="progress-display">
                                <div className="progress-percentage">
                                    {Math.round((stats.completedCount / stats.totalTasks) * 100)}%
                                </div>
                                <div className="progress-text">
                                    {stats.completedCount} of {stats.totalTasks} tasks
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* View Toggle */}
                    <div className="view-toggle">
                        <button
                            onClick={() => setCurrentView('calendar')}
                            className={`toggle-button ${currentView === 'calendar' ? 'active' : ''}`}
                        >
                            Calendar View
                        </button>
                        <button
                            onClick={() => setCurrentView('stats')}
                            className={`toggle-button ${currentView === 'stats' ? 'active' : ''}`}
                        >
                            Progress Stats
                        </button>
                        <button
                            onClick={() => setCurrentView('resources')}
                            className={`toggle-button ${currentView === 'resources' ? 'active' : ''}`}
                        >
                            <BookMarked className="button-icon" />
                            Resources
                        </button>
                    </div>

                    {/* Hide Completed Weeks Toggle */}
                    {currentView === 'calendar' && (
                        <div className="filter-section">
                            <button
                                onClick={() => setHideCompletedWeeks(!hideCompletedWeeks)}
                                className="filter-button"
                            >
                                {hideCompletedWeeks ? (
                                    <>
                                        <EyeOff className="filter-icon" />
                                        Hiding {completedWeeksCount} completed week{completedWeeksCount !== 1 ? 's' : ''}
                                    </>
                                ) : (
                                    <>
                                        <Eye className="filter-icon" />
                                        Show all weeks
                                    </>
                                )}
                            </button>
                        </div>
                    )}

                    {/* Progress Bar */}
                    <div className="progress-bar-container">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${(stats.completedCount / stats.totalTasks) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Render Current View */}
                {currentView === 'calendar' && (
                    <div className="calendar-view">
                        {visibleWeeks.length === 0 ? (
                            <div className="empty-state">
                                <Award className="empty-icon" />
                                <h3>All weeks completed! 🎉</h3>
                                <p>You've finished all your tasks. Great work!</p>
                                <button
                                    onClick={() => setHideCompletedWeeks(false)}
                                    className="button-primary"
                                >
                                    Show completed weeks
                                </button>
                            </div>
                        ) : (
                            visibleWeeks.map((week) => (
                                <WeekCard
                                    key={week.week}
                                    week={week}
                                    completedTasks={completedTasks}
                                    taskNotes={taskNotes}
                                    categoryConfig={categoryConfig}
                                    onToggleTask={toggleTask}
                                    onOpenNote={openNoteEditor}
                                    onDeleteNote={deleteNote}
                                    activeTimer={activeTimer}
                                    onToggleTimer={toggleTimer}
                                    taskTimeSpent={taskTimeSpent}
                                    onUpdateTaskTime={updateTaskTime}
                                />
                            ))
                        )}
                    </div>
                )}

                {currentView === 'stats' && (
                    <StatsView stats={stats} categoryConfig={categoryConfig} />
                )}

                {currentView === 'resources' && <ResourcesView />}
            </div>

            {/* Note Editor Modal */}
            {editingNote && (
                <NoteEditor
                    noteText={noteText}
                    onNoteChange={setNoteText}
                    onSave={saveNote}
                    onCancel={cancelNote}
                />
            )}
        </div>
    );
};

export default CoopTracker;