import React, { createContext, useState } from "react";

import ForgotPassword from "./ForgotPassword";
import Login from "./Login";

export const ForgotContext = createContext();

const Authorization = () => {
  const [isForgot, setIsForgot] = useState(false);

  return (
    <ForgotContext.Provider value={setIsForgot}>
      {isForgot ? <ForgotPassword /> : <Login />}
    </ForgotContext.Provider>
  );
};

export default Authorization;
