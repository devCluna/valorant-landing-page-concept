import React from 'react'
import './Hero.css'
import video from '../../../../assets/hero-trailer-video.mp4'
import valorantLogo from '../../../../assets/valorant-logo.svg'
import ButtonLink from '../../../../components/ButtonLink/ButtonLink'

const Hero = () => {
  return (
    <div className='hero-wrapper'>
        
      <video className='hero-bg-video' src={video} type="video/mp4" preload="auto" autoPlay muted loop ></video>
      <div className='hero-info-wrapper'>
        <p>A 5v5 Tactical shooter</p>
        <img className='hero-logo' src={valorantLogo} />
        <ButtonLink textContent="PLAY for FREE" type="primary"/>
      </div>
      
      
    </div>
  )
}

export default Hero
