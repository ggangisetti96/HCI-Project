import * as React from "react";

function Indicator({ showIndicator }) {
  const [display, toggleDisplay] = React.useState(false);

  React.useEffect(() => {
    let intervalId = 0;
    if (showIndicator) {
      intervalId = setInterval(() => {
        toggleDisplay(!display);
      }, 400);
    } else {
      toggleDisplay(false);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [showIndicator, display]);

  return (
    <div style={{ minHeight: "50px" }} className="mt-4">
      {display ? (
        <button className="btn btn-block btn-md bg-success text-white">
          TURN
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Indicator;
