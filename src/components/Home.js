import React, { useContext, useState } from "react";

import { LoggedContext } from "../App";

const Home = () => {
  const setIsLogged = useContext(LoggedContext);

  const [play, setPlay] = useState(false);

  const logout = () => {
    setIsLogged(false);
    console.log("logout");
  };

  const handlePlay = (e) => {
    if (e.target.paused) {
      e.target.play();
      setPlay(true);
    } else {
      e.target.pause();
      setPlay(false);
    }
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
                <video
                  src="https://assets.mixkit.co/videos/preview/mixkit-couple-having-breakfast-in-the-forest-43175-large.mp4"
                  onClick={handlePlay}
                ></video>

                <div
                  className={
                    play
                      ? "main__videoBtn"
                      : "main__videoBtn main__videoBtn-play"
                  }
                >
                  <span className={play ? "" : "play"}></span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
