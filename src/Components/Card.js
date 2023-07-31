import React from "react";
import style from "../styles/Card.module.css";

function Card(props) {
  const project = props.project;
  return (
    <div className={style.card}>
      <div className={style.description}>
        <h2 className={style.title}>{project.title}</h2>
        <div className={style.text}>{project.tech}</div>
        <div className={style.text}>{project.description}</div>
        <div className={style.buttons}>
          <button onClick={() => window.open(project.visitSite)}>
            Visit Website
          </button>
          <button onClick={() => window.open(project.viewCode)}>
            View Code
          </button>
        </div>
      </div>
      <img alt={project.title} src={project.src} className={style.image}></img>
    </div>
  );
}

export { Card };
