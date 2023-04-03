import React from "react"

const RefreshButton = ({ refreshFunction }) => {
  return (
    <button className="Refresh" onClick={refreshFunction}>
      Play Again
    </button>
  );
}

export default RefreshButton
