import React, { Component } from "react";

class ErrorHandle extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>There has been an error</h2>;
    }
    return this.props.children;
  }
}

export default ErrorHandle;
