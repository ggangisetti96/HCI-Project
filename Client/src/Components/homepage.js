import React from "react";
import HomeLogo from "../images/Home_logo.png";
import { useNavigate } from "react-router-dom";


function HomePage() {

  const navigate = useNavigate();

  function handleClick(){
    navigate("/game");

  }

  return (
    <div>
      <div className="divFlex">
        <img src={HomeLogo} className="logo"/>
        <br></br>
      </div>
      <div className="divFlex">
      <button className="btn btn-block btn-md" onClick={handleClick}>
        PLAYER VS PLAYER
      </button>
      <span>OR</span>
      <button className="btn btn-block btn-md" onClick={handleClick}>
        PLAYER VS COMPUTER
      </button>
      </div>
    </div>
  );
}

export default HomePage;
