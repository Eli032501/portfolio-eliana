import React from "react";
import "./MyProjects.css";
import pj1 from "./images/pr1.png";
import pj2 from "./images/pr2.png";
import Collapsible from "./Collapsible";

export default function MyProjects(params) {
  return (
    <div className="MyProjects " id="projects">
      <div className="d-flex f-row justify-content-end align-items-center">
        <h2>My Projects</h2>
        <span className="title-component-rt"></span>
      </div>
      <div className="grid-projects">
        <Collapsible
          srcImg={pj1}
          altImg="Weather App Project"
          label="Weather App"
          body="I built this project in SheCodes React workshop. Using my previous knowledge of Bootstrap, and Responsive Development and my recent skills with React and APIs, I created a fully-functioning weather app."
          link="https://react-weather-forecast-eli.netlify.app/"
        />

        <Collapsible
          srcImg={pj2}
          altImg="Dictionary App Project"
          label="Dictionary App"
          body="While working in SheCodes React workshop I developed
              a fully functional and responsive dictionary app. Using React and 2 APIs
              I built an app that provides meanings, synonyms, phonetics,
              and images of the word provided by the user."
          link="https://dictionary-app-react-eli.netlify.app/"
        />
      </div>
    </div>
  );
}
