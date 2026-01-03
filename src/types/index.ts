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

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type Pattern =
    | 'Arrays & Hashing'
    | 'Two Pointers'
    | 'Sliding Window'
    | 'Stack'
    | 'Binary Search'
    | 'Linked List'
    | 'Trees'
    | 'Tries'
    | 'Heap / Priority Queue'
    | 'Backtracking'
    | 'Graphs'
    | 'Advanced Graphs'
    | '1-D Dynamic Programming'
    | '2-D Dynamic Programming'
    | 'Greedy'
    | 'Intervals'
    | 'Math & Geometry'
    | 'Bit Manipulation';

export type Company =
    | 'Google'
    | 'Meta'
    | 'Amazon'
    | 'Microsoft'
    | 'Apple'
    | 'Netflix'
    | 'Tesla'
    | 'Bloomberg'
    | 'Uber'
    | 'LinkedIn'
    | 'Salesforce'
    | 'Adobe'
    | 'Oracle'
    | 'Stripe'
    | 'Airbnb'
    | 'Twitter'
    | 'Dropbox'
    | 'Nvidia';

export interface LeetCodeProblem {
    number: number;
    name: string;
    difficulty: Difficulty;
    url: string;
    isPremium?: boolean;
    patterns?: Pattern[];
    companies?: Company[];
}

export interface Task {
    id: string;
    category: Category;
    text: string;
    priority: Priority;
    leetcode?: LeetCodeProblem;
    timeSpent?: number; // in seconds
    isCustom?: boolean;
    dueDate?: string; // ISO date string
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

export interface TimerSession {
    taskId: string;
    startTime: number;
    endTime?: number;
    duration: number; // in seconds
}

export interface AppState {
    completedTasks: string[];
    taskNotes: Record<string, TaskNote>;
    customTasks: Task[];
    timerSessions: TimerSession[];
    taskTimeSpent: Record<string, number>; // taskId -> total seconds
}

export interface Resource {
    name: string;
    description: string;
    url: string;
    type: 'website' | 'course' | 'tool' | 'book';
}

export interface PatternStats {
    pattern: Pattern;
    total: number;
    completed: number;
}

export interface CompanyStats {
    company: Company;
    total: number;
    completed: number;
}