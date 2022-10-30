import React from "react";
export default function AppHeader() {
  return (
    <div className="header-main">
    <div className="header">   
      <h1>Voice Chess</h1>  
    </div>
     <div className="navbar">
     <a href="/">Home</a>
      <a>Rankings</a>
      <a>Watch Matches</a>
      <a href="/login">Login</a>
     </div>
    </div>
   
  );
}
