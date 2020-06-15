import React from "react";
import {
    Grid,
    Typography,
    Button,
    Divider,
    Container,
    Paper,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '30px 50px 30px 50px',
    },
    instructionsTitle: {
        fontSize: 18,
        fontWeight: 700,
    },
    divider: {
        marginTop: 20,
        marginBottom: 20
    },
    description: {
        marginTop: 20,
        padding: 15,
        borderRadius: 5,
        color: theme.palette.color.darkBlue,
        backgroundColor: theme.palette.color.transparentBlue,
    },
    instructionAvatar: {
        fontSize: 14,
        width: 30,
        height: 30,
        color: theme.palette.color.darkBlue,
        backgroundColor: theme.palette.color.transparentBlue,
    },
    formLabel: {
        fontWeight: 600
    },
    footer: {
        height: 45,
        padding: '10px 50px 10px 50px',
        borderTop: `1px solid ${theme.palette.color.borderColor}`,
        overflow: 'hidden'
    },
    cancelButton:{
        float: 'right',
        height: '100%',
        borderRadius: 4,
        fontSize: 16,
        fontWeight: 500,
        color: theme.palette.color.blue,
        backgroundColor: theme.palette.color.white,
        textTransform: 'none',
        '&:hover': {
            color: theme.palette.color.blue,
            backgroundColor: theme.palette.color.white,
        }
    },
    nextButton: {
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

const Instructions = ({nextStep}) => {
    const classes = useStyles();

    return (
        <div>
            <Paper elevation={0} className={classes.paper}>
                <Typography className={classes.instructionsTitle}>Instructions</Typography>
                <div className={classes.divider}>
                    <Divider/>
                </div>
                <div>
                    <Typography>
                        Your transfer request of 
                        <Typography display='inline' style={{fontWeight: 600}}> Rp 20.000.005,00 </Typography>
                        has been submitted.
                    </Typography>
                    <Container className={classes.description}>
                        <Typography>
                            This top-up request will expire on
                            <Typography display='inline' style={{fontWeight: 600}}> 6 March 2020</Typography>
                            , at
                            <Typography display='inline' style={{fontWeight: 600}}> 12:34</Typography>
                            .
                        </Typography>

                        <Typography style={{marginTop: 20}}>
                            Unique code of
                            <Typography display='inline' style={{fontWeight: 600}}> Rp 5,00 </Typography>
                            is added to your transaction amount as a payment identifier. 
                            By transferring the exact amount, 
                            the payment identification process will be faster. 
                            The unique code transferred will be added to your balance.
                        </Typography>
                    </Container>
                </div>
                <div>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={classes.instructionAvatar}>1</Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                Login to your bank account.
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={classes.instructionAvatar}>2</Avatar>
                            </ListItemAvatar>
                            <ListItemText>
                                Add “PT Inklusi Keuangan Nusantara” as a recipient and complete your one time deposit using the information below.
                            </ListItemText>
                        </ListItem>
                    </List>
                </div>
                <div style={{marginTop: 10}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography className={classes.formLabel}>Bank Name</Typography>
                            <TextField 
                                variant='outlined'
                                // className={classes.recipientNameInput}
                                fullWidth={true}
                                label='For internal reference'
                                InputLabelProps={{shrink: false}}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.formLabel}>Account Number</Typography>
                            <TextField 
                                variant='outlined'
                                // className={classes.recipientNameInput}
                                fullWidth={true}
                                label='For internal reference'
                                InputLabelProps={{shrink: false}}
                                disabled
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography className={classes.formLabel}>Account Name</Typography>
                            <TextField 
                                variant='outlined'
                                // className={classes.recipientNameInput}
                                fullWidth={true}
                                label='For internal reference'
                                InputLabelProps={{shrink: false}}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.formLabel}>Amount</Typography>
                            <TextField 
                                variant='outlined'
                                // className={classes.recipientNameInput}
                                fullWidth={true}
                                label='For internal reference'
                                InputLabelProps={{shrink: false}}
                                disabled
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography className={classes.formLabel}>Special Remarks</Typography>
                            <TextField 
                                variant='outlined'
                                // className={classes.recipientNameInput}
                                fullWidth={true}
                                label='For internal reference'
                                InputLabelProps={{shrink: false}}
                                disabled
                                helperText="Note: Special remarks will help us to verify your transaction faster."
                            />
                        </Grid>
                    </Grid>
                </div>
            </Paper>
            <Paper elevation={0} className={classes.footer}>
                <Grid container justify='flex-end' spacing={2} style={{height: '100%'}}>
                    <Grid item>
                        <Button className={classes.cancelButton}>Cancel Payment</Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.nextButton} onClick={nextStep}>I've Transferred</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Instructions;
