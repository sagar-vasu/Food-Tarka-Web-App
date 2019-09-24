import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '../Paper/Paper'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DashboardNavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root} >
      <AppBar position="static" style={{ backgroundColor: 'white', color: "#ad1457" }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Pending" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Process" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Delivered" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <div style={{ textAlign: 'center' }}>
        <TabPanel value={value} index={0}>
          <Paper>
            <h2>Order in Pending</h2>
            <h3>No Order In Pending at This Time</h3>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Paper>
            <h2>Order in Process</h2>
            <h3>No Order In Process at This Time</h3>
          </Paper>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Paper>
            <h2>Order in Delivered</h2>
            <h3>No Order In Delivered at This Time</h3>
          </Paper>
        </TabPanel>
      </div>
    </div>
  );
}