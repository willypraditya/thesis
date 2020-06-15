import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {  
    Grid, 
    Container,
    Typography, 
    Divider,
    TextField,
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
    content: {
        marginTop: 20
    },
    footerDivider: {
        marginTop: 30,
        marginLeft: -30,
        marginRight: -30,
        paddingTop: 10,
        paddingBottom: 10
    },
    sendButton: {
        fontWeight: 600,
        color: theme.palette.color.white,
        backgroundColor: theme.palette.color.blue,
        textTransform: 'none',
        '&:hover': {
            background: theme.palette.color.blue,
        },
    },
}));

const ForgotPinForm = ({onClickSend}) => {
    const classes = useStyles();
    return(
        <React.Fragment>
            <Typography>Forgot PIN? Enter your email and we’ll send a reset link.</Typography>
            <div className={classes.content}>
                <Typography className={classes.formLabel}>Email</Typography>
                <TextField 
                    variant='outlined'
                    fullWidth={true}
                    label='Enter your Email Address'
                    InputLabelProps={{shrink: false}}
                />
            </div>
            <div className={classes.footerDivider}>
                <Divider/>
            </div>
            <Grid container justify='flex-end'>
                <Grid item>
                    <Button variant='contained' className={classes.sendButton} onClick={onClickSend}>Send Reset Link</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ForgotPinForm;
