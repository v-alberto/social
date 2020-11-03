import React from 'react'
import './card.css'


function Card({username, icon, followers, todayFollowers, name}) {
  const cardClass = `card ${name}`
  return (
    <article className= {cardClass}>
      <p className="card-title">
        <img src={icon} alt="" />
        {username}
      </p>
      <p className="card-followers">
        <span className="card-followers-number">{followers}</span>
        <span className="card-followers-title">Followers</span>
      </p>
      <p className="card-today">
        <img src="imagenes/icon-up.svg" alt="" />
        {todayFollowers} Today
      </p>
    </article>
  )
}

export default Card