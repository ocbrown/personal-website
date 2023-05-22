import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "@/styles/Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={toggleSidebar}
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      <div className={!isOpen ? styles.closed : ""}>
        <header className={styles.stickyHeader}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={() => setTimeout(toggleSidebar, 500)}
                >
                  Oliver Brown
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={() => setTimeout(toggleSidebar, 500)}
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={() => setTimeout(toggleSidebar, 500)}
                >
                  About
                </Link>
              </li> */}
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={() => setTimeout(toggleSidebar, 500)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={() => setTimeout(toggleSidebar, 500)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
