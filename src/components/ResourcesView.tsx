// src/components/ResourcesView.tsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { resources } from '../data/resources';

const ResourcesView: React.FC = () => {
    return (
        <div className="resources-view">
            <div className="resources-card">
                <h2 className="resources-title">Interview Prep Resources</h2>
                <p className="resources-subtitle">
                    Curated tools and platforms to help you ace your technical interviews
                </p>

                <div className="resources-grid">
                    {resources.map((resource, index) => (
                        <a                               // ← ADD THIS
                            key={index}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resource-card"
                        >
                        <div className="resource-header">
                        <div className={`resource-type-badge resource-type-${resource.type}`}>
                    {resource.type}
                        </div>
                        <ExternalLink className="resource-link-icon" />
                        </div>
                        <h3 className="resource-name">{resource.name}</h3>
                <p className="resource-description">{resource.description}</p>
            </a>
            ))}
</div>
</div>
</div>
);
};

export default ResourcesView;