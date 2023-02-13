import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import './custom font/LSH___11.TTF';

function HeroSection() {
  return (
    <div className='hero-container'>
    <video autoPlay loop muted>
    <source src="./Videos/video-1.mp4" type="video/mp4"/>
    </video>
    <h1 className='ultra'>BOOK CLUB</h1>
    <p>GC university, Lahore</p>

    {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}

    </div>
  )
}

export default HeroSection