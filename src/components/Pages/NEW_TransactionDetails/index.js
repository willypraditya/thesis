import React from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  Paper,
  TextField,
  InputAdornment,
  Chip,
} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import TransactionsDetailsTable from "./components/transactionDetailsTable";

const useStyles = makeStyles((theme) => ({
  transactionDetailsHeader: {
    borderRadius: 0,
    padding: "20px 50px 20px 50px",
    margin: "-25px -25px 0 -25px",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.color.borderColor}`,
  },
  transactionsDetailsId: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 20,
  },
  transactionDetailsHeaderDescriptions: {
    minWidth: 200,
  },
  transactionDetailsHeaderAmountIncoming: {
    color: theme.palette.color.darkGreen,
    fontWeight: 700,
    fontSize: 18,
  },
  decriptionTitle: {
    fontWeight: 700,
  },
  transactionsDetailsContentPaper: {
    marginTop: 25,
    padding: 40,
    border: `1px solid ${theme.palette.color.borderColor}`,
  },
  transactionDetailsContent: {
    paddingBottom: 20,
  },
  recipientText: {
    fontWeight: 700,
  },
  searchLogo: {
    color: theme.palette.color.grey,
  },
  searchField: {
    "& .MuiOutlinedInput-root": {
      height: 36,
      border: `1px solid ${theme.palette.color.borderColor}`,
    },
  },
  filterButton: {
    height: 36,
    border: `1px solid ${theme.palette.color.borderColor}`,
    textTransform: "none",
  },
  sortByButton: {
    height: 36,
    border: `1px solid ${theme.palette.color.borderColor}`,
    textTransform: "none",
  },
  divider: {
    paddingBottom: 20,
  },
  completedLabel: {
    color: theme.palette.color.green,
    backgroundColor: theme.palette.color.transparentGreen,
    border: `1px solid ${theme.palette.color.green}`,
    float: "right",
  },
  pendingLabel: {
    color: theme.palette.color.yellow,
    backgroundColor: theme.palette.color.transparentYellow,
    border: `1px solid ${theme.palette.color.lightYellow}`,
    float: "right",
  },
  failedLabel: {
    color: theme.palette.color.red,
    backgroundColor: theme.palette.color.transparentRed,
    border: `1px solid ${theme.palette.color.red}`,
    float: "right",
  },
}));

const TransactionDetails = (matchProps) => {
  const classes = useStyles();

  const label = (status, classes) => {
    if (status === "completed") {
      return <Chip className={classes.completedLabel} label="Completed" />;
    } else if (status === "pending") {
      return <Chip className={classes.pendingLabel} label="Pending" />;
    } else {
      return <Chip className={classes.failedLabel} label="Failed" />;
    }
  };

  return (
    <div>
      <Paper elevation={0} className={classes.transactionDetailsHeader}>
        <Typography className={classes.transactionsDetailsId}>
          ID {matchProps.match.params.id}
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              spacing={3}
            >
              <Grid
                item
                className={classes.transactionDetailsHeaderDescriptions}
              >
                <Typography className={classes.decriptionTitle}>
                  Date
                </Typography>
                <Typography>Jan 9, 2013 18:24</Typography>
              </Grid>
              <Grid
                item
                className={classes.transactionDetailsHeaderDescriptions}
              >
                <Typography className={classes.decriptionTitle}>
                  Categories
                </Typography>
                <Typography>Utilities</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              spacing={3}
            >
              <Grid
                item
                className={classes.transactionDetailsHeaderDescriptions}
              >
                <Typography className={classes.decriptionTitle}>
                  Transaction Type
                </Typography>
                <Typography>Single Fund Transfer</Typography>
              </Grid>
              <Grid
                item
                className={classes.transactionDetailsHeaderDescriptions}
              >
                <Typography className={classes.decriptionTitle}>
                  Payment Method
                </Typography>
                <Typography>Wallet</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              className={classes.transactionDetailsHeaderAmountIncoming}
            >
              + Rp 20.000.000,12
            </Typography>
            {label("completed", classes)}
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={0} className={classes.transactionsDetailsContentPaper}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.transactionDetailsContent}
        >
          <Grid item>
            <Typography className={classes.recipientText}>
              Recipient(s)
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <TextField
                  id="outlined-basic"
                  placeholder="Search"
                  variant="outlined"
                  size="small"
                  color="primary"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchOutlined className={classes.searchLogo} />
                      </InputAdornment>
                    ),
                  }}
                  classes={{ root: classes.searchField }}
                />
              </Grid>
              <Grid item>
                <Button className={classes.filterButton}>Filter</Button>
              </Grid>
              <Grid item>
                <Button className={classes.sortByButton}>Sort by</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.divider}>
          <Divider />
        </div>
        <TransactionsDetailsTable />
      </Paper>
    </div>
  );
};

export default TransactionDetails;
