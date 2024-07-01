import React, { useState } from "react";

export default function Collapsible({ label, body, link }) {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };
  return (
    <div>
      {open && (
        <div className="info-prj ">
          <p>{body}</p>
          <a
            href="https://react-weather-forecast-eli.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {link}
          </a>
        </div>
      )}
      <button onClick={toggle}>
        <h3>{label}</h3>
      </button>
    </div>
  );
}
