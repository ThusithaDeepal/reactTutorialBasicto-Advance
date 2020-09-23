import React, { Component } from 'react'

export default class LifeCycleB extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    console.log("inside  LifeCycle B constructor")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("inside LifeCycle B getDerivedStateFromProps method");
    //should retunr modified state
    return null
  }

  componentDidMount() {
    console.log("inside LifeCycle B  component didmount method")
  }


  render() {
    console.log("inside LifeCycle B render method")
    return (
      <div>
        Life Cycle B component

      </div>
    )
  }
}
