import React, { useState, useEffect } from "react";
import SpeechRecognition ,{useSpeechRecognition} from "react-speech-recognition";

export default function VoiceRecognition() {
    const commands = [
        {
          command: 'reset',
          callback: () => resetTranscript(),
          matchInterim : true
        },
    ]

    const {
        transcript,
        interimTranscript,
        finalTranscript,
        resetTranscript,
        listening,
        isMicrophoneAvailable,
      } = useSpeechRecognition({ commands });

      useEffect(() => {
      }, [interimTranscript, finalTranscript]);

    const handleListen =()=>{
      
        SpeechRecognition.startListening({
            continuous: true,
             language: 'en-GB' 
        });
    };
    const handleStopListen =(event)=>{
        SpeechRecognition.stopListening();


    };
    const handleReset =(event)=>{
        
        resetTranscript();

    };
    
    
        if (!SpeechRecognition.browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }



      return (
        <div>
          <p>Microphone: {listening ? 'on' : 'off'}</p>
          <button onClick={handleListen}>Start</button>
          <button onClick={handleStopListen}>Stop</button>
          <button onClick={handleReset}>Reset</button>
          <p>Message </p>
          <p> {transcript}</p>
        
        </div>
      );

}
