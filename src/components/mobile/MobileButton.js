import React from "react";

const MobileButton = ({ mobileActive, setMobileActive }) => {
  return (
    <button
      className={`mobile-button${mobileActive ? " active" : ""}`}
      onClick={() => {
        setMobileActive(!mobileActive);
      }}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </button>
  );
};

export default MobileButton;
