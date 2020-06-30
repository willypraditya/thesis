import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Popover,
  List,
  ListItem,
  ListItemText,
  Grid,
  Divider,
  Typography,
  Button,
} from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";
import handling from "utils/handling";

const useStyles = makeStyles((theme) => ({
  popover: {
    // maxWidth: 500
    marginTop: 10,
  },
  notificationTitle: {
    fontWeight: 600,
    marginLeft: 10,
  },
  notificationDate: {
    marginTop: 5,
    marginLeft: 30,
    color: theme.palette.color.darkGrey,
  },
  notificationContent: {
    marginTop: 5,
    marginLeft: 30,
    maxWidth: 200,
    color: theme.palette.color.black,
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
  listDivider: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonGrid: {
    width: 130,
    textAlign: "center",
    padding: 10,
  },
  button: {
    color: theme.palette.color.blue,
    fontSize: 14,
    fontWeight: 700,
  },
}));

const NotificationPopup = ({ anchorEl, handleClose }) => {
  const classes = useStyles();

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
  ];

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      className={classes.popover}
    >
      <div className={classes.content}>
        <List>
          {data.map((item, index) => {
            return (
              <React.Fragment>
                <ListItem>
                  <ListItemText
                    primary={
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
                    }
                    secondary={
                      <React.Fragment>
                        <Typography className={classes.notificationContent}>
                          {item.content.length > 60
                            ? item.content.substring(0, 60).concat("...")
                            : item.content}
                        </Typography>
                        <Typography className={classes.notificationDate}>
                          {item.date}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {index < 2 && (
                  <div className={classes.listDivider}>
                    <Divider />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </List>
        <Divider />
        <Grid container justify="space-between">
          <Grid item className={classes.buttonGrid}>
            <Button className={classes.button}>Mark as Read</Button>
          </Grid>
          <div className={classes.buttonDivider}>
            <Divider orientation="vertical" />
          </div>
          <Grid item className={classes.buttonGrid}>
            <Button
              data-cy="view-notifications-button"
              className={classes.button}
              onClick={() => handling.redirectUrl("/dashboard/notifications")}
            >
              View All
            </Button>
          </Grid>
        </Grid>
      </div>
    </Popover>
  );
};

export default NotificationPopup;
