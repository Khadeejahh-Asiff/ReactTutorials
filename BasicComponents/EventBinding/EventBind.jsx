import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
    };
    // this.EventHandler = this.EventHandler.bind(this);
  }

  EventHandler = () => {
    this.setState({
      message: "Goodbye!",
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* <button onClick={this.EventHandler.bind(this)}>Click Me</button> */}
        {/* <button onClick={() => this.EventHandler()}>Click Me</button> */}
        {/* <button onClick={this.EventHandler}>Click Me</button> */}
        <button onClick={this.EventHandler}>Click Me</button>
      </div>
    );
  }
}

export default EventBind;
