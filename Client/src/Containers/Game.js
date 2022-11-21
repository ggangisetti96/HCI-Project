import React, { useEffect, useRef, useState } from "react";
import { Chess } from "chess.js";
import { MOVES, CHESS_POSITIONS } from "../Constants/ChessMoves";
import { Chessboard } from "react-chessboard";
import ActivityLegend from "../Components/activity-legend";
import FuzzySet from "../Components/fuzzyset";
import GameControls from "../Components/game-controls";

export default function Game({ gameType, user }) {
  const chessboardRef = useRef();
  const [allowMicrophone, toggleMicrophone] = useState(true);
  const [allowCamera, toggleCamera] = useState(false);
  const [turn, setTurn] = useState("w");
  const [whiteMove, setWMove] = useState(null);
  const [blackMove, setBMove] = useState(null);
  const [game, setGame] = useState(new Chess());
  const [result, setResult] = useState(null);
  const [IsMatch, setMatch] = useState(false);
  const [endGame, toggleGame] = useState(false);
  const [speechRecognitionList, setSpeechRecognitionList] = useState(() => {
    const SpeechGrammarList =
      window.SpeechGrammarList || window.webkitSpeechGrammarList;
    const grammar =
      "#JSGF V1.0; grammar chess; public <chess_position> = " +
      CHESS_POSITIONS.join(" | ") +
      " ; public <chess_move> = <chess_position> TO <chess_position>;";
    const grammarList = new SpeechGrammarList();
    grammarList.addFromString(grammar, 1);
    return grammarList;
  });
  const [recognition, setRecognition] = useState(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.grammars = speechRecognitionList;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1000;

    const FuzzySet = window.FuzzySet;
    const fzySet = FuzzySet(MOVES);

    recognition.onresult = (event) => {
      var last = event.results.length - 1;
      var result = event.results[last][0].transcript.toUpperCase();
      var flag = false;
      for (let i = 0; i < event.results[last].length; i++) {
        for (let j = 0; j < MOVES.length; j++) {
          // console.log(event.results[last][i].transcript);
          if (event.results[last][i].transcript.toUpperCase() === "UNDO") {
            this.props.doUndo();
            return;
          }

          if (event.results[last][i].transcript.toUpperCase() === MOVES[j]) {
            result = MOVES[j];
            flag = true;
            setResult(result);
            break;
          }
          if (flag) break;
        }
      }

      var fzySetList = [];
      if (!flag) {
        for (let i = 0; i < event.results[last].length; i++) {
          fzySetList = fzySetList.concat(
            fzySet.get(event.results[last][i].transcript.toUpperCase()) || []
          );
        }

        fzySetList.sort(function (a, b) {
          return b[0] - a[0];
        });

        // console.log(fzySetList);
        if (fzySetList && fzySetList[0] != null) {
          result = fzySetList[0][1];
          setResult(result);
          // console.log(fzySetList[0][1]);
        }
      }

      setResult(null);
    };

    recognition.onnomatch = (event) => {
      console.log("I didn't recognise that.");
    };

    recognition.onerror = (event) => {
      console.log("Error occurred in recognition.");
    };

    return recognition;
  });

  useEffect(() => {
    if (result !== null) {
      onDrop(
        result.slice(0, 2).toLowerCase(),
        result.slice(6, 8).toLowerCase()
      );
    }
  }, [result]);

  useEffect(() => {
    if (allowMicrophone) {
      setMatch(false);
      recognition.continuous = true;
      recognition.start();
    } else {
      recognition.stop();
    }
  }, [allowMicrophone]);

  // function handleListen() {
  //   setMatch(false);
  //   recognition.continuous = true;
  //   recognition.start();
  // }

  // recognition.onspeechend = function () {
  //   recognition.stop();
  // };

  function makeAMove(pieceMove) {
    const gameCopy = { ...game };
    const move = gameCopy.move(pieceMove);
    if (gameCopy.game_over()) {
      toggleGame(true);
    } else {
      if (turn == "w") {
        setWMove(move);
      } else {
        setBMove(move);
      }
      setTurn(game.turn());
    }
    setGame(gameCopy);
    return pieceMove;
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0)
      return; // exit if the game is over
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove(possibleMoves[randomIndex]);
  }

  function handleRestart() {
    const gameCopy = { ...game };
    gameCopy.reset();
    chessboardRef.current.clearPremoves();
    setGame(gameCopy);
    setWMove(null);
    setBMove(null);
    setTurn("w");
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return false;
    if (gameType == "PC") {
      setTimeout(makeRandomMove, 600);
    }
    return true;
  }

  return (
    <div>
      <div className="flex flex-row justify-content-between">
        <div className="flex flex-column">
          <Chessboard
            id="PlayVsPlay"
            animationDuration={200}
            position={game.fen()}
            onPieceDrop={onDrop}
            customBoardStyle={{
              borderRadius: "4px",
              boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
            }}
            ref={chessboardRef}
          />
          <GameControls
            allowCamera={allowCamera}
            allowMicrophone={allowMicrophone}
            toggleMicrophone={toggleMicrophone}
            toggleCamera={toggleCamera}
            resetGame={handleRestart}
          ></GameControls>
        </div>
        <ActivityLegend
          turn={turn}
          whiteMove={whiteMove}
          blackMove={blackMove}
          gameType={gameType}
          user={user}
          allowCamera={allowCamera}
        />
      </div>
      {!IsMatch ? "" : <span>Didn't Recognise the Command </span>}
    </div>
  );
}
