//React fragments help you render components without adding extra nodes to the DOM.

import React from "react";

function TableColumns() {
  return (
    <React.Fragment>
      <td>Name</td>
      <td>Age</td>
    </React.Fragment>
  );
}

export default TableColumns;
