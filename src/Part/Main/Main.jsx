import React from 'react'
import main from '../../assets/main.svg'
import './main.css'
function Main() {
  return (
    <div className='Main container'>
     <div className="Main__wrapper">
       <div className="text">
           <div className="top">
               <p>FEATURED COURSE</p>
               <div className="line1"></div>
           </div>
           <div className="title">Run your own online learning platform</div>
           <p className='description'>A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</p>
           <span>Kathryn Murphy</span>
           <button>LEARN MORE</button>
       </div>
       <div className="imga">
           <img src={main} alt="" />
       </div>
     </div>
    </div>
  )
}

export default Main