import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Container,
  Typography,
  Divider,
  TextField,
  Link,
  Button,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import Layout from "../components/layout";
import LoginForm from "./components/loginForm";
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

const ResetPin = () => {
  const classes = useStyles();

  const [step, setStep] = useState(0);

  const onClickButton = () => {
    setStep(1);
  };

  const renderForm = () => {
    if (step === 0) {
      return <ResetPinForm onClickLogin={onClickButton} />;
    }
    // else{
    //     return(
    //         <VerifyOtpForm/>
    //     );
    // }
  };

  return (
    <Layout
      formContent={
        <React.Fragment>
          <Container className={classes.container}>
            <Typography className={classes.title}>Reset Your PIN</Typography>
            <div className={classes.divider}>
              <Divider />
            </div>
            {renderForm()}
          </Container>
          <Typography className={classes.signUpText}>
            Already have an account? <Link href="#">Login</Link>
          </Typography>
        </React.Fragment>
      }
    />
  );
};

export default ResetPin;
