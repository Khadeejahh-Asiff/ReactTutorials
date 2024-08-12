//This component is built to understand the sequence of component updating lifecycle methods

//First the getDerivedStateFromProps method
//Second the shouldComponentUpdate method
//Third the render method
//Fourth the getSnapshotBeforeUpdate method
//Fifth the componentDidUpdate method

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

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate Method");
    return true;
  }

  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log("LifecycleB componentDidUpdate method.");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate Method.");
    return null;
  }
  render() {
    console.log("LifecycleB render Mehtod");
    return <div></div>;
  }
}

export default LifecycleB;
