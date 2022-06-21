import React, { useState } from "react";

import Success from "./Success";

const ForgotPassword = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const forgotPassword = (
    <div className="forgotPassword">
      <div className="container">
        <div className="forgotPassword__titel title">Забыли пароль?</div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form__item">
            <label htmlFor="email">Введите свой email:</label>
            <input
              type="email"
              name="email"
              placeholder="sanekya_san@mail.ru"
              required
            />
          </div>

          <button type="submit" className="button">
            Отправить письмо
          </button>
        </form>
      </div>
    </div>
  );

  return isSuccess ? <Success /> : forgotPassword;
};

export default ForgotPassword;
