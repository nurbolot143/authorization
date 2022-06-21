import React, { useContext } from "react";

import { ForgotContext } from "./Authorization";

const Success = () => {
  const setIsForgot = useContext(ForgotContext);

  const login = () => {
    setIsForgot(false);
    console.log("logged");
  };

  return (
    <div className="success">
      <div className="container">
        <div className="success__wrapper">
          <h1 className="success__title title">Успешно!</h1>
          <p className="success__text">
            Проверьте свою почту на наличие сообщения о востановлении пароля и
            пройдите все шаги что написаны в письме
          </p>

          <div>
            <input
              className="button button__inline"
              type="button"
              onClick={login}
              value="войти"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
