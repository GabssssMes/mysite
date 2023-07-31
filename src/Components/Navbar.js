import { Link } from "react-scroll";
import React from "react";
import style from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <Link
        smooth
        to="home"
        className={style.navelement}
        offset={-63}
        activeClass={style.active}
        spy
      >
        Home
      </Link>
      <Link
        smooth
        to="about"
        className={style.navelement}
        offset={-63}
        activeClass={style.active}
        spy
      >
        About
      </Link>
      <Link
        smooth
        to="projects"
        className={style.navelement}
        offset={-63}
        activeClass={style.active}
        spy
      >
        Projects
      </Link>
      <Link
        smooth
        to="contact"
        className={style.navelement}
        offset={-63}
        activeClass={style.active}
        spy
      >
        Contact
      </Link>
    </nav>
  );
}
export { Navbar };
