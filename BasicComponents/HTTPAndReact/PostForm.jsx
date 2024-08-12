import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      title: "",
      body: "",
    };
  }

  NameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  TitleChangeHandler = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  BodyChangeHandler = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  SubmitHandler = (event) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    const { name, body, title } = this.props;
    return (
      <form onSubmit={this.SubmitHandler}>
        <div>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.NameChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.TitleChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.BodyChangeHandler}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default PostForm;
