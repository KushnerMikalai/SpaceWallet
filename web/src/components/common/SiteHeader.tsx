import React from "react";
import { Link } from "react-router-dom";
import { LogIn } from "react-feather";
import styles from "./SiteHeader.module.css";
import Logo from "./Logo";

const SiteHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <nav className={styles.nav}>
          <a
            className={styles.logo}
            href="/"
          >
            <Logo />
          </a>
          {/* <ul className={styles.list}> */}
          {/* <li> */}
          {/* </li> */}
          {/* </ul> */}
          <div className={styles.auth}>
            <Link className={styles.authLogin} to="/login">
              <LogIn size={24} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
