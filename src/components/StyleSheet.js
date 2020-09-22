import React from 'react'
import './myStyle.css' //external stylesheet
import styleClasses from './appStyle.module.css'

function StyleSheet(props) {
  console.log(`${props.primary} `)
  let classChange = props.primary ? 'happy' : 'sad'
  return (
    <div>
      <h1 className={`${classChange} calm`}>hello external style sheet</h1>

      <h1 className={styleClasses.dntknw}>Using app style module</h1>
    </div>
  )
}
export default StyleSheet