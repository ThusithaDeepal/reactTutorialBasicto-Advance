import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./UserComponent";

export class ComponentE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    );
  }
}

// ComponentE.contextType = UserContext;
// this is same as
// static contextType = UserContext;

export default ComponentE;
