import React, { Component } from "react";

class HoverTwo extends Component {
  render() {
    const { count, IncrementHandler } = this.props;
    return (
      <div>
        <h1 onMouseMove={IncrementHandler}>Clicked {count} times</h1>
      </div>
    );
  }
}

export default HoverTwo;
