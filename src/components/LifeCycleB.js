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





  shouldComponentUpdate(nextProps, nextState) {
    // Called to determine whether the change in props and state should trigger a re-render.

    // Component always returns true. PureComponent implements a shallow comparison on props 
    // and state and returns true if any props or states have changed.

    // If false is returned, Component#render, componentWillUpdate and componentDidUpdate will not be called.

    console.log("inside LifeCycle B shouldComponentUpdate method")
    return true
  }




  getSnapshotBeforeUpdate(prevProps, prevState) {

    // Runs before React applies the result of render to the document, 
    // and returns an object to be given to componentDidUpdate.
    //  Useful for saving things such as scroll position before render causes changes to it.

    // Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated lifecycle events
    //  from running.
    console.log("inside LifeCycle B  getSnapshotBeforeUpdate method")
    return null

  }
  componentDidUpdate(prevProps, prevState, snapshot) {

    // Called immediately after updating occurs. Not called for the initial render.
    // The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

    console.log("inside LifeCycle B  componentDidUpdate method")
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
