import React, { Component } from "react";
import ChildComponent from "./ChildComponent.jsx";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent = (ChildName) => {
    alert(`Hello ${this.state.message} from ${ChildName}`);
  };

  render() {
    return (
      <div>
        <ChildComponent greetHandling={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
