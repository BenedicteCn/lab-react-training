import React from 'react'

const ClickablePicture = (props) => {
  console.log(props.img)
  return (
    <div>
      <img src={props.img} alt="img" />
    </div>
  )
}

export default ClickablePicture
