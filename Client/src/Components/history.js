import React, { useEffect } from "react";
import { scoresURL } from "../Constants/AppLinks";

function HistoryPage(props) {

  useEffect(getScoresHistory);
  
  function getScoresHistory() {
   
    fetch(scoresURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      
    })
      .then((res) => res.json())
      .then((res) => {
        
        if (res.message === "Success") {


        } else {
          setError("Internal Error!");
        }
      })
      .catch((err) => {
        setError("Internal server error!");
      });
  };

  return (
  
  <div>

  </div>
    );
}

export default HistoryPage;
