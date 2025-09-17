// CircleIcon.jsx
import React from "react";

/**
 * Props:
 * - size (number): diameter in px (default 80)
 * - bg (string): circle color (default: '#ff6b6b' similar to your screenshot)
 * - children: icon element (SVG or react-icons)
 */
const CircleIcon = ({ size = 80, bg = "#ff6161", children }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full flex items-center justify-center shadow-md"
    >
      {/* outer circle */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "9999px",
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* inner white-line icon placeholder; pass an SVG or react-icon as children */}
        <div style={{ color: "white" }} className="flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CircleIcon;
