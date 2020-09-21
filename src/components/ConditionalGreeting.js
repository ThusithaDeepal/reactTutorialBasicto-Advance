import React, { Component } from 'react'

class ConditionalGreeting extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    return (
      this.state.isLoggedIn ? <div>Hello thusitha</div> : <h1>hello guest</h1>

      // this.state.isLoggedIn && <div>Hello thusitha</div>
      //short circuit operator this evalute right side only if left side is true else nothing load
    )
  }
}

export default ConditionalGreeting
