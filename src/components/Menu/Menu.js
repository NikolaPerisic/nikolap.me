import React, { useState } from "react";
import classes from "../../scss/menu.module.scss";

const Menu = () => {
  const [menu, setMenu] = useState({ showMenu: false });
  const toggleMenu = () => {
    setMenu({ showMenu: !menu.showMenu });
    console.log(menu.showMenu);
  };
  return (
    <header>
      <div className={classes.menu__btn} onClick={toggleMenu}>
        <div className={classes.btn__line} />
        <div className={classes.btn__line} />
        <div className={classes.btn__line} />
      </div>

      <nav className={classes.menu}>
        <div className={classes.menu__branding}>
          <div className={classes.portrait} />
        </div>
        <ul className={classes.menu__nav}>
          <li className={classes.nav__item}>
            <a href="index.html" className={classes.nav__link}>
              Home
            </a>
          </li>
          <li className={classes.nav__item}>
            <a href="about.html" className={classes.nav__link}>
              About Me
            </a>
          </li>
          <li className={classes.nav__item}>
            <a href="work.html" className={classes.nav__link}>
              My Work
            </a>
          </li>
          <li className={classes.nav__item}>
            <a href="contact.html" className={classes.nav__link}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
