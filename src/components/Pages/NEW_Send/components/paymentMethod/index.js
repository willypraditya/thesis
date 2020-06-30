import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  Paper,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PaymentDetails from "./components/paymentDetails";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "30px 50px 30px 50px",
  },
  paymentMethodTitle: {
    fontSize: 18,
    fontWeight: 700,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  contentTitle: {
    fontWeight: 700,
    marginBottom: 5,
  },
  paymentMethodContent: {
    marginTop: 20,
  },
  radio: {
    margin: 0,
    border: `1px solid ${theme.palette.color.borderColor}`,
    borderRadius: 5,
    display: "block",
    width: "100%",
  },
  radioActive: {
    margin: 0,
    border: `1px solid ${theme.palette.color.blue}`,
    borderRadius: 5,
    display: "block",
    width: "100%",
  },
  footer: {
    height: 45,
    padding: "10px 50px 10px 50px",
    borderTop: `1px solid ${theme.palette.color.borderColor}`,
    overflow: "hidden",
  },
  footerDescription: {
    fontWeight: 600,
  },
  nextButton: {
    width: 80,
    float: "right",
    height: "100%",
    borderRadius: 4,
    fontSize: 16,
    fontWeight: 500,
    color: theme.palette.color.white,
    backgroundColor: theme.palette.color.blue,
    textTransform: "none",
    "&:hover": {
      color: theme.palette.color.white,
      backgroundColor: theme.palette.color.blue,
    },
  },
}));

const PaymentMethod = ({
  nextStep,
  paymentMethod,
  setPaymentMethodFunction,
}) => {
  const classes = useStyles();

  const [selectValue, setSelectValue] = useState("");

  const onSelect = (e) => {
    setSelectValue(e.target.value);
  };

  const transactionsData = [
    {
      account: "292927cB-7abc-a",
      recipient: "Willy Praditya",
      bank: "bca",
      status: "success",
    },
  ];

  return (
    <div>
      <Paper elevation={0} className={classes.paper}>
        <Typography variant="h1" className={classes.paymentMethodTitle}>
          Payment Method
        </Typography>
        <div className={classes.divider}>
          <Divider />
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography className={classes.contentTitle}>
                Reference Code
              </Typography>
              <TextField
                variant="outlined"
                // className={classes.recipientNameInput}
                fullWidth={true}
                label="For internal reference"
                InputLabelProps={{ shrink: false }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.contentTitle}>Category</Typography>
              <FormControl
                variant="outlined"
                className={classes.selectBank}
                fullWidth={true}
              >
                {selectValue === "" && (
                  <InputLabel shrink={false}>
                    Select a category (Optional)
                  </InputLabel>
                )}
                <Select
                  // value={age}
                  onChange={onSelect}
                  InputLabelProps={{ shrink: false }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"test"}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <div className={classes.paymentMethodContent}>
          <FormControl fullWidth>
            <Typography className={classes.contentTitle}>
              Payment Method
            </Typography>
            <RadioGroup row>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControlLabel
                    checked={paymentMethod === "deposit" && true}
                    value="deposit"
                    control={<Radio color="primary" />}
                    label="Deposit"
                    labelPlacement="right"
                    onChange={(e) => setPaymentMethodFunction(e.target.value)}
                    classes={
                      paymentMethod === "deposit"
                        ? { root: classes.radioActive }
                        : { root: classes.radio }
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    checked={paymentMethod === "bankTransfer" && true}
                    value="bankTransfer"
                    control={<Radio color="primary" />}
                    label="Bank Transfer"
                    labelPlacement="right"
                    onChange={(e) => setPaymentMethodFunction(e.target.value)}
                    classes={
                      paymentMethod === "bankTransfer"
                        ? { root: classes.radioActive }
                        : { root: classes.radio }
                    }
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.divider}>
          <Divider />
        </div>
        <div>
          <Typography className={classes.contentTitle}>
            Payment Details
          </Typography>
          <PaymentDetails paymentMethod={paymentMethod} />
        </div>
      </Paper>
      <Paper elevation={0} className={classes.footer}>
        <Grid container justify="space-between" style={{ height: "100%" }}>
          <Grid item xs={6}>
            {transactionsData.length > 0 && (
              <Grid container spacing={6}>
                <Grid item>
                  <Typography className={classes.footerDescription}>
                    Total Amount
                  </Typography>
                  <Typography>Rp. 20.000.000</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.footerDescription}>
                    Recipient(s)
                  </Typography>
                  <Typography>5</Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid item xs={6}>
            <Button
              data-cy="next-button"
              className={classes.nextButton}
              onClick={nextStep}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default PaymentMethod;
