import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About" id="about">
      <div className="d-flex f-row  align-items-center">
        <span className="title-component-lt"></span>
        <h2>About me</h2>
      </div>
      <section className="row mt-3 justify-content-between align-items-end">
        <div className="col-12 col-md-11 col-lg-6 frame-text">
          <p>
            I built this fully-functioning Vanilla JavaScript weather app in
            SheCodes workshop. Building upon my previously-gained knowledge, I
            also became skilled in Bootstrap, API’s, real-life development
            workflow, hosting, and advanced JavaScript. SheCodes workshop.
          </p>
          <p>
            Building upon my previously-gained knowledge, I also became skilled
            in Bootstrap, API’s, workflow, hosting, and advanced JavaScript.
            SheCodes workshop. Building upon my previously-gained knowledge, I
            also became skilled in Bootstrap, API’s,
          </p>
        </div>

        <div className="col-12 col-lg-5 d-flex flex-column">
          <div className="list-courses ">
            <strong>educational journey</strong>
            <ul>
              <li>Audiovisuals and Multemedia - Undergraduate degree</li>
              <li>Web Front-End - Specialization</li>
              <li>Front-End - Shecodes Workshops</li>
              <li>Wall Street English - Course</li>
            </ul>
          </div>
          <button className="btn btn-standard-rt mt-4 align-self-end">
            Download CV
          </button>
        </div>
      </section>
    </div>
  );
}
