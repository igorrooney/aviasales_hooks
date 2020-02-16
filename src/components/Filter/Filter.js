import React, { useState } from 'react';
import styled from 'styled-components'
import Checkbox from './Checkbox/Checkbox';

const Wrapper = styled.div`
  padding: 20px 20px 0 20px;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 232px;
  height: 252px;
`

const H3 = styled.h3`
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 12px;
letter-spacing: 0.5px;
text-transform: uppercase;
color: #4A4A4A;
`

const filterNames = ["Все", "Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"]

const Filter = ({ setStops, stops }) => {

  const [currentFilter, setCurrentFilter] = useState('all')

  const onSetStops = (stop, stops) => {
    if (typeof stop === 'object') {
      return []
    }
    else if (stops.includes(stop)) {
      return stops.filter(item => item !== stop)
    }
    else {
      return [...stops, stop]
    }
  }


  const setFilter = filter => {
    switch(filter) {
      case 'Все':
        setStops(onSetStops([], stops))
        break

      case 'Без пересадок':
        setStops(onSetStops(0, stops))
        break

      case '1 пересадка':
        setStops(onSetStops(1, stops))
        break

      case '2 пересадки':
        setStops(onSetStops(2, stops))
        break

      case '3 пересадки':
        setStops(onSetStops(3, stops))
        break
    }
  }

  const onChecked = index => {
    if (index === 0 && stops.length === 0) {
      return true
    }
    return stops.includes(index-1)
  }


  return (
    <Wrapper>
      <H3>Количество пересадок</H3>
      {filterNames.map((filterName, index) => <Checkbox 
        key={filterName} 
        name={filterName} 
        onChange={(e)=>{setFilter(e.target.value)}}
        checked={onChecked(index)} />)}
    </Wrapper>
  )
}

export default Filter;