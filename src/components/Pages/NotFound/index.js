import React from "react";

import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  notFound: {
    textAlign: "center",
    margin: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.notFound}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">Page Not Found</Typography>
    </div>
  );
};

export default NotFound;
