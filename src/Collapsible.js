import React, { useState } from "react";

export default function Collapsible({ label, body, link }) {
  const [open, setOPen] = useState(false);

  if (window.innerWidth >= 992) {
    const toggle = () => {
      setOPen(!open);
    };
    return (
      <div>
        <button onClick={toggle}>
          <h3>{label}</h3>
        </button>
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
      </div>
    );
  } else {
    return (
      <div className="info-prj ">
        <h3>{label}</h3>

        <p>{body}</p>
        <a
          href="https://react-weather-forecast-eli.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {link}
        </a>
      </div>
    );
  }
}
