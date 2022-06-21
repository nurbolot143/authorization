import React, { useContext } from "react";

import { LoggedContext } from "../App";
import { ForgotContext } from "./Authorization";

const Login = () => {
  const setIsLogged = useContext(LoggedContext);
  const setIsForgot = useContext(ForgotContext);

  const forgot = () => {
    setIsForgot(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogged(true);
  };

  return (
    <div className="login">
      <div className="container">
        <h1 className="login__title title">Авторизация</h1>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form__item">
            <label htmlFor="email">Введите свой email, телефон или id:</label>
            <input
              type="email"
              name="email"
              placeholder="sanekya_san@mail.ru"
              required
            />
          </div>

          <div className="form__item">
            <label htmlFor="password">Введите свой пароль:</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              autoComplete="qwer!#2431"
              required
            />
            <div className="isFortot" onClick={forgot}>
              Забыли пароль?
            </div>
          </div>

          <button type="submit" className="button">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
