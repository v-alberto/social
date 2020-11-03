import React from 'react'
import CardSmall from './card-small'
import './overview.css'

const smallcardListData = [
    {
        id: 1,
        textView: 'Page Views',
        pageView: '87',
        icon: 'imagenes/icon-facebook.svg',
        growth: 3,
    },
   
    {
        id: 2,
        textView: 'Likes',
        pageView: '52',
        icon: 'imagenes/icon-facebook.svg',
        growth: 12,
    },
    {
        id: 3,
        textView: 'Likes',
        pageView: '5462',
        icon: 'imagenes/icon-instagram.svg',
        growth: 2257,
    },
    {
        id: 4,
        textView: 'Profile Views',
        pageView: '52k',
        icon: 'imagenes/icon-instagram.svg',
        growth: 1375,
    },
    {
        id: 5,
        textView: 'Retweets',
        pageView: '117',
        icon: 'imagenes/icon-twitter.svg',
        growth: 303,
    },
    {
        id: 6,
        textView: 'Likes',
        pageView: '507',
        icon: 'imagenes/icon-twitter.svg',
        growth: 553,
    },
    {
        id: 7,
        textView: 'Likes',
        pageView: '107',
        icon: 'imagenes/icon-youtube.svg',
        growth: 2257,
    },
    {
        id: 8,
        textView: 'Total Views',
        pageView: '1407',
        icon: 'imagenes/icon-youtube.svg',
        growth: 1375,
    },
]

export default function Overview() {
  return (
    <section className="overview">
    <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
            {
                smallcardListData.map(({icon, id, pageView, growth, textView}) => (
                    <CardSmall
                        icon = {icon}
                        key = {id}
                        pageView = {pageView}
                        growth = {growth}
                        textView = {textView}
                    />
                ))
            }
            
           {/* <div className="card-small">
               <p className="card-small-views">Likes</p>
               <p className="card-small-icon">
                   <img src="imagenes/icon-facebook.svg" alt="" />
               </p>
               <p className="card-small-number">52</p>
               <p className="card-small-porcentage is-danger">
                   <span>
                       <img src="imagenes/icon-down.svg" alt="" />
                       2%
                   </span>
                  
               </p>
           </div>
           <div className="card-small">
               <p className="card-small-views">Likes</p>
               <p className="card-small-icon">
                   <img src="imagenes/icon-instagram.svg" alt="" />
               </p>
               <p className="card-small-number">5462</p>
               <p className="card-small-porcentage">
                   <span>
                       <img src="imagenes/icon-up.svg" alt="" />
                       2257%
                   </span>
                  
               </p>
           </div>
           <div className="card-small">
               <p className="card-small-views">Profile Views</p>
               <p className="card-small-icon">
                   <img src="imagenes/icon-instagram.svg" alt="" />
               </p>
               <p className="card-small-number">52k</p>
               <p className="card-small-porcentage">
                   <span>
                       <img src="imagenes/icon-up.svg" alt="" />
                       1375%
                   </span>
                  
               </p>
           </div>
           <div className="card-small">
               <p className="card-small-views">Retweets</p>
               <p className="card-small-icon">
                   <img src="imagenes/icon-twitter.svg" alt="" />
               </p>
               <p className="card-small-number">117</p>
               <p className="card-small-porcentage">
                   <span>
                       <img src="imagenes/icon-up.svg" alt="" />
                       303%
                   </span>
                  
               </p>
           </div>
           <div className="card-small">
               <p className="card-small-views">Likes</p>
               <p className="card-small-icon">
                   <img src="imagenes/icon-twitter.svg" alt="" />
               </p>
               <p className="card-small-number">507</p>
               <p className="card-small-porcentage">
                   <span>
                       <img src="imagenes/icon-up.svg" alt="" />
                       553%
                   </span>
                  
               </p>
           </div>
           <div className="card-small">
               <p className="card-small-views">Likes</p>
               <p className="card-small-icon">
                   <img src="imagenes/icon-youtube.svg" alt="" />
               </p>
               <p className="card-small-number">107</p>
               <p className="card-small-porcentage is-danger">
                   <span>
                       <img src="imagenes/icon-down.svg" alt="" />
                       19%
                   </span>
                  
               </p>
           </div>
           <div className="card-small">
               <p className="card-small-views">Total Views</p>
               <p className="card-small-icon">
                   <img src="imagenes/icon-youtube.svg" alt="" />
               </p>
               <p className="card-small-number">1407</p>
               <p className="card-small-porcentage is-danger">
                   <span>
                       <img src="imagenes/icon-down.svg" alt="" />
                       12%
                   </span>
                  
               </p>
           </div>
        */}
        </div>
    </div>
</section>
  )
}
