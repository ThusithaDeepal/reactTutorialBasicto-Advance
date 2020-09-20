import React, { Component } from 'react'

export default class Message extends Component {

constructor(props) {
    super(props)

    this.state = {
         message:"Visitor"
    }
}
onSub=()=>{
    this.setState({
message:"Thank for subscribing"

    });
}

    render() {
        return (
            <div>
                <h1>Hello {this.state.message}</h1>
                <button onClick={this.onSub}>Subscribe me !!</button>
            </div>
        )
    }
}
