import React from "react";

import Avatar from "../images/avatar.png";
import Indicator from "./indicator";

function PlayerInfo({ isTurn, move, playerName }) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-column">
        <div className="ps-2">
          <strong>{playerName}</strong>
        </div>
        <div>
          <img
            src={Avatar}
            className=" rounded-circle "
            style={{ width: "100px" }}
            alt="Avatar"
          />
        </div>
      </div>
      <div className="flex flex-column ps-4">
        <Indicator showIndicator={isTurn} />
        <div className="flex flex-row text-info">
          <span>
            <strong>MOVE : </strong>
          </span>
          {move ? (
            <span className="ps-2">
              <strong>
                {" "}
                {move.from} to {move.to}
              </strong>
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default PlayerInfo;
