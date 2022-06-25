import React from 'react'
import './CreditCard.css'

const CreditCard = (props) => {
  return (
    <div className= "creditcard" style = {{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
    <p id="type">{props.type}</p>
    <p>{props.number}</p>

    <p> Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
    <p>{props.owner}</p>

    </div>
  )
}

export default CreditCard
