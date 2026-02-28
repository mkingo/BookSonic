"use client";

import React from "react";

const LoadingOverlay: React.FC = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-shadow-wrapper bg-white">
        <div className="loading-shadow">
          <svg className="loading-animation" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#663820" strokeWidth="4"></circle>
            <path className="opacity-75" fill="#663820" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          <div className="text-center">
            <p className="loading-title">Processing your book...</p>
            <div className="loading-progress mt-4">
              <div className="loading-progress-item">
                <span className="loading-progress-status" />
                <span>Uploading files</span>
              </div>
              <div className="loading-progress-item">
                <span className="loading-progress-status" />
                <span>Analyzing PDF</span>
              </div>
              <div className="loading-progress-item">
                <span className="loading-progress-status" />
                <span>Saving segments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
