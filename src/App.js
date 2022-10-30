import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ChessBoard from "./Components/chess-board";
import Login from "./Components/login";
import AppHeader from "./Components/app-header";
import VoiceRecognition from "./Components/voice-recognition";
import ActivityLegend from "./Components/activity-legend";

export default function App() {
  return (
    <div className="app-container">
      <AppHeader />
      
      <Routes>        
      <Route  path="/" element={<ChessBoard />} />    
      <Route path="/login" element={<Login />} />  
      </Routes>
    </div>
  );
}
