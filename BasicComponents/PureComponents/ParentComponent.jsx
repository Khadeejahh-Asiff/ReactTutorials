import React, { Component } from "react";
import RegComp from "./RegComp";
import NewpureComp from "./NewpureComp";

class ParentComponent extends Component {
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
        <RegComp name={this.state.name} />
        <NewpureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
