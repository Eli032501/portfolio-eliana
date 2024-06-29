import React from "react";
import "./MyProjects.css";
import prj1 from "./images/prj1.png";

export default function MyProjects(params) {
  return (
    <div className="MyProjects">
      <div className="d-flex f-row justify-content-end align-items-center">
        <h2 className="title-style">My Projects</h2>
        <span className="title-component-rt"></span>
      </div>
      <div className="grid-projects">
        <div className="element-project">
          <div>
            <img src={prj1} alt="weather project" />
          </div>
          <h3>Check the Weather</h3>
        </div>
      </div>
    </div>
  );
}
