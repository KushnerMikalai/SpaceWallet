import React from "react";
import styles from "./InfoStart.module.css";

const InfoStart: React.FC = () => {
  return (
    <div className={styles.b}>
      <div className={styles.content}>
        <div className={styles.title}>SPEND</div>
        <div className={styles.title}>YOUR</div>
        <div className={styles.title}>MONEY</div>
        <div className={styles.title}>WELL</div>
      </div>
    </div>
  );
};

export default InfoStart;
