import React, { useState } from 'react';
import '../css/Home.css';
import photo from "../images/image2.jpg"
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
        <h1 className='name'>Adepu Loukya</h1>
        <h1 className='text'>Front end Developer, UI designer</h1>
        <p className='home-content'>I'm more than one in love for Front-End, who is also intrested in UI design, My experience with interface design turn me one extremely criterious with alignments, margins, colors and a lot other resorces in CSS. </p>
      </div>
      <a href='https://drive.google.com/file/d/1H4C7YcUBFZxr8vwJ0lIw15A73oE0-wFj/view?usp=drive_link' target='_blank' className='resume'>Download Resume</a>
      <img width="28" height="28" src="https://img.icons8.com/pastel-glyph/64/download--v2.png" alt="download--v2" className='download-img'/>
        </div>

        
      );
}
 
export default Home;