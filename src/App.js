import React from "react";
import Index from "./components/Index/Index";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faFacebookF,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faGithub, faFacebookF, faTelegram, faEye);

function App() {
  return (
    <div className="App">
      <Menu />
      <Index />
      <About />
      <Work />
    </div>
  );
}

export default App;
