import React, { useState } from "react";

import Avatar from "../images/avatar.png";

function ActivityLegend(props) {
  const [count,setCount] =useState(0);


return (

  <div  >
    <div className="divFlex" >
      <div className="flexCol" >
        <img src={Avatar} className=" rounded-circle " style={{width:"100px"}}
          alt="Avatar" />
        <span> Player 1</span>
      </div>
      
      <div className="flexCol">
        <button
          className="btn btn-block btn-md bg-primary   text-white"> MOVE</button>
          <span> C1 to C4</span>

          <button
          className="btn btn-block btn-md bg-success   text-white"> TURN</button>
      </div>
    </div>
    <div className="divFlex">
      <div className="flexCol">
        <img src={Avatar} className=" rounded-circle " style={{width:"100px"}}
          alt="Avatar" />
              <span> Player 2</span>
      </div>
      <div className="flexCol">
      <button
        className="btn btn-block btn-md bg-primary   text-white"> MOVE</button>
        <span> C1 to C4</span>

        <button
        className="btn btn-block btn-md bg-success   text-white"> TURN</button>
    </div>
    </div>
  </div>
);
}

export default ActivityLegend;

