import React, { useEffect, useRef, useState } from 'react';
import {Chess} from 'chess.js';
import { MOVES, CHESS_POSITIONS } from "../Constants/ChessMoves";
import { Chessboard } from 'react-chessboard';
import FuzzySet from '../Components/fuzzyset';

export default function Game() {
  const chessboardRef = useRef();
  const [game, setGame] = useState(new Chess());
  const [result, setResult] = useState(null);
  const [IsMatch,setMatch]= useState(false);
  const [speechRecognitionList, setSpeechRecognitionList]  = useState(()=>{
    const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
    const grammar =
    "#JSGF V1.0; grammar chess; public <chess_position> = " +
    CHESS_POSITIONS.join(" | ") +
    " ; public <chess_move> = <chess_position> TO <chess_position>;";
    const grammarList = new SpeechGrammarList();
    grammarList.addFromString(grammar, 1)
    return grammarList;
  })
  const[recognition, setRecognition] = useState(()=>{
    const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.grammars = speechRecognitionList;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1000;
 

    const FuzzySet = window.FuzzySet;
    const fzySet = FuzzySet(MOVES);

    recognition.onresult = event => {

      var last = event.results.length - 1;
      var result = event.results[last][0].transcript.toUpperCase();
      var flag = false;
      for (let i = 0; i < event.results[last].length; i++) {
        for (let j = 0; j < MOVES.length; j++) {
          console.log(event.results[last][i].transcript);
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

            fzySetList.sort(function(a, b) {
              return b[0] - a[0];
            });
            
          // console.log(fzySetList);
            if(fzySetList && fzySetList[0]!=null)
            {
            result = fzySetList[0][1];
            setResult(result);
            console.log(fzySetList[0][1]);
            }
          }

      setResult(null);
    }
    return recognition;
  })


  useEffect(() => {
    if(result !== null) {
      onDrop(
        result.slice(0, 2).toLowerCase(),
         result.slice(6, 8).toLowerCase()
         );
    }
  }, [result])



function handleListen()
{
  setMatch(false);
  recognition.continuous=true;
  recognition.start();
}

recognition.onspeechend = function() {
  recognition.stop();
};

recognition.onnomatch = event => {
  console.log("I didn't recognise that.");
};

recognition.onerror = event => {
  console.log("Error occurred in recognition.");
};

function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  function onDrop(sourceSquare, targetSquare) {
    const gameCopy = { ...game };
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q' 
    });
    console.log("turn", game.turn());
    console.log(move)
    setGame(gameCopy);
    return move;
  }

  return (
    <div>
      <Chessboard
        id="PlayVsPlay"
        animationDuration={200}
        position={game.fen()}
        onPieceDrop={onDrop}
        customBoardStyle={{
          borderRadius: '4px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'
        }}
        ref={chessboardRef}
      />
      <button
        className="rc-button"
        onClick={() => {
          safeGameMutate((game) => {
            game.reset();
          });
          chessboardRef.current.clearPremoves();
        }}
      >
        reset
      </button>
      <button
        className="rc-button"
        onClick={() => {
          safeGameMutate((game) => {
            game.undo();
          });
          chessboardRef.current.clearPremoves();
        }}
      >
        undo
      </button>
      <button onClick={handleListen}>
        Start
      </button>
      {
        !IsMatch?    
        "": <span>Didn't Recognise the Command </span>
      } 
    </div>
  );
}