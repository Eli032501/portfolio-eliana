import React from "react";
import perfilImage from "./images/perfil.jpg";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <section className="row">
        <div className="d-none d-sm-block col d-md-none "></div>
        <div className="  col-12 col-sm-11 col-md-7">
          <div className=" frame-header ">
            <h1>Frontend Developer</h1>
            <p> based in Lisbon</p>
            <div className="row grp-lists">
              <div className="col ">
                <strong>Skills</strong>
                <ul>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Responsive</li>
                </ul>
              </div>

              <div className="col    ">
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
        <div className="frame-image col-12 col-sm-10 col-md-5">
          <img src={perfilImage} alt="profile" />
        </div>
        <div className="d-none d-sm-block col d-md-none "></div>
      </section>
    </div>
  );
}
