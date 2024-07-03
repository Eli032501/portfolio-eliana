import React from "react";
import "./MyProjects.css";
import prj1 from "./images/prj1.png";
import Collapsible from "./Collapsible";

export default function MyProjects(params) {
  return (
    <div className="MyProjects">
      <div className="d-flex f-row justify-content-end align-items-center">
        <h2>My Projects</h2>
        <span className="title-component-rt"></span>
      </div>
      <div className="grid-projects">
        <article className="element-project">
          <div className="frame-prj">
            <img src={prj1} alt="weather project" />
          </div>
          <Collapsible
            label="Check the Weather"
            body="I built this fully-functioning Vanilla JavaScript weather app
                  in SheCodes workshop. Building upon my previously-gained
                  knowledge, I also became skilled in Bootstrap, API’s,
                  real-life development workflow, hosting, and advanced
                  JavaScript."
            link="Check it out"
          />
        </article>
        <article className="element-project">
          <div className="frame-prj">
            <img src={prj1} alt="weather project" />
          </div>
          <Collapsible
            label="Check the Weather"
            body="I built this fully-functioning Vanilla JavaScript weather app
                  in SheCodes workshop. Building upon my previously-gained
                  knowledge, I also became skilled in Bootstrap, API’s,
                  real-life development workflow, hosting, and advanced
                  JavaScript."
            link="Check it out"
          />
        </article>
      </div>
    </div>
  );
}
