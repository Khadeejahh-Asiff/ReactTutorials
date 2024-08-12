import React, { Component } from "react";
import { UserConsumer } from "./UserContextComponent";

export class ComponentB extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(username) => {
            return <div>Hi {username}</div>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentB;
