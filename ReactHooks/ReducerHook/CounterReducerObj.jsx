import React, { useReducer } from "react";

const initialState = {
  FirstCounter: 0,
  SecondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, FirstCounter: state.FirstCounter + action.value };
    case "Decrement":
      return { ...state, FirstCounter: state.FirstCounter - action.value };
    case "IncrementSecond":
      return { ...state, SecondCounter: state.SecondCounter + action.value };
    case "DecrementSecond":
      return { ...state, SecondCounter: state.SecondCounter - action.value };
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Counter</h1>
      <h2>Count - {count.FirstCounter}</h2>
      <h2>Count - {count.SecondCounter}</h2>
      <button
        type="button"
        onClick={() => dispatch({ type: "Increment", value: 1 })}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "Decrement", value: 1 })}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "Increment", value: 5 })}
      >
        Increment 5
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "Decrement", value: 5 })}
      >
        Decrement 5
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "IncrementSecond", value: 2 })}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "DecrementSecond", value: 2 })}
      >
        Decrement
      </button>
      <button type="button" onClick={() => dispatch({ type: "Reset" })}>
        Reset
      </button>
    </div>
  );
}

export default CounterReducer;
