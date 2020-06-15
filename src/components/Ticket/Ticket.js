import React from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import nextId from "react-id-generator"
// Components
import Way from './Way'
// Styles
import { useTicketStyles } from "./Ticket.styles"
import { formatNumber } from "../../utils/Number"

const Ticket = ({ ticket }) => {
    const classes = useTicketStyles()
    const logo = `http://pics.avs.io/99/36/${ticket.carrier}.png`

    return (
        <Box className={classes.wrapper}>
            <div className={classes.header}>
                <Typography
                    className={classes.price}
                    component={'span'}
                    variant={'body2'}    
                >
                    {formatNumber(ticket.price)}
                </Typography>
                <div className={classes.logo}>
                    <img src={logo} alt=""/>
                </div>
            </div>
            {ticket.segments.map(segment => <Way key={nextId()} segment={segment}/>)}
        </Box>
    )
}

export default Ticket
