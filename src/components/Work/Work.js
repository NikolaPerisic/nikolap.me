import React from "react";
import projects from "./projects";
import Footer from "../Footer/Footer";
import "../../scss/Work.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Work = () => {
  return (
    <div className="work-wrapper">
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          {projects.map((item, key) => {
            return (
              <div className="item" key={key}>
                <a href={item.link} target="blank">
                  <img src={item.image} alt={item.desc} />
                </a>
                <a href={item.link} target="blank" className="btn-light">
                  <FontAwesomeIcon icon={["fas", "eye"]} />
                  {item.desc}
                </a>
                <a href={item.gitLink} target="blank" className="btn-dark">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                  Github
                </a>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
