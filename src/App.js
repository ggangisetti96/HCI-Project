import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ChessBoard from "./Components/chess-board";
import Login from "./Components/login";
import AppHeader from "./Components/app-header";

export default function App() {
  return (
    <div className="app-container">
      <AppHeader />
    <Routes>
      <Route path="/" element={<ChessBoard/>}/>
      <Route paht="/login" element={<Login />} />
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
