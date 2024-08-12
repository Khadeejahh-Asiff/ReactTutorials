import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandling("Child")}>Click me</button>
    </div>
  );
}

export default ChildComponent;
