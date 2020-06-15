import React, { useState } from 'react';
import { 
    Grid, 
    Typography, 
    Link, 
    Container, 
    FormControlLabel, 
    Checkbox,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    InputAdornment
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EmptyData from 'components/Global/NEW_EmptyData';

import constant from "configs/constants";

const useStyles = makeStyles((theme) => ({
    noteText:{
        marginTop: 20,
        color: theme.palette.color.grey
    },
    contentTitle: {
        fontWeight: 700,
        marginBottom: 5
    },
    confirmationTitle: {
        marginTop: 20,
        fontWeight: 600
    },
    checkboxContainer: {
        marginTop: 5,
        border: `1px solid ${theme.palette.color.blue}`,
        borderRadius: 5
    }
}));

const PaymentDetails = ({paymentMethod}) => {
    const classes = useStyles();

    const [neuBank, setNeuBank] = useState('');

    const onSelectNeuBank = (e) => {
        setNeuBank(e.target.value);
    };

    const confirmation = () => {
        return(
            <div>
                <Typography className={classes.confirmationTitle}>Confirmation</Typography>
                <Container className={classes.checkboxContainer}>
                    <FormControlLabel
                        control={<Checkbox name="checked" color="primary" />}
                        label={
                            <Typography>
                            Send 
                                <Typography display='inline' style={{fontWeight: 600}}> Rp 20.000.000,00 </Typography>
                            to
                                <Typography display='inline' style={{fontWeight: 600}}> 50 recipients </Typography>
                            via
                                <Typography display='inline' style={{fontWeight: 600}}> my {paymentMethod === 'deposit' ? 'deposits' : 'wallet'}. </Typography>
                            </Typography>
                        }
                    />
                </Container>
            </div>
        );
    };

    const renderComponent = () => {
        if(paymentMethod === ''){
            return(
                <EmptyData description="After selecting payment method, the details will appear here."/>
            );
        }else if(paymentMethod === 'deposit'){
            return(
                <div>
                    <Grid container justify='center' spacing={6}>
                        <Grid item>
                            <img src={`${constant.PREFIX_IMAGE}/icon/deposit.svg`}/>
                            <Typography align='center'>My Deposits</Typography>
                        </Grid>
                        <Grid item>
                            <img src={`${constant.PREFIX_IMAGE}/icon/arrows.svg`} style={{marginTop: 45}}/>
                        </Grid>
                        <Grid item>
                            <img src={`${constant.PREFIX_IMAGE}/icon/recipient.svg`}/>
                            <Typography align='center'>50 recipients</Typography>
                        </Grid>
                    </Grid>
                    <Typography className={classes.noteText}>
                        Note: An admin fee of 1% will be charged on your total amount transferred should you fail to comply with our
                        <Link href="#"> additional terms and conditions</Link>.
                    </Typography>
                    {confirmation()}
                </div>
            );
        }else{
            return(
                <div>
                    <Grid container spacing={2} style={{marginTop: 10}}>
                        <Grid item xs={6}>
                            <Typography className={classes.contentTitle}>Amount</Typography>
                            <TextField 
                                variant='outlined'
                                className={classes.amountInput}
                                fullWidth={true}
                                disabled={true}
                                InputProps={{
                                    startAdornment: <InputAdornment position='start'>Rp.</InputAdornment>
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.contentTitle}>Neu Bank Selection</Typography>
                            <FormControl variant="outlined" className={classes.selectBank} fullWidth={true}>
                                {neuBank === '' &&
                                    <InputLabel shrink={false}>Select a Bank</InputLabel>
                                }
                                <Select
                                // value={age}
                                    onChange={onSelectNeuBank}
                                    InputLabelProps={{shrink: false}}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"test"}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    {confirmation()}
                </div>
            );
        }
    };

    return(
        <div>
            {renderComponent()}
        </div>
    );
};

export default PaymentDetails;
