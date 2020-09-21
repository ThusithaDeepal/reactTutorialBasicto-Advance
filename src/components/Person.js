import React from 'react'

function Person(props) {

  return (
    <div>
      <h1>I'm{props.personList.name} from{props.personList.city} </h1>
    </div>
  )
}

export default Person
