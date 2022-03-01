import logo from './logo.svg';
import './App.css';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
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
};

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

      <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          backgroundColor: 'rgba(182, 201, 255, 0.5)',
          minWidth: '100%', }}>
        <Tabs 
          className="tabs"
          value={value} 
          onChange={handleChange} 
          variant="scrollable" 
          allowScrollButtonsMobile
          // scrollButtons="auto" 
          aria-label="basic tabs example" 
          // sx={{
          //   backgroundColor: 'rgba(240, 248, 255)',
          //   minWidth: '100%',
          //   justifyContent: 'center'
          // }}
          centered
          >
          <Tab label="Our Story" {...a11yProps(0)} />
          <Tab label="Wedding Party" {...a11yProps(1)} />
          <Tab label="Travel" {...a11yProps(2)} />
          <Tab label="Things To Do" {...a11yProps(3)} />
          <Tab label="RSVP" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{textAlign: "left", maxWidth: '50%', margin: '0 auto', overflow: 'scroll'}}>
          <Typography variant="body1" gutterBottom sx={{textIndent: '1rem'}}>
            Two rambling, winding paths that serendipitously intersected in a magical little place called Lander, Wyoming.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{textIndent: '1rem'}}>
            Lisa, originally from Minnesota, graduated from nursing school in 2013 and was soon feeling the itch to see places beyond the Midwest. She began travel nursing in 2015, exploring many parts of the mountain west and Alaska. In late 2018, after living in Denver for a year, she felt drawn to do "one more" travel assignment in a little town she had only barely heard of. She quickly fell in love with Wyoming and it's wide open spaces, and accepted a permanent position there in February 2019. 
          </Typography>
          <Typography variant="body1" gutterBottom sx={{textIndent: '1rem'}}>
            Allen, originally from Virginia, spent the early '10s traveling to various parts of the world and was stationed in Okinawa with the Marine Corps. After his return to the US, he attended CU Boulder in Colorado. In 2018, after graduating he attended a wilderness medicine course with NOLS, based out of Lander. That summer, he returned to Lander to work on a BLM wildland fire crew. Although he loved the town and considered settling, he felt like something was missing, and was planning to move in the spring of 2019. 
          </Typography>
          <Typography variant="body1" gutterBottom sx={{textIndent: '1rem'}}>
            On April 26, 2019, both Lisa and Allen headed to the Lander Bar with their respective friends. They had heard about one another from their mutual friend, Michelle, but they finally bumped into each other at the bar that night and couldn't stop talking. Over the next few weeks, they couldn't get enough time together. Weeks turned into months, and before they knew it, almost 2 years had gone by.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{textIndent: '1rem'}}>
            In February of 2021, Lisa took a short term travel position in Idaho while Allen stayed home and finished learning to be a web developer. While Lisa was away, Allen realized the next step in their relationship was committing to a lifetime together. He drove to Idaho with Hank and Boomer in tow, and made his proposal to Lisa on a cold morning in a hot spring just outside of Stanley, Idaho. The rest, as they say, was history.
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{display:'flex', minWidth:'100%'}}>
          <Card sx={{minWidth:'50%', backgroundColor: 'rgba(247, 180, 244, 0.3)'}}>
            <CardHeader title="Bride's Party"/>
            <CardContent>
              <Card className="bridePartyMember">
                <Typography gutterBottom variant="h5" component="div">
                  Rosemarie Zumbach
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mother of the Bride
                </Typography>
              </Card>
              <Card className="bridePartyMember">
                <Typography gutterBottom variant="h5" component="div">
                  Larry Zumbach
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Father of the Bride
                </Typography>
              </Card>
              <Card className="bridePartyMember">
                <Typography gutterBottom variant="h5" component="div">
                  Laura Hoogheem
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Maid of Honor & Sister of the Bride
                </Typography>
              </Card>
            </CardContent>
          </Card>
          <Card sx={{minWidth:'50%', backgroundColor: 'rgba(82, 128, 255, 0.3)'}}>
            <CardHeader title="Groom's Party"/>
            <CardContent>
              <Card className="groomPartyMember">
                <Typography gutterBottom variant="h5" component="div">
                  Tracy DeHoff
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mother of the Bride
                </Typography>
              </Card>
              <Card className="groomPartyMember">
                <Typography gutterBottom variant="h5" component="div">
                  Jeff DeHoff
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Father of the Bride
                </Typography>
              </Card>
              <Card className="groomPartyMember">
                <Typography gutterBottom variant="h5" component="div">
                  Corey "Caza" Gomis
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Best Man
                </Typography>
              </Card>
            </CardContent>
          </Card>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Google Maps works great
      </TabPanel>
      <TabPanel value={value} index={3}>
        Figure it out
      </TabPanel>
      <TabPanel value={value} index={4}>
        <a 
          href="https://docs.google.com/forms/d/1L2sVzlbjvPFtG4hxAscS1dKD74k_yhuTjDfZ7FoLYko/edit" 
          target="_blank"
        >
          Click here to RSVP (will go to a Google Form)
        </a>
      </TabPanel>
      </Box>
    </div>
  );
}

export default App;
