import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Container,
  Typography,
  Divider,
  TextField,
  Link,
  Button,
} from "@material-ui/core";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  phoneNumber: {
    fontWeight: 600,
  },
  timerContainer: {
    marginTop: 10,
    marginBottom: 10,
    padding: "10px 20px 10px 20px",
    backgroundColor: theme.palette.color.transparentYellow,
    borderRadius: 5,
    color: theme.palette.color.yellow,
  },
  timerText: {
    fontWeight: 600,
  },
  formLabel: {
    fontWeight: 600,
  },
  noReceiveText: {
    fontWeight: 600,
    marginTop: 10,
  },
  sendAgainText: {
    fontWeight: 600,
  },
  footerDivider: {
    marginLeft: -30,
    marginRight: -30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  verifyButton: {
    fontWeight: 600,
    color: theme.palette.color.white,
    backgroundColor: theme.palette.color.blue,
    textTransform: "none",
    "&:hover": {
      background: theme.palette.color.blue,
    },
  },
}));

const VerifyOtpForm = ({ onClickVerify }) => {
  const classes = useStyles();

  const [timer, setTimer] = useState(180000);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevState) => prevState - 1000);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <React.Fragment>
      <Typography>
        Enter the 6-digit One-Time Password sent to
        <Typography className={classes.phoneNumber}>+62 1234567890</Typography>
      </Typography>
      <Container className={classes.timerContainer}>
        <Typography>
          OTP will expire in{" "}
          <Typography display="inline" className={classes.timerText}>
            {moment.utc(timer).format("mm:ss")}
          </Typography>
        </Typography>
      </Container>
      <Typography className={classes.formLabel}>6-Digit Number</Typography>
      <TextField
        data-cy="otp-input"
        variant="outlined"
        fullWidth={true}
        label="Enter the 6-Digit Number"
        InputLabelProps={{ shrink: false }}
      />
      <Typography className={classes.noReceiveText}>
        Didn't receive SMS?
      </Typography>
      <Link href="#" className={classes.sendAgainText}>
        Send again.
      </Link>
      <div className={classes.footerDivider}>
        <Divider />
      </div>
      <Grid container justify="flex-end">
        <Grid item>
          <Button
            data-cy="verify-otp-button"
            variant="contained"
            className={classes.verifyButton}
            onClick={onClickVerify}
          >
            Verify Now
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default VerifyOtpForm;
