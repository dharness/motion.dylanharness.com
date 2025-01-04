import React from "react";

const TextTag = ({ background, color, children }) => {
  return (
    <span
      style={{
        background: background,
        color: color,
        borderRadius: "5px",
        padding: "0 4px 0 4px",
      }}
    >
      {children}
    </span>
  );
};

export default TextTag;
