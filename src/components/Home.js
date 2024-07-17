import React, { useState } from 'react';
import '../css/Home.css';
import photo from "../images/Profile.png"
const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return (
        <div className='main home' id='home'>
          {/* navbar */}
            <nav>
        <div className={`navbar ${menuOpen ? "active" : ""}`}>
          <div className={`navlinks ${menuOpen ? "active" : ""}`}>
          <h3><a href="#home" >Home</a></h3>
          <h3><a href="#project">Projects</a></h3>
          <h3><a href="#about">About</a></h3>
          <h3><a href="#contact">Contact</a></h3>
          </div>
        </div>
        {/* hamburger */}
        <div className={`hamburger-menu ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
          <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
          <div className={`bar ${menuOpen ? "bar2" : ""}`}></div>
        </div>
      </nav>
      {/* home */}
      <img src={photo} width="90px" className='photo'/>
      <div>
        <h1 className='name'>Mada Sai Varun</h1>
        <h1 className='text'>Software Development and Machine Learning Enthusiast</h1>
        <p className='home-content'>I am primarily a software development and machine learning enthusiast skilled in data structures and algorithms (DSA). As a student, I am open to roles as a software development engineer (SDE).</p>
      </div>
      <a href='https://drive.google.com/file/d/17lRXAXk0-4IjvAUYzvgTKD9W93mo9xjZ/view' target='_blank' className='resume'>Download Resume</a>
      <img width="28" height="28" src="https://img.icons8.com/pastel-glyph/64/download--v2.png" alt="download--v2" className='download-img'/>
      <br></br>
      <br></br>
      <br></br>
        </div>

        
      );
}
 
export default Home;