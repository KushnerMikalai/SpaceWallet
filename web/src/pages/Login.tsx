import React, { useState } from "react";
// import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from "../hooks/useActions";
import { Link } from "react-router-dom";
import CenterContent from "../components/common/CenterContent";
import Input from "../components/inputs/Input";
import Logo from "../components/common/Logo";
import styles from "./Login.module.css";
import { LogIn } from "react-feather";

const Login: React.FC = () => {
  // const { account } = useTypedSelector(state => state.app)
  const { fetchLogin, fetchApp } = useActions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: any) => {
    console.log(email, "submit");

    e.preventDefault();
    await fetchLogin({ email, password });
    fetchApp();
  };

  const onChangeEmail = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmail(e.currentTarget.value || "");
  };

  // const onChangePassword = (
  //   e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   setPassword(e.currentTarget.value || "");
  // };

  return (
    <CenterContent>
      <div className={styles.content}>
        <header className={styles.header}>
          <Link
            to="/"
            className={styles.logo}
          >
            <Logo
              type="dark"
            />
          </Link>
        </header>
        <form
          onSubmit={onSubmit}
          className={styles.form}
        >
          <div>
            <Input
              type="email"
              placeholder="Email"
              required
              size={"large"}
              onChange={onChangeEmail}
            />
          </div>
          {
            /* <div>
            <Input
              type="password"
              placeholder="password"
              required
              size={"large"}
              onChange={onChangePassword}
            />
          </div> */
          }
          <button
            className={styles.send}
            type="submit"
          >
            <LogIn size={24} />
          </button>
        </form>
      </div>
    </CenterContent>
  );
};

export default Login;
