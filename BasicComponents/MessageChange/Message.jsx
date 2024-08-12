import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Hello Khadeejah",
    };
  }

  Changemsg = () => {
    this.setState({
      msg: "Thanks for visiting Khadeejah.",
    });
  };

  next = () => {
    this.setState({ msg: "How can I help you khadeejah?" });
  };
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.Changemsg()}>Change Message</button>
        <button onClick={() => this.next()}>Next</button>
      </div>
    );
  }
}

export default Message;
