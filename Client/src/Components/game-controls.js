import React from "react";
import con from "../images/camera-on.png";
import coff from "../images/camera-off.png";
import mon from "../images/microphone-on.png";
import moff from "../images/microphone-off.png";

function GameControls({
  toggleMicrophone,
  toggleCamera,
  allowCamera,
  allowMicrophone,
  resetGame,
}) {
  return (
    <div className="flex flex-row mt-5 justify-content-around">
      <div title="camera" className="me-5">
        {allowCamera ? (
          <img src={con} onClick={() => toggleCamera(false)} />
        ) : (
          <img src={coff} onClick={() => toggleCamera(true)} />
        )}
      </div>
      <div title="microphonee">
        {allowMicrophone ? (
          <img src={mon} onClick={() => toggleMicrophone(false)} />
        ) : (
          <img src={moff} onClick={() => toggleMicrophone(true)} />
        )}
      </div>
      <div>
        <button
          className="btn btn-block btn-md bg-primary text-white"
          onClick={resetGame}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default GameControls;
