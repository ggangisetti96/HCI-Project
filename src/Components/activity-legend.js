import React, { Component } from "react";

class ActivityLegend extends Component {
  state = {
    count: 0,
    moves: [
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
    ],
  };

  styles = {
    fontSize: 12,
    fontWeight: "bold",
  };

  getMoves() {
    if (this.state.moves.length === 0) {
      return <p>No moves have been played.</p>;
    } else {
      return (
        <ul>
          {this.state.moves.map((move) => (
            <li key={move}>{move}</li>
          ))}
        </ul>
      );
    }
  }

  getTable() {
    if (this.state.moves.length === 0) {
      return <p>No moves have been played.</p>;
    } else {
      return (
        <div className="ActivityLegend">
          <table>
            <tr>
              <th>Move Number</th>
              <th>Player</th>
              <th>piece</th>
              <th>Initial Position</th>
              <th>Final Position</th>
            </tr>
            {this.state.moves.map((val, key) => {
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
  }

  render() {
    return (
      <div>
        <span style={this.styles}>{this.getTable()}</span>
      </div>
    );
  }
}

export default ActivityLegend;
