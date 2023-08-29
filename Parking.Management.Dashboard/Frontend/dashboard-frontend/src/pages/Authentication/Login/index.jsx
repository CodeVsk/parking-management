import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/authProvider";

const Login = () => {
  const { loginUser } = AuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    loginUser(username, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <div className={styles.form}>
          <form action="#">
            <div className={styles.formHeader}>
              <div className={styles.title}>
                <h1>Fazer Login</h1>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.inputBox}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Digite seu Email..."
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className={styles.inputBox}>
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Digite sua Senha..."
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" onClick={handleLogin}></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
