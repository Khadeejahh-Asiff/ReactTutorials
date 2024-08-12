import React from "react";
import UseCounterHook from "./UseCounterHook";

function Counter1() {
  const [count, Increment, Decrement, Reset] = UseCounterHook(0);
  return (
    <div>
      <div>Count = {count}</div>
      <div>
        <button type="button" onClick={Increment}>
          Increment
        </button>
        <button type="button" onClick={Decrement}>
          Decrement
        </button>
        <button type="button" onClick={Reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter1;
