import React from 'react'
import maxence from '../assets/images/maxence.png'
import glasses from '../assets/images/maxence-glasses.png'

const ClickablePicture = () => {

  const imageClick = () => {
    console.log(glasses)
    return <img src={glasses} alt=""/>
  }

  return (
    <div>
      <img src={maxence} alt="" onClick={() => imageClick()} />
      </div>
  )
}

export default ClickablePicture
