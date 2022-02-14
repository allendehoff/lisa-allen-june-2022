import logo from './logo.svg';
import './App.css';
import {
  Box,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
// import useState from 'react'
import PropTypes from 'prop-types';
import React from 'react';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, textAlign: 'center' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <Box 
      className="App-header"
      >
        <Typography 
          variant="h1"
          sx={{
            fontFamily: 'Amatic SC, cursive'
          }}
        >
          Lisa & Allen
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: '500'
          }}
        >
          June 11, 2022
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Raleway, sans-serif',
            fontWeight: '500'
          }}
        >
          Lander, Wyoming
        </Typography>
      </Box>
      <Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Our Story" {...a11yProps(0)} />
          <Tab label="Wedding Party" {...a11yProps(1)} />
          <Tab label="Travel" {...a11yProps(2)} />
          <Tab label="Things To Do" {...a11yProps(3)} />
          <Tab label="RSVP" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        We met, we fell in love, we're gettings married!
      </TabPanel>
      <TabPanel value={value} index={1}>
        Some really cool people
      </TabPanel>
      <TabPanel value={value} index={2}>
        Google Maps works great
      </TabPanel>
      <TabPanel value={value} index={3}>
        Figure it out
      </TabPanel>
      <TabPanel value={value} index={4}>
        <a href="#" target="_blank">
          Click here to RSVP (will go to a GoogleForm)
        </a>
      </TabPanel>
      </Box>
    </div>
  );
}

export default App;
