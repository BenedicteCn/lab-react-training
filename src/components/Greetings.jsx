import React from 'react'
import './Greetings.css'


const Greetings = ({lang, children}) => {

  let text = ''

  if (lang === "de") {
    text = "Hallo"
  };

  if (lang === "fr") {
    text = "Bonjour"
  }

  return (
    <div className="cardg">{text} {children}</div>
  )
}

export default Greetings
