import React, { Component } from "react";
import { UserConsumer } from "./UserComponent";

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Im {username} from Context</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
