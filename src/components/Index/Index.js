import React from "react";
import "./Index.scss";

const Index = props => {
  return (
    <main id="home">
      <h1 class="lg-heading">
        Nikola <span class="text-secondary">P</span>
      </h1>
      <h2 class="sm-heading">Web developer, HTML\CSS\Javascript\React\Node</h2>
      <div class="icons">
        <a href="https://twitter.com/johnny_niko140s" target="blank">
          <i class="fab fa-twitter fa-2x" />
        </a>
        <a href="/">
          <i class="fab fa-facebook fa-2x" />
        </a>
        <a href="https://github.com/NikolaPerisic" target="blank">
          <i class="fab fa-github fa-2x" />
        </a>
        <a href="https://t.me/johnnymegusta" target="blank">
          <i class="fab fa-telegram fa-2x" />
        </a>
      </div>
    </main>
  );
};

export default Index;
