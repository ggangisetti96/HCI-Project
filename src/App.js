import React from "react";
import "./App.css";
import ChessBoard from "./Components/chess-board";
import AppHeader from "./Components/app-header";
import ActivityLegend from "./Components/activity-legend";

export default function App() {
  return (
    <div>
      <div className="AppHeader">
        <AppHeader />
      </div>

      <div className="BoardAndLegend">
        <ChessBoard />
        <ActivityLegend />
        <div className="ChessBoard"></div>
      </div>
    </div>
  );
}
