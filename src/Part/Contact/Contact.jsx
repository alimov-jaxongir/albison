import React from 'react'
import './contact.css'
import tik from '../../assets/tik.svg'
import logo from '../../assets/logo.svg'
import ins from '../../assets/ins.svg'
import yan from '../../assets/yan.svg'
function Contact() {
  return (<>
    <div className='Contact container'>
        <div className="Contact__top">
            <div className="title">You have the power to define your future.</div>
           <div className="input-group">
               <input type="text" placeholder='EMAIL ADDRESS' />
               <button>Submit</button>
           </div>
        </div>
        <div className="Contact__footer">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="group">
            <ul className='nav'>
            <li ><a href="courses">Learning Platform</a></li>
            <li ><a href="courses">Home</a></li>
           <li ><a href="courses">Courses</a></li>
           <li ><a href="workshops">Free Workshops</a></li>
           <li ><a href="blog">Blog</a></li>
           <li ><a href="about">About</a></li>
           <li ><a href="contact">Contact</a></li>
         </ul>
         <div className="others">
         <ul >
           <li ><a href="courses">Template</a></li>
           <li ><a href="workshops">Instruction</a></li>
           <li ><a href="blog">Style Guide</a></li>
           <li ><a href="about">Licenses</a></li>
           <li ><a href="contact">Changelog</a></li>
         </ul>
         </div>
         <div className="social">
             <div className="title">Follow skillz</div>
             <div className="media">
                 <div className="box">
                   <a href="tik">  <img src={tik} alt="tik tok" /></a>
                 </div>
                 <div className="box">
                   <a href="jc">  <img src={ins} alt="tik tok" /></a>
                 </div>
                 <div className="box">
                   <a href="cc">  <img src={yan} alt="tik tok" /></a>
                 </div>
                 <div className="box">
                   <a href="cc">  <img src={tik} alt="tik tok" /></a>
                 </div>
                 <div className="box">
                   <a href="cc">  <img src={ins} alt="tik tok" /></a>
                 </div>
             </div>
         </div>
            </div>
        </div>
      
    </div> 
    <div className="maker ">
           <p>© Skillz Template</p>
           <p>Powered by Webflow</p>
       </div>
       </>
  )
}

export default Contact