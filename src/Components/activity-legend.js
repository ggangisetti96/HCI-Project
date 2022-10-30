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
        piece: "rook",
        initialPosition: "D1",
        finalPosition: "D2",
      },
    ],
  };

  styles = {
    fontSize: 12,
    fontWeight: "bold",
  };

  getTable() {
    return (
      <div className="ActivityLegend">
        <table>
          <tr>
            <th>Move Number</th>
            <th>Player</th>
            <th>Piece</th>
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

  render() {
    return (
      <div>
        <span style={this.styles}>{this.getTable()}</span>
      </div>
    );
  }
}

export default ActivityLegend;
