import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      comment: "",
      topic: "React",
    };
  }

  handleUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleComments = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopic = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handlesubmit = (event) => {
    alert(
      `So the Username is ${this.state.username}. The Comment of the user is ${this.state.comment}. The Topic is ${this.state.topic}`
    );

    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <html>
          <div>
            <label style={{ marginTop: "10px" }}>UserName</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUserName}
              style={{ marginLeft: "10px", marginTop: "10px" }}
            ></input>
          </div>

          <div>
            <label htmlFor="Comments">Comments</label>
            <textarea
              value={this.state.comment}
              onChange={this.handleComments}
              style={{ marginLeft: "10px", marginTop: "10px" }}
            ></textarea>
          </div>

          <div>
            <select value={this.state.topic} onChange={this.handleTopic}>
              <option>React</option>
              <option>Angular</option>
              <option>Vue</option>
            </select>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </html>
      </form>
    );
  }
}

export default Form;
