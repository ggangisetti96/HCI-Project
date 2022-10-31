import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Game from "./Containers/Game";
import Login from "./Components/login";
import AppHeader from "./Components/app-header";

export default function App() {
  return (
    <div className="app-container">
      <AppHeader />
    <Routes>
      <Route path="/" element={<Game/>}/>
      <Route path="/login" element={<Login />} />
      </Routes>
{/* Commenting below to add routes
      <div className="BoardAndLegend">
        <ChessBoard />
        <ActivityLegend />
        <div className="ChessBoard"></div>
      </div> */}
    </div>
  );
}
