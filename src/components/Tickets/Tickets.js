import React from 'react'
import styled from 'styled-components'
import nextId from "react-id-generator"

import Button from './Button'
import Ticket from "../Ticket/Ticket";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 20px;
`

const Tickets = ({ tickets, buttonFiltering, setFilterStatus }) => {


  const clickHandler = filter => {
    setFilterStatus(filter)
  }


  return (
    <Wrapper>
      <div>
        <button 
          onClick={()=>clickHandler(1)} >Самый дешевый</button>
        <button  
          onClick={()=>clickHandler(2)} >Cамый быстрый</button>
      </div>
      {tickets.map(ticket => <Ticket ticket={ticket}/>)}
</Wrapper>
  )
}

export default Tickets