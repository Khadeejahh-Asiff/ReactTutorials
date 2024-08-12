import React from "react";

function Key() {
  const Names = ["Bruce", "Kayla", "Marie", "Reema", "Bruce"];
  const NameList = Names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  return (
    <div>
      <div>{NameList}</div>
    </div>
  );
}

export default Key;
