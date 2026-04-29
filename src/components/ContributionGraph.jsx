import React from "react";
import "./ContributionGraph.css";

const ContributionGraph = () => {
  // Generate random mock contribution data
  // GitHub shows 52 weeks + a few days, so roughly 365 squares
  const generateMockData = () => {
    const data = [];
    for (let i = 0; i < 365; i++) {
      // 0: no contribution, 1-4: varying levels
      // Weighted towards 0 to look realistic
      const rand = Math.random();
      let level = 0;
      if (rand > 0.6) level = 1;
      if (rand > 0.8) level = 2;
      if (rand > 0.9) level = 3;
      if (rand > 0.95) level = 4;
      data.push(level);
    }
    return data;
  };

  const contributions = generateMockData();

  // Divide into weeks for CSS grid layout
  const weeks = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }

  return (
    <div className="contribution-section">
      <div className="contribution-header">
        <h2 className="contribution-title">1,024 contributions in the last year</h2>
      </div>
      
      <div className="contribution-graph-container">
        <div className="contribution-graph">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="contribution-week">
              {week.map((level, dayIndex) => (
                <div 
                  key={`${weekIndex}-${dayIndex}`} 
                  className={`contribution-cell level-${level}`}
                  title={`${level} contributions`}
                ></div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="contribution-footer">
          <a href="#" className="contribution-link">Learn how we count contributions</a>
          <div className="contribution-legend">
            <span>Less</span>
            <div className="contribution-cell level-0"></div>
            <div className="contribution-cell level-1"></div>
            <div className="contribution-cell level-2"></div>
            <div className="contribution-cell level-3"></div>
            <div className="contribution-cell level-4"></div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionGraph;
