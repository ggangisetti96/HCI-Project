import React, { Component } from "react";



let data = [
  {
    moveNumber: 0,
    player: "white",
    piece: "pawn",
    initialPosition: "A1",
    finalPosition: "A2",
  },
  {
    moveNumber: 1,
    player: "black",
    piece: "pawn",
    initialPosition: "D1",
    finalPosition: "D2",
  },
];

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Move Number</th>
          <th>Player</th>
          <th>piece</th>
          <th>Initial Position</th>
          <th>Final Position</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.moveNumber}</td>
              <td>{val.player}</td>
              <td>{val.piece}</td>
              <td>{val.initialPosition}</td>
              <td>{val.finalPosition}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
