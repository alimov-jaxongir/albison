import React from 'react'
import './courses.css'
import course1 from '../../assets/course1.png'
import bottom from '../../assets/bottom.png'
function Courses() {
  return (
    <div className='Courses container'>
        <div className="Courses__top">
            <div className="title">
            Featured Courses
            </div>
            <div className="line1"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <button className=''>View All Courses</button>
        </div>
        <div className="Courses__cards">
         <div className="Courses__cards-card">
             <img src={course1} alt="" />
             <div>
             <p className="title">How to Increase Your Engagement on Instagram</p>
            
             <p className="author">Katie Murphy</p>
             <p className="money">$ 59.99 USD</p>
             <p className="changeMoney">$ 39.99 USD</p>
             <span>Learn More</span></div>
         </div>
         <div className="Courses__cards-card">
             <img src={course1} alt="" />
             <div>
             <p className="title">How to Increase Your Engagement on Instagram</p>
            
             <p className="author">Katie Murphy</p>
             <p className="money">$ 59.99 USD</p>
             <p className="changeMoney">$ 39.99 USD</p>
             <span>Learn More</span></div>
         </div>
         <div className="Courses__cards-card">
             <img src={course1} alt="" />
             <div>
             <p className="title">How to Increase Your Engagement on Instagram</p>
            
             <p className="author">Katie Murphy</p>
             <p className="money">$ 59.99 USD</p>
             <p className="changeMoney">$ 39.99 USD</p>
             <span>Learn More</span></div>
         </div>
        </div>
        <div className="bottom">
            <div className="right">
                <img src={bottom} alt="" />
            </div>
            <div className="left">
                <div className="title">
                Get personalized learning recommendations
                </div>
                <div className="line1"></div>
                <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urnaLorem ipsum dolor sit amet.</div>
                <button>CONTACT US</button>
            </div>
        </div>
    </div>
  )
}

export default Courses