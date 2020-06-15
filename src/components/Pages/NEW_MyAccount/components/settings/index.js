import React, { useState } from 'react';

import {  
    Grid, 
    Typography, 
    Button, 
    Divider,
    Paper,
    Box,
    Tabs,
    Tab,
    Avatar,
    TextField,
    InputAdornment,
    Chip
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ChangePin from './components/changePin';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 30,
        borderRadius: 5,
        border: `1px solid ${theme.palette.color.borderColor}`
    },
    tabs:{
        borderBottom: `1px solid ${theme.palette.color.borderColor}`
    }
}));

const TabPanel = (props) => {
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
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
};

const Settings = () => {
    const classes = useStyles();

    const [selectedTab, setSelectedTab] = useState(0);

    return(
        <Paper className={classes.paper} elevation={0}>
            <Tabs
                className={classes.tabs}
                value={selectedTab}
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="Security Settings"/>
            </Tabs>
            <div style={{marginTop: 20}}>
                <TabPanel value={selectedTab} index={0}>
                    <ChangePin/>
                </TabPanel>
            </div>
            
        </Paper>
    );
};

export default Settings;
