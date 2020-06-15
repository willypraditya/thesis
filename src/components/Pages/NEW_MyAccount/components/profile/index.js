import React from 'react';

import {  
    Grid, 
    Typography, 
    Button, 
    Divider,
    Paper,
    Avatar,
    Badge,
    TextField,
    InputAdornment,
    Chip
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { positions } from '@material-ui/system';

import constant from 'configs/constants';



const useStyles = makeStyles(theme => ({
    paper: {
        padding: 30,
        borderRadius: 5,
        border: `1px solid ${theme.palette.color.borderColor}`
    },
    avatar: {
        width: 150,
        height: 150,
        backgroundColor: theme.palette.color.transparentBlue,
        textAlign: 'center',
        margin: 0,
    },
    notVerified: {
        textAlign: 'center',
        color: theme.palette.color.darkGrey,
        border: '1px solid #CACACA',
        backgroundColor: '#F6F7F9',
        borderRadius: 27,
        padding: '3px 15px 3px 15px',
    },
    pending: {
        textAlign: 'center',
        color: theme.palette.color.yellow,
        border: `1px solid ${theme.palette.color.lightYellow}`,
        backgroundColor: theme.palette.color.transparentYellow,
        borderRadius: 27,
        padding: '3px 15px 3px 15px',
    },
    verified: {
        textAlign: 'center',
        color: theme.palette.color.green,
        border: `1px solid ${theme.palette.color.darkGreen}`,
        backgroundColor: theme.palette.color.transparentGreen,
        borderRadius: 27,
        padding: '3px 15px 3px 15px',
    },
    title: {
        fontWeight: 600
    }
}));

const Profile = ({verificationStatus}) => {
    const classes = useStyles();

    const renderVerificationStatus = () => {
        if(verificationStatus === 'notVerified'){
            return(
                <Typography className={classes.notVerified}>Not Verified</Typography>
            );
        }else if(verificationStatus === 'pending'){
            return(
                <Typography className={classes.pending}>Pending</Typography>
            );
        }else{
            return(
                <Typography className={classes.verified}>Verified</Typography>
            );
        }
    };

    return(
        <Paper className={classes.paper} elevation={0}>
            <Grid container direction='column' justify='center' alignItems='center' spacing={1}>
                <Grid item>
                    <Avatar className={classes.avatar}>
                        <img src={`${constant.PREFIX_IMAGE}/icon/xfers.svg`} style={{width: 75}}/>
                    </Avatar>
                </Grid>
                <Grid item>
                    {renderVerificationStatus()}
                </Grid>
            </Grid>
            <Grid container direction='column' justify='center' alignItems='flex-start' spacing={1} style={{marginTop: 20}}>
                <Grid item>
                    <Typography className={classes.title}>Name</Typography>
                    <Typography>Name Lastname</Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.title}>Business Name</Typography>
                    <Typography>w.praditya@yahoo.com</Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.title}>Business Description</Typography>
                    <Typography>Hilih Kinthil</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Profile;
