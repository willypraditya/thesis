import React, { useState } from 'react';

import {  
    Grid, 
    Typography, 
    Button, 
    Divider,
    Paper,
    Tabs,
    Tab,
    TabPanel,
    Avatar,
    TextField,
    InputAdornment,
    Chip
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Profile from './components/profile';
import Settings from './components/settings';

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

const MyAccount = () => {
    const classes = useStyles();

    const [selectedTab, setSelectedTab] = useState(0);

    return(
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Profile verificationStatus='verified'/>
            </Grid>
            <Grid item xs={9}>
                <Settings/>
            </Grid>
        </Grid>
    );
};

export default MyAccount;
