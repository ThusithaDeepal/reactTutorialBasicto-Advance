import React, { Component } from 'react'


//need to use states to handle values and set states to get onchange values
class Form extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "",
      comment: "",
      lang: "React",
      gender: ""

    }
  }

  onNameHandler = (event) => {
    this.setState({
      name: event.target.value,

    })
  }

  onCommentHandler = (event) => {
    this.setState({
      comment: event.target.value
    })

  }

  onLangHandler = (event) => {
    this.setState({
      lang: event.target.value
    })
  }

  radioChange = (event) => {
    console.log("aaa" + event.target.value)
    this.setState({
      gender: event.target.value
    })
  }

  OnSubmit = (event) => {
    event.preventDefault(); //to avoid refresing page when submit
    alert(`submit data are ${this.state.name} ${this.state.comment} ${this.state.lang} ${this.state.gender}`)
  }

  render() {
    return (
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={this.state.name} onChange={this.onNameHandler} />
        </div>
        <br />
        <div>
          <label>Comment</label>
          <textarea value={this.state.comment} onChange={this.onCommentHandler}></textarea>
        </div>
        <br />
        <div>
          <select value={this.state.lang} onChange={this.onLangHandler}>
            <option>React</option>
            <option>Vue</option>
            <option>Angluar</option>
          </select>
        </div>

        <div onChange={this.radioChange}>
          {/* here name=""  should be same to select only one from two check boxes */}
          <input type="radio" value="Male" name="gender" /><label>M</label>
          <input type="radio" value="Female" name="gender" /><label>F</label>

        </div>
        <button type="submit" onClick={this.OnSubmit}>Submit</button>
      </form>
    )
  }
}
export default Form