import React from "react";

function OrganicDivider({ flip = false }) {
  return (
    <div className={`eb-divider ${flip ? "eb-divider--flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,30 C150,55 300,5 450,28 C600,50 750,8 900,32 C1020,50 1110,15 1200,30 L1200,60 L0,60 Z" />
      </svg>
    </div>
  );
}

export default OrganicDivider;