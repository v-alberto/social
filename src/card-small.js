import React from 'react'
import './card-small.css'

function CardSmall({icon, pageView, growth, textView}) {
  return (
    <div className="card-small">
      <p className="card-small-views">{textView}</p>
      <p className="card-small-icon">
        <img src= {icon} alt="" />
      </p>
      <p className="card-small-number">{pageView}</p>
      <p className="card-small-porcentage">
        <span>
          <img src="imagenes/icon-up.svg" alt="" />
            {growth}%
        </span>
                  
      </p>
    </div>
  )
}

export default CardSmall