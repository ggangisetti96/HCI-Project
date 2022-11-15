import React from "react";
import HomeLogo from "../images/Home_logo.png";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function handleClick(){
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
          onClick={handleClick}
        >
          PLAYER VS PLAYER
        </button>
        <span> OR </span>
        <button
          className="btn btn-block btn-md btn-secondary mx-3"
          onClick={handleClick}
        >
          PLAYER VS COMPUTER
        </button>
      </div>
    </>
  );
}

export default HomePage;
