import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Ticket from '../Ticket/Ticket';
import nextId from "react-id-generator"
// Constants
import { ticketType } from 'TicketConstants'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography
            component={'span'}
            variant={'body2'}  
          >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
}));

export default function FullWidthTabs({ 
  tickets,
  filterStatus,
  isLoading
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0)
  const {
    cheap,
    fast,
  } = ticketType

  const handleChange = (event, newValue) => {
    newValue === 1 ? filterStatus(fast) : filterStatus(cheap)
    setValue(newValue)


  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Самый дешевый" {...a11yProps(0)} />
          <Tab label="Самый быстрый" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {tickets.map(ticket => <Ticket key={nextId()} ticket={ticket}/>)}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {tickets.map(ticket => <Ticket key={nextId()} ticket={ticket}/>)}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}