import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.func}>Child Button here</button> */}
      <button onClick={() => { props.func("Im child param") }}>Child Button here</button>
    </div>
  )
}
