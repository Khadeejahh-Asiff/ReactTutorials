//Memo components performs the same function as Pure Components and it is specifically used for stateless functional components of React JS

import React from "react";

function MemoComp(props) {
  return <div>Hi I am the Memo Component of User {props.name}</div>;
}

export default React.memo(MemoComp);
