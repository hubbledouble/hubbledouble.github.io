import React from "react";

const SpinnerPage = () => {
  return (
    <>
      <div
        className="spinner-border"
        role="status"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
        }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default SpinnerPage;
