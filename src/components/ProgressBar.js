import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-section">
      <h3>{progress}% Done</h3>
      <div className="progress-bar">
        <div className="progress-done" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
