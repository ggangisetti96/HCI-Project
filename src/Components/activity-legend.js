import React, { Component } from "react";

class ActivityLegend extends Component {
  state = {
    count: 0,
    moves: [],
  };

  styles = {
    fontSize: 18,
    fontWeight: "bold",
  };

  // function that adds items to moves list (a few lines above this)
  pushMovesToList() {
    // this.state.moves.push("My name is what?");
    // this.state.moves.push("My name is who?");
    return null;
  }

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

  getColorTurn() {
    if (this.state.moves.length === 0) {
      // pass
    } else if (this.state.moves.length % 2 === 1) {
      return "black";
    } else {
      return "white";
    }
  }

  // function that gets initial position of the piece
  getInitialPosition() {
    return "foo";
  }

  // function that gets final position of the piece
  getFinalPosition() {
    return "bar";
  }

  /* elements in table:
  1) player color that moved
  2) piece
  3) initial position
  4) final position
  */
  renderMovesTable() {
    if (this.state.moves.length === 0) {
      return <p>No moves have been played.</p>;
    } else {
      return (
        <ul>
          {this.state.moves((move) => (
            <li key={move}>{move}</li>
          ))}
        </ul>
      );
    }
  }

  renderCount() {
    return this.state.count;
  }

  render() {
    return (
      <div>
        <span style={this.styles}>{this.getMoves()}</span>
      </div>
    );
  }
}

export default ActivityLegend;
