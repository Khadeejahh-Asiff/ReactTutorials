import React, { Component } from "react";

class RefDemo extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  clickhandler = () => {
    alert(`The Value is ${this.inputRef.current.value}`);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <button type="button" onClick={this.clickhandler}>
          Click
        </button>
      </div>
    );
  }
}

export default RefDemo;
