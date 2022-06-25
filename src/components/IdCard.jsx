import React from 'react'
import './IdCard.css'

const IdCard = (prosp) => {
  return (
    <div className = "card">
      <div className= "picture">
       <img src={prosp.picture} className="profile" alt="profile" />
       </div>
      <div className = "text">
        <p><span>Last name:</span> {prosp.lastName}</p>
        <p><span>First name:</span> {prosp.firstName}</p>
        <p><span>Gender:</span> {prosp.gender}</p>
        <p><span>Height:</span> {prosp.height}</p>
        <p><span>Birth:</span> {prosp.birth}</p>
      </div>
    </div>
  )
}

export default IdCard
