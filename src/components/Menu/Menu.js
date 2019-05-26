import React, { useState } from "react";
import classes from "../../scss/menu.module.scss";

const Menu = () => {
  const [menu, setMenu] = useState({ showMenu: false });
  const toggleMenu = () => {
    setMenu({ showMenu: !menu.showMenu });
  };
  return (
    <header>
      <div
        className={
          menu.showMenu
            ? `${classes.menu__btn} ${classes.close}`
            : classes.menu__btn
        }
        onClick={toggleMenu}
      >
        <div className={classes.btn__line} />
        <div className={classes.btn__line} />
        <div className={classes.btn__line} />
      </div>

      <nav
        className={
          !menu.showMenu ? classes.menu : `${classes.menu} ${classes.show}`
        }
      >
        <div
          className={
            !menu.showMenu
              ? classes.menu__branding
              : `${classes.menu__branding} ${classes.show}`
          }
        >
          <div className={classes.portrait} />
        </div>
        <ul
          className={
            !menu.showMenu
              ? classes.menu__nav
              : `${classes.menu__nav} ${classes.show}`
          }
        >
          <li
            className={
              !menu.showMenu
                ? classes.nav__item
                : `${classes.nav__item} ${classes.show}`
            }
          >
            <a href="index.html" className={classes.nav__link}>
              Home
            </a>
          </li>
          <li
            className={
              !menu.showMenu
                ? classes.nav__item
                : `${classes.nav__item} ${classes.show}`
            }
          >
            <a href="about.html" className={classes.nav__link}>
              About Me
            </a>
          </li>
          <li
            className={
              !menu.showMenu
                ? classes.nav__item
                : `${classes.nav__item} ${classes.show}`
            }
          >
            <a href="work.html" className={classes.nav__link}>
              My Work
            </a>
          </li>
          <li
            className={
              !menu.showMenu
                ? classes.nav__item
                : `${classes.nav__item} ${classes.show}`
            }
          >
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
