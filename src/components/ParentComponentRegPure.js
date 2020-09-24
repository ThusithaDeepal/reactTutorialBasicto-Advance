import React, { Component } from 'react'
import PureComponennt from './PureComponennt'
import RegularComponent from './RegularComponent'

export default class ParentComponentRegPure extends Component {

  //Regular component should not implememt ShouldComponentUpdate(next props,next state) by default,It return true by default
  //so regular component re render when state chaneg  if the prev state same in next state
  //In PureComponent implements ShouldComponentUpdate(next props,next state), a shallow comparison on props 
  // and state and returns true if any props or states have changed.else did not re render
  //

  constructor(props) {
    super(props)

    this.state = {
      name: "thusitha"
    }
  }

  componentDidMount() {

    setInterval(
      () => {
        this.setState({
          name: "wini"
        })
      }, 2000
    )
  }



  render() {

    return (
      <div>
        {this.state.name}
        <RegularComponent />
        <PureComponennt />

      </div>
    )
  }
}
