import React from 'react'
import './ButtonLink.css'

const ButtonLink = ({textContent='undefined', type='primary'}) => {
  return (
    <button className={`btn btn-${type}`}>
      <span className={`btn__inner btn__inner-${type}`}>
        <span className={`btn__slide btn__slide-${type}`}></span>
        <span className={`btn__content btn__content-${type}`}>{textContent}</span>
      </span>
    </button>
  )
}

export default ButtonLink