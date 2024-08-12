//This component is built to understand the sequence of component updating lifecycle methods

//First the getDerivedStateFromProps method
//Second the shouldComponentUpdate method
//Third the render method
//Fourth the getSnapshotBeforeUpdate method
//Fifth the componentDidUpdate method

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

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate Method");
    return true;
  }

  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log(" LifecycleA componentDidUpdate method.");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(" LifecycleA getSnapshotBeforeUpdate Method.");
    return null;
  }

  handlestate = () => {
    this.setState({
      userName: "StateChanged",
    });
  };
  render() {
    console.log("LifecycleA render Mehtod");
    return (
      <div>
        <button type="button" onClick={this.handlestate}>
          State Change
        </button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
