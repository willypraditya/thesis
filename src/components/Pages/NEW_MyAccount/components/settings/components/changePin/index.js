import React from "react";

import {
  Grid,
  Typography,
  Button,
  Divider,
  Paper,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 5,
    border: `1px solid ${theme.palette.color.borderColor}`,
  },
  paper: {
    padding: 30,
  },
  title: {
    fontWeight: 700,
    fontSize: 18,
  },
  divider: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  formLabel: {
    fontWeight: 600,
  },
  footer: {
    height: 45,
    padding: "10px 50px 10px 50px",
    borderTop: `1px solid ${theme.palette.color.borderColor}`,
    overflow: "hidden",
  },
  nextButton: {
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
const ChangePin = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <Typography className={classes.title}>Change PIN</Typography>
        <div className={classes.divider}>
          <Divider />
        </div>
        <div>
          <Grid container direction="row" justify="space-between" spacing={0}>
            <Grid item xs={5}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography className={classes.formLabel}>
                    Current PIN
                  </Typography>
                  <TextField
                    variant="outlined"
                    // className={classes.recipientNameInput}
                    fullWidth={true}
                    label="Enter your current PIN"
                    InputLabelProps={{ shrink: false }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={5}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Typography className={classes.formLabel}>New PIN</Typography>
                  <TextField
                    variant="outlined"
                    // className={classes.recipientNameInput}
                    fullWidth={true}
                    label="Enter new PIN"
                    InputLabelProps={{ shrink: false }}
                    helperText={
                      <Typography>
                        Enter a 6 digit PIN to secure your account.
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item>
                  <Typography className={classes.formLabel}>
                    Confirm PIN
                  </Typography>
                  <TextField
                    variant="outlined"
                    // className={classes.recipientNameInput}
                    fullWidth={true}
                    label="Confirm new PIN"
                    InputLabelProps={{ shrink: false }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Paper>
      <Paper elevation={0} className={classes.footer}>
        <Grid
          container
          justify="flex-end"
          spacing={2}
          style={{ height: "100%" }}
        >
          <Grid item>
            <Button className={classes.nextButton}>Update PIN</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ChangePin;
