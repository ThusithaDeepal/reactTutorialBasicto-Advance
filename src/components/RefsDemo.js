import React, { Component } from 'react'


// Refs provide a way to access DOM nodes or React elements created in the render method.
class RefsDemo extends Component {

  constructor(props) {
    super(props)
    //creating a referene to the input element
    // create a ref to store the textInput DOM element
    this.inputRef = React.createRef()

  }

  FocusToTextInput = () => {
    this.inputRef.current.focus()
    //set the focus to the node
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
  }

  ShowFocusToTextInputValue = () => {
    alert(this.inputRef.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        {/* / tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor */}
        <button onClick={this.FocusToTextInput}>focus the text input by clicking this</button>
        <button onClick={this.ShowFocusToTextInputValue}>show focus  text input value</button>
      </div>
    )
  }
}

export default RefsDemo
