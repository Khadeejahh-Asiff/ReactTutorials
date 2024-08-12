import React from "react";

function Button({ Increment, children }) {
  console.log(`${children} Button Component has been Rendered`);
  return (
    <div>
      <button type="button" onClick={Increment}>
        {children}
      </button>
    </div>
  );
}

export default React.memo(Button);
