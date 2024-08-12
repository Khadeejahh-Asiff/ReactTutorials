import React, { useState } from "react";

function ModifiedCounter() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementby5 = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <h3> count = {count}</h3>
      <button
        type="button"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
      <button type="button" onClick={() => setCount(initialCount)}>
        Reset
      </button>
      <button type="button" onClick={incrementby5}>
        Increment By 5
      </button>
    </div>
  );
}

export default ModifiedCounter;
