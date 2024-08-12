import { useState } from "react";

function UseCounterHook(initialState = 0) {
  const [count, setCount] = useState(initialState);

  const Increment = () => {
    return setCount((prevCount) => prevCount + 1);
  };

  const Decrement = () => {
    return setCount((prevCount) => prevCount - 1);
  };

  const Reset = () => {
    return setCount(initialState);
  };
  return [count, Increment, Decrement, Reset];
}

export default UseCounterHook;
