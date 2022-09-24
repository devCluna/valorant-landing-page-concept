import React from 'react'
import ButtonLink from '../../../../components/ButtonLink/ButtonLink'
import './Guns.css'

const Guns = () => {
  return (
    <div className='guns-wrapper'>
      <div className='guns-text-holder'>
        <h5>Weapons</h5>
        <h2>Choose your Arsenal</h2>
        <p>Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.</p>

        <ButtonLink textContent='Pick your weapon'/>
      </div>
    </div>
  )
}

export default Guns
