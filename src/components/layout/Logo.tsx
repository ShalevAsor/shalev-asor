import React from "react";

const Logo = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 50"
        className="w-12 h-8 text-sky-500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left bracket */}
        <path
          d="M20 5L10 25L20 45"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bracket-move"
        />

        {/* Right bracket */}
        <path
          d="M80 5L90 25L80 45"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bracket-move-reverse"
        />

        {/* S path - proper S shape */}
        <path
          d="M40 18C40 18 37 15 33 15C29 15 27 17 27 20C27 23 29 24 33 25C37 26 40 27 40 31C40 35 37 37 33 37C29 37 26 35 26 35"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="animate-path-draw"
          strokeDasharray="100"
        />

        {/* A path */}
        <path
          d="M55 35L65 15L75 35M58 28H72"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="animate-path-draw-delayed"
          strokeDasharray="100"
        />

        {/* Dot between S and A */}
        <circle
          cx="50"
          cy="25"
          r="1.5"
          fill="currentColor"
          className="animate-pulse opacity-60"
        />
      </svg>

      {/* Interactive hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/10 to-sky-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    </div>
  );
};

export default Logo;
