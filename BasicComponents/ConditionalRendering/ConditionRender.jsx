// This component is built to learn the 4 approaches of conditional rendering

import React, { Component } from "react";

class ConditionRender extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }

  //This is short circuit approach
  render() {
    return (
      this.state.isLoggedIn && (
        <div>
          <h1>Welcome Khadeejah</h1>
        </div>
      )
    );
  }

  //This is ternary operator approach
  //   render() {
  //     return this.state.isLoggedIn ? (
  //       <div>
  //         <h1>Welcome Khadeejah</h1>
  //       </div>
  //     ) : (
  //       <div>
  //         <h1>Welcome Guest</h1>
  //       </div>
  //     );
  //   }

  //This is elemental approach
  //   render() {
  //     let message;
  //     if (this.state.isLoggedIn) {
  //       message = (
  //         <div>
  //           <h1>Welcome Khadeejah</h1>
  //         </div>
  //       );
  //     } else {
  //       message = (
  //         <div>
  //           <h1>Welcome Guest</h1>
  //         </div>
  //       );
  //     }

  //     return <div>{message}</div>;
  //   }

  //This is if else approach
  //   render() {
  //     if (this.state.isLoggedIn) {
  //       return (
  //         <div>
  //           <h1>Welcome Khadeejah</h1>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div>
  //           <h1>Welcome Guest</h1>
  //         </div>
  //       );
  //     }
  //   }
}

export default ConditionRender;
