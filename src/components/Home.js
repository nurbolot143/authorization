import React, { useContext, useState } from "react";

import { LoggedContext } from "../App";

import video from "../assets/videos/video.mp4";

const Home = () => {
  const setIsLogged = useContext(LoggedContext);

  const logout = () => {
    setIsLogged(false);
    console.log("logout");
  };

  return (
    <div className="home">
      <div className="container">
        <header className="header">
          <div className="header__wrapper">
            <input
              className="button button__inline"
              type="button"
              onClick={logout}
              value="выйти"
            />
          </div>
        </header>

        <main className="main">
          <div className="container">
            <div className="main__wrapper">
              <div className="main__video">
                <video src={video} controls="controls"></video>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
