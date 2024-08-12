import React, { useState } from "react";
import MousePosition from "./MousePosition";

function Mousedisplay() {
  const [display, setDispay] = useState(true);
  return (
    <div>
      <button type="button" onClick={() => setDispay(!display)}>
        Toggle Dispay Button
      </button>{" "}
      {display && <MousePosition />}
    </div>
  );
}

export default Mousedisplay;
