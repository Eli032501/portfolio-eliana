import React from "react";
import perfilImage from "./images/perfil.jpg";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <section className="frame-header">
        <div className="container-hd">
          <h1>Frontend Developer</h1>
          <p> Based in Lisbon</p>
          <div className="mt-4">
            <div>
              <strong>Skills</strong>
              <ul>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Responsive Developement</li>
              </ul>
            </div>
            <div>
              <strong>Tools</strong>
              <ul>
                <li>Github</li>
                <li>Vs Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="frame-image">
        <img src={perfilImage} alt="profile" />
      </div>
      <button className="btn">Contact me</button>
    </div>
  );
}
