import React, { Component } from "react";

class CounterUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  IncrementHandler = () => {
    this.setState((prevstate) => {
      return { count: prevstate.count + 1 };
    });
  };
  render() {
    return (
      <div>{this.props.render(this.state.count, this.IncrementHandler)}</div>
    );
  }
}

export default CounterUpdate;
