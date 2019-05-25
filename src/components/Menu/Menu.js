import React, { useState } from "react";
import "../../scss/menu.scss";

const Menu = () => {
  const [menu, setMenu] = useState({ showMenu: false });
  const toggleMenu = () => {
    setMenu({ showMenu: !menu.showMenu });
    console.log(menu.showMenu);
  };
  return (
    <header>
      <div className="menu-btn" onClick={toggleMenu}>
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
      </div>

      <nav className="menu">
        <div className="menu-branding">
          <div className="portrait" />
        </div>
        <ul className="menu-nav">
          <li className="nav-item">
            <a href="index.html" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="about.html" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="work.html" className="nav-link">
              My Work
            </a>
          </li>
          <li className="nav-item">
            <a href="contact.html" className="nav-link">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
