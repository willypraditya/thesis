import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Grid,
  Badge,
  Card,
} from "@material-ui/core";
import {
  HelpOutline,
  NotificationsOutlined,
  PersonOutlineOutlined,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import handling from "utils/handling";
import { regexUuid } from "utils/regex";

import NotificationPopup from "./components/notificationsPopup";
import AccountPopup from "./components/accountPopup";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.color.white,
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.color.borderColor}`,
  },
  icon: {
    color: theme.palette.color.grey,
  },
  customBadge: {
    color: theme.palette.color.white,
    backgroundColor: theme.palette.color.blue,
    borderRadius: 12,
    width: 26,
    fontWeight: 700,
  },
  accountButton: {
    marginTop: 5,
  },
  accountName: {
    paddingLeft: 10,
    color: theme.palette.color.black,
  },
  titleCard: {
    borderRadius: 0,
    marginLeft: 250,
    padding: "20px 0 20px 50px",
    boxShadow: "none",
    borderTop: `1px solid ${theme.palette.color.borderColor}`,
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
  },
}));

const Header = ({ title }) => {
  const classes = useStyles();

  const [notificationAnchor, setNotificationAnchor] = useState(null);

  const [accountAnchor, setAccountAnchor] = useState(null);

  const handleNotificationClick = (event) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchor(null);
  };

  const handleAccountClick = (event) => {
    setAccountAnchor(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAccountAnchor(null);
  };

  const setHeader = () => {
    if (handling.pathname().includes("/transactions/")) {
      const uuid = handling.pathname().split("/transactions/")[1];
      if (regexUuid.test(uuid)) {
        return false;
      }
    } else if (handling.pathname() !== "/dashboard") {
      return true;
    }
  };

  const setTitle = () =>
    title.find((item) => handling.pathname() === item.path).title.toString();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <div style={{ marginLeft: "auto" }}>
          <Grid container spacing={2}>
            <Grid item>
              <IconButton>
                <HelpOutline className={classes.icon} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                data-cy="notifications-button"
                onClick={handleNotificationClick}
              >
                <Badge
                  classes={{ badge: classes.customBadge }}
                  overlap="circle"
                  badgeContent={4}
                >
                  <NotificationsOutlined className={classes.icon} />
                </Badge>
              </IconButton>
              <NotificationPopup
                anchorEl={notificationAnchor}
                handleClose={handleNotificationClose}
              />
            </Grid>
            <Grid item>
              <Button
                className={classes.accountButton}
                onClick={handleAccountClick}
              >
                <PersonOutlineOutlined className={classes.icon} />
                <Typography
                  className={classes.accountName}
                  style={{ paddingLeft: 10 }}
                >
                  Willy Praditya
                </Typography>
              </Button>
              <AccountPopup
                anchorEl={accountAnchor}
                handleClose={handleAccountClose}
              />
            </Grid>
          </Grid>
        </div>
      </Toolbar>
      {setHeader() && (
        <Card className={classes.titleCard}>
          <Typography className={classes.title}>{setTitle()}</Typography>
        </Card>
      )}
    </AppBar>
  );
};

export default Header;
