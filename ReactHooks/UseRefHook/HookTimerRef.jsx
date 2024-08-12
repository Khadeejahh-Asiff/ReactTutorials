import React, { useState, useEffect, useRef } from "react";

function HookTimerRef() {
  const [timer, setTimer] = useState(0);

  const IntervalRef = useRef();
  useEffect(() => {
    IntervalRef.current = setInterval(
      () =>
        setTimer((prevTime) => {
          return prevTime + 1;
        }),
      1000
    );
    return () => {
      clearInterval(IntervalRef.current);
    };
  }, []);
  return (
    <div>
      Hook Timer - {timer}
      <br />
      <button onClick={() => clearInterval(IntervalRef.current)}>
        Clear Timer
      </button>
    </div>
  );
}

export default HookTimerRef;
