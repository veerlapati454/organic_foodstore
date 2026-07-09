import React, { useId } from "react";

function StampBadge({ rotate = -8, className = "" }) {
  const id = useId();
  const topId = `stamp-top-${id}`;
  const botId = `stamp-bot-${id}`;
  return (
    <svg
      className={`mk-stamp ${className}`}
      viewBox="0 0 160 160"
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <circle cx="80" cy="80" r="74" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="80" cy="80" r="62" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 5" />
      <path id={topId} d="M 18 80 a 62 62 0 1 1 124 0" fill="none" />
      <path id={botId} d="M 30 92 a 50 50 0 1 0 100 0" fill="none" />
      <text fontSize="10.5" letterSpacing="3" fill="currentColor">
        <textPath href={`#${topId}`} startOffset="50%" textAnchor="middle">
          CERTIFIED ORGANIC
        </textPath>
      </text>
      <text fontSize="9" letterSpacing="2.5" fill="currentColor">
        <textPath href={`#${botId}`} startOffset="50%" textAnchor="middle">
          HAND PICKED · FARM FRESH
        </textPath>
      </text>
      <path
        d="M80 52c11 0 20 9 20 20 0 15-20 29-20 29s-20-14-20-29c0-11 9-20 20-20z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

export default StampBadge;