import React from "react";
import { Paper, Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "transparent",
  },
  activeLabel: {
    color: `${theme.palette.color.black} !important`,
  },
  completedLabel: {
    color: `${theme.palette.color.grey} !important`,
  },
}));

const TopUpStep = ({ paymentMethod, activeStep, style }) => {
  const classes = useStyles();

  const step = ["Bank Selection & Amount", "Instructions", "Complete"];

  const renderSteps = () => {
    return step.map((item, index) => {
      return (
        <Step classes={{ root: classes.steps }} key={index}>
          <StepLabel
            classes={{
              active: classes.activeLabel,
              completed: classes.completedLabel,
            }}
          >
            {item}
          </StepLabel>
        </Step>
      );
    });
  };

  return (
    <Paper elevation={0} className={classes.background} style={style}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        style={{ backgroundColor: "transparent" }}
      >
        {renderSteps()}
      </Stepper>
    </Paper>
  );
};

export default TopUpStep;
