// src/components/StatsView.tsx
import React from 'react';
import { Code, Users, Briefcase } from 'lucide-react';
import type {Category, CategoryConfig} from '../types';

interface StatsViewProps {
    stats: {
        byCategory: Record<Category, { total: number; completed: number }>;
    };
    categoryConfig: Record<Category, CategoryConfig>;
}

const StatsView: React.FC<StatsViewProps> = ({ stats, categoryConfig }) => {
    return (
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
    );
};

export default StatsView;