import { createContext, useState } from "react";

import Authorization from "./components/Authorization";
import Home from "./components/Home";

import "./sass/App.scss";

export const LoggedContext = createContext();

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <LoggedContext.Provider value={setIsLogged}>
      <div className="App">{isLogged ? <Home /> : <Authorization />}</div>
    </LoggedContext.Provider>
  );
}

export default App;
