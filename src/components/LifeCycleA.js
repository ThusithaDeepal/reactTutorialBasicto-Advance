import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

// order of mounting life LifeCycle
// 1. Constructor
// 2. getDerivedStateFromProps
// 3. render  if there is achild component it will go to the its mounting methods like constructor,getDerivedStateFromProps,render,
// 4. componentDidMount


// order of updating life cycle
// 1. getDerivedStateFromProps(props, state)
// 2.shouldComponentUpdate(nextProps, nextState)
// 3. render()
// 4. getSnapshotBeforeUpdate(prevProps, prevState)
// 5. componentDidUpdate(prevProps, prevState, snapshot)

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "thusitha"
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
    // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
  }



  shouldComponentUpdate(nextProps, nextState) {
    // Called to determine whether the change in props and state should trigger a re-render.

    // Component always returns true. PureComponent implements a shallow comparison on props 
    // and state and returns true if any props or states have changed.

    // If false is returned, Component#render, componentWillUpdate and componentDidUpdate will not be called.

    console.log("inside LifeCycle A shouldComponentUpdate method")
    return true
  }




  getSnapshotBeforeUpdate(prevProps, prevState) {

    // Runs before React applies the result of render to the document, 
    // and returns an object to be given to componentDidUpdate.
    //  Useful for saving things such as scroll position before render causes changes to it.

    // Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated lifecycle events
    //  from running.
    console.log("inside LifeCycle A  getSnapshotBeforeUpdate method")
    return null

  }
  componentDidUpdate(prevProps, prevState, snapshot) {

    // Called immediately after updating occurs. Not called for the initial render.
    // The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

    console.log("inside LifeCycle A  componentDidUpdate method")
  }


  changeState = () => {
    this.setState({
      name: "updated"
    })
  }



  render() {
    console.log("inside LifeCycle A render method")
    return (
      <div>
        Life Cycle A component <br />
        {this.state.name}
        <button onClick={this.changeState}>Update</button>
        <LifeCycleB />


      </div>
    )
  }
}
