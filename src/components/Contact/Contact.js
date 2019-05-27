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
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
