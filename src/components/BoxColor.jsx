import React from 'react'

const BoxColor = (props) => {
  return (
    <div>
      <div style= {{backgroundColor: `rgb(${props.r},${props.g},${props.b})`, height: "70px", width: "630px", border: "solid 1px", margin:"3px"}}>Hello World!</div>
    </div>
  )
}

export default BoxColor
