import React from "react";
import { useContext } from "react";

import { UserContext } from "../App";

function ComponentC() {
  const user = useContext(UserContext);
  return <div>{user}</div>;
}

export default ComponentC;
