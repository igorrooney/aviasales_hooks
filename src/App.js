import React, { useState, useEffect } from 'react';
import nextId from "react-id-generator"
import styled from 'styled-components'
import * as _ from 'lodash'

import SVG from 'react-inlinesvg'
import useAviasalesApi from 'services/useAviasalesApi'

import './App.css';
import logoIcon from 'images/logo.svg'
import Filter from 'components/Filter/Filter';
import Tickets from 'components/Tickets/Tickets'

const Wrapper = styled.div`
  display: flex;
  width: 960px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background: #F3F7FA;
  padding-top: 50px;
  padding-left: 103px;
  padding-right: 103px;
  padding-bottom: 120px;
`
const MainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const App = () => {
  const [{ data, isLoading, isStopped }] = useAviasalesApi()
  const [tickets, setTickets] = useState([])
  const [filterStatus, setFilterStatus] = useState(1)
  const [stops, setStops] = useState([])
  /*
    filterStatus {
      1: Самый дешевый,
      2: Самый быстрый
    }
  */

  const stopsFilter = stops => { // [0, 1, 2, 3] || []
    let filtered = []
    if ( stops.length === 0 ) {
      filtered = data
    }
    else {
      stops.map(stop => {
        filtered = [...filtered, ...data.filter(ticket => ticket.segments.every(segment => segment.stops.length === stop))]
      })
    }
    return filtered
  }

 useEffect(()=>{
    setTickets(_.sortBy(data, 'price'))
 }, [isStopped])


  useEffect(()=>{
      if (filterStatus === 1) {
        setTickets(_.sortBy(tickets, 'price'))
      }
  
      if (filterStatus === 2) {
        setTickets(mostFast(tickets))
      } 
    
  }, [filterStatus])

  useEffect(()=>{
    setTickets(_.sortBy(stopsFilter(stops), 'price'))
  }, [stops])

  const mostFast = tickets => {
    
    if (tickets.length > 0) {
      return _.sortBy(data, (ticket)=>{
          return ticket.segments.reduce((acc, segment) => {
            return acc.duration+segment.duration
      })
      }
      )
    }
  }


  return (
    <Wrapper>
      <SVG src={logoIcon} />
      <MainContent>
        <Filter 
          setStops={setStops}
          stops={stops} />
        { isLoading ? 
          <div>Loading...</div> : 
          <Tickets 
            tickets={tickets.slice(0, 5)}  
            setFilterStatus={setFilterStatus} /> }
      </MainContent>
    </Wrapper>
  )
}

export default App
