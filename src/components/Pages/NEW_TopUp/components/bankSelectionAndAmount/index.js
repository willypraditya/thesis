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
  Container,
  Checkbox,
  InputAdornment,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import EmptyData from "components/Global/NEW_EmptyData";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "30px 50px 30px 50px",
  },
  bankSelectionAndAmountTitle: {
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
  confirmationTitle: {
    marginTop: 20,
    fontWeight: 600,
  },
  checkboxContainer: {
    marginTop: 5,
    border: `1px solid ${theme.palette.color.blue}`,
    borderRadius: 5,
  },
  footer: {
    height: 45,
    padding: "10px 50px 10px 50px",
    borderTop: `1px solid ${theme.palette.color.borderColor}`,
    overflow: "hidden",
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

const BankSelectionAndAmount = ({ nextStep }) => {
  const classes = useStyles();

  const [neuBank, setNeuBank] = useState("");

  const onSelectNeuBank = (e) => {
    setNeuBank(e.target.value);
  };

  const confirmation = () => {
    return (
      <div>
        <Typography className={classes.confirmationTitle}>
          Confirmation
        </Typography>
        <Container className={classes.checkboxContainer}>
          <FormControlLabel
            control={<Checkbox name="checked" color="primary" />}
            label={
              <Typography>
                Top-up
                <Typography display="inline" style={{ fontWeight: 600 }}>
                  {" "}
                  Rp 20.000.000,00{" "}
                </Typography>
                through Neu's
                <Typography display="inline" style={{ fontWeight: 600 }}>
                  {" "}
                  {neuBank}{" "}
                </Typography>
                bank account.
              </Typography>
            }
          />
        </Container>
      </div>
    );
  };

  return (
    <div>
      <Paper elevation={0} className={classes.paper}>
        <Typography className={classes.bankSelectionAndAmountTitle}>
          Bank Selection & Amount
        </Typography>
        <div className={classes.divider}>
          <Divider />
        </div>
        <div>
          <EmptyData description="Topping up is easy. Just set the amount and create a top-up request. Head over to your bank website and transfer." />
        </div>
        <div>
          <Grid container spacing={2} style={{ marginTop: 10 }}>
            <Grid item xs={6}>
              <Typography className={classes.contentTitle}>Amount</Typography>
              <TextField
                variant="outlined"
                fullWidth={true}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Rp.</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.contentTitle}>
                Neu Bank Selection
              </Typography>
              <FormControl
                variant="outlined"
                className={classes.selectBank}
                fullWidth={true}
              >
                {neuBank === "" && (
                  <InputLabel shrink={false}>Select a Bank</InputLabel>
                )}
                <Select
                  // value={age}
                  onChange={onSelectNeuBank}
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
          {neuBank !== "" && confirmation()}
        </div>
      </Paper>
      <Paper elevation={0} className={classes.footer}>
        <Grid container justify="space-between" style={{ height: "100%" }}>
          <Grid item xs={6}>
            {/* {transactionsData.length > 0 &&
                        <Grid container spacing={6}>
                            <Grid item>
                                <Typography className={classes.footerDescription}>Total Amount</Typography>
                                <Typography>Rp. 20.000.000</Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.footerDescription}>Recipient(s)</Typography>
                                <Typography>5</Typography>
                            </Grid>
                        </Grid>
                        } */}
          </Grid>
          <Grid item xs={6}>
            <Button className={classes.nextButton} onClick={nextStep}>
              Next
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default BankSelectionAndAmount;
