import React, { useState } from "react";
import authApi from "../../services/authApi";
import "./auth.css";

function Auth({ onLogin }) {
  const [error, setError] = useState();

  const onSubmit = (ev) => {
    ev.preventDefault();

    const login = ev.target.elements.login.value;
    const password = ev.target.elements.password.value;

    authApi
      .login(login, password)
      .then(() => onLogin(login))
      .catch(err => setError(err.message));
  };

  return (
    <div className="auth">
      <h2 className="auth__title"> Mockando Front - Login </h2>

      <form onSubmit={onSubmit} className="auth__form">
        <input
          required
          type="text"
          name="login"
          placeholder="Login"
          className="auth__input"
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Senha"
          className="auth__input auth__password"
        />

        <input type="submit" className="auth__input" value="Entrar" />
      </form>

      {error && <p className="auth__error">{error}</p>}
    </div>
  );
}

export default Auth;
