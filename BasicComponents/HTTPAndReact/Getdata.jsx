import React, { Component } from "react";
import axios from "axios";

export class Getdata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      ErrorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ post: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          ErrorMsg: "There was an error retrieving Data",
        });
      });
  }

  render() {
    const { post } = this.state;
    if (post.length) {
      return (
        <div>
          {post.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      );
    } else {
      return <div>{this.state.ErrorMsg}</div>;
    }
  }
}

export default Getdata;
