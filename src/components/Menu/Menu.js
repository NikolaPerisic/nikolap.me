import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/" className={classes.nav__link} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li
            className={
              !menu.showMenu
                ? classes.nav__item
                : `${classes.nav__item} ${classes.show}`
            }
          >
            <Link
              to="/about"
              className={classes.nav__link}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li
            className={
              !menu.showMenu
                ? classes.nav__item
                : `${classes.nav__item} ${classes.show}`
            }
          >
            <Link to="/work" className={classes.nav__link} onClick={toggleMenu}>
              My Work
            </Link>
          </li>
          <li
            className={
              !menu.showMenu
                ? classes.nav__item
                : `${classes.nav__item} ${classes.show}`
            }
          >
            <Link
              to="/contact"
              className={classes.nav__link}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
