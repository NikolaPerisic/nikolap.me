import React from "react";
import "../../scss/Index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Index = props => {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Nikola <span className="text-secondary">P</span>
      </h1>
      <h2 className="sm-heading">
        Web developer, HTML\CSS\Javascript\React\Node
      </h2>
      <div className="icons">
        <a href="https://twitter.com/johnny_niko140s" target="blank">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </a>
        <a href="https://github.com/NikolaPerisic" target="blank">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a href="https://t.me/johnnymegusta" target="blank">
          <FontAwesomeIcon icon={["fab", "telegram"]} />
        </a>
      </div>
    </main>
  );
};

export default Index;
