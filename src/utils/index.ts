// src/utils/index.ts
// src/utils/index.ts
import type {Week} from '../types';

// Browser Notifications
export const requestNotificationPermission = async (): Promise<boolean> => {
    if (!('Notification' in window)) {
        console.log('This browser does not support notifications');
        return false;
    }

    if (Notification.permission === 'granted') {
        return true;
    }

    if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();
        return permission === 'granted';
    }

    return false;
};

export const sendNotification = (title: string, body: string, icon?: string) => {
    if (Notification.permission === 'granted') {
        new Notification(title, {
            body,
            icon: icon || '/favicon.ico',
            badge: '/favicon.ico'
        });
    }
};

export const checkDailyTasks = (weeks: Week[], completedTasks: Set<string>): number => {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];

    let incompleteTasks = 0;
    weeks.forEach(week => {
        week.tasks.forEach(task => {
            if (task.dueDate === todayStr && !completedTasks.has(task.id)) {
                incompleteTasks++;
            }
        });
    });

    return incompleteTasks;
};

export const setupDailyNotifications = (
    weeks: Week[],
    completedTasks: Set<string>
) => {
    // Check for tasks due today
    const incompleteTasks = checkDailyTasks(weeks, completedTasks);

    if (incompleteTasks > 0) {
        sendNotification(
            'Tasks Due Today!',
            `You have ${incompleteTasks} task${incompleteTasks > 1 ? 's' : ''} due today.`
        );
    }

    // Set up interval to check daily (every 24 hours)
    setInterval(() => {
        const tasks = checkDailyTasks(weeks, completedTasks);
        if (tasks > 0) {
            sendNotification(
                'Daily Reminder',
                `You have ${tasks} task${tasks > 1 ? 's' : ''} due today.`
            );
        }
    }, 24 * 60 * 60 * 1000);
};

export const checkInactivity = (lastCompletedTime: number) => {
    const twoDaysAgo = Date.now() - (2 * 24 * 60 * 60 * 1000);

    if (lastCompletedTime < twoDaysAgo) {
        sendNotification(
            'Time to Practice!',
            "You haven't completed any tasks in 2 days. Keep up the momentum!"
        );
    }
};

// Calendar Export (.ics format)
export const generateICSFile = (weeks: Week[], completedTasks: Set<string>): string => {
    const lines: string[] = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Co-op Tracker//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'X-WR-CALNAME:Fall 2026 Co-op Preparation',
        'X-WR-TIMEZONE:America/New_York'
    ];

    weeks.forEach(week => {
        week.tasks.forEach(task => {
            if (!completedTasks.has(task.id)) {
                // Parse week dates to create due dates
                const dateMatch = week.dates.match(/(\w+)\s+(\d+)/);
                if (dateMatch) {
                    const month = dateMatch[1];
                    const startDay = parseInt(dateMatch[2]);

                    // Create a due date (using end of week)
                    const dueDate = new Date(2026, getMonthNumber(month), startDay + 6);
                    const dueDateStr = formatICSDate(dueDate);

                    lines.push('BEGIN:VEVENT');
                    lines.push(`UID:${task.id}@cooptracker.com`);
                    lines.push(`DTSTAMP:${formatICSDate(new Date())}`);
                    lines.push(`DTSTART:${dueDateStr}`);
                    lines.push(`SUMMARY:${escapeICSText(task.text)}`);
                    lines.push(`DESCRIPTION:Week ${week.week} - ${week.phase}`);
                    lines.push(`CATEGORIES:${task.category.toUpperCase()}`);
                    if (task.priority === 'high') {
                        lines.push('PRIORITY:1');
                    }
                    if (task.leetcode) {
                        lines.push(`URL:${task.leetcode.url}`);
                    }
                    lines.push('STATUS:NEEDS-ACTION');
                    lines.push('END:VEVENT');
                }
            }
        });
    });

    lines.push('END:VCALENDAR');
    return lines.join('\r\n');
};

export const downloadICSFile = (weeks: Week[], completedTasks: Set<string>) => {
    const icsContent = generateICSFile(weeks, completedTasks);
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'coop-tracker-calendar.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
};

// Helper functions
const getMonthNumber = (month: string): number => {
    const months: Record<string, number> = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    return months[month] || 0;
};

const formatICSDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
};

const escapeICSText = (text: string): string => {
    return text.replace(/[,;\\]/g, '\\$&').replace(/\n/g, '\\n');
};

// Format seconds to readable time
export const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    }
    if (minutes > 0) {
        return `${minutes}m`;
    }
    return `${seconds}s`;
};