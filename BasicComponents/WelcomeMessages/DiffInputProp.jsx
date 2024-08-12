import React from "react";

const DiffInputProp = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Hi my Name is {props.name}</h1>
      <p>{props.children}</p>
    </div>
  );
};
export default DiffInputProp;
