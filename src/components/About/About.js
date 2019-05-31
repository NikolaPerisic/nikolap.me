import React from "react";
import "../../scss/About.scss";
import img from "../../assets/images/profile_pic.jpg";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="about-page">
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
              technologies like NodeJS, Express, Firebase, MongoDB. I'm
              interested in building a career as a Full-Stack Developer.
            </p>
          </div>
          <div className="info info-1">
            <h3>Front-End...</h3>
            <p>
              Web technologies are evolving at such a fast rate, I think its
              really exciting beeing in this space. Currently I really enjoy
              working with React, especially newer features that offer both
              class based and functional approach. React apps are modular, fast
              and reliable in production. I do have experience working with
              Angular framework, which also has a lot to offer as a complete
              package. One of the goals for me this year is getting into React
              Native development as well. Please check out some of my projects
              in my work section.
            </p>
          </div>

          <div className="info info-2">
            <h3>Back-End...</h3>
            <p>
              On the back-end side I have experience working with Node and
              Express, building RESTful API server side apps hosted on Heroku
              and Firebase and integrating github's GraphQL api in React app. I
              am interested in collaboration and I'm open to participating in
              open-source projects that will give me the opportunity to
              contribute, further develop my knowledge, and improve my skills in
              this field.
            </p>
          </div>

          <div className="info info-3">
            <h3>More about me....</h3>
            <p>
              I developed great passion for programming after I enrolled in CS50
              course a couple of years ago. Beside Javascript I also have
              experience writing small programs in C. I believe strong
              Algorithms and Data Structures fundamentals are essential in
              getting better in the field. I completed several courses like
              CS50, FreeCodeCamp and numerous Udemy courses covering these
              topics. I'm also a part-time IT student, which gives me the chance
              to work, and study in my free time.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
