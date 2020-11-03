import React from 'react'
import Card from './card.js'
import './top-cards.css'
const cardListData = [
    {
        username: '@Vidal',
        id: 1,
        followers: '1987',
        icon: 'imagenes/icon-facebook.svg',
        todayFollowers: 12,
        name: 'facebook'
    },
    {
        username: '@PalteasCausa',
        id: 2,
        followers: '2020',
        icon: 'imagenes/icon-twitter.svg',
        todayFollowers: 12,
        name: 'twitter'
    },
    {
        username: '@PalteasCausa',
        id: 3,
        followers: '1995',
        icon: 'imagenes/icon-instagram.svg',
        todayFollowers: 12,
        name: 'instagram'
    },
    {
        username: '@PalteasCausa',
        id: 4,
        followers: '1996',
        icon: 'imagenes/icon-youtube.svg',
        todayFollowers: -12,
        name: 'youtube'
    },
]
function TopCards() {
  return (
   
  <section className="top-cards">
  <div className="wrapper">
      <div className="grid">
          {
            cardListData.map((cardData) => <Card key={cardData.id} {...cardData} />)
          }
          
{/* 
          <article className="card twitter">
              <p className="card-title">
                  <img src="imagenes/icon-twitter.svg" alt="" />
                  @PalteasCausa
              </p>
              <p className="card-followers">
                  <span className="card-followers-number">2020</span>
                  <span className="card-followers-title">Followers</span>
              </p>
              <p className="card-today">
                  <img src="imagenes/icon-up.svg" alt="" />
                  12 Today
              </p>
          </article>
          <article className="card instagram">
              <p className="card-title">
                  <img src="imagenes/icon-instagram.svg" alt="" />
                  @PalteasCausa
              </p>
              <p className="card-followers">
                  <span className="card-followers-number">1995</span>
                  <span className="card-followers-title">Followers</span>
              </p>
              <p className="card-today">
                  <img src="imagenes/icon-up.svg" alt="" />
                  12 Today
              </p>
          </article>
          <article className="card youtube">
              <p className="card-title">
                  <img src="imagenes/icon-youtube.svg" alt="" />
                  @PalteasCausa
              </p>
              <p className="card-followers">
                  <span className="card-followers-number">1996</span>
                  <span className="card-followers-title">Followers</span>
              </p>
              <p className="card-today">
                  <img src="imagenes/icon-up.svg" alt="" />
                  12 Today
              </p>
          </article> */}
      </div>        
  </div> 
  </section>
  )
}

export default TopCards