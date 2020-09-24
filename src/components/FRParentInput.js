import React, { Component } from 'react'

class FRParentInput extends Component {


  constructor(props) {
    super(props)

    this.inputRef = React.createRef();
  }
  clickHnadler = () => {
    this.inputRef.current.focus()
  }

  render() {


    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.clickHnadler}>Click to forward the ref </button>
      </div>
    )
  }
}

export default FRParentInput
