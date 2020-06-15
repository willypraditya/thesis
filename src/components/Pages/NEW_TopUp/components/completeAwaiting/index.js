import React from "react";
import { Grid, Typography, Button, Divider, Paper } from "@material-ui/core";
import { QueryBuilder } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "30px 50px 30px 50px",
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  completeTitle: {
    fontSize: 18,
    fontWeight: 700,
  },
  clockIcon: {
    color: theme.palette.color.lightYellow,
    fontSize: 30,
  },
  awaitingTitle: {
    marginTop: 3,
    fontSize: 16,
    fontWeight: 700,
  },
  footer: {
    height: 45,
    padding: "10px 50px 10px 50px",
    borderTop: `1px solid ${theme.palette.color.borderColor}`,
    overflow: "hidden",
  },
  returnButton: {
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

const CompleteAwaiting = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation={0} className={classes.paper}>
        <Typography className={classes.completeTitle}>Complete</Typography>
        <div className={classes.divider}>
          <Divider />
        </div>
        <div>
          <Grid container spacing={1}>
            <Grid item>
              <QueryBuilder className={classes.clockIcon} />
            </Grid>
            <Grid item>
              <Typography className={classes.awaitingTitle}>
                Awaiting Payment
              </Typography>
            </Grid>
          </Grid>
          <Typography>
            We have received your transfer request, please wait while we verify
            your payment. Once your payment is verified, we will process your
            request. You can refer to the transaction history page to check your
            transfer status.
          </Typography>
        </div>
      </Paper>
      <Paper elevation={0} className={classes.footer}>
        <Grid container justify="space-between" style={{ height: "100%" }}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Button className={classes.returnButton}>
              Return to Transactions
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default CompleteAwaiting;
