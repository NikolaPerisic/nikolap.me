import React, { Fragment } from "react";
import "../../scss/About.scss";
import img from "../../assets/images/profile_pic.jpg";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <Fragment>
      <main id="main">
        <h1 className="lg-heading">
          About <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Few words about me...</h2>
        <div className="about-info">
          <img src={img} alt="Nikola" className="bio-image" />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              Hi, I'm self-taught web developer with a great passion for
              programming. My primary focus on front-end is Javascript, ES6,
              React, HTML, CSS, Sass, and on back-end I have experience with
              technologies like NodeJS, MongoDB and Express, interested in
              building a career as a Full-Stack Developer.
            </p>
          </div>
          <div className="info info-1">
            <h3>About the space...</h3>
            <p>
              Web technologies are evolving at such a fast rate, I think its
              really exciting beeing in this space. I really like Javascript,
              because it has such a large community and with technologies like
              node, bringing JS to the server side really makes things a lot
              easier for full stack developers. Front-end libraries, frameworks,
              and tools like npm, webpack, eslint, babel and many others are
              constantly getting better and easier to work with.
            </p>
          </div>

          <div className="info info-2">
            <h3>Now and Future...</h3>
            <p>
              I got really interested in web development when I enrolled in CS50
              course a couple of years ago. It was a brief intro to coding in C,
              python, algorithms and data structures. Really good stuff, I would
              definitely recommend it. Currently building some projects with
              ReactJS, and expanding my knowledge about back-end
              Node\Express\MongoDB. Please check my github repo if you are
              interested to see some of the projects that I worked on.
            </p>
          </div>

          <div className="info info-3">
            <h3>Early days...</h3>
            <p>
              In early days and during dot-com bubble, I got interested in IT. I
              worked in the tech-field industry for many years as IT support
              techician, PC desktop and laptop service technician, RMA
              Specialist and also as a procurement agent for various consumer
              electronics overseas.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default About;
