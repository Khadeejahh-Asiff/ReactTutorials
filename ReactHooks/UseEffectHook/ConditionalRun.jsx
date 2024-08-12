import React, { useState, useEffect } from "react";

function ConditionalRun() {
  const [count, setCount] = useState(0);
  const [Name, setName] = useState("");

  useEffect(() => {
    console.log("UseEffect has been Updated.");
    document.title = `Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={Name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="button" onClick={() => setCount(count + 1)}>
        Clicked {count} Times
      </button>
    </div>
  );
}

export default ConditionalRun;
