import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  SwipeableDrawer,
  Drawer,
} from "@material-ui/core";
import { DashboardOutlined, HistoryOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import constant from "configs/constants";
import handling from "utils/handling";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: `1px solid ${theme.palette.color.borderColor}`,
  },
  toolbar: {
    textAlign: "center",
  },
  listItem: {
    borderRadius: 6,
    color: theme.palette.color.grey,
    width: 200,
    height: 45,
    margin: "auto",
    "&:hover": {
      background: theme.palette.color.white,
    },
  },
  listItemSelected: {
    borderRadius: 6,
    color: theme.palette.color.white,
    backgroundColor: theme.palette.color.blue,
    width: 200,
    height: 45,
    margin: "auto",
    "&:hover": {
      background: theme.palette.color.blue,
    },
  },
  icon: {
    color: theme.palette.color.grey,
    width: 20,
  },
  iconSelected: {
    color: theme.palette.color.white,
    width: 20,
  },

  // sideList: {
  //     width: '300px',
  //     marginTop: '10px',
  //     color: 'gray'
  // },
  // selectedMenu: {
  //     borderLeft: '5px solid #ffb100',
  //     backgroundColor: 'white !important',
  //     color: '#ffb100'
  // },
  // menuList: {
  //     borderTop: '1px solid #f2f4f5',
  // },
  // menuListLogout: {
  //     borderTop: '1px solid #f2f4f5',
  //     borderBottom: '1px solid #f2f4f5',
  // }
}));

const Sidebar = ({ sidebar }) => {
  const classes = useStyles();

  const side = "left";
  const [click, setClick] = React.useState(true);
  const [state, setState] = React.useState({
    left: false,
  });
  // const [user, setUser] = React.useState(getUserLogin());

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      open={true}
      variant="permanent"
      // onClose={toggleDrawer("left", false)}
      // onOpen={toggleDrawer("left", true)}
    >
      <div className={classes.toolbar}>
        <img
          src={`${constant.PREFIX_IMAGE}/icon/xfers.svg`}
          style={{ width: 90, paddingTop: 25, textAlign: "center" }}
        />
      </div>
      <List style={{ textAlign: "center" }}>
        {sidebar.map((item, index) => {
          if (item.showSidebar) {
            return (
              <div key={item.name} style={{ paddingTop: 25 }}>
                <ListItem
                  className={
                    item.path === handling.pathname()
                      ? classes.listItemSelected
                      : classes.listItem
                  }
                  button
                  onClick={() => handling.redirectUrl(item.path)}
                >
                  <ListItemIcon style={{ minWidth: 30 }}>
                    {
                      <item.icon
                        className={
                          item.path === handling.pathname()
                            ? classes.iconSelected
                            : classes.icon
                        }
                      />
                    }
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              </div>
            );
          }
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
