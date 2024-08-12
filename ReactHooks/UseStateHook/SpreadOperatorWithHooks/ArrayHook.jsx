import React, { useState } from "react";

function ArrayHook() {
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Click to add a Number
      </button>
      <ul>
        {items.map((item) => {
          return <li key={item.length}> {item.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default ArrayHook;
