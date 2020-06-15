import React from "react";

import { Grid } from "@material-ui/core";
import Profile from "./components/profile";
import Settings from "./components/settings";

const MyAccount = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Profile verificationStatus="verified" />
      </Grid>
      <Grid item xs={9}>
        <Settings />
      </Grid>
    </Grid>
  );
};

export default MyAccount;
