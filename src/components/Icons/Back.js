import * as React from "react";

function Back(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...props}>
      <path d="M0 0h24v24H0z" fill="none" stroke="inherit" />
      <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
    </svg>
  );
}

export default Back;
