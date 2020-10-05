import React, { Component } from 'react'

export class UserRenderProp extends Component {
    render() {
        return (
            <div>
                {this.props.render()}
            </div>
        )
    }
}

export default UserRenderProp
