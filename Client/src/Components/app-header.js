import React from "react";
export default function AppHeader(props) {
  return (
    <div className="header-main">
      <div className="header">
        <h2>VoiceChess</h2>
      </div>
      <div className="navbar">{props.children}</div>
    </div>
  );
}
