import React from "react";
import SiteHeader from "./SiteHeader";
import styles from "./SiteLayout.module.css";

const SiteLayout: React.FC = (props) => {
  return (
    <div className={styles.layout}>
      <SiteHeader />
      <main className={styles.main}>
        {props.children}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span className={styles.copy}>
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default SiteLayout;
