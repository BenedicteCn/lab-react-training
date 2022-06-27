import React, { useState } from 'react'


const LikeButton = () => {

  const colors = ['purple','blue','green','yellow','orange','red']
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  // const [colorOne, setColorOne] =  useState('purple')
  // const [colorTwo, setColorTwo] =  useState('purple')


  const incrementOne = () => {
    setCountOne(countOne + 1)

  }

  const incrementTwo = () => {
    setCountTwo(countTwo + 1)

  }

  return (
    <div>
      <button style= {{backgroundColor: colors[countOne%colors.length]}}onClick={incrementOne}>{countOne} Likes</button>
      <button style= {{backgroundColor: colors[countTwo%colors.length]}} onClick={incrementTwo}>{countTwo} Likes</button>
    </div>
  )
}

export default LikeButton
