import react, { Component } from "react";

class activityLegend extends Component {
  state = {
    count: 0,
    moves: [],
  };

  styles = {
    fontSize: 18,
    fontWeight: "bold",
  };

  renderMoves() {
    if (this.state.moves.length === 0) {
      return <p>No moves have been played</p>;
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
}

export default activityLegend;
