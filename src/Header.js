import React from "react";
import perfilImage from "./images/perfil.jpg";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <section className="row">
        <div className=" col-12 col-md-7">
          <div className=" frame-header ">
            <h1>Frontend Developer</h1>
            <p> based in Lisbon</p>
            <div className="row ">
              <div className="col">
                <strong>Skills</strong>
                <ul>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Responsive Developement</li>
                </ul>
              </div>

              <div className="col col-md-4 col-lg">
                <strong>Tools</strong>
                <ul>
                  <li>Github</li>
                  <li>Vs Code</li>
                </ul>
              </div>
            </div>
          </div>
          <a href="#contact" className="d-none d-md-block btn btn-standard-lt">
            Contact me
          </a>
        </div>
        <div className="frame-image col-11 col-sm-10 col-md-5">
          <img src={perfilImage} alt="profile" />
        </div>
        <div className="col d-md-none "></div>
      </section>
    </div>
  );
}
