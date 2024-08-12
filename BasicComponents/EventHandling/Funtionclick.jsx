// This component is made to learn that how can we handle events in functional components

import React from "react";

const Functionclick = () => {
  function eventhandler() {
    console.log("Button is clicked successfully.");
  }
  return (
    <div>
      <button onClick={eventhandler}>Click</button>
    </div>
  );
};

export default Functionclick;
