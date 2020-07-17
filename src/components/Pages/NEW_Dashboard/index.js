import React from "react";
import {
  Grid,
  Typography,
  Button,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CallMade, Add, CallReceived } from "@material-ui/icons";
import handling from "utils/handling";

import CategoriesContent from "./components/categoriesContent";
import MonthlyReportContent from "./components/monthlyReportContent";

const useStyles = makeStyles((theme) => ({
  homeHeader: {
    borderRadius: 0,
    padding: "20px 50px 20px 50px",
    margin: "-25px -25px 0 -25px",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.color.borderColor}`,
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: 700,
  },
  balance: {
    paddingTop: 20,
    fontSize: 36,
    fontWeight: 700,
  },
  sendButton: {
    color: theme.palette.color.white,
    backgroundColor: theme.palette.color.blue,
    fontWeight: 600,
    textTransform: "none",
    "&:hover": {
      background: theme.palette.color.blue,
    },
  },
  topUpButton: {
    marginLeft: 10,
    color: theme.palette.color.white,
    backgroundColor: theme.palette.color.green,
    fontWeight: 600,
    textTransform: "none",
    "&:hover": {
      background: theme.palette.color.green,
    },
  },
  buttonIcon: {
    width: 20,
    marginRight: 5,
  },
  homeContent: {
    marginTop: 25,
  },
  contentPaper: {
    minHeight: 260,
    padding: 25,
    border: `1px solid ${theme.palette.color.borderColor}`,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 700,
  },
  viewAllButton: {
    textTransform: "none",
    color: theme.palette.color.blue,
    padding: 0,
    "&:hover": {
      background: "transparent",
    },
  },
  recentActivityList: {
    padding: 0,
    marginTop: 10,
  },
  recentActivityListItem: {
    padding: 0,
    borderRadius: 5,
  },
  recentActivityIncomingAvatar: {
    backgroundColor: theme.palette.color.lightGreen,
  },
  recentActivityIncomingIcon: {
    color: theme.palette.color.green,
  },
  recentActivityIncomingAmount: {
    fontWeight: 600,
    color: theme.palette.color.darkGreen,
  },
  recentActivityOutgoingAvatar: {
    backgroundColor: theme.palette.color.lightBlue,
  },
  recentActivityOutgoingIcon: {
    color: theme.palette.color.blue,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  console.log("Final Test 2");

  const recentTransaction = [
    {
      name: "Concurrent 1",
      date: "Today",
      amount: "20,000,000.10",
      type: "incoming",
    },
    {
      name: "Final Test",
      date: "Today",
      amount: "51,500,000.00",
      type: "outgoing",
    },
    {
      name: "Wuilly",
      date: "Yesterday",
      amount: "20,000,000.10",
      type: "incoming",
    },
    {
      name: "Wuilly Praditya",
      date: "10 February",
      amount: "20,000,000.10",
      type: "incoming",
    },
  ];

  return (
    <div>
      <Paper elevation={0} className={classes.homeHeader}>
        <Typography className={classes.homeTitle}>Dashboard</Typography>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography className={classes.balance}>
              Rp 20.000.000,00
            </Typography>
          </Grid>
          <Grid item>
            <div style={{ marginTop: 20 }}>
              <Button
                variant="contained"
                className={classes.sendButton}
                data-cy="send-button"
                onClick={() => handling.redirectUrl("/dashboard/send")}
              >
                <CallMade className={classes.buttonIcon} />
                Send
              </Button>
              <Button
                variant="contained"
                className={classes.topUpButton}
                data-cy="top-up-button"
                onClick={() => handling.redirectUrl("/dashboard/top-up")}
              >
                <Add className={classes.buttonIcon} />
                Top-Up
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <div className={classes.homeContent}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.contentPaper}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Typography className={classes.contentTitle}>
                  Recent Activity
                </Typography>
                <Button className={classes.viewAllButton} variant="text">
                  View All
                </Button>
              </Grid>
              <List className={classes.recentActivityList}>
                {recentTransaction.map((item) => (
                  <ListItem className={classes.recentActivityListItem} button>
                    <ListItemAvatar>
                      {item.type === "incoming" ? (
                        <Avatar
                          className={classes.recentActivityIncomingAvatar}
                        >
                          <CallReceived
                            className={classes.recentActivityIncomingIcon}
                          />
                        </Avatar>
                      ) : (
                        <Avatar
                          className={classes.recentActivityOutgoingAvatar}
                        >
                          <CallMade
                            className={classes.recentActivityOutgoingIcon}
                          />
                        </Avatar>
                      )}
                    </ListItemAvatar>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                      <Grid item>
                        <ListItemText
                          primary={item.name}
                          secondary={item.date}
                        />
                      </Grid>
                      <Grid item>
                        {item.type === "incoming" ? (
                          <ListItemText
                            classes={{
                              primary: classes.recentActivityIncomingAmount,
                            }}
                            primary={`+ ${item.amount}`}
                            secondary="Received"
                            secondaryTypographyProps={{ align: "right" }}
                          />
                        ) : (
                          <ListItemText
                            classes={{
                              primary: classes.recentActivityOutgoingAmount,
                            }}
                            primary={`- ${item.amount}`}
                            secondary="Sent"
                            secondaryTypographyProps={{ align: "right" }}
                          />
                        )}
                      </Grid>
                    </Grid>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.contentPaper}>
              <CategoriesContent />
            </Paper>
          </Grid>
        </Grid>
        <Paper
          elevation={0}
          style={{ margin: "16px 0 0 0", minHeight: 450 }}
          className={classes.contentPaper}
        >
          <MonthlyReportContent />
        </Paper>
      </div>
    </div>
  );
};

export default Dashboard;
