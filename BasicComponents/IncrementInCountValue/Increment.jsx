import React, { Component } from "react";

class Increment extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  incrementagain = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  };

  incrementbyFive() {
    this.incrementagain();
    this.incrementagain();
    this.incrementagain();
    this.incrementagain();
    this.incrementagain();
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementbyFive()}>Increment</button>
      </div>
    );
  }
}

export default Increment;
