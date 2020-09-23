import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

// order of mounting life LifeCycle
// 1. Constructor
// 2. getDerivedStateFromProps
// 3. render  if there is achild component it will go to the its mounting methods like constructor,getDerivedStateFromProps,render,
// 4. componentDidMount

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    console.log("inside  LifeCycle A constructor")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("inside LifeCycle A getDerivedStateFromProps method");
    //should retunr modified state
    return null
  }

  componentDidMount() {
    console.log("inside LifeCycle A  component didmount method")
  }


  render() {
    console.log("inside LifeCycle A render method")
    return (
      <div>
        Life Cycle A component
        <LifeCycleB />


      </div>
    )
  }
}
