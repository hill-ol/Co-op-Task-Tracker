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
            { id: "w1-4", category: "leetcode", text: "Two Sum", priority: "high", leetcode: { number: 1, name: "Two Sum", difficulty: "Easy", url: "https://leetcode.com/problems/two-sum/" } },
            { id: "w1-5", category: "leetcode", text: "Best Time to Buy and Sell Stock", priority: "high", leetcode: { number: 121, name: "Best Time to Buy and Sell Stock", difficulty: "Easy", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" } },
            { id: "w1-6", category: "leetcode", text: "Valid Anagram", priority: "high", leetcode: { number: 242, name: "Valid Anagram", difficulty: "Easy", url: "https://leetcode.com/problems/valid-anagram/" } },
            { id: "w1-7", category: "interview", text: "BigInterview: 1 session - behavioral basics", priority: "high" },
            { id: "w1-8", category: "linkedin", text: "Update LinkedIn profile with new role", priority: "medium" }
        ]
    },
    {
        week: 2,
        dates: "Jan 14-20",
        phase: "Foundation",
        tasks: [
            { id: "w2-1", category: "project", text: "Create project plan for on-campus software role", priority: "high" },
            { id: "w2-2", category: "project", text: "Set up GitHub repo structure", priority: "medium" },
            { id: "w2-3", category: "leetcode", text: "Contains Duplicate", priority: "high", leetcode: { number: 217, name: "Contains Duplicate", difficulty: "Easy", url: "https://leetcode.com/problems/contains-duplicate/" } },
            { id: "w2-4", category: "leetcode", text: "Valid Palindrome", priority: "high", leetcode: { number: 125, name: "Valid Palindrome", difficulty: "Easy", url: "https://leetcode.com/problems/valid-palindrome/" } },
            { id: "w2-5", category: "leetcode", text: "Merge Sorted Array", priority: "high", leetcode: { number: 88, name: "Merge Sorted Array", difficulty: "Easy", url: "https://leetcode.com/problems/merge-sorted-array/" } },
            { id: "w2-6", category: "leetcode", text: "Majority Element", priority: "high", leetcode: { number: 169, name: "Majority Element", difficulty: "Easy", url: "https://leetcode.com/problems/majority-element/" } },
            { id: "w2-7", category: "leetcode", text: "Intersection of Two Arrays II", priority: "high", leetcode: { number: 350, name: "Intersection of Two Arrays II", difficulty: "Easy", url: "https://leetcode.com/problems/intersection-of-two-arrays-ii/" } },
            { id: "w2-8", category: "interview", text: "BigInterview: 1 session - STAR method", priority: "high" },
            { id: "w2-9", category: "linkedin", text: "Add 20 recruiters/engineers at target companies", priority: "medium" }
        ]
    },
    {
        week: 3,
        dates: "Jan 21-27",
        phase: "Foundation",
        tasks: [
            { id: "w3-1", category: "research", text: "Research 30 companies (Boston, SF, LA, NYC)", priority: "high" },
            { id: "w3-2", category: "research", text: "Create company tracking spreadsheet", priority: "high" },
            { id: "w3-3", category: "leetcode", text: "Move Zeroes", priority: "high", leetcode: { number: 283, name: "Move Zeroes", difficulty: "Easy", url: "https://leetcode.com/problems/move-zeroes/" } },
            { id: "w3-4", category: "leetcode", text: "Remove Duplicates from Sorted Array", priority: "high", leetcode: { number: 26, name: "Remove Duplicates from Sorted Array", difficulty: "Easy", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" } },
            { id: "w3-5", category: "leetcode", text: "Reverse String", priority: "high", leetcode: { number: 344, name: "Reverse String", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-string/" } },
            { id: "w3-6", category: "leetcode", text: "Squares of a Sorted Array", priority: "high", leetcode: { number: 977, name: "Squares of a Sorted Array", difficulty: "Easy", url: "https://leetcode.com/problems/squares-of-a-sorted-array/" } },
            { id: "w3-7", category: "leetcode", text: "Find the Index of the First Occurrence", priority: "high", leetcode: { number: 28, name: "Find the Index of the First Occurrence in a String", difficulty: "Easy", url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" } },
            { id: "w3-8", category: "interview", text: "BigInterview: 1 session - technical communication", priority: "high" },
            { id: "w3-9", category: "linkedin", text: "Engage with 10 posts from target companies", priority: "low" }
        ]
    },
    {
        week: 4,
        dates: "Jan 28-Feb 3",
        phase: "Foundation",
        tasks: [
            { id: "w4-1", category: "leetcode", text: "Climbing Stairs", priority: "high", leetcode: { number: 70, name: "Climbing Stairs", difficulty: "Easy", url: "https://leetcode.com/problems/climbing-stairs/" } },
            { id: "w4-2", category: "leetcode", text: "Maximum Subarray", priority: "high", leetcode: { number: 53, name: "Maximum Subarray", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-subarray/" } },
            { id: "w4-3", category: "leetcode", text: "Product of Array Except Self", priority: "high", leetcode: { number: 238, name: "Product of Array Except Self", difficulty: "Medium", url: "https://leetcode.com/problems/product-of-array-except-self/" } },
            { id: "w4-4", category: "leetcode", text: "Missing Number", priority: "high", leetcode: { number: 268, name: "Missing Number", difficulty: "Easy", url: "https://leetcode.com/problems/missing-number/" } },
            { id: "w4-5", category: "leetcode", text: "Single Number", priority: "high", leetcode: { number: 136, name: "Single Number", difficulty: "Easy", url: "https://leetcode.com/problems/single-number/" } },
            { id: "w4-6", category: "interview", text: "BigInterview: 2 sessions (1 behavioral, 1 technical)", priority: "high" },
            { id: "w4-7", category: "admin", text: "Meet with co-op advisor: review strategy", priority: "high" },
            { id: "w4-8", category: "linkedin", text: "Send 5 personalized connection requests to alumni", priority: "medium" }
        ]
    },
    {
        week: 5,
        dates: "Feb 4-10",
        phase: "Active Prep",
        tasks: [
            { id: "w5-1", category: "leetcode", text: "3Sum", priority: "high", leetcode: { number: 15, name: "3Sum", difficulty: "Medium", url: "https://leetcode.com/problems/3sum/" } },
            { id: "w5-2", category: "leetcode", text: "Container With Most Water", priority: "high", leetcode: { number: 11, name: "Container With Most Water", difficulty: "Medium", url: "https://leetcode.com/problems/container-with-most-water/" } },
            { id: "w5-3", category: "leetcode", text: "Longest Substring Without Repeating Characters", priority: "high", leetcode: { number: 3, name: "Longest Substring Without Repeating Characters", difficulty: "Medium", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" } },
            { id: "w5-4", category: "leetcode", text: "Group Anagrams", priority: "high", leetcode: { number: 49, name: "Group Anagrams", difficulty: "Medium", url: "https://leetcode.com/problems/group-anagrams/" } },
            { id: "w5-5", category: "leetcode", text: "Happy Number", priority: "high", leetcode: { number: 202, name: "Happy Number", difficulty: "Easy", url: "https://leetcode.com/problems/happy-number/" } },
            { id: "w5-6", category: "leetcode", text: "Isomorphic Strings", priority: "high", leetcode: { number: 205, name: "Isomorphic Strings", difficulty: "Easy", url: "https://leetcode.com/problems/isomorphic-strings/" } },
            { id: "w5-7", category: "interview", text: "BigInterview: 2 sessions - technical questions, whiteboarding", priority: "high" },
            { id: "w5-8", category: "project", text: "Document web dev projects for portfolio", priority: "medium" },
            { id: "w5-9", category: "linkedin", text: "Share 1 project update from web dev class", priority: "low" }
        ]
    },
    {
        week: 6,
        dates: "Feb 11-17",
        phase: "Active Prep",
        tasks: [
            { id: "w6-1", category: "leetcode", text: "Valid Parentheses", priority: "high", leetcode: { number: 20, name: "Valid Parentheses", difficulty: "Easy", url: "https://leetcode.com/problems/valid-parentheses/" } },
            { id: "w6-2", category: "leetcode", text: "Min Stack", priority: "high", leetcode: { number: 155, name: "Min Stack", difficulty: "Medium", url: "https://leetcode.com/problems/min-stack/" } },
            { id: "w6-3", category: "leetcode", text: "Evaluate Reverse Polish Notation", priority: "high", leetcode: { number: 150, name: "Evaluate Reverse Polish Notation", difficulty: "Medium", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" } },
            { id: "w6-4", category: "leetcode", text: "Daily Temperatures", priority: "high", leetcode: { number: 739, name: "Daily Temperatures", difficulty: "Medium", url: "https://leetcode.com/problems/daily-temperatures/" } },
            { id: "w6-5", category: "leetcode", text: "Top K Frequent Elements", priority: "high", leetcode: { number: 347, name: "Top K Frequent Elements", difficulty: "Medium", url: "https://leetcode.com/problems/top-k-frequent-elements/" } },
            { id: "w6-6", category: "leetcode", text: "Ransom Note", priority: "high", leetcode: { number: 383, name: "Ransom Note", difficulty: "Easy", url: "https://leetcode.com/problems/ransom-note/" } },
            { id: "w6-7", category: "leetcode", text: "Find All Anagrams in a String", priority: "high", leetcode: { number: 438, name: "Find All Anagrams in a String", difficulty: "Medium", url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" } },
            { id: "w6-8", category: "interview", text: "BigInterview: 1 session - system design basics", priority: "high" },
            { id: "w6-9", category: "admin", text: "Schedule career center resume review", priority: "high" },
            { id: "w6-10", category: "linkedin", text: "Send 10 personalized messages to January connections", priority: "medium" }
        ]
    },
    {
        week: 7,
        dates: "Feb 18-24",
        phase: "Active Prep",
        tasks: [
            { id: "w7-1", category: "applications", text: "Apply to 5 companies with early Fall postings", priority: "high" },
            { id: "w7-2", category: "leetcode", text: "Invert Binary Tree", priority: "high", leetcode: { number: 226, name: "Invert Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/invert-binary-tree/" } },
            { id: "w7-3", category: "leetcode", text: "Maximum Depth of Binary Tree", priority: "high", leetcode: { number: 104, name: "Maximum Depth of Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" } },
            { id: "w7-4", category: "leetcode", text: "Same Tree", priority: "high", leetcode: { number: 100, name: "Same Tree", difficulty: "Easy", url: "https://leetcode.com/problems/same-tree/" } },
            { id: "w7-5", category: "leetcode", text: "Symmetric Tree", priority: "high", leetcode: { number: 101, name: "Symmetric Tree", difficulty: "Easy", url: "https://leetcode.com/problems/symmetric-tree/" } },
            { id: "w7-6", category: "leetcode", text: "Binary Tree Level Order Traversal", priority: "high", leetcode: { number: 102, name: "Binary Tree Level Order Traversal", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" } },
            { id: "w7-7", category: "leetcode", text: "Validate Binary Search Tree", priority: "high", leetcode: { number: 98, name: "Validate Binary Search Tree", difficulty: "Medium", url: "https://leetcode.com/problems/validate-binary-search-tree/" } },
            { id: "w7-8", category: "leetcode", text: "Lowest Common Ancestor of BST", priority: "high", leetcode: { number: 235, name: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Medium", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" } },
            { id: "w7-9", category: "interview", text: "BigInterview: 2 sessions - mock interviews", priority: "high" },
            { id: "w7-10", category: "linkedin", text: "Send 10 personalized messages", priority: "medium" }
        ]
    },
    {
        week: 8,
        dates: "Feb 25-Mar 3",
        phase: "Active Prep",
        tasks: [
            { id: "w8-1", category: "leetcode", text: "Subtree of Another Tree", priority: "high", leetcode: { number: 572, name: "Subtree of Another Tree", difficulty: "Easy", url: "https://leetcode.com/problems/subtree-of-another-tree/" } },
            { id: "w8-2", category: "leetcode", text: "Diameter of Binary Tree", priority: "high", leetcode: { number: 543, name: "Diameter of Binary Tree", difficulty: "Easy", url: "https://leetcode.com/problems/diameter-of-binary-tree/" } },
            { id: "w8-3", category: "leetcode", text: "Binary Tree Right Side View", priority: "high", leetcode: { number: 199, name: "Binary Tree Right Side View", difficulty: "Medium", url: "https://leetcode.com/problems/binary-tree-right-side-view/" } },
            { id: "w8-4", category: "leetcode", text: "Construct Binary Tree from Preorder and Inorder", priority: "high", leetcode: { number: 105, name: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "Medium", url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" } },
            { id: "w8-5", category: "leetcode", text: "Path Sum", priority: "high", leetcode: { number: 112, name: "Path Sum", difficulty: "Easy", url: "https://leetcode.com/problems/path-sum/" } },
            { id: "w8-6", category: "leetcode", text: "Kth Smallest Element in BST", priority: "high", leetcode: { number: 230, name: "Kth Smallest Element in a BST", difficulty: "Medium", url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" } },
            { id: "w8-7", category: "leetcode", text: "Number of Islands", priority: "high", leetcode: { number: 200, name: "Number of Islands", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-islands/" } },
            { id: "w8-8", category: "leetcode", text: "Clone Graph", priority: "high", leetcode: { number: 133, name: "Clone Graph", difficulty: "Medium", url: "https://leetcode.com/problems/clone-graph/" } },
            { id: "w8-9", category: "interview", text: "BigInterview: 2 sessions - behavioral + technical", priority: "high" },
            { id: "w8-10", category: "admin", text: "Meet with co-op advisor: discuss responses", priority: "high" },
            { id: "w8-11", category: "linkedin", text: "Connect with 15 more people at target companies", priority: "medium" }
        ]
    },
    {
        week: 9,
        dates: "Mar 4-10",
        phase: "Active Prep",
        tasks: [
            { id: "w9-1", category: "applications", text: "Apply to 7-8 companies", priority: "high" },
            { id: "w9-2", category: "leetcode", text: "Pacific Atlantic Water Flow", priority: "high", leetcode: { number: 417, name: "Pacific Atlantic Water Flow", difficulty: "Medium", url: "https://leetcode.com/problems/pacific-atlantic-water-flow/" } },
            { id: "w9-3", category: "leetcode", text: "Course Schedule", priority: "high", leetcode: { number: 207, name: "Course Schedule", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule/" } },
            { id: "w9-4", category: "leetcode", text: "Number of Connected Components (Premium)", priority: "high", leetcode: { number: 323, name: "Number of Connected Components in an Undirected Graph", difficulty: "Medium", url: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", isPremium: true } },
            { id: "w9-5", category: "leetcode", text: "Graph Valid Tree (Premium)", priority: "high", leetcode: { number: 261, name: "Graph Valid Tree", difficulty: "Medium", url: "https://leetcode.com/problems/graph-valid-tree/", isPremium: true } },
            { id: "w9-6", category: "leetcode", text: "Flood Fill", priority: "high", leetcode: { number: 733, name: "Flood Fill", difficulty: "Easy", url: "https://leetcode.com/problems/flood-fill/" } },
            { id: "w9-7", category: "leetcode", text: "Surrounded Regions", priority: "high", leetcode: { number: 130, name: "Surrounded Regions", difficulty: "Medium", url: "https://leetcode.com/problems/surrounded-regions/" } },
            { id: "w9-8", category: "leetcode", text: "Rotting Oranges", priority: "high", leetcode: { number: 994, name: "Rotting Oranges", difficulty: "Medium", url: "https://leetcode.com/problems/rotting-oranges/" } },
            { id: "w9-9", category: "leetcode", text: "01 Matrix", priority: "high", leetcode: { number: 542, name: "01 Matrix", difficulty: "Medium", url: "https://leetcode.com/problems/01-matrix/" } },
            { id: "w9-10", category: "interview", text: "BigInterview: 2 sessions - focus on weak areas", priority: "high" },
            { id: "w9-11", category: "admin", text: "Complete career center resume review", priority: "high" }
        ]
    },
    {
        week: 10,
        dates: "Mar 11-17",
        phase: "Active Prep",
        tasks: [
            { id: "w10-1", category: "applications", text: "Apply to 7-8 companies", priority: "high" },
            { id: "w10-2", category: "leetcode", text: "Subsets", priority: "high", leetcode: { number: 78, name: "Subsets", difficulty: "Medium", url: "https://leetcode.com/problems/subsets/" } },
            { id: "w10-3", category: "leetcode", text: "Permutations", priority: "high", leetcode: { number: 46, name: "Permutations", difficulty: "Medium", url: "https://leetcode.com/problems/permutations/" } },
            { id: "w10-4", category: "leetcode", text: "Combination Sum", priority: "high", leetcode: { number: 39, name: "Combination Sum", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum/" } },
            { id: "w10-5", category: "leetcode", text: "Letter Combinations of Phone Number", priority: "high", leetcode: { number: 17, name: "Letter Combinations of a Phone Number", difficulty: "Medium", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" } },
            { id: "w10-6", category: "leetcode", text: "Word Search", priority: "high", leetcode: { number: 79, name: "Word Search", difficulty: "Medium", url: "https://leetcode.com/problems/word-search/" } },
            { id: "w10-7", category: "leetcode", text: "Palindrome Partitioning", priority: "high", leetcode: { number: 131, name: "Palindrome Partitioning", difficulty: "Medium", url: "https://leetcode.com/problems/palindrome-partitioning/" } },
            { id: "w10-8", category: "leetcode", text: "Generate Parentheses", priority: "high", leetcode: { number: 22, name: "Generate Parentheses", difficulty: "Medium", url: "https://leetcode.com/problems/generate-parentheses/" } },
            { id: "w10-9", category: "leetcode", text: "N-Queens", priority: "high", leetcode: { number: 51, name: "N-Queens", difficulty: "Hard", url: "https://leetcode.com/problems/n-queens/" } },
            { id: "w10-10", category: "interview", text: "BigInterview: 1 session - system design", priority: "high" },
            { id: "w10-11", category: "project", text: "Document ML class projects for portfolio", priority: "medium" }
        ]
    },
    {
        week: 11,
        dates: "Mar 18-24",
        phase: "Active Prep",
        tasks: [
            { id: "w11-1", category: "applications", text: "Apply to 7-8 companies", priority: "high" },
            { id: "w11-2", category: "leetcode", text: "House Robber", priority: "high", leetcode: { number: 198, name: "House Robber", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber/" } },
            { id: "w11-3", category: "leetcode", text: "Coin Change", priority: "high", leetcode: { number: 322, name: "Coin Change", difficulty: "Medium", url: "https://leetcode.com/problems/coin-change/" } },
            { id: "w11-4", category: "leetcode", text: "Longest Increasing Subsequence", priority: "high", leetcode: { number: 300, name: "Longest Increasing Subsequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-increasing-subsequence/" } },
            { id: "w11-5", category: "leetcode", text: "Unique Paths", priority: "high", leetcode: { number: 62, name: "Unique Paths", difficulty: "Medium", url: "https://leetcode.com/problems/unique-paths/" } },
            { id: "w11-6", category: "leetcode", text: "Jump Game", priority: "high", leetcode: { number: 55, name: "Jump Game", difficulty: "Medium", url: "https://leetcode.com/problems/jump-game/" } },
            { id: "w11-7", category: "leetcode", text: "Word Break", priority: "high", leetcode: { number: 139, name: "Word Break", difficulty: "Medium", url: "https://leetcode.com/problems/word-break/" } },
            { id: "w11-8", category: "leetcode", text: "Decode Ways", priority: "high", leetcode: { number: 91, name: "Decode Ways", difficulty: "Medium", url: "https://leetcode.com/problems/decode-ways/" } },
            { id: "w11-9", category: "leetcode", text: "Partition Equal Subset Sum", priority: "high", leetcode: { number: 416, name: "Partition Equal Subset Sum", difficulty: "Medium", url: "https://leetcode.com/problems/partition-equal-subset-sum/" } },
            { id: "w11-10", category: "leetcode", text: "Longest Common Subsequence", priority: "high", leetcode: { number: 1143, name: "Longest Common Subsequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-common-subsequence/" } },
            { id: "w11-11", category: "interview", text: "BigInterview: 2 sessions - company-specific prep", priority: "high" },
            { id: "w11-12", category: "project", text: "Update GitHub with semester progress", priority: "medium" }
        ]
    },
    {
        week: 12,
        dates: "Mar 25-31",
        phase: "Active Prep",
        tasks: [
            { id: "w12-1", category: "applications", text: "Apply to 7-8 companies", priority: "high" },
            { id: "w12-2", category: "leetcode", text: "Merge Intervals", priority: "high", leetcode: { number: 56, name: "Merge Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/merge-intervals/" } },
            { id: "w12-3", category: "leetcode", text: "Insert Interval", priority: "high", leetcode: { number: 57, name: "Insert Interval", difficulty: "Medium", url: "https://leetcode.com/problems/insert-interval/" } },
            { id: "w12-4", category: "leetcode", text: "Non-overlapping Intervals", priority: "high", leetcode: { number: 435, name: "Non-overlapping Intervals", difficulty: "Medium", url: "https://leetcode.com/problems/non-overlapping-intervals/" } },
            { id: "w12-5", category: "leetcode", text: "Meeting Rooms (Premium)", priority: "high", leetcode: { number: 252, name: "Meeting Rooms", difficulty: "Easy", url: "https://leetcode.com/problems/meeting-rooms/", isPremium: true } },
            { id: "w12-6", category: "leetcode", text: "Meeting Rooms II (Premium)", priority: "high", leetcode: { number: 253, name: "Meeting Rooms II", difficulty: "Medium", url: "https://leetcode.com/problems/meeting-rooms-ii/", isPremium: true } },
            { id: "w12-7", category: "leetcode", text: "Search in Rotated Sorted Array", priority: "high", leetcode: { number: 33, name: "Search in Rotated Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" } },
            { id: "w12-8", category: "leetcode", text: "Find Minimum in Rotated Sorted Array", priority: "high", leetcode: { number: 153, name: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" } },
            { id: "w12-9", category: "leetcode", text: "Binary Search", priority: "high", leetcode: { number: 704, name: "Binary Search", difficulty: "Easy", url: "https://leetcode.com/problems/binary-search/" } },
            { id: "w12-10", category: "leetcode", text: "Time Based Key-Value Store", priority: "high", leetcode: { number: 981, name: "Time Based Key-Value Store", difficulty: "Medium", url: "https://leetcode.com/problems/time-based-key-value-store/" } },
            { id: "w12-11", category: "interview", text: "BigInterview: 1 session - mock interview", priority: "high" },
            { id: "w12-12", category: "linkedin", text: "Follow up with engaged connections", priority: "low" }
        ]
    },
    {
        week: 13,
        dates: "Apr 1-7",
        phase: "Interview Season",
        tasks: [
            { id: "w13-1", category: "applications", text: "Apply to 5-7 companies", priority: "medium" },
            { id: "w13-2", category: "leetcode", text: "LRU Cache", priority: "high", leetcode: { number: 146, name: "LRU Cache", difficulty: "Medium", url: "https://leetcode.com/problems/lru-cache/" } },
            { id: "w13-3", category: "leetcode", text: "Implement Trie", priority: "high", leetcode: { number: 208, name: "Implement Trie (Prefix Tree)", difficulty: "Medium", url: "https://leetcode.com/problems/implement-trie-prefix-tree/" } },
            { id: "w13-4", category: "leetcode", text: "Design Add and Search Words", priority: "high", leetcode: { number: 211, name: "Design Add and Search Words Data Structure", difficulty: "Medium", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" } },
            { id: "w13-5", category: "leetcode", text: "Kth Largest Element in Array", priority: "high", leetcode: { number: 215, name: "Kth Largest Element in an Array", difficulty: "Medium", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" } },
            { id: "w13-6", category: "leetcode", text: "Task Scheduler", priority: "high", leetcode: { number: 621, name: "Task Scheduler", difficulty: "Medium", url: "https://leetcode.com/problems/task-scheduler/" } },
            { id: "w13-7", category: "leetcode", text: "Find Median from Data Stream", priority: "high", leetcode: { number: 295, name: "Find Median from Data Stream", difficulty: "Hard", url: "https://leetcode.com/problems/find-median-from-data-stream/" } },
            { id: "w13-8", category: "leetcode", text: "Serialize and Deserialize Binary Tree", priority: "high", leetcode: { number: 297, name: "Serialize and Deserialize Binary Tree", difficulty: "Hard", url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" } },
            { id: "w13-9", category: "leetcode", text: "Longest Palindromic Substring", priority: "high", leetcode: { number: 5, name: "Longest Palindromic Substring", difficulty: "Medium", url: "https://leetcode.com/problems/longest-palindromic-substring/" } },
            { id: "w13-10", category: "leetcode", text: "Palindromic Substrings", priority: "high", leetcode: { number: 647, name: "Palindromic Substrings", difficulty: "Medium", url: "https://leetcode.com/problems/palindromic-substrings/" } },
            { id: "w13-11", category: "leetcode", text: "Valid Sudoku", priority: "high", leetcode: { number: 36, name: "Valid Sudoku", difficulty: "Medium", url: "https://leetcode.com/problems/valid-sudoku/" } },
            { id: "w13-12", category: "interview", text: "BigInterview: 2 sessions - targeted prep", priority: "high" },
            { id: "w13-13", category: "admin", text: "Schedule career center mock interviews", priority: "high" }
        ]
    },
    {
        week: 14,
        dates: "Apr 8-14",
        phase: "Interview Season",
        tasks: [
            { id: "w14-1", category: "applications", text: "Apply to 5-7 companies", priority: "medium" },
            { id: "w14-2", category: "leetcode", text: "Rotate Image", priority: "high", leetcode: { number: 48, name: "Rotate Image", difficulty: "Medium", url: "https://leetcode.com/problems/rotate-image/" } },
            { id: "w14-3", category: "leetcode", text: "Spiral Matrix", priority: "high", leetcode: { number: 54, name: "Spiral Matrix", difficulty: "Medium", url: "https://leetcode.com/problems/spiral-matrix/" } },
            { id: "w14-4", category: "leetcode", text: "Set Matrix Zeroes", priority: "high", leetcode: { number: 73, name: "Set Matrix Zeroes", difficulty: "Medium", url: "https://leetcode.com/problems/set-matrix-zeroes/" } },
            { id: "w14-5", category: "leetcode", text: "String to Integer (atoi)", priority: "high", leetcode: { number: 8, name: "String to Integer (atoi)", difficulty: "Medium", url: "https://leetcode.com/problems/string-to-integer-atoi/" } },
            { id: "w14-6", category: "leetcode", text: "Longest Palindromic Subsequence", priority: "high", leetcode: { number: 516, name: "Longest Palindromic Subsequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-palindromic-subsequence/" } },
            { id: "w14-7", category: "leetcode", text: "House Robber II", priority: "high", leetcode: { number: 213, name: "House Robber II", difficulty: "Medium", url: "https://leetcode.com/problems/house-robber-ii/" } },
            { id: "w14-8", category: "leetcode", text: "Maximum Product Subarray", priority: "high", leetcode: { number: 152, name: "Maximum Product Subarray", difficulty: "Medium", url: "https://leetcode.com/problems/maximum-product-subarray/" } },
            { id: "w14-9", category: "leetcode", text: "Combination Sum II", priority: "high", leetcode: { number: 40, name: "Combination Sum II", difficulty: "Medium", url: "https://leetcode.com/problems/combination-sum-ii/" } },
            { id: "w14-10", category: "leetcode", text: "Sort Colors", priority: "high", leetcode: { number: 75, name: "Sort Colors", difficulty: "Medium", url: "https://leetcode.com/problems/sort-colors/" } },
            { id: "w14-11", category: "leetcode", text: "Count Good Nodes in Binary Tree", priority: "high", leetcode: { number: 1448, name: "Count Good Nodes in Binary Tree", difficulty: "Medium", url: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/" } },
            { id: "w14-12", category: "interview", text: "BigInterview: 3 sessions - max mocks", priority: "high" },
            { id: "w14-13", category: "admin", text: "Meet with co-op advisor: interview strategies", priority: "high" }
        ]
    },
    {
        week: 15,
        dates: "Apr 15-21",
        phase: "Interview Execution",
        tasks: [
            { id: "w15-1", category: "leetcode", text: "Add Two Numbers", priority: "high", leetcode: { number: 2, name: "Add Two Numbers", difficulty: "Medium", url: "https://leetcode.com/problems/add-two-numbers/" } },
            { id: "w15-2", category: "leetcode", text: "Reverse Linked List", priority: "high", leetcode: { number: 206, name: "Reverse Linked List", difficulty: "Easy", url: "https://leetcode.com/problems/reverse-linked-list/" } },
            { id: "w15-3", category: "leetcode", text: "Merge Two Sorted Lists", priority: "high", leetcode: { number: 21, name: "Merge Two Sorted Lists", difficulty: "Easy", url: "https://leetcode.com/problems/merge-two-sorted-lists/" } },
            { id: "w15-4", category: "leetcode", text: "Linked List Cycle", priority: "high", leetcode: { number: 141, name: "Linked List Cycle", difficulty: "Easy", url: "https://leetcode.com/problems/linked-list-cycle/" } },
            { id: "w15-5", category: "leetcode", text: "Remove Nth Node From End", priority: "high", leetcode: { number: 19, name: "Remove Nth Node From End of List", difficulty: "Medium", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" } },
            { id: "w15-6", category: "leetcode", text: "Reorder List", priority: "high", leetcode: { number: 143, name: "Reorder List", difficulty: "Medium", url: "https://leetcode.com/problems/reorder-list/" } },
            { id: "w15-7", category: "leetcode", text: "Merge K Sorted Lists", priority: "high", leetcode: { number: 23, name: "Merge k Sorted Lists", difficulty: "Hard", url: "https://leetcode.com/problems/merge-k-sorted-lists/" } },
            { id: "w15-8", category: "leetcode", text: "Longest Consecutive Sequence", priority: "high", leetcode: { number: 128, name: "Longest Consecutive Sequence", difficulty: "Medium", url: "https://leetcode.com/problems/longest-consecutive-sequence/" } },
            { id: "w15-9", category: "leetcode", text: "Minimum Window Substring", priority: "high", leetcode: { number: 76, name: "Minimum Window Substring", difficulty: "Hard", url: "https://leetcode.com/problems/minimum-window-substring/" } },
            { id: "w15-10", category: "leetcode", text: "Trapping Rain Water", priority: "high", leetcode: { number: 42, name: "Trapping Rain Water", difficulty: "Hard", url: "https://leetcode.com/problems/trapping-rain-water/" } },
            { id: "w15-11", category: "leetcode", text: "Alien Dictionary (Premium)", priority: "high", leetcode: { number: 269, name: "Alien Dictionary", difficulty: "Hard", url: "https://leetcode.com/problems/alien-dictionary/", isPremium: true } },
            { id: "w15-12", category: "leetcode", text: "Encode and Decode Strings (Premium)", priority: "high", leetcode: { number: 271, name: "Encode and Decode Strings", difficulty: "Medium", url: "https://leetcode.com/problems/encode-and-decode-strings/", isPremium: true } },
            { id: "w15-13", category: "interview", text: "BigInterview: 2 sessions - company-specific", priority: "high" },
            { id: "w15-14", category: "admin", text: "Prioritize interview prep over new applications", priority: "high" },
            { id: "w15-15", category: "linkedin", text: "Reach out for advice at interview companies", priority: "medium" }
        ]
    },
    {
        week: 16,
        dates: "Apr 22-30",
        phase: "Final Push",
        tasks: [
            { id: "w16-1", category: "leetcode", text: "Word Ladder", priority: "high", leetcode: { number: 127, name: "Word Ladder", difficulty: "Hard", url: "https://leetcode.com/problems/word-ladder/" } },
            { id: "w16-2", category: "leetcode", text: "Sliding Window Maximum", priority: "high", leetcode: { number: 239, name: "Sliding Window Maximum", difficulty: "Hard", url: "https://leetcode.com/problems/sliding-window-maximum/" } },
            { id: "w16-3", category: "leetcode", text: "Binary Tree Maximum Path Sum", priority: "high", leetcode: { number: 124, name: "Binary Tree Maximum Path Sum", difficulty: "Hard", url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" } },
            { id: "w16-4", category: "leetcode", text: "Course Schedule II", priority: "high", leetcode: { number: 210, name: "Course Schedule II", difficulty: "Medium", url: "https://leetcode.com/problems/course-schedule-ii/" } },
            { id: "w16-5", category: "leetcode", text: "Graph Valid Tree (Premium)", priority: "high", leetcode: { number: 261, name: "Graph Valid Tree", difficulty: "Medium", url: "https://leetcode.com/problems/graph-valid-tree/", isPremium: true } },
            { id: "w16-6", category: "leetcode", text: "Accounts Merge", priority: "high", leetcode: { number: 721, name: "Accounts Merge", difficulty: "Medium", url: "https://leetcode.com/problems/accounts-merge/" } },
            { id: "w16-7", category: "leetcode", text: "Word Search II", priority: "high", leetcode: { number: 212, name: "Word Search II", difficulty: "Hard", url: "https://leetcode.com/problems/word-search-ii/" } },
            { id: "w16-8", category: "leetcode", text: "Regular Expression Matching", priority: "high", leetcode: { number: 10, name: "Regular Expression Matching", difficulty: "Hard", url: "https://leetcode.com/problems/regular-expression-matching/" } },
            { id: "w16-9", category: "leetcode", text: "Edit Distance", priority: "high", leetcode: { number: 72, name: "Edit Distance", difficulty: "Hard", url: "https://leetcode.com/problems/edit-distance/" } },
            { id: "w16-10", category: "leetcode", text: "Largest Rectangle in Histogram", priority: "high", leetcode: { number: 84, name: "Largest Rectangle in Histogram", difficulty: "Hard", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/" } },
            { id: "w16-11", category: "leetcode", text: "Maximal Rectangle", priority: "high", leetcode: { number: 85, name: "Maximal Rectangle", difficulty: "Hard", url: "https://leetcode.com/problems/maximal-rectangle/" } },
            { id: "w16-12", category: "leetcode", text: "Valid Anagram (Review)", priority: "high", leetcode: { number: 242, name: "Valid Anagram", difficulty: "Easy", url: "https://leetcode.com/problems/valid-anagram/" } },
            { id: "w16-13", category: "interview", text: "BigInterview: 2 sessions - polish and final prep", priority: "high" },
            { id: "w16-14", category: "project", text: "Document completed semester projects", priority: "medium" },
            { id: "w16-15", category: "admin", text: "Follow up on pending applications", priority: "medium" }
        ]
    }
];