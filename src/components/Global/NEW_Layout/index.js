import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DashboardOutlined, HistoryOutlined } from "@material-ui/icons";
import Sidebar from "components/Global/NEW_Sidebar";
import Header from "components/Global/NEW_Header";
import { withTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  layout: {
    flexGrow: 1,
    width: "100%",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  const [user, setUser] = React.useState({
    username: "",
    email: "",
    status_kyc: "",
  });

  // const fetchUsers = () => {
  //   setUser(getUserLogin());
  // };
  // React.useEffect(() => {
  //   fetchUsers();
  // }, []);

  const titleAndSidebar = [
    {
      name: "Dashboard",
      title: "Dashboard",
      icon: DashboardOutlined,
      path: "/dashboard",
      showSidebar: true,
      children: [],
    },
    {
      name: "Transactions",
      title: "Transactions",
      icon: HistoryOutlined,
      path: "/dashboard/transactions",
      showSidebar: true,
    },
    {
      name: "Send",
      title: "Send",
      icon: "",
      path: "/dashboard/send",
      showSidebar: false,
      children: [],
    },
    {
      name: "Top-Up",
      title: "Top-Up",
      icon: "",
      path: "/dashboard/top-up",
      showSidebar: false,
      children: [],
    },
    {
      name: "My Account",
      title: "My Account",
      icon: "",
      path: "/dashboard/account",
      showSidebar: false,
      children: [],
    },
    {
      name: "Notifications",
      title: "Notifications",
      icon: "",
      path: "/dashboard/notifications",
      showSidebar: false,
      children: [],
    },
  ];

  return (
    <div className={classes.layout}>
      <Header
        // t={t}
        // handleLogout={logoutUser}
        // user={user}
        title={titleAndSidebar}
      />
      <Sidebar
        // t={t}
        // handleLogout={logoutUser}
        sidebar={titleAndSidebar}
      />
      <div style={{ marginLeft: 250, padding: 25 }}>{children}</div>
    </div>
  );
};

export default Layout;
