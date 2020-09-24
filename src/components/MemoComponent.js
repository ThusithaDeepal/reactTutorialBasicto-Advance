import React from 'react'

function MemoComponent({ name }) {
  console.log("Im memo component");
  return (

    <div>
      Im memo component {name}
    </div>
  )
}

// export default MemoComponent
export default React.memo(MemoComponent)  //this rect.memo is a higher order component accpet a component and return anothe component

//should stop rerender for same props 