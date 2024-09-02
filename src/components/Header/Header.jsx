import React from "react";
import styles from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useState } from "react";

function Header() {
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <a href="./">
          <img src="./src/assets/shipxtms_logo.jpeg" className={styles.logo} />
        </a>
      </div>
      <div className={styles.menuContainer}>
        <ul className={styles.horizontalMenu}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <div className={styles.dropDownMenu}>
          <span
            className={`${styles.menuIcon}`}
            onClick={() => {
              setDropMenu(!dropMenu);
            }}
          >
            <GiHamburgerMenu />
          </span>
          <ul className={`${dropMenu ? styles.show : ""}`}>
            <li>
              <a href="">
                <span>
                  <IoSettingsOutline />
                  <span>Settings &amp; privacy</span>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span>
                  <IoIosHelpCircleOutline />
                  <span>Help &amp; support</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
