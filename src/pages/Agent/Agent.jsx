import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAgents } from '../../redux/states/agents'

const Agent = () => {
    const {empty, agentsArray: agents, loading, error} = useSelector(store => store.agents)
    const dispatch = useDispatch()

    //check empty Agent app state
    useEffect(()=>{
        console.log()
        if(empty){
            dispatch(getAgents())
        }
    },[])

  return (
    <div>
        <Link to="/">Home</Link>
        <div>
            {loading 
              ? <p>Loading....!!!</p>
              : (agents.length === 0) 
              ? <p>{error}</p>
              : <div>
                  {agents.map(agent => (
                    <p key={agent.uuid}>{agent.displayName}</p>
                  ))}
                </div> 
        }
        </div>
    </div>
  )
}

export default Agent
