import React from 'react'
import Person from './Person'

function NameList() {

  const persons = [
    {
      "id": 1,
      "name": "gayan",
      "city": "veyangoda"
    }
    ,
    {
      "id": 6,
      "name": "aa",
      "city": "er"
    },
    {
      "id": 5,
      "name": "kd",
      "city": "rtt"
    }
  ]
  const personList = persons.map((person) => { return <Person key={person.id} personList={person} /> });
  return (
    <div>
      {personList}
    </div>
  )
}

export default NameList
