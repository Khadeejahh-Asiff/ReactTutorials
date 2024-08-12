import React, { Component } from "react";
import UpdateComponent from "./UpdateComponent";

class Counter extends Component {
  render() {
    const { count, IncrementCount } = this.props;
    return (
      <div>
        <button type="button" onClick={IncrementCount}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}

export default UpdateComponent(Counter);
