import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {  
    Grid, 
    Container,
    Typography, 
    Divider,
    TextField,
    InputAdornment,
    FormControlLabel,
    Checkbox,
    Link,
    Button, 
    Paper, 
    Avatar,
    List, 
    ListItem,
    ListItemAvatar,
    ListItemText 
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    formLabel: {
        fontWeight: 600
    },
    footerDivider: {
        marginTop: 20,
        marginLeft: -30,
        marginRight: -30,
        paddingTop: 10,
        paddingBottom: 10
    },
    sendOtpButton: {
        fontWeight: 600,
        color: theme.palette.color.white,
        backgroundColor: theme.palette.color.blue,
        textTransform: 'none',
        '&:hover': {
            background: theme.palette.color.blue,
        },
    },
}));

const PhoneNumberForm = ({onClickSendOTP}) => {
    const classes = useStyles();
    return(
        <React.Fragment>
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <Typography className={classes.description}>
                        Enter your mobile number, we will send you an OTP to verify.
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.formLabel}>Phone Number</Typography>
                    <TextField 
                        variant='outlined'
                        fullWidth={true}
                        // label='Enter Phone Number'
                        InputLabelProps={{shrink: false}}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">+62</InputAdornment>,
                        }}
                    />
                </Grid>
            </Grid>
            <div className={classes.footerDivider}>
                <Divider/>
            </div>
            <Grid container justify='flex-end'>
                <Grid item>
                    <Button variant='contained' className={classes.sendOtpButton} onClick={onClickSendOTP}>Send OTP</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default PhoneNumberForm;
