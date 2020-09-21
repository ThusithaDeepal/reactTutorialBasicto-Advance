import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: "I'm parent func from child button call"
    }
    this.parentFunct = this.parentFunct.bind(this);

  }

  parentFunct(val) {

    alert(`${this.state.message} ${val}`);
  }

  render() {
    return (
      <div>
        Please click button

        <ChildComponent func={this.parentFunct} />
      </div>
    )
  }
}

export default ParentComponent