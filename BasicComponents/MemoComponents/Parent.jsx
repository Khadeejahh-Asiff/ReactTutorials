import React, { Component } from "react";
import MemoComp from "./MemoComp";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Khadeejah",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Khadeejah",
      });
    }, 2000);
  }
  render() {
    console.log("Parent Component has been rendered.");
    return (
      <div>
        Hi I am the Parent Component of {this.state.name}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default Parent;
