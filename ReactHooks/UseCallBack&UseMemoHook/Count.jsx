import React from "react";

function Count({ count, text }) {
  console.log(`${text} Component has been rendered`);
  return (
    <div>
      <h3>
        {text} - {count}
      </h3>
    </div>
  );
}

export default React.memo(Count);
