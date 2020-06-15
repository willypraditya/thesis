import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  InputAdornment,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 700,
  },
  selectBank: {
    width: "100%",
  },
  accountNumberInput: {
    marginTop: 20,
    "& .MuiInputBase-adornedEnd": {
      paddingRight: 0,
    },
  },
  verifyButton: {
    padding: "15px 0 15px 0",
    textTransform: "none",
    color: theme.palette.color.white,
    backgroundColor: theme.palette.color.blue,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    "&:hover": {
      color: theme.palette.color.white,
      backgroundColor: theme.palette.color.blue,
    },
  },
  recipientNameInput: {
    marginTop: 20,
  },
  amountInput: {
    marginTop: 20,
  },
  noteInput: {
    marginTop: 20,
  },
  cancelButton: {
    color: theme.palette.color.black,
    backgroundColor: theme.palette.color.white,
    "&:hover": {
      color: theme.palette.color.black,
      backgroundColor: theme.palette.color.white,
    },
  },
  editRecipientButton: {
    color: theme.palette.color.white,
    backgroundColor: theme.palette.color.blue,
    "&:hover": {
      color: theme.palette.color.white,
      backgroundColor: theme.palette.color.blue,
    },
  },
}));

const EditRecipient = ({ show, hideFunction }) => {
  const classes = useStyles();

  const DialogTitle = () => {
    return (
      <MuiDialogTitle disableTypography>
        <Typography className={classes.modalTitle}>Edit Recipient</Typography>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={hideFunction}
        >
          <Close />
        </IconButton>
      </MuiDialogTitle>
    );
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth={"xs"}
      className={classes.root}
      open={show}
    >
      <DialogTitle>Edit Recipient</DialogTitle>
      <DialogContent dividers>
        <form noValidate>
          <FormControl variant="outlined" className={classes.selectBank}>
            <InputLabel>Bank Name</InputLabel>
            <Select
              // value={age}
              // onChange={handleChange}
              label="Bank Name"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            classes={{ root: classes.accountNumberInput }}
            fullWidth={true}
            label="Account Number"
            InputProps={{
              endAdornment: (
                <Button className={classes.verifyButton}>Verify</Button>
              ),
            }}
          />
          <TextField
            variant="outlined"
            className={classes.recipientNameInput}
            fullWidth={true}
            label="Recipient Name"
          />
          <TextField
            variant="outlined"
            className={classes.amountInput}
            fullWidth={true}
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Rp.</InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            className={classes.noteInput}
            fullWidth={true}
            multiline
            rows={2}
            label="Note"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button className={classes.cancelButton} onClick={hideFunction}>
          Cancel
        </Button>
        <Button className={classes.editRecipientButton}>Edit Recipient</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditRecipient;
