import React from "react";
import {
    Grid,
    Typography,
    Button,
    Divider,
    Paper,
} from "@material-ui/core";
import { CheckCircleRounded } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '30px 50px 30px 50px',
    },
    divider: {
        marginTop: 20,
        marginBottom: 20
    },
    completeTitle: {
        fontSize: 18,
        fontWeight: 700,
    },
    checkIcon:{
        color: theme.palette.color.green,
        fontSize: 30
    },
    successTitle:{
        marginTop: 3,
        fontSize: 16,
        fontWeight: 700
    },
    footer: {
        height: 45,
        padding: '10px 50px 10px 50px',
        borderTop: `1px solid ${theme.palette.color.borderColor}`,
        overflow: 'hidden'
    },
    returnButton: {
        float: 'right',
        height: '100%',
        borderRadius: 4,
        fontSize: 16,
        fontWeight: 500,
        color: theme.palette.color.white,
        backgroundColor: theme.palette.color.blue,
        textTransform: 'none',
        '&:hover': {
            color: theme.palette.color.white,
            backgroundColor: theme.palette.color.blue,
        }
    }
}));

const CompleteSuccess = () => {
    const classes = useStyles();

    return (
        <div>
            <Paper elevation={0} className={classes.paper}>
                <Typography className={classes.completeTitle}>Complete</Typography>
                <div className={classes.divider}>
                    <Divider/>
                </div>
                <div>
                    <Grid container spacing={1}>
                        <Grid item>
                            <CheckCircleRounded className={classes.checkIcon}/>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.successTitle}>Payment Successful</Typography>
                        </Grid>
                    </Grid>
                    <Typography>
                        We have received your transfer request. 
                        Your payment has been verified and we will process your request. 
                        You can refer to the transaction history page to check your transfer status.
                    </Typography>
                </div>
            </Paper>
            <Paper elevation={0} className={classes.footer}>
                <Grid container justify='space-between' style={{height: '100%'}}>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={6}>
                        <Button className={classes.returnButton}>Return to Transactions</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default CompleteSuccess;
