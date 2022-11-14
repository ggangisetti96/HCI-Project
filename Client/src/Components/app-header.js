import React from "react";
export default function AppHeader(props) {
  return (
    <div className="header-main">
      <div className="header">
        <h1>Voice Chess</h1>
      </div>
      <div className="navbar">{props.children}</div>
    </div>
  );
}
