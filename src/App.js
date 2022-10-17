import React from "react";
import "./App.css";
import ChessBoard from "./Components/chess-board";
import AppHeader from "./Components/app-header";
import ActivityLegend from "./Components/activity-legend";
import Test from "./Components/test";
import Test2 from "./Components/test";

export default function App() {
  return (
    <div className="app-container">
      <ActivityLegend />
      {/* <AppHeader />
      <ChessBoard /> */}
    </div>
  );
}
