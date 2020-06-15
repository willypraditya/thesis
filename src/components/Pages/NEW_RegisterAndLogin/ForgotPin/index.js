import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Typography, Divider, Link } from "@material-ui/core";
import Layout from "../components/layout";
import ForgotPinForm from "./components/forgotPinForm";
import ForgotPinSuccess from "./components/forgotPinSuccess";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "30px 30px 10px 30px",
    border: `1px solid ${theme.palette.color.borderColor}`,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
  },
  divider: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  loginText: {
    fontWeight: 700,
    marginTop: 20,
    textAlign: "center",
  },
}));

const ForgotPin = () => {
  const classes = useStyles();

  const [step, setStep] = useState(0);

  const onClickButton = () => {
    setStep((prevState) => prevState + 1);
  };

  const renderForm = () => {
    if (step === 0) {
      return <ForgotPinForm onClickSend={onClickButton} />;
    } else {
      return <ForgotPinSuccess />;
    }
  };

  return (
    <Layout
      formContent={
        <React.Fragment>
          <Container className={classes.container}>
            <Typography className={classes.title}>Forgot Pin</Typography>
            <div className={classes.divider}>
              <Divider />
            </div>
            {renderForm()}
          </Container>
          <Typography className={classes.loginText}>
            Already have an account? <Link href="#">Login</Link>
          </Typography>
        </React.Fragment>
      }
    />
  );
};

export default ForgotPin;
