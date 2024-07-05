import React from "react";
import "./Contacts.css";
import icon1 from "./images/linkedin.png";
import icon2 from "./images/github.png";

export default function Contacts() {
  return (
    <div className="Contacts ">
      <h2 id="contact">Contacts</h2>
      <div className="d-flex f-row align-items-center  mb-5 ">
        <a href="/" className="contact-icons " target="_blank" rel="noreferrer">
          <img src={icon1} alt="linkedin page" />
        </a>
        <a
          href="https://github.com/Eli032501"
          className="contact-icons "
          target="_blank"
          rel="noreferrer"
        >
          <img src={icon2} alt="github page" />
        </a>
        <a
          href="mailto:epereira2135@gmail.com"
          className=""
          target="_blank"
          rel="noreferrer"
        >
          elianapereira.dev@gmail.com
        </a>
      </div>
      <hr />
      <p>© Eliana Pereira 2024</p>
    </div>
  );
}
