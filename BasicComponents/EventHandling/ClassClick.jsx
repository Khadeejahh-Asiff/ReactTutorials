import React, { Component } from "react";

class ClassClick extends Component {
  eventhandler() {
    console.log("The button has been clicked successfully.");
  }
  render() {
    return (
      <div>
        <button onClick={this.eventhandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
