// SkeletonLoader.jsx

import React from "react";
import "./skeleton-loader.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-button"></div>
    </div>
  );
};

export default SkeletonLoader;
