import React, { useEffect } from "react";
import HomeLogo from "../images/Home_logo.png";
import { useNavigate } from "react-router-dom";

function HomePage({ gameType, setGameType }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (gameType) {
      navigate("/game");
    }
  }, [gameType]);

  function handleClick(type) {
    setGameType(type);
    navigate("/game");
  }

  return (
    <>
      <div className="flex flex-row justify-content-center">
        <img src={HomeLogo} className="logo" />
        <br></br>
      </div>
      <div className="flex flex-row justify-content-center">
        <button
          className="btn btn-block btn-md btn-secondary mx-3"
          onClick={() => handleClick("PP")}
        >
          PLAYER VS PLAYER
        </button>
        <span> OR </span>
        <button
          className="btn btn-block btn-md btn-secondary mx-3"
          onClick={() => handleClick("PC")}
        >
          PLAYER VS COMPUTER
        </button>
      </div>
    </>
  );
}

export default HomePage;
