import React, { useState } from "react";

export default function Collapsible({ srcImg, altImg, label, body, link }) {
  const [open, setOPen] = useState(false);
  const [style, setStyle] = useState("label-prj");

  if (window.innerWidth >= 992) {
    const toggle = () => {
      setOPen(!open);
      if (!open) {
        setStyle("");
      } else {
        setStyle("label-prj");
      }
    };

    return (
      <article className="element-project">
        <button onClick={toggle} className="btn-prj">
          <div className="frame-prj">
            <img src={srcImg} alt={altImg} />
          </div>

          <h3 className={style}>{label}</h3>
        </button>
        {open && (
          <div className="info-prj ">
            <p>{body}</p>
            <a href={link} target="_blank" rel="noreferrer">
              Launch Project
            </a>
          </div>
        )}
      </article>
    );
  } else {
    return (
      <article>
        <div className="element-project">
          <div className="frame-prj">
            <img src={srcImg} alt={altImg} />
          </div>
          <h3>{label}</h3>

          <div className="info-prj ">
            <p>{body}</p>
            <a href={link} target="_blank" rel="noreferrer">
              Launch Project
            </a>
          </div>
        </div>
      </article>
    );
  }
}
