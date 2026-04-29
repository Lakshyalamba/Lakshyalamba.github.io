import React from "react";
import { profileInfo, contactInfo, skills } from "../data";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img src={profileInfo.avatarUrl} alt="Profile Avatar" className="avatar" />
        <h1 className="name">{profileInfo.name}</h1>
        <h2 className="username">{profileInfo.username}</h2>
      </div>

      <div className="bio-section">
        <p className="bio">{profileInfo.bio}</p>
        
        <div className="actions">
          <a href={contactInfo.resume} target="_blank" rel="noopener noreferrer" className="btn-resume">View Resume</a>
          <div className="social-actions">
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="btn-social">GitHub</a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-social">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="info-section">
        <ul className="info-list">
          <li>
            <svg className="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-0l-1.424-1.424zM7.5 4.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>
            <span>{profileInfo.location}</span>
          </li>
          <li>
            <svg className="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path></svg>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </li>
          <li>
             <svg className="octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M3.75 2h10.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V3.75C0 2.784.784 2 1.75 2Zm0 1.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25Z"></path></svg>
            <span>{contactInfo.phone}</span>
          </li>
        </ul>
      </div>

      <div className="skills-section">
        <h3>Skills</h3>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
