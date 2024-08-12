import React, { useState, useEffect } from "react";

function DocTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked title ${count} times`;
  });
  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        You clicked button {count} times
      </button>
    </div>
  );
}

export default DocTitle;
