import React from "react";
import styles from "./Input.module.css";
// import { Input } from 'antd';

export interface InputProps {
  type?: string;
  placeholder?: string;
  required?: boolean;
  size?: string;
  onChange:
    ((e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void);
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <label className={styles.input}>
      <input
        className={`${styles.inputInner} ${styles[props.size || "default"]}`}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </label>
  );
};

export default Input;
