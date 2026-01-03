// src/data/weeks.ts
// src/data/weeks.ts
import type {Week} from '../types';

export const weeks: Week[] = [
    {
        week: 1,
        dates: "Jan 7-13",
        phase: "Foundation",
        tasks: [
            { id: "w1-1", category: "admin", text: "Schedule co-op advisor meeting (before Jan 17)", priority: "high" },
            { id: "w1-2", category: "admin", text: "Update resume with on-campus role", priority: "high" },
            { id: "w1-3", category: "admin", text: "Set up BigInterview account", priority: "medium" },
            { id: "w1-4", category: "leetcode", text: "Complete 3 Easy problems (arrays, strings)", priority: "high" },
            { id: "w1-5", category: "interview", text: "BigInterview: 1 session - behavioral basics", priority: "high" },
            { id: "w1-6", category: "linkedin", text: "Update LinkedIn profile with new role", priority: "medium" }
        ]
    },
    {
        week: 2,
        dates: "Jan 14-20",
        phase: "Foundation",
        tasks: [
            { id: "w2-1", category: "project", text: "Create project plan for on-campus software role", priority: "high" },
            { id: "w2-2", category: "project", text: "Set up GitHub repo structure", priority: "medium" },
            { id: "w2-3", category: "leetcode", text: "Complete 5 Easy problems (arrays, hash tables)", priority: "high" },
            { id: "w2-4", category: "interview", text: "BigInterview: 1 session - STAR method", priority: "high" },
            { id: "w2-5", category: "linkedin", text: "Add 20 recruiters/engineers at target companies", priority: "medium" }
        ]
    },
    {
        week: 3,
        dates: "Jan 21-27",
        phase: "Foundation",
        tasks: [
            { id: "w3-1", category: "research", text: "Research 30 companies (Boston, SF, LA, NYC)", priority: "high" },
            { id: "w3-2", category: "research", text: "Create company tracking spreadsheet", priority: "high" },
            { id: "w3-3", category: "leetcode", text: "Complete 5 Easy problems (two pointers, sliding window)", priority: "high" },
            { id: "w3-4", category: "interview", text: "BigInterview: 1 session - technical communication", priority: "high" },
            { id: "w3-5", category: "linkedin", text: "Engage with 10 posts from target companies", priority: "low" }
        ]
    },
    {
        week: 4,
        dates: "Jan 28-Feb 3",
        phase: "Foundation",
        tasks: [
            { id: "w4-1", category: "interview", text: "BigInterview: 2 sessions (1 behavioral, 1 technical)", priority: "high" },
            { id: "w4-2", category: "admin", text: "Meet with co-op advisor: review strategy", priority: "high" },
            { id: "w4-3", category: "leetcode", text: "Complete 5 problems (introduce Easy-Medium)", priority: "high" },
            { id: "w4-4", category: "linkedin", text: "Send 5 personalized connection requests to alumni", priority: "medium" }
        ]
    },
    {
        week: 5,
        dates: "Feb 4-10",
        phase: "Active Prep",
        tasks: [
            { id: "w5-1", category: "leetcode", text: "Complete 6 problems (3 Easy, 3 Medium - arrays, strings)", priority: "high" },
            { id: "w5-2", category: "interview", text: "BigInterview: 2 sessions - technical questions, whiteboarding", priority: "high" },
            { id: "w5-3", category: "project", text: "Document web dev projects for portfolio", priority: "medium" },
            { id: "w5-4", category: "linkedin", text: "Share 1 project update from web dev class", priority: "low" }
        ]
    },
    {
        week: 6,
        dates: "Feb 11-17",
        phase: "Active Prep",
        tasks: [
            { id: "w6-1", category: "leetcode", text: "Complete 7 problems (2 Easy, 5 Medium - hash tables, stacks/queues)", priority: "high" },
            { id: "w6-2", category: "interview", text: "BigInterview: 1 session - system design basics", priority: "high" },
            { id: "w6-3", category: "admin", text: "Schedule career center resume review", priority: "high" },
            { id: "w6-4", category: "linkedin", text: "Send 10 personalized messages to January connections", priority: "medium" }
        ]
    },
    {
        week: 7,
        dates: "Feb 18-24",
        phase: "Active Prep",
        tasks: [
            { id: "w7-1", category: "applications", text: "Apply to 5 companies with early Fall postings", priority: "high" },
            { id: "w7-2", category: "leetcode", text: "Complete 7 problems (focus on BigInterview patterns)", priority: "high" },
            { id: "w7-3", category: "interview", text: "BigInterview: 2 sessions - mock interviews", priority: "high" },
            { id: "w7-4", category: "linkedin", text: "Send 10 personalized messages", priority: "medium" }
        ]
    },
    {
        week: 8,
        dates: "Feb 25-Mar 3",
        phase: "Active Prep",
        tasks: [
            { id: "w8-1", category: "leetcode", text: "Complete 8 problems (2 Easy, 6 Medium - trees, graphs)", priority: "high" },
            { id: "w8-2", category: "interview", text: "BigInterview: 2 sessions - behavioral + technical", priority: "high" },
            { id: "w8-3", category: "admin", text: "Meet with co-op advisor: discuss responses", priority: "high" },
            { id: "w8-4", category: "linkedin", text: "Connect with 15 more people at target companies", priority: "medium" }
        ]
    },
    {
        week: 9,
        dates: "Mar 4-10",
        phase: "Active Prep",
        tasks: [
            { id: "w9-1", category: "applications", text: "Apply to 7-8 companies", priority: "high" },
            { id: "w9-2", category: "leetcode", text: "Complete 8 problems (trees, DFS/BFS)", priority: "high" },
            { id: "w9-3", category: "interview", text: "BigInterview: 2 sessions - focus on weak areas", priority: "high" },
            { id: "w9-4", category: "admin", text: "Complete career center resume review", priority: "high" }
        ]
    },
    {
        week: 10,
        dates: "Mar 11-17",
        phase: "Active Prep",
        tasks: [
            { id: "w10-1", category: "applications", text: "Apply to 7-8 companies", priority: "high" },
            { id: "w10-2", category: "leetcode", text: "Complete 8 problems (recursion, backtracking)", priority: "high" },
            { id: "w10-3", category: "interview", text: "BigInterview: 1 session - system design", priority: "high" },
            { id: "w10-4", category: "project", text: "Document ML class projects for portfolio", priority: "medium" }
        ]
    },
    {
        week: 11,
        dates: "Mar 18-24",
        phase: "Active Prep",
        tasks: [
            { id: "w11-1", category: "applications", text: "Apply to 7-8 companies", priority: "high" },
            { id: "w11-2", category: "leetcode", text: "Complete 9 problems (dynamic programming intro)", priority: "high" },
            { id: "w11-3", category: "interview", text: "BigInterview: 2 sessions - company-specific prep", priority: "high" },
            { id: "w11-4", category: "project", text: "Update GitHub with semester progress", priority: "medium" }
        ]
    },
    {
        week: 12,
        dates: "Mar 25-31",
        phase: "Active Prep",
        tasks: [
            { id: "w12-1", category: "applications", text: "Apply to 7-8 companies", priority: "high" },
            { id: "w12-2", category: "leetcode", text: "Complete 9 problems (mix of all patterns)", priority: "high" },
            { id: "w12-3", category: "interview", text: "BigInterview: 1 session - mock interview", priority: "high" },
            { id: "w12-4", category: "linkedin", text: "Follow up with engaged connections", priority: "low" }
        ]
    },
    {
        week: 13,
        dates: "Apr 1-7",
        phase: "Interview Season",
        tasks: [
            { id: "w13-1", category: "applications", text: "Apply to 5-7 companies", priority: "medium" },
            { id: "w13-2", category: "leetcode", text: "Complete 10 problems (company-specific patterns)", priority: "high" },
            { id: "w13-3", category: "interview", text: "BigInterview: 2 sessions - targeted prep", priority: "high" },
            { id: "w13-4", category: "admin", text: "Schedule career center mock interviews", priority: "high" }
        ]
    },
    {
        week: 14,
        dates: "Apr 8-14",
        phase: "Interview Season",
        tasks: [
            { id: "w14-1", category: "applications", text: "Apply to 5-7 companies", priority: "medium" },
            { id: "w14-2", category: "leetcode", text: "Complete 10 problems (Medium, revisit weak patterns)", priority: "high" },
            { id: "w14-3", category: "interview", text: "BigInterview: 3 sessions - max mocks", priority: "high" },
            { id: "w14-4", category: "admin", text: "Meet with co-op advisor: interview strategies", priority: "high" }
        ]
    },
    {
        week: 15,
        dates: "Apr 15-21",
        phase: "Interview Execution",
        tasks: [
            { id: "w15-1", category: "leetcode", text: "Complete 12 problems (daily practice)", priority: "high" },
            { id: "w15-2", category: "interview", text: "BigInterview: 2 sessions - company-specific", priority: "high" },
            { id: "w15-3", category: "admin", text: "Prioritize interview prep over new applications", priority: "high" },
            { id: "w15-4", category: "linkedin", text: "Reach out for advice at interview companies", priority: "medium" }
        ]
    },
    {
        week: 16,
        dates: "Apr 22-30",
        phase: "Final Push",
        tasks: [
            { id: "w16-1", category: "leetcode", text: "Complete 12 problems (maintain momentum)", priority: "high" },
            { id: "w16-2", category: "interview", text: "BigInterview: 2 sessions - polish and final prep", priority: "high" },
            { id: "w16-3", category: "project", text: "Document completed semester projects", priority: "medium" },
            { id: "w16-4", category: "admin", text: "Follow up on pending applications", priority: "medium" }
        ]
    }
];