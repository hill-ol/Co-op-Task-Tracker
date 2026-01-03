// src/components/CoopTracker.tsx
import React, { useState, useMemo, useEffect } from 'react';
import { Calendar, CheckCircle2, Circle, Award, Code, Briefcase, Users, BookOpen, StickyNote, X } from 'lucide-react';
import { weeks } from '../data/weeks';
import type {Category, CategoryConfig, Task, TaskNote, AppState} from '../types';
import '../styles/CoopTracker.css';

const STORAGE_KEY = 'coop-tracker-state';

const CoopTracker: React.FC = () => {
    const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
    const [taskNotes, setTaskNotes] = useState<Record<string, TaskNote>>({});
    const [currentView, setCurrentView] = useState<'calendar' | 'stats'>('calendar');
    const [editingNote, setEditingNote] = useState<string | null>(null);
    const [noteText, setNoteText] = useState<string>('');

    // Load state from localStorage on mount
    useEffect(() => {
        const savedState = localStorage.getItem(STORAGE_KEY);
        if (savedState) {
            try {
                const state: AppState = JSON.parse(savedState);
                setCompletedTasks(new Set(state.completedTasks));
                setTaskNotes(state.taskNotes);
            } catch (error) {
                console.error('Error loading saved state:', error);
            }
        }
    }, []);

    // Save state to localStorage whenever it changes
    useEffect(() => {
        const state: AppState = {
            completedTasks: Array.from(completedTasks),
            taskNotes: taskNotes,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [completedTasks, taskNotes]);

    const categoryConfig: Record<Category, CategoryConfig> = {
        leetcode: { label: 'LeetCode', color: 'orange', icon: Code },
        interview: { label: 'BigInterview', color: 'blue', icon: Users },
        applications: { label: 'Applications', color: 'green', icon: Briefcase },
        linkedin: { label: 'LinkedIn', color: 'purple', icon: Users },
        admin: { label: 'Admin/Meetings', color: 'gray', icon: Calendar },
        project: { label: 'Projects', color: 'pink', icon: BookOpen },
        research: { label: 'Research', color: 'indigo', icon: Award }
    };

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
            // Delete note if empty
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
                        <div className="progress-display">
                            <div className="progress-percentage">
                                {Math.round((stats.completedCount / stats.totalTasks) * 100)}%
                            </div>
                            <div className="progress-text">
                                {stats.completedCount} of {stats.totalTasks} tasks
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
                    </div>

                    {/* Progress Bar */}
                    <div className="progress-bar-container">
                        <div
                            className="progress-bar-fill"
                            style={{ width: `${(stats.completedCount / stats.totalTasks) * 100}%` }}
                        />
                    </div>
                </div>

                {currentView === 'calendar' ? (
                    /* Calendar View */
                    <div className="calendar-view">
                        {weeks.map((week) => (
                            <div key={week.week} className="week-card">
                                <div className="week-header">
                                    <div>
                                        <h2 className="week-title">Week {week.week}</h2>
                                        <p className="week-subtitle">{week.dates} • {week.phase}</p>
                                    </div>
                                    <div className="week-progress">
                                        <div className="week-progress-text">
                                            {week.tasks.filter(t => completedTasks.has(t.id)).length} / {week.tasks.length} complete
                                        </div>
                                        <div className="week-progress-bar-container">
                                            <div
                                                className="week-progress-bar-fill"
                                                style={{
                                                    width: `${(week.tasks.filter(t => completedTasks.has(t.id)).length / week.tasks.length) * 100}%`
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="tasks-list">
                                    {week.tasks.map((task: Task) => {
                                        const config = categoryConfig[task.category];
                                        const Icon = config.icon;
                                        const isCompleted = completedTasks.has(task.id);
                                        const hasNote = taskNotes[task.id];

                                        return (
                                            <div key={task.id} className="task-wrapper">
                                                <div
                                                    onClick={() => toggleTask(task.id)}
                                                    className={`task-item ${isCompleted ? 'completed' : ''}`}
                                                >
                                                    <div className="task-checkbox">
                                                        {isCompleted ? (
                                                            <CheckCircle2 className="icon-check" />
                                                        ) : (
                                                            <Circle className="icon-circle" />
                                                        )}
                                                    </div>
                                                    <div className="task-content">
                                                        <div className="task-badges">
                                                            <Icon className="task-icon" />
                                                            <span className={`category-badge category-${config.color}`}>
                                {config.label}
                              </span>
                                                            {task.priority === 'high' && (
                                                                <span className="priority-badge">
                                  High Priority
                                </span>
                                                            )}
                                                        </div>
                                                        <p className={`task-text ${isCompleted ? 'task-completed' : ''}`}>
                                                            {task.text}
                                                        </p>
                                                    </div>
                                                    <button
                                                        onClick={(e) => openNoteEditor(task.id, e)}
                                                        className={`note-button ${hasNote ? 'has-note' : ''}`}
                                                        title={hasNote ? 'Edit note' : 'Add note'}
                                                    >
                                                        <StickyNote className="note-icon" />
                                                    </button>
                                                </div>

                                                {/* Display existing note */}
                                                {hasNote && (
                                                    <div className="task-note-display">
                                                        <div className="note-header">
                                                            <StickyNote className="note-display-icon" />
                                                            <span className="note-date">
                                {new Date(hasNote.updatedAt).toLocaleDateString()}
                              </span>
                                                            <button
                                                                onClick={(e) => deleteNote(task.id, e)}
                                                                className="note-delete-button"
                                                                title="Delete note"
                                                            >
                                                                <X className="note-delete-icon" />
                                                            </button>
                                                        </div>
                                                        <p className="note-text">{hasNote.note}</p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Stats View */
                    <div className="stats-view">
                        <div className="stats-card">
                            <h2 className="stats-title">Progress by Category</h2>
                            <div className="category-grid">
                                {(Object.entries(stats.byCategory) as [Category, { total: number; completed: number }][]).map(([category, data]) => {
                                    const config = categoryConfig[category];
                                    const Icon = config.icon;
                                    const percentage = Math.round((data.completed / data.total) * 100);

                                    return (
                                        <div key={category} className="category-card">
                                            <div className="category-header">
                                                <div className={`category-icon-container category-${config.color}`}>
                                                    <Icon className="category-icon" />
                                                </div>
                                                <div>
                                                    <h3 className="category-name">{config.label}</h3>
                                                    <p className="category-count">
                                                        {data.completed} / {data.total} tasks
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="category-progress-bar-container">
                                                <div
                                                    className="category-progress-bar-fill"
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                            <p className="category-percentage">{percentage}%</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Semester Goals Summary */}
                        <div className="goals-card">
                            <h2 className="goals-title">Semester Goals</h2>
                            <div className="goals-grid">
                                <div className="goal-item goal-orange">
                                    <div className="goal-header">
                                        <Code className="goal-icon" />
                                        <h3 className="goal-name">LeetCode</h3>
                                    </div>
                                    <p className="goal-number">124</p>
                                    <p className="goal-description">Total problems (40 Easy, 80 Medium, 4 Hard)</p>
                                </div>

                                <div className="goal-item goal-blue">
                                    <div className="goal-header">
                                        <Users className="goal-icon" />
                                        <h3 className="goal-name">BigInterview</h3>
                                    </div>
                                    <p className="goal-number">27</p>
                                    <p className="goal-description">Total sessions (15 technical, 8 behavioral, 4 system design)</p>
                                </div>

                                <div className="goal-item goal-green">
                                    <div className="goal-header">
                                        <Briefcase className="goal-icon" />
                                        <h3 className="goal-name">Applications</h3>
                                    </div>
                                    <p className="goal-number">45-50</p>
                                    <p className="goal-description">Target companies by end of April</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Note Editor Modal */}
            {editingNote && (
                <div className="modal-overlay" onClick={cancelNote}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3 className="modal-title">
                                <StickyNote className="modal-icon" />
                                Add Note
                            </h3>
                            <button onClick={cancelNote} className="modal-close">
                                <X className="close-icon" />
                            </button>
                        </div>
                        <textarea
                            className="note-textarea"
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            placeholder="Add notes, links, reminders, or any details about this task..."
                            autoFocus
                        />
                        <div className="modal-actions">
                            <button onClick={cancelNote} className="button-secondary">
                                Cancel
                            </button>
                            <button onClick={saveNote} className="button-primary">
                                Save Note
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CoopTracker;