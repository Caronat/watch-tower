import React from "react";

const ToTop = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="top" onClick={handleClick}>
      <img src="./assets/arrow-icon.svg" alt="arrow" />
    </div>
  );
};

export default ToTop;
