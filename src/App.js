import React,{useState} from 'react';
import './App.css';
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import Main from './Part/Main/Main';
import logo from './assets/logo.svg'
import korzinka from './assets/korzinka.svg'
import Courses from './Part/Courses/Courses';
import Workshop from './Part/Workshop/Workshop';
import Blok from './Part/Blok/Blok';
import About from './Part/About/About';
import Contact from './Part/Contact/Contact';

function App() {
  const [isMobile,setIsMobile]=useState(false)
  return (
    <div className="App">
      <header className='container '>
       <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className={isMobile?"navbar__mobile":"navbar__list"}>
    =
         <ul >
           <li ><a href="courses">Courses</a></li>
           <li ><a href="workshops">Free Workshops</a></li>
           <li ><a href="blog">Blog</a></li>
           <li ><a href="about">About</a></li>
           <li ><a href="contact">Contact</a></li>
         </ul>
       </nav> 
       <img src={korzinka} alt="" className="korzink" />
       <button className='mobile-icon' onClick={()=>setIsMobile(!isMobile)}>
      {isMobile?<FaTimes/>:<FaBars/>}
      </button>
      </header>
      <section  className='Main '>
         <Main/>
      </section>
      <section id='courses'>
        <Courses/>
      </section>
      <section id='workshops'>
        <Workshop/>
      </section>
      <section id='blok'>
        <Blok/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>

   
    </div>
  );
}

export default App;
