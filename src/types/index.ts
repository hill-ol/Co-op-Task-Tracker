// src/types/index.ts

export type Priority = 'high' | 'medium' | 'low';

export type Category =
    | 'leetcode'
    | 'interview'
    | 'applications'
    | 'linkedin'
    | 'admin'
    | 'project'
    | 'research';

export interface Task {
    id: string;
    category: Category;
    text: string;
    priority: Priority;
}

export interface Week {
    week: number;
    dates: string;
    phase: string;
    tasks: Task[];
}

export interface CategoryConfig {
    label: string;
    color: string;
    icon: React.ComponentType<{ className?: string }>;
}

export interface Stats {
    totalTasks: number;
    completedCount: number;
    byCategory: {
        [key in Category]?: {
            total: number;
            completed: number;
        };
    };
}

export interface TaskNote {
    taskId: string;
    note: string;
    updatedAt: string;
}

export interface AppState {
    completedTasks: string[];
    taskNotes: Record<string, TaskNote>;
}