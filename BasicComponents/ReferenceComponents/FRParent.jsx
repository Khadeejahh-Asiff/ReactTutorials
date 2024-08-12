import React, { Component } from "react";
import FRDemo from "./FRDemo";

class FRParent extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  //   componentDidMount() {
  //     this.inputRef.current.focus();
  //     }

  Clickhandler = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <div>
        <FRDemo ref={this.inputRef} />
        <button type="button" onClick={this.Clickhandler}>
          Click Me
        </button>
      </div>
    );
  }
}

export default FRParent;
