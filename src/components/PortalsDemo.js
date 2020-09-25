import React from 'react'
import ReactDOM from 'react-dom'

// Portals provide a first-class way to render children into a DOM node
//  that exists outside the DOM hierarchy of the parent component.
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
