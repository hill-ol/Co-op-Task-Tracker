// src/data/resources.ts
// src/data/resources.ts
import type {Resource} from '../types';

export const resources: Resource[] = [
    {
        name: "NeetCode.io",
        description: "Video explanations for Blind 75 and NeetCode 150 problems. Created by a former Google engineer with clear, detailed walkthroughs.",
        url: "https://neetcode.io/",
        type: "website"
    },
    {
        name: "Tech Interview Handbook",
        description: "Comprehensive guide covering algorithms, data structures, behavioral questions, and system design. Includes the Grind 75 customizable problem list.",
        url: "https://www.techinterviewhandbook.org/",
        type: "website"
    },
    {
        name: "Grind 75",
        description: "Modern, customizable version of Blind 75 by the original author. Adjust difficulty and time commitment to your schedule.",
        url: "https://www.techinterviewhandbook.org/grind75",
        type: "tool"
    },
    {
        name: "LeetCode Patterns",
        description: "Pattern-based approach to solving coding problems. Organized by problem-solving techniques rather than random grinding.",
        url: "https://seanprashad.com/leetcode-patterns/",
        type: "website"
    },
    {
        name: "AlgoMonster",
        description: "Data-driven approach by Google engineers to teach key question patterns. Focuses on understanding concepts, not memorizing solutions.",
        url: "https://algo.monster/",
        type: "course"
    },
    {
        name: "LeetCode Explore Cards",
        description: "Structured learning paths on LeetCode covering specific topics like Arrays, Trees, Graphs, and Dynamic Programming.",
        url: "https://leetcode.com/explore/",
        type: "website"
    },
    {
        name: "Blind 75 List",
        description: "The original curated list of 75 essential LeetCode problems. Battle-tested by thousands of successful candidates.",
        url: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions",
        type: "website"
    },
    {
        name: "Grokking the Coding Interview",
        description: "Educative course teaching coding patterns for interviews. Includes interactive coding environments and detailed explanations.",
        url: "https://www.educative.io/courses/grokking-the-coding-interview",
        type: "course"
    },
    {
        name: "Cracking the Coding Interview",
        description: "Classic book by Gayle Laakmann McDowell covering algorithms, data structures, and interview strategies. Industry standard prep resource.",
        url: "https://www.crackingthecodinginterview.com/",
        type: "book"
    },
    {
        name: "BigInterview",
        description: "Mock interview platform with AI-powered feedback. Practice behavioral and technical questions with video recording.",
        url: "https://biginterview.com/",
        type: "tool"
    }
];