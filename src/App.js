import React from "react";
import Index from "./components/Index/Index";
import Menu from "./components/Menu/Menu";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faGithub,
  faFacebookF,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faGithub, faFacebookF, faTelegram);

function App() {
  return (
    <div className="App">
      <Menu />
      <Index />
    </div>
  );
}

export default App;
