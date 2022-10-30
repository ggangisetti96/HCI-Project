import React from "react";
import { Link } from "react-router-dom";
export default function AppHeader() {
  return (
    <div className="header-main">
    <div className="header">   
    <h1 >Voice Chess</h1>
    </div>
     <div className="navbar">
     <Link to="/">Home</Link>
     <Link to="">Rankings</Link>
     <Link to="">Watch Matches</Link>
     <Link to="/login">Login</Link>
     </div>
    </div>
   
  );
}
