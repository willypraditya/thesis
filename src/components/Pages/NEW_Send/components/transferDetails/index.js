import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  Paper,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";

import UploadCsv from "./components/uploadCsv";
import RecipientsList from "./components/recipientsList";
import AddRecipient from "./components/addRecipient";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "30px 50px 30px 50px",
  },
  transferDetailsTitle: {
    fontSize: 18,
    fontWeight: 700,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  radio: {
    margin: 0,
    border: `1px solid ${theme.palette.color.borderColor}`,
    borderRadius: 5,
    display: "block",
    width: "100%",
  },
  radioActive: {
    margin: 0,
    border: `1px solid ${theme.palette.color.blue}`,
    borderRadius: 5,
    display: "block",
    width: "100%",
  },
  uploadCsv: {
    marginTop: 20,
  },
  uploadCsvTitle: {
    fontWeight: 700,
  },
  recipientsList: {
    marginTop: 20,
  },
  recipientsListTitle: {
    fontWeight: 700,
  },
  addRecipient: {
    float: "right",
    textTransform: "none",
    backgroundColor: theme.palette.color.white,
    border: `1px solid ${theme.palette.color.borderColor}`,
  },
  addRecipientIcon: {
    color: theme.palette.color.blue,
    marginRight: 5,
  },
  footer: {
    height: 45,
    padding: "10px 50px 10px 50px",
    borderTop: `1px solid ${theme.palette.color.borderColor}`,
    overflow: "hidden",
  },
  footerDescription: {
    fontWeight: 600,
  },
  nextButton: {
    width: 80,
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

const TransferDetails = ({ nextStep }) => {
  const classes = useStyles();

  const [radio, setRadio] = useState("manualInput");
  const [addRecipientModal, setAddRecipientModal] = useState(false);

  const onClickRadio = (e) => {
    setRadio(e.target.value);
  };

  const showAddRecipientModal = () => {
    setAddRecipientModal(true);
  };

  const hideAddRecipientModal = () => {
    setAddRecipientModal(false);
  };

  const transactionsData = [
    {
      account: "292927cB-7abc-a",
      recipient: "Willy Praditya",
      bank: "bca",
      status: "success",
      amount: "Rp. 20.000.000,12",
    },
  ];

  return (
    <div>
      <Paper elevation={0} className={classes.paper}>
        <Typography className={classes.transferDetailsTitle}>
          Transfer Details
        </Typography>
        <div className={classes.divider}>
          <Divider />
        </div>
        <div>
          <FormControl fullWidth>
            <RadioGroup row>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControlLabel
                    checked={radio === "manualInput" && true}
                    value="manualInput"
                    control={<Radio color="primary" />}
                    label="Input Transfer Details"
                    labelPlacement="right"
                    onChange={(e) => onClickRadio(e)}
                    classes={
                      radio === "manualInput"
                        ? { root: classes.radioActive }
                        : { root: classes.radio }
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    checked={radio === "csvUpload" && true}
                    value="csvUpload"
                    control={<Radio color="primary" />}
                    label="CSV Upload"
                    labelPlacement="right"
                    onChange={(e) => onClickRadio(e)}
                    classes={
                      radio === "csvUpload"
                        ? { root: classes.radioActive }
                        : { root: classes.radio }
                    }
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </div>
        {radio === "csvUpload" && (
          <div className={classes.uploadCsv}>
            <Typography className={classes.uploadCsvTitle}>
              Upload CSV
            </Typography>
            <UploadCsv />
          </div>
        )}
        <div className={classes.recipientsList}>
          <Grid container alignItems="center" justify="space-between">
            <Grid item xs={6}>
              <Typography className={classes.recipientsListTitle}>
                Recipients List{" "}
                {transactionsData.length > 0 &&
                  `(${transactionsData.length} recipients)`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              {radio === "manualInput" && (
                <Button
                  className={classes.addRecipient}
                  onClick={showAddRecipientModal}
                >
                  <Add className={classes.addRecipientIcon} />
                  Add a Recipient
                </Button>
              )}
            </Grid>
          </Grid>
          <div className={classes.divider}>
            <Divider />
          </div>
          <RecipientsList data={transactionsData} />
        </div>
      </Paper>
      <Paper elevation={0} className={classes.footer}>
        <Grid container justify="space-between" style={{ height: "100%" }}>
          <Grid item xs={6}>
            {transactionsData.length > 0 && (
              <Grid container spacing={6}>
                <Grid item>
                  <Typography className={classes.footerDescription}>
                    Total Amount
                  </Typography>
                  <Typography>Rp. 20.000.000</Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.footerDescription}>
                    Recipient(s)
                  </Typography>
                  <Typography>5</Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid item xs={6}>
            <Button className={classes.nextButton} onClick={nextStep}>
              Next
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <AddRecipient
        show={addRecipientModal}
        hideFunction={hideAddRecipientModal}
      />
    </div>
  );
};

export default TransferDetails;
