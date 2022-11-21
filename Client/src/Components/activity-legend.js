import React from "react";
import PlayerInfo from "./player-info";

function ActivityLegend({
  turn,
  whiteMove,
  blackMove,
  gameType,
  user,
  allowCamera,
}) {
  return (
    <div className="flex flex-column justify-content-evenly">
      <PlayerInfo
        isTurn={turn == "b"}
        move={blackMove}
        playerName={gameType == "PC" ? "Computer" : "Player 2"}
      />
      <PlayerInfo
        isTurn={turn == "w"}
        move={whiteMove}
        playerName={user.User_First}
        showCamera={allowCamera}
      />
    </div>
  );
}

export default ActivityLegend;
