import React, { Component } from 'react'
import withCounterHoc from './withCounterHOC'

 class ClickCounter extends Component {

   
    render() {
        
        return (
            <div>
            <button onClick={this.props.incrementCounter}>counter is {this.props.count} </button>   
            </div>
        )
    }
}

export default withCounterHoc(ClickCounter)
