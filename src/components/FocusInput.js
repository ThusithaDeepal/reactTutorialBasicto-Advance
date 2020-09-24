import React, { Component } from 'react'
import InputRef from './InputRef';

class FocusInput extends Component {
  constructor(props) {
    super(props)

    this.componentRef = React.createRef();
  }
  clickhandler = () => {
    this.componentRef.current.FocusInput()
  }

  render() {
    return (
      <div>
        <InputRef ref={this.componentRef} />
        <button onClick={this.clickhandler}>click to Focus on thee input</button>
      </div>
    )
  }
}

export default FocusInput
