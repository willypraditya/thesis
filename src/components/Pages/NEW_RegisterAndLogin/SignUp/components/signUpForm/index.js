import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Typography,
  Divider,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formLabel: {
    fontWeight: 600,
  },
  checkbox: {
    marginLeft: 5,
  },
  footerDivider: {
    marginTop: 30,
    marginLeft: -30,
    marginRight: -30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  signUpButton: {
    fontWeight: 600,
    color: theme.palette.color.white,
    backgroundColor: theme.palette.color.blue,
    textTransform: "none",
    "&:hover": {
      background: theme.palette.color.blue,
    },
  },
}));

const SignUpForm = ({ onClickSignUp }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography className={classes.formLabel}>Business Name</Typography>
          <TextField
            variant="outlined"
            fullWidth={true}
            label="Enter your Email Address"
            InputLabelProps={{ shrink: false }}
          />
        </Grid>
        <Grid item>
          <Typography className={classes.formLabel}>Full Name</Typography>
          <TextField
            variant="outlined"
            fullWidth={true}
            label="Enter your Full Name"
            InputLabelProps={{ shrink: false }}
          />
        </Grid>
        <Grid item>
          <Typography className={classes.formLabel}>Email</Typography>
          <TextField
            variant="outlined"
            fullWidth={true}
            label="Enter your Email Address"
            InputLabelProps={{ shrink: false }}
          />
        </Grid>
        <Grid item>
          <Typography className={classes.formLabel}>PIN</Typography>
          <TextField
            variant="outlined"
            fullWidth={true}
            label="Create PIN"
            helperText="Enter a 6 digit PIN to secure your account."
            InputLabelProps={{ shrink: false }}
          />
        </Grid>
        <Grid item>
          <Typography className={classes.formLabel}>Confirm PIN</Typography>
          <TextField
            variant="outlined"
            fullWidth={true}
            label="Confirm PIN"
            InputLabelProps={{ shrink: false }}
          />
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                className={classes.checkbox}
                name="agreement"
                color="primary"
              />
            }
            label="I declare that I am the person authorised of this Neu Business account to act for and on behalf of the company registered above."
          />
        </Grid>
      </Grid>
      <div className={classes.footerDivider}>
        <Divider />
      </div>
      <Grid container justify="flex-end">
        <Grid item>
          <Button
            variant="contained"
            className={classes.signUpButton}
            onClick={onClickSignUp}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SignUpForm;
