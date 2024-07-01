import React, { useState } from "react";
import "./MyProjects.css";
import prj1 from "./images/prj1.png";

export default function MyProjects(params) {
  const [btnToggle, setBtnToggle] = useState("d-none");

  function togglePrj() {
    if (btnToggle === "d-none") {
      setBtnToggle("d-block");
    } else {
      setBtnToggle("d-none");
    }
  }

  return (
    <div className="MyProjects">
      <div className="d-flex f-row justify-content-end align-items-center">
        <h2 className="title-style">My Projects</h2>
        <span className="title-component-rt"></span>
      </div>
      <div className="grid-projects">
        <button onClick={togglePrj} className="element-project">
          <div className="frame-prj">
            <img src={prj1} alt="weather project" />
          </div>
          <div className={[btnToggle, "info-prj"].join(" ")}>
            <p>
              I built this fully-functioning Vanilla JavaScript weather app in
              SheCodes workshop. Building upon my previously-gained knowledge, I
              also became skilled in Bootstrap, API’s, real-life development
              workflow, hosting, and advanced JavaScript.
            </p>
            <a
              href="https://react-weather-forecast-eli.netlify.app/"
              className="link-prj"
              target="_blank"
              rel="noreferrer"
            >
              Check it out!
            </a>
          </div>
          <h3>Check the Weather</h3>
        </button>
      </div>
    </div>
  );
}
