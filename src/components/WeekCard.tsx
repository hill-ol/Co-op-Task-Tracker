// src/components/WeekCard.tsx - UPDATED
import React from 'react';
import { StickyNote, X } from 'lucide-react';
import TaskItem from './TaskItem';
import Timer from './Timer';
import type {Week, Task, TaskNote, CategoryConfig, Category} from '../types';

interface WeekCardProps {
    week: Week;
    completedTasks: Set<string>;
    taskNotes: Record<string, TaskNote>;
    categoryConfig: Record<Category, CategoryConfig>;
    onToggleTask: (taskId: string) => void;
    onOpenNote: (taskId: string, e: React.MouseEvent) => void;
    onDeleteNote: (taskId: string, e: React.MouseEvent) => void;
    activeTimer: string | null;
    onToggleTimer: (taskId: string, e: React.MouseEvent) => void;
    taskTimeSpent: Record<string, number>;
    onUpdateTaskTime: (taskId: string, seconds: number) => void;
}

const WeekCard: React.FC<WeekCardProps> = ({
                                               week,
                                               completedTasks,
                                               taskNotes,
                                               categoryConfig,
                                               onToggleTask,
                                               onOpenNote,
                                               onDeleteNote,
                                               activeTimer,
                                               onToggleTimer,
                                               taskTimeSpent,
                                               onUpdateTaskTime
                                           }) => {
    const completedCount = week.tasks.filter(t => completedTasks.has(t.id)).length;
    const totalTasks = week.tasks.length;
    const progressPercentage = (completedCount / totalTasks) * 100;

    return (
        <div className="week-card">
            <div className="week-header">
                <div>
                    <h2 className="week-title">Week {week.week}</h2>
                    <p className="week-subtitle">{week.dates} • {week.phase}</p>
                </div>
                <div className="week-progress">
                    <div className="week-progress-text">
                        {completedCount} / {totalTasks} complete
                    </div>
                    <div className="week-progress-bar-container">
                        <div
                            className="week-progress-bar-fill"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="tasks-list">
                {week.tasks.map((task: Task) => {
                    const hasNote = taskNotes[task.id];
                    const timeSpent = taskTimeSpent[task.id];

                    return (
                        <div key={task.id} className="task-wrapper">
                            <TaskItem
                                task={task}
                                isCompleted={completedTasks.has(task.id)}
                                hasNote={!!hasNote}
                                categoryConfig={categoryConfig[task.category]}
                                onToggle={() => onToggleTask(task.id)}
                                onOpenNote={(e) => onOpenNote(task.id, e)}
                                hasTimer={activeTimer === task.id}
                                onToggleTimer={(e) => onToggleTimer(task.id, e)}
                                timeSpent={timeSpent}
                            />

                            {/* Timer */}
                            {activeTimer === task.id && (
                                <Timer
                                    taskId={task.id}
                                    onTimeUpdate={onUpdateTaskTime}
                                    initialTime={timeSpent || 0}
                                />
                            )}

                            {/* Note Display */}
                            {hasNote && (
                                <div className="task-note-display">
                                    <div className="note-header">
                                        <StickyNote className="note-display-icon" />
                                        <span className="note-date">
                      {new Date(hasNote.updatedAt).toLocaleDateString()}
                    </span>
                                        <button
                                            onClick={(e) => onDeleteNote(task.id, e)}
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
    );
};

export default WeekCard;