import React from "react";
import TableColumns from "./TableColumns";

function TableRows() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <TableColumns />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableRows;
