import React from "react";
import styles from "./CenterContent.module.css";

const CenterContent: React.FC = (props) => {
  return (
    <div className={styles.content}>
      {props.children}
    </div>
  );
};

export default CenterContent;
