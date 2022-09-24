import React from 'react'
import './Agents.css'
import agent from '../../../../assets/agents-bg.png'
import ButtonLink from '../../../../components/ButtonLink/ButtonLink'

const Agents = () => {
  return (
    <div className='agents-wrapper'>

        <div className='text-wrapper'>
            <h5>Agents</h5>
            <h2>Meet the team.</h2>
            <p>Aside from guns and bullets, you'll be looking at an agent with deadly, adaptable, and agile abilities that will give you opportunities to show off your mastery of weapons. No two agents are the same, just as no highlights are the same.</p>
            <div>
              <ButtonLink textContent="See our agents" type='primary'/>
            </div>
      </div>
    </div>
  )
}

export default Agents
