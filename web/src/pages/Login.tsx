import React, { useState } from "react";
// import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from "../hooks/useActions";
import { Link } from "react-router-dom";
import CenterContent from "../components/common/CenterContent";
import Input from "../components/inputs/Input";
import Logo from "../components/common/Logo";
import styles from "./Login.module.css";
import { LogIn, Loader } from "react-feather";
import authService from "../api/services/authService";

const Login: React.FC = () => {
  // const { account } = useTypedSelector(state => state.app)
  const { getAuthSuccess } = useActions();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPasswordForm, showShowPasswordForm] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmitAuth = async () => {
    try {
      // await fetchAuth({ email });
      // await new Promise(resolve => setTimeout(resolve, 3000));
      const res = await authService.auth({ email });
      if (res) {
        setError('');
        showShowPasswordForm(true);
      }
    } catch (error: any) {
      if (error?.response?.status === 500) {
        setError('Server Error. Try again later');
      }
    }
  };

  const onSubmitCheckToken = async () => {
    console.log(password);
    try {
      const res = await authService.loginCode({ email, password });
      if (res) {
        setError('');
        getAuthSuccess(res);
      }
    } catch (error: any) {
      if (error?.response?.status === 500) {
        setError('Server Error. Try again later');
      }
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (showPasswordForm) {
      await onSubmitCheckToken();
    } else {
      await onSubmitAuth();
    }
    setLoading(false);
  }

  const onChangeEmail = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    showShowPasswordForm(false);
    setError('');
    setEmail(e.currentTarget.value || "");
  };

  const onChangePassword = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPassword(e.currentTarget.value || "");
  };

  const buttonSendIcon = loading ? <Loader size={24} /> : <LogIn size={24} />;

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
        >
          <div className={styles.form}>
            <div>
              <Input
                type="email"
                placeholder="Email"
                required
                size={"large"}
                onChange={onChangeEmail}
              />
            </div>
            {showPasswordForm &&
              <div>
                <p className={styles.description}>We just sent you a temporary login code. Please check your inbox.</p>
                <Input
                  type="password"
                  placeholder="Paste login code"
                  required
                  size={"large"}
                  onChange={onChangePassword}
                />
              </div>
            }
            <button
              className={`${styles.send} ${loading && styles.sendLoadin}`}
              type="submit"
            >
              {buttonSendIcon}
            </button>
            {error &&
              <p className={styles.error}>{error}</p>
            }
          </div>
        </form>
      </div>
    </CenterContent>
  );
};

export default Login;
