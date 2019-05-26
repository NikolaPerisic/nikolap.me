import React from "react";
import "../../scss/Contact.scss";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div className="contact-page">
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">How to reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">telegram:</span>
            <a href="https://t.me/johnnymegusta" target="blank">
              <i className="fab fa-telegram fa-2x" />
            </a>
          </div>

          <div>
            <span className="text-secondary">Twitter:</span>
            <a href="https://twitter.com/johnny_niko140s" target="blank">
              <i className="fab fa-twitter fa-2x" />
            </a>
          </div>

          <div>
            <span className="text-secondary">Email:</span>
            <a href="mailto:nikolaperisic.dev@gmail.com" target="blank">
              <i className="fas fa-envelope fa-2x" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
