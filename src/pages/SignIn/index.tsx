import React, {useState, useContext} from 'react';
import { useAuth } from '../../contexts/auth';
import styles from "./signIn.module.css";

export const SignIn: React.FC = () => {
  const {signIn} = useAuth();

  function handleSign() {
    signIn();
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.loginContainer}>
      <div className={styles.wrapper}>
        <div className={styles.fadeInDown}>
          <div className={styles.formContent}>
            <div className={styles.fadeIn}>
              <img
                src={require("../../assets/logo.png")}
                className={styles.img}
                alt="Softcom logo"
              />
            </div>
            <input
              type="text"
              className={styles.input}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className={styles.input}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleSign}
              className={styles.loginButton}
            >Entrar</button>
            <div className={styles.formFooter}>
              <a href="#" className={styles.underlineHover}>
                Recuperar senha?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SignIn;
