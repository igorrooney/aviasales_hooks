import React, { useState } from 'react';
import StyledCheckbox from './Checkbox/Checkbox';
import { Box, Typography, FormControlLabel } from '@material-ui/core';
// Styles
import { useFilterStyles } from './Filter.styles';

const filterNames = ["Все", "Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"]

const Filter = ({ setStops, stops }) => {
  const classes = useFilterStyles()
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
    const index = filterNames.indexOf(filter)
    switch(index) {
      case 0:
        setStops(onSetStops([], stops))
        break

      case 1:
        setStops(onSetStops(0, stops))
        break

      case 2:
        setStops(onSetStops(1, stops))
        break

      case 3:
        setStops(onSetStops(2, stops))
        break

      case 4:
        setStops(onSetStops(3, stops))
        break
      default:
        setStops(onSetStops([], stops))
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
    <Box className={classes.filterWrapper}>
      <Typography
        variant={'body2'}  
        className={classes.textHeader}
      >
        Количество пересадок
      </Typography>
      <Box className={classes.checkboxWrapper}>
        {filterNames.map((filterName, index) => (
          <FormControlLabel 
            key={filterName}
            control={
              <StyledCheckbox  
                name={filterName} 
                onChange={e=>setFilter(e.target.name)}
                checked={onChecked(index)} 
              />
            }
            label={filterName}
          />
        ))}      
      </Box>

    </Box>
  )
}

export default Filter;