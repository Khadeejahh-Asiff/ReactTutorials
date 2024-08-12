//This file is built to show stateless function component of React JS

import React from "react";

// function Greet() {
//   return <h1>Hello, I am Khadeejah.</h1>;
// }

// const Greet = () => {
//   return <h1>Hello, I am Khadeejah.</h1>;
// };

const Greet = () => {
  return React.createElement(
    "div",
    "null",
    React.createElement(
      "h1",
      "null",
      "I have been created through createElement"
    )
  );
};
export default Greet;
