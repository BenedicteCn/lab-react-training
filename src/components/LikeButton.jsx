import React, { useState } from 'react'


const LikeButton = () => {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  const incrementOne = () => {
    setCountOne(countOne + 1)
  }

  const incrementTwo = () => {
    setCountTwo(countTwo + 1)
  }

  return (
    <div>
      <button style= {{backgroundColor:'purple'}}onClick={incrementOne}>{countOne} Likes</button>
      <button style= {{backgroundColor:'purple'}} onClick={incrementTwo}>{countTwo} Likes</button>
    </div>
  )
}

export default LikeButton
