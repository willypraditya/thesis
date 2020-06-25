import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Typography, Divider, Link } from "@material-ui/core";
import Layout from "../components/layout";
import LoginForm from "./components/loginForm";
import VerifyOtpForm from "../components/verifyOtpForm";

import handling from "utils/handling";

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
  signUpText: {
    fontWeight: 700,
    marginTop: 20,
    textAlign: "center",
  },
}));

const Login = () => {
  const classes = useStyles();

  const [step, setStep] = useState(0);

  const onClickLogin = () => {
    setStep(1);
  };

  const onClickVerify = () => {
    handling.redirectUrl("/dashboard");
  };

  const renderForm = () => {
    if (step === 0) {
      return <LoginForm onClickLogin={onClickLogin} />;
    } else {
      return <VerifyOtpForm onClickVerify={onClickVerify} />;
    }
  };

  return (
    <Layout
      formContent={
        <React.Fragment>
          <Container className={classes.container}>
            <Typography className={classes.title}>Login</Typography>
            <div className={classes.divider}>
              <Divider />
            </div>
            {renderForm()}
          </Container>
          <Typography className={classes.signUpText}>
            Don't have an account? <Link href="#">Sign Up</Link>
          </Typography>
        </React.Fragment>
      }
    />
  );
};

export default Login;
