import React, { Component } from 'react'
import withCounterHoc from './withCounterHOC'

 class HoverCounter extends Component {

   
    
    render() {
 
        return (
            <div>
                <h1 onMouseOver={this.props.incrementCounter}>on mouse hover {this.props.count}</h1>
            </div>
        )
    }
}

export default withCounterHoc(HoverCounter)
