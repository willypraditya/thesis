import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Typography, Divider, Link } from "@material-ui/core";
import Layout from "../components/layout";
import SignUpForm from "./components/signUpForm";
import PhoneNumberForm from "./components/phoneNumberForm";
import VerifyOtpForm from "../components/verifyOtpForm";

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

const SignUp = () => {
  const classes = useStyles();

  const [step, setStep] = useState(0);

  const onClickButton = () => {
    setStep((prevState) => prevState + 1);
  };

  const renderForm = () => {
    if (step === 0) {
      return <SignUpForm onClickSignUp={onClickButton} />;
    } else if (step === 1) {
      return <PhoneNumberForm onClickSendOTP={onClickButton} />;
    } else {
      return <VerifyOtpForm />;
    }
  };

  return (
    <Layout
      formContent={
        <React.Fragment>
          <Container className={classes.container}>
            <Typography className={classes.title}>Sign Up</Typography>
            <div className={classes.divider}>
              <Divider />
            </div>
            {renderForm()}
          </Container>
          <Typography className={classes.signUpText}>
            Already have an account? <Link href="#">Sign Up</Link>
          </Typography>
        </React.Fragment>
      }
    />
  );
};

export default SignUp;
