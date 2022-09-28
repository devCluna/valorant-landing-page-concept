import React from 'react'
import './Contact.css'
import valorantLogo from '../../../../assets/valorant-logo.svg'
import ButtonLink from '../../../../components/ButtonLink/ButtonLink'
import videoContactBG from '../../../../assets/contact-bg-video.mp4'

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <video src={videoContactBG} loop autoPlay muted ></video>
      <div className='contact-text-holder'>
        <h2> We are</h2>
        <img src={valorantLogo} />
        <ButtonLink textContent='Play For FREE' />
      </div>
    </div>
  )
}

export default Contact
