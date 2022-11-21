import React from "react";
import PlayerInfo from "./player-info";

function ActivityLegend({ turn, whiteMove, blackMove }) {
  return (
    <div className="flex flex-column">
      <PlayerInfo isTurn={turn == "b"} move={blackMove} playerName="Player 2" />
      <PlayerInfo isTurn={turn == "w"} move={whiteMove} playerName="Player 1" />
    </div>
  );
}

export default ActivityLegend;
