import ReactPlayer from 'react-player'

import React from 'react'

const styl = {
  position: "absolute",
  margin: "auto",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  padding: 50
}

export default function YoutubePlayerComponent() {
  return (
    <div style={styl}>
      <ReactPlayer

        url="https://www.youtube.com/watch?v=pmBmXHqvKDQ&ab_channel=BillPal">

      </ReactPlayer>


    </div>



  )
}
