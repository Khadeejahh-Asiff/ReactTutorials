import React, { useState, useEffect } from "react";

function MousePosition() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const logMousePosition = (event) => {
    console.log("Mouse Move component has been rendered");
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <h1>Your Mouse Position </h1>
      <h2>
        X-axis : {X} Y-axis : {Y}
      </h2>
    </div>
  );
}

export default MousePosition;
