import React from "react";
import "./App.css";
import ChessBoard from "./Components/chess-board";
import AppHeader from "./Components/app-header";
import activityLegend from "./Components/activityLegend";

export default function App() {
  return (
    <div className="app-container">
      <AppHeader />
      <ChessBoard />
    </div>
  );
}
