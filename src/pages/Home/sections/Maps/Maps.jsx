import React from 'react'
import './Maps.css'
import mapsBg from '../../../../assets/maps-bg.png'
import ButtonLink from '../../../../components/ButtonLink/ButtonLink'

const Maps = () => {
  return (
    <div className='maps-wrapper'>
      <img className='maps-img-bg' src={mapsBg}/>
      <div className='maps-text-holder'>
        <h5>YOUR MAPS</h5>
        <h2> FIGHT AROUND THE WORLD</h2>
        <p>Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.</p>
        <ButtonLink textContent="View all maps" type="secondary"/>
      </div>
    </div>
  )
}

export default Maps
