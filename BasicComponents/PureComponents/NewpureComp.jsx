//Pure Components create a shallow comparison between props and state that prevents the extra & redundant re-rendering of elements on the DOM

import React, { PureComponent } from "react";

class NewpureComp extends PureComponent {
  render() {
    console.log("Pure Component has been rendered.");
    return <div>Hi I am the Pure Component of User {this.props.name}</div>;
  }
}

export default NewpureComp;
