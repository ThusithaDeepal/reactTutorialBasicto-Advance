import React, { Component } from 'react'
import withCounterHoc from './withCounterHOC'

 class ClickCounter extends Component {

   
    render() {
        console.log(this.props.name)
        return (
            <div>
            <button onClick={this.props.incrementCounter}>counter is {this.props.count}  {this.props.name} </button>   
            </div>
        )
    }
}

export default withCounterHoc(ClickCounter,5)
