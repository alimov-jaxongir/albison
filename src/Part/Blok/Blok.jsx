import React from 'react'
import Slider from "slick-carousel";
import blok from '../../assets/blok.svg'
import './blok.css'
import star from '../../assets/star.svg'
function Blok() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
  return (<>
    {/* <div className="carouel">
      <Slider {...settings}>
          <div className='box'>
            <img src={star} alt="stars" />
            <div className="title">
            “Kates courses are a game changer. She’s thorough, organized, and explains things in a no-nonsense way that makes it easy for anyone—beginners to experts—to learn something from her courses and take their game to the next level.”
            </div>
            <div className="author">James Brown, Influencer</div>
          </div>
          <div className='box'>
            <img src={star} alt="stars" />
            <div className="title">
            “Kates courses are a game changer. She’s thorough, organized, and explains things in a no-nonsense way that makes it easy for anyone—beginners to experts—to learn something from her courses and take their game to the next level.”
            </div>
            <div className="author">James Brown, Influencer</div>
          </div>
         
        </Slider>
      </div> */}
    <div className='Blok container'>
      
      
        <div className="Blok__img">
            <img src={blok} alt="blok" />
        </div>
        <div className="Blok__right">
            <div className="title">A Passion for Teaching</div>
            <div className="line1"></div>
            <div className="description">A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.</div>
            <button>About Skillz</button>
        </div>
    </div></>
  )
}

export default Blok