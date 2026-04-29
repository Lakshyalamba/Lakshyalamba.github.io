import React, { useState } from "react";
import RepoCard from "./RepoCard";
import { projects } from "../data";
import "./RepoList.css";

const RepoList = ({ onProjectClick }) => {
  const [filter, setFilter] = useState("All");

  // Extract all unique tags
  const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <div className="repo-list-section">
      <div className="repo-list-header">
        <h2 className="section-title">
          Repositories <span className="repo-count">{projects.length}</span>
        </h2>
      </div>

      <div className="filter-tabs">
        {allTags.map(tag => (
          <button 
            key={tag}
            className={`filter-btn ${filter === tag ? 'active' : ''}`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="repo-grid">
        {filteredProjects.map(project => (
          <RepoCard key={project.id} project={project} onClick={onProjectClick} />
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <p className="no-projects">No projects found for this filter.</p>
      )}
    </div>
  );
};

export default RepoList;
