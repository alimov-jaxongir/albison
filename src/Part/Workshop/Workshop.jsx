import React from 'react'
import './workshop.css'
function Workshop() {
  return (
    <div className='Workshops container'>
        <div className="tops">
        <div className="titlee">
        Upcoming Free Workshops
            </div>
            <div className="line2"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            <button >View All Workshops</button>
        </div>
        <div className="Workshops__cards">
            <div className="card">
                <div className='title'>Photography Basics</div>
                <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</div>
                <span>Learn More</span>
            </div>
            <div className="card">
                <div className='title'>Photography Basics</div>
                <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</div>
                <span>Learn More</span>
            </div>
            <div className="card">
                <div className='title'>Photography Basics</div>
                <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.</div>
                <span>Learn More</span>
            </div>
        </div>
    </div>
  )
}

export default Workshop