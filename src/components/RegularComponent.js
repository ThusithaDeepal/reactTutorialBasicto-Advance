import React, { Component } from 'react'


//Regular component should not implememt ShouldComponentUpdate(next props,next state) by default,It return true by default
//so regular component re render when state chaneg  if the prev state same in next state
//In PureComponent implements ShouldComponentUpdate(next props,next state), a shallow comparison on props 
// and state and returns true if any props or states have changed.else did not re render
//
export default class RegularComponent extends Component {
  render() {
    console.log("Im Regular componennt")

    return (
      <div>
        Im Regular componennt {this.props.name}
      </div>
    )
  }
}
