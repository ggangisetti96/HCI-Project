import React, { useState, useEffect } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import VoiceRecognition from "./voice-recognition";

export default function ChessBoard() {
  const [game, setGame] = useState(new Chess());

  useEffect(() => {}, []);

  return <Chessboard />;
}
