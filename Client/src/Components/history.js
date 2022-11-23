import React, { useEffect, useState } from "react";
import { scoresURL } from "../Constants/AppLinks";
import { formatAMPM,getDay,getDayName } from "../utils/DateHelpers";

function HistoryPage(props) {

  
  const [gameHistory,setGameHisotry]= useState(null);
  useEffect(getScoresHistory,[]);
  
  function getScoresHistory() {
    fetch(scoresURL+"/"+props.user.User_Id, {    
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },      
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          setGameHisotry(res.scores);
        } else {
          setError("Internal Error!");
        }
      })
      .catch((err) => {
      //  setError("Internal server error!");
      });
  };

  return (
    <div >
         <div className="m-3">
       {/* <button className="m-2 p-1 rounded today-btn" name="today-btn">Today</button>
        <DateTimePicker onChange={setDate} value={date} disableClock={true} /> */}
        <h4 className="text-primary">My History</h4>
      </div>
<div className="events-container">

     <div><h5>Status</h5> </div>     
     <div> <h5> Played on</h5> </div>
     <div><h5> Game Type</h5></div>
     
     </div>
    {gameHistory && gameHistory.map((game) => (
   <div className="events-container">
       <div className="event-card">
        
        <div>
          {game.IsWin? "WON": "LOST"}
        </div>
      </div>
      <div className="event-card">
       
        <div>
        {getDay(game.DatePlayedOn)} 
        {getDayName(game.DatePlayedOn)} 
        {formatAMPM(
            game.DatePlayedOn
          )}
        </div>
      </div>
      <div className="event-card">
       
        <div>
           PLAYER VS COMPUTER
        </div>
      
      </div>
      </div>
    ))}
  
    </div>
    );
}

export default HistoryPage;
