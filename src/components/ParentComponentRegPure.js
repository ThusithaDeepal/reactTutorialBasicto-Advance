import React, { Component } from 'react'
import PureComponennt from './PureComponennt'
import RegularComponent from './RegularComponent'
import MemoComponent from './MemoComponent'

export default class ParentComponentRegPure extends Component {

  //Regular component should not implememt ShouldComponentUpdate(next props,next state) by default,It return true by default
  //so regular component re render when state chaneg  if the prev state same in next state
  //In PureComponent implements ShouldComponentUpdate(next props,next state), a shallow comparison on props 
  // and state and returns true if any props or states have changed then re render.else did not re render
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
    console.log("Im parent component")
    return (

      <div>

        {/* <RegularComponent name={this.state.name} />
        <PureComponennt name={this.state.name} /> */}

        <MemoComponent name={this.state.name} />

      </div>
    )
  }
}
