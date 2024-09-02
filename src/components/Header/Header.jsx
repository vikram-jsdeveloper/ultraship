import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

function Header() {
  const [dropMenu, setDropMenu] = useState(false);

  // Initialize menuref as a ref object
  const menuref = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      // Close the dropdown menu if the user clicks outside of it
      if (!menuref.current.contains(e.target)) {
        setDropMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []); // Empty dependency array ensures this effect only runs on mount/unmount

  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <a href="./">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E0BAQEWXlMFR1jtsA/company-logo_100_100/company-logo_100_100/0/1715955229416/shipxtms_logo?e=1733356800&v=beta&t=Iu9rKLNsmPs4ULEbExdbxWs-yeRYp13P1g-KMvkbqfc"
            className={styles.logo}
          />
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
        <div className={styles.dropDownMenu} ref={menuref}>
          <span
            className={styles.menuIcon}
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
