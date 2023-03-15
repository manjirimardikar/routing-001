import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <div className='home'> 
    <div className="lefthome">
        <h1>Leading MEP & Facility management company in Dubai</h1>
        <p>Urban Science is always ready to accept your challenges
Meeting your goals is our main objective. Professional services for facility management & MEP works.</p>
<div className="homebtn">
    <button className='campany-btn'> campany profile</button>
    <button className='video-btn'> watch Video</button>

</div>

    </div>
    <div className="righthome">
        <img src="https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png" alt="" />

    </div>
    </div>
  )
}