//This component is built to understand the sequence of component mounting lifecycle methods

//First the constructor method will mount
//Second the getDerivedStateFromProps method will mount
//Third the render method will mount
//Fourth the componentDidMount method will mount

import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor() {
    super();
    this.state = {
      userName: "Khadeejah",
    };
    console.log("LifeCycleA constructor Method");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps Method");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount Method");
  }
  render() {
    console.log("LifecycleA render Mehtod");
    return (
      <div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
