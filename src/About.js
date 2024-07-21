import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About" id="about">
      <div className="d-flex f-row  align-items-center">
        <span className="title-component-lt"></span>
        <h2>About me</h2>
      </div>
      <section className="row mt-3 justify-content-between align-items-start">
        <div className="col-12 col-md-11 col-lg-6 frame-text">
          <p>
            I'm 23 years old, very curious, and always looking to learn more. I
            live in Lisbon, Portugal, and I am passionate about music, books,
            and travel.
          </p>
          <p>
            I'm currently looking for new opportunities in front-end
            development. I have skills in React and Bootstrap.
          </p>
        </div>

        <div className="col-12 col-lg-5 gr-list-btn ">
          <div className="list-courses">
            <strong>educational journey</strong>
            <ul>
              <li>Audiovisuals and Multemedia - Degree</li>
              <li>Web Front-End - Specialization</li>
              <li>Front-End - Shecodes Workshops</li>
              <li>Wall Street English - Course</li>
            </ul>
          </div>
          <a
            href="https://www.dropbox.com/scl/fo/5nw4nty5tfs2kpvkry3um/ABgDINgE0nm7Rz0Cr3IRHnQ?rlkey=wrdhrjf443zc9swth7z0by07e&e=2&st=3ajbl9t8&dl=0"
            target="_blank"
            rel="noreferrer"
            className="btn btn-standard-rt "
          >
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
}
