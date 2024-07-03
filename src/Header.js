import React from "react";
import perfilImage from "./images/perfil.jpg";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <section className="row">
        <div className=" col-7">
          <div className=" frame-header mb-5">
            <h1>Frontend Developer</h1>
            <p> Based in Lisbon</p>
            <div className="row mt-5">
              <div className="col">
                <strong>Skills</strong>
                <ul>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Responsive Developement</li>
                </ul>
              </div>
              <div className="col-1"></div>
              <div className="col">
                <strong>Tools</strong>
                <ul>
                  <li>Github</li>
                  <li>Vs Code</li>
                </ul>
              </div>
            </div>
          </div>
          <a href="#contact" className="btn btn-standard-lt">
            Contact me
          </a>
        </div>
        <div className="frame-image col-5">
          <img src={perfilImage} alt="profile" />
        </div>
      </section>
    </div>
  );
}
