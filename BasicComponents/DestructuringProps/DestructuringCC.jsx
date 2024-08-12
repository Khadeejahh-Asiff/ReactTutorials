import React, { Component } from "react";

class DestructuringCC extends Component {
  render() {
    const { name, heroName } = this.props;
    return (
      <div>
        <h1>
          Hi My name is {name} a.k.a {heroName}
        </h1>
      </div>
    );
  }
}

export default DestructuringCC;
