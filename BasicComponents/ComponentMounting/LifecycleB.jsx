//This component is built to understand the sequence of component mounting lifecycle methods

//First the constructor method will mount
//Second the getDerivedStateFromProps method will mount
//Third the render method will mount
//Fourth the componentDidMount method will mount

import React, { Component } from "react";

class LifecycleB extends Component {
  constructor() {
    super();
    this.state = {
      userName: "Khadeejah",
    };
    console.log("LifeCycleB constructor Method");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps Method");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount Method");
  }
  render() {
    console.log("LifecycleB render Mehtod");
    return <div></div>;
  }
}

export default LifecycleB;
