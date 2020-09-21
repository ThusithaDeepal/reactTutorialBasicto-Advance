import React, { Component } from 'react'

export default class EventBind extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "click the button"
    }
    //bind the event handler in constructor to use this keyword
    // this.eventHandler = this.eventHandler.bind(this)
  }
  eventHandler() {
    console.log(this)
    this.setState({
      message: "btn clicked"
    })


  }

  eventHandlerArrow = () => {
    this.setState({
      message: "btn clicked arrow"
    })
  }

  //when we use this keyword without binding to normal function without using arrow function 
  //this is undefined
  //so we have to bind the method in constructor or use arrow function is suitable

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* //not working when we use like this */}
        {/* <button onClick={this.eventHandler}>Click me</button> <br /> */}

        {/* working need more appropriate way */}
        {/* <button onClick={this.eventHandler.bind(this)}>Click me</button> <br />  */}

        {/* //bind the event handler in constructor to use this keyword recomentde by react */}
        {/* <button onClick={this.eventHandler}>Click me</button><br /> */}

        {/* use this when need to pass func arguments   use () to call the function*/}
        <button onClick={() => { this.eventHandler() }}>Click me</button><br />

        {/* use arrow function in event handler */}
        <button onClick={this.eventHandlerArrow}>Click me</button><br />
      </div>
    )
  }
}
