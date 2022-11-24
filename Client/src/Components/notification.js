import React, { useEffect, useState } from "react";

function Notification({
  endGame,
  status,
  close
}) {

  if(!endGame) return('');
  
  return (
<div
      className="modal" 
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
             GAME OVER!!!
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body"> {status == "WON"? "CONGRATULATIONS!!! YOU WON":" PLAY AGAIN"}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={close}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Notification;
