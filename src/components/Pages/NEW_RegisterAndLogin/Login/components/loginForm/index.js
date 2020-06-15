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
    forgotPinLabel: {
        color: theme.palette.color.blue,
        fontWeight: 600
    },
    footerDivider: {
        marginLeft: -30,
        marginRight: -30,
        paddingTop: 10,
        paddingBottom: 10
    },
    loginButton: {
        fontWeight: 600,
        color: theme.palette.color.white,
        backgroundColor: theme.palette.color.blue,
        textTransform: 'none',
        '&:hover': {
            background: theme.palette.color.blue,
        },
    },
}));

const LoginForm = ({onClickLogin}) => {
    const classes = useStyles();
    return(
        <React.Fragment>
            <Grid container direction='column' spacing={2}>
                <Grid item>
                    <Typography className={classes.formLabel}>Email</Typography>
                    <TextField 
                        variant='outlined'
                        fullWidth={true}
                        label='Enter your Email Address'
                        InputLabelProps={{shrink: false}}
                    />
                </Grid>
                <Grid item>
                    <Typography className={classes.formLabel}>PIN</Typography>
                    <TextField 
                        variant='outlined'
                        fullWidth={true}
                        label='Enter PIN'
                        InputLabelProps={{shrink: false}}
                    />
                    <div style={{marginTop: 10}}>
                        <Link href='#' className={classes.forgotPinLabel}>Forgot PIN</Link>
                    </div>
                </Grid>
            </Grid>
            <div className={classes.footerDivider}>
                <Divider/>
            </div>
            <Grid container justify='flex-end'>
                <Grid item>
                    <Button variant='contained' className={classes.loginButton} onClick={onClickLogin}>Login</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default LoginForm;
