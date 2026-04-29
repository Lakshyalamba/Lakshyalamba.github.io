import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./ContributionGraph.css";

const ContributionGraph = () => {
  return (
    <section className="contribution-section">
      <div className="section-header">
        <h2>GitHub Contributions</h2>
        <a
          href="https://github.com/Lakshyalamba"
          target="_blank"
          rel="noreferrer"
          className="github-profile-btn"
        >
          View GitHub Profile
        </a>
      </div>

      <p className="contribution-text">
        Tracking my coding consistency, open-source contributions, and project activity.
      </p>

      <div className="contribution-card">
        <GitHubCalendar
          username="Lakshyalamba"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          colorScheme="dark"
        />
      </div>
    </section>
  );
};

export default ContributionGraph;
