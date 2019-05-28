import React from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./components/Index/Index";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
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
    <React.Fragment>
      <Menu />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
