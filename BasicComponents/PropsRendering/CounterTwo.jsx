import React, { Component } from "react";

class CounterTwo extends Component {
  render() {
    const { count, IncrementHandler } = this.props;
    return (
      <div>
        <button type="button" onClick={IncrementHandler}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}

export default CounterTwo;
