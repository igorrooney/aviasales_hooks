import React from 'react'
import { Grid, Typography, Box } from "@material-ui/core"
// Styles
import { useTicketStyles } from "./Ticket.styles"
import { 
  formatMinutes,
  formatTimeFrom,
} from '../../utils/DatesHelper'

const Way = ({ segment }) => {
  const classes = useTicketStyles()
  const {
    minutes,
    hours,
  } = formatMinutes(segment.duration)
  const {
    stops,
  } = segment

  const transfer = stops.length > 1 ? `${stops.length} пересадки` : `${stops.length} пересадка`

  return (
    <Grid
      className={classes.way}
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      <Box width={'141px'}>
        <Typography className={classes.segmentHeader}>
          {`${segment.origin} - ${segment.destination}`}
        </Typography>
        <Typography className={classes.segmentBody}>
          {formatTimeFrom(segment.date, segment.duration)}
        </Typography>
      </Box>
      <Box width={'141px'}>
        <Typography className={classes.segmentHeader}>
          В пути
        </Typography>
        <Typography className={classes.segmentBody}>
          {`${hours}ч ${minutes}м`}
        </Typography>
      </Box>
      <Box width={'140px'}>
        <Typography className={classes.segmentHeader}>
          { !stops.length ? 'Без пересадок' : transfer }
        </Typography>
        <Typography className={classes.segmentBody}>
          {stops.join(', ')}
        </Typography>      
      </Box>
    </Grid>
  )
}

export default Way