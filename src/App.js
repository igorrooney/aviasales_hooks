import React, { useState, useEffect, useCallback } from 'react';
import * as _ from 'lodash'

import SVG from 'react-inlinesvg'
import useAviasalesApi from 'services/useAviasalesApi'

import logoIcon from 'images/logo.svg'
// Components
import Tabs from 'components/Tabs'
import Filter from 'components/Filter/Filter';
import { Box, Container } from '@material-ui/core';
// Constants
import { ticketType } from './TicketConstants'
// Styles
import { useAppStyles } from './App.styles'
import Spinner from './components/Spinner/Spinner';

const App = () => {
  const classes = useAppStyles()
  const [{ data, isLoading, isStopped }] = useAviasalesApi()
  const [tickets, setTickets] = useState([])
  const [filterStatus, setFilterStatus] = useState(1)
  const [stops, setStops] = useState([])
  const {
    cheap,
    fast,
  } = ticketType

  const stopsFilter = useCallback(stops => { // [0, 1, 2, 3] || []
    let filtered = []
    if ( stops.length === 0 ) {
      filtered = data
    }
    else {
      stops.map(stop => {
        return filtered = [...filtered, ...data.filter(ticket => ticket.segments.every(segment => segment.stops.length === stop))]
      })
    }
    return filtered
  }, [stops, data])

 useEffect(()=>{
    setTickets(_.sortBy(data, 'price'))
 }, [isStopped])


  useEffect(()=>{
      if (filterStatus === cheap) {
        setTickets(_.sortBy(tickets, 'price'))
      }
  
      if (filterStatus === fast) {
        setTickets(mostFast(tickets))
      } 
    
  }, [filterStatus])

  useEffect(()=>{
    setTickets(_.sortBy(stopsFilter(stops), 'price'))
  }, [stops])


  const mostFast = useCallback(tickets => {
    if (tickets.length > 0) {
      return _.sortBy(data, (ticket)=>{
          return ticket.segments.reduce((acc, segment) => {
            return acc.duration+segment.duration
      })
      }
      )
    }
  }, [tickets, data])

  const tabs = isLoading ? 
    <Box 
      display='flex'
      justifyContent='center'
      alignItems="center"
      flex="1"
    >
      <Spinner />
    </Box> :
    <Tabs 
      tickets={tickets.slice(0, 5)}
      filterStatus={setFilterStatus}
    />

  return (
    <Container 
      className={classes.containerWrapper}
      maxWidth="lg"
    >
      <Box className={classes.logo}>
        <SVG 
          className={classes.svgIcon}
          src={logoIcon} 
        />      
      </Box>
      <Box
        className={classes.mainContent}
      >
        <Filter 
          setStops={setStops}
          stops={stops} />
        {tabs}
      </Box>
    </Container>
  )
}

export default App
