import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("Regular Component has been rendered.");
    return <div>Hi I am the Regular Component of User {this.props.name}</div>;
  }
}

export default RegComp;
