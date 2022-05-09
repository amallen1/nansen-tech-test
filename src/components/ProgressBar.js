import React from "react";
import "../styles/progressBar.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-section">
      <h3>{progress}% Done</h3>
      <div className="progress-bar">
        <div className="progress-done" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
