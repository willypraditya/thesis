import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Typography, Divider, Button } from "@material-ui/core";
import { CheckCircleRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  content: {},
  checkIcon: {
    color: theme.palette.color.green,
    fontSize: 30,
  },
  successTitle: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: 700,
  },
  description: {
    marginTop: 20,
  },
  footerDivider: {
    marginTop: 20,
    marginLeft: -30,
    marginRight: -30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  sendButton: {
    fontWeight: 600,
    color: theme.palette.color.white,
    backgroundColor: theme.palette.color.blue,
    textTransform: "none",
    "&:hover": {
      background: theme.palette.color.blue,
    },
  },
}));

const ForgotPinForm = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.content}>
        <Grid container spacing={1}>
          <Grid item>
            <CheckCircleRounded className={classes.checkIcon} />
          </Grid>
          <Grid item>
            <Typography className={classes.successTitle}>Email Sent</Typography>
          </Grid>
        </Grid>
        <Typography className={classes.description}>
          An email with reset PIN link has been sent to example@example.com with
          further instructions.
        </Typography>
      </div>
      <div className={classes.footerDivider}>
        <Divider />
      </div>
      <Grid container justify="flex-end">
        <Grid item>
          <Button variant="contained" className={classes.sendButton}>
            Back to Login
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ForgotPinForm;
