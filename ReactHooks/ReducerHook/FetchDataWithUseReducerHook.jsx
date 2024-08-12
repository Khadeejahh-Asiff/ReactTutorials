import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  Loading: false,
  Posts: {},
  Error: " ",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Fetch_success":
      return {
        Loading: false,
        Error: "",
        Posts: action.payload,
      };
    case "Fetch_failure":
      return {
        Loading: true,
        Error: "There has been error retrieving data",
        Posts: {},
      };
    default:
      return state;
  }
};
function FetchDataWithUseReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "Fetch_success", payload: response.data });
      })
      .catch((Error) => {
        dispatch({ type: "Fetch_failure" });
      });
  }, []);
  return (
    <div>
      {state.Loading ? " " : state.Posts.title}
      {state.Error ? state.Error : null}
    </div>
  );
}

export default FetchDataWithUseReducerHook;
