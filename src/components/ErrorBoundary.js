import React, { Component } from 'react'

export class ErrorBoundary extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  // static getDeriveStateFromError(error) {

  //   return {
  //     hasError: true
  //   }

  // }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return ({
      hasError: true
    })


  }

  componentDidCatch(Error, info) {
    // You can also log the error to an error reporting service
    console.log("erorrrrrrrrrrrrrrr")
    console.log(Error, info)
  }

  render() {

    if (this.state.hasError) {
      return (
        <h1>
          Something wen wrong
        </h1>
      )
    }
    return (

      this.props.children

    )

  }
}

export default ErrorBoundary
