import React from 'react'
import './about.css'
import about from '../../assets/about.png'
function About() {
  return (
    <div className='About container'>
         <div className="About__top">
            <div className="title">
            Recent Articles
            </div>
            <div className="line1"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <button className=''>View all articles</button>
        </div>
        <div className="About__cards">
            <div className="card">
                
                <img src={about} alt="about" /><div>
                <p className="date">February 8, 2021</p>
                <p className="title">The TikTok Algorithm: How to Get the Best Engagement</p>
                <p className="author">Dianne Russell</p>
           </div> </div>
           <div className="card">
                
                <img src={about} alt="about" /><div>
                <p className="date">February 8, 2021</p>
                <p className="title">The TikTok Algorithm: How to Get the Best Engagement</p>
                <p className="author">Dianne Russell</p>
           </div> </div>
           <div className="card">
                
                <img src={about} alt="about" /><div>
                <p className="date">February 8, 2021</p>
                <p className="title">The TikTok Algorithm: How to Get the Best Engagement</p>
                <p className="author">Dianne Russell</p>
           </div> </div>
        </div>
    </div>
  )
}

export default About