// src/components/TaskItem.tsx
import React from 'react';
import { CheckCircle2, Circle, StickyNote, ExternalLink } from 'lucide-react';
import type {Task, CategoryConfig} from '../types';

interface TaskItemProps {
    task: Task;
    isCompleted: boolean;
    hasNote: boolean;
    categoryConfig: CategoryConfig;
    onToggle: () => void;
    onOpenNote: (e: React.MouseEvent) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
                                               task,
                                               isCompleted,
                                               hasNote,
                                               categoryConfig,
                                               onToggle,
                                               onOpenNote
                                           }) => {
    const Icon = categoryConfig.icon;

    return (
        <div
            onClick={onToggle}
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
                    <span className={`category-badge category-${categoryConfig.color}`}>
            {categoryConfig.label}
          </span>

                    {task.leetcode && (
                        <>
              <span className={`difficulty-badge difficulty-${task.leetcode.difficulty.toLowerCase()}`}>
                {task.leetcode.difficulty}
              </span>
                            {task.leetcode.isPremium && (
                                <span className="premium-badge">Premium</span>
                            )}
                        </>
                    )}

                    {task.priority === 'high' && !task.leetcode && (
                        <span className="priority-badge">High Priority</span>
                    )}
                </div>

                <div className="task-text-wrapper">
                    <p className={`task-text ${isCompleted ? 'task-completed' : ''}`}>
                        {task.leetcode ? (
                            <>
                                <span className="leetcode-number">#{task.leetcode.number}</span>
                                {" "}{task.leetcode.name}
                            </>
                        ) : (
                            task.text
                        )}
                    </p>

                    {task.leetcode && (
                        <>
                        <a
                        href={task.leetcode.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leetcode-link"
                        onClick={(e) => e.stopPropagation()}
                        >
                        <ExternalLink className="external-link-icon" />
                        Solve on LeetCode
                        </a>

                            {task.leetcode.patterns && task.leetcode.patterns.length > 0 && (
                                <div className="pattern-tags">
                                    {task.leetcode.patterns.map((pattern, idx) => (
                                        <span key={idx} className="pattern-tag">
                      {pattern}
                    </span>
                                    ))}
                                </div>
                            )}

                            {task.leetcode.companies && task.leetcode.companies.length > 0 && (
                                <div className="company-tags">
                                    {task.leetcode.companies.slice(0, 5).map((company, idx) => (
                                        <span key={idx} className="company-tag">
                      {company}
                    </span>
                                    ))}
                                    {task.leetcode.companies.length > 5 && (
                                        <span className="company-tag-more">
                      +{task.leetcode.companies.length - 5} more
                    </span>
                                    )}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            <button
                onClick={onOpenNote}
                className={`note-button ${hasNote ? 'has-note' : ''}`}
                title={hasNote ? 'Edit note' : 'Add note'}
            >
                <StickyNote className="note-icon" />
            </button>
        </div>
    );
};

export default TaskItem;