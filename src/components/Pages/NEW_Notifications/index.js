import React from "react";
import {
  Paper,
  List,
  ListItem,
  Grid,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FiberManualRecord } from "@material-ui/icons";

import PaginationComponent from "components/Global/NEW_Pagination";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 10,
  },
  notificationTitle: {
    fontWeight: 600,
    marginLeft: 10,
  },
  notificationDate: {
    color: theme.palette.color.darkGrey,
  },
  notificationContent: {
    marginTop: 5,
    marginLeft: 30,
  },
  notificationRead: {
    width: 20,
    color: theme.palette.color.borderColor,
    // border: `1px solid ${theme.palette.color.borderColor}`
  },
  notification: {
    width: 20,
    color: theme.palette.color.lightYellow,
    // border: `1px solid ${theme.palette.color.borderColor}`
  },
  divider: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  pagination: {
    margin: "20px 10px 20px 0px",
  },
}));

const Notifications = () => {
  const classes = useStyles();

  const data = [
    {
      title: "Title goes here",
      content:
        "This is a placeholder. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "1 Jun 2019, 12:34",
      status: "unread",
    },
    {
      title: "Title goes here",
      content:
        "This is a placeholder. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "1 Jun 2019, 12:34",
      status: "unread",
    },
    {
      title: "Title goes here",
      content:
        "This is a placeholder. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "1 Jun 2019, 12:34",
      status: "unread",
    },
    {
      title: "Title goes here",
      content:
        "This is a placeholder. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "1 Jun 2019, 12:34",
      status: "unread",
    },
    {
      title: "Title goes here",
      content:
        "This is a placeholder. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "1 Jun 2019, 12:34",
      status: "unread",
    },
    {
      title: "Title goes here",
      content:
        "This is a placeholder. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "1 Jun 2019, 12:34",
      status: "read",
    },
    {
      title: "Title goes here",
      content:
        "This is a placeholder. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "1 Jun 2019, 12:34",
      status: "read",
    },
    {
      title: "Title goes here",
      content:
        "This is a placeholder. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "1 Jun 2019, 12:34",
      status: "read",
    },
    {
      title: "Title goes here",
      content:
        "This is a placeholder. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "1 Jun 2019, 12:34",
      status: "read",
    },
  ];

  return (
    <Paper className={classes.paper} elevation={0}>
      <List>
        {data.map((item) => {
          return (
            <React.Fragment>
              <ListItem>
                <ListItemText
                  primary={
                    <Grid container justify="space-between">
                      <Grid item>
                        <Grid container>
                          <Grid item>
                            <FiberManualRecord
                              className={
                                item.status === "read"
                                  ? classes.notificationRead
                                  : classes.notification
                              }
                            />
                          </Grid>
                          <Grid item>
                            <Typography className={classes.notificationTitle}>
                              {item.title}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography className={classes.notificationDate}>
                          {item.date}
                        </Typography>
                      </Grid>
                    </Grid>
                  }
                  secondary={
                    <Typography className={classes.notificationContent}>
                      {item.content}
                    </Typography>
                  }
                />
              </ListItem>
              <div className={classes.divider}>
                <Divider />
              </div>
            </React.Fragment>
          );
        })}
      </List>
      <div className={classes.pagination}>
        <PaginationComponent />
      </div>
    </Paper>
  );
};

export default Notifications;
