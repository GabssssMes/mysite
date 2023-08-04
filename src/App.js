import { Navbar } from "./Components/Navbar";
import style from "./styles/App.module.css";
import { Link } from "react-scroll";
import { Card } from "./Components/Card";
import { ProjectArray } from "./Components/Projects";
import uniqid from "uniqid";
import { FaGithub, FaPhone, FaEnvelope } from "react-icons/fa6";
import { Skills } from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <section id="home" className={style.AppHeader}>
        <p className={style.sayHello}>
          Hi! My name is Gabriel and I'm a frond end developer.
        </p>
        <p>
          <Link smooth to="about" className={style.knowButton} offset={-63}>
            Get to know me!
          </Link>
        </p>
      </section>
      <Navbar></Navbar>
      <section id="about" className={style.element}>
        <h1>About me</h1>
        <h2>Here is my story</h2>
        <p className={style.text}>
          Hi, my name is Gabriel, I am 30 years old and I come from South Tyrol.
          It was over 10 years ago, at school, when I learned coding. After
          finishing school I worked many years as a cook and had nothing to do
          with programming anymore.
        </p>
        <p className={style.text}>
          But after several years, I got bored of my job and I was looking for a
          new challenge. So I decided to refresh my programming skills. After
          some research I found the online course "The Odin Project" and started
          developing some apps in HTML, CSS and JavaScript. Meanwhile I have a
          solid knowledge of frontend technologies and now I am looking to get
          my first job as a developer to take my programming skills to the next
          level.
        </p>

        <h2>Skills and tools</h2>
        <div className={style.skills}>
          {Skills.map((skill) => {
            return (
              <div className={style.skill} key={uniqid()}>
                <img
                  alt={skill.title}
                  src={skill.src}
                  className={style.image}
                ></img>
                <div>{skill.title}</div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="projects" className={style.element}>
        <h1>My Projects</h1>
        <div className={style.projects}>
          {ProjectArray.map((pro) => {
            return <Card project={pro} key={uniqid()}></Card>;
          })}
        </div>
      </section>
      <section id="contact" className={style.element}>
        <h1>Contact me</h1>
        <div className={style.contactContent}>
          <div className={style.contactelement}>
            <h2>
              <FaEnvelope></FaEnvelope>
            </h2>
            <a
              className={style.openlink}
              href="mailto:messner.gabriel1992@gmail.com"
            >
              messner.gabriel1992@gmail.com
            </a>
          </div>
          <div className={style.contactelement}>
            <h2>
              <FaPhone></FaPhone>
            </h2>
            <div>+4367761637282</div>
          </div>
          <div className={style.contactelement}>
            <h2>
              <FaGithub></FaGithub>
            </h2>
            <div
              className={style.openlink}
              onClick={() => window.open("https://github.com/GabssssMes")}
            >
              github.com/GabssssMes
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
