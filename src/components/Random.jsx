import React from 'react'
import './Greetings.css'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Random = (props) => {



  return (
    <div className='cardg'>Random value between {props.min} and {props.max} =&gt; {getRandomInt(props.max)} </div>
  )
}

export default Random
