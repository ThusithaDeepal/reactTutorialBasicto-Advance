import React from 'react'
import ReactDOM from 'react-dom'


function PortalsDemo() {

  return ReactDOM.createPortal(
    (
      <div>
        <h1>Im portal outside the root div</h1>
      </div>
    )
    , document.getElementById("portal-root"))

}

export default PortalsDemo
