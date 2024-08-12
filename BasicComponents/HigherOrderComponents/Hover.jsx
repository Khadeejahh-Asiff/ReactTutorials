import React, { Component } from "react";
import UpdateComponent from "./UpdateComponent";

class Hover extends Component {
  render() {
    const { count, IncrementCount } = this.props;
    return (
      <div>
        <button type="button" onMouseMove={IncrementCount}>
          <h3>Hover {count} times</h3>
        </button>
      </div>
    );
  }
}

export default UpdateComponent(Hover);
