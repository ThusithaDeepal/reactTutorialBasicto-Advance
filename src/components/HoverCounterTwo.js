import React, { Component } from 'react'

export class HoverCounterTwo extends Component {


    render() {
        const {count,incrementCount}=this.props
     
        return (
            <div>
                <h1 onMouseOver={incrementCount} >clicked {count} </h1>
            </div>
        )
    }
}

export default HoverCounterTwo
