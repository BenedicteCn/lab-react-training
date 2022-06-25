import React from 'react'
import './DriverCard.css'

const DriverCard = (props) => {
  return (
    <div className ="driverCard">
      <h1>{props.name}</h1>
      <p>{props.rating}</p>
      <img src={props.img} className="driver" alt="driver" />
      <p>{props.car.model} {props.car.licensePlate}</p>

    </div>
  )
}

export default DriverCard
