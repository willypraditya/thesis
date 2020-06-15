import React from "react";
import { Route, Router } from "react-router-dom";
import Layout from "components/Global/NEW_Layout";
import Dashboard from "components/Pages/NEW_Dashboard";
import Transactions from "components/Pages/NEW_Transactions";
import TransactionsDetails from "components/Pages/NEW_TransactionDetails";
import Send from "components/Pages/NEW_Send";
import TopUp from "components/Pages/NEW_TopUp";
import MyAccount from "components/Pages/NEW_MyAccount";
import Notifications from "components/Pages/NEW_Notifications";

import history from "configs/history";

export default function NavbarRouter() {
  return (
    <Router history={history}>
      <Layout>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/transactions" component={Transactions} />
        <Route
          exact
          path="/dashboard/transactions/:id"
          render={(matchProps) => <TransactionsDetails {...matchProps} />}
        />
        <Route exact path="/dashboard/send" component={Send} />
        <Route exact path="/dashboard/top-up" component={TopUp} />
        <Route exact path="/dashboard/account" component={MyAccount} />
        <Route
          exact
          path="/dashboard/notifications"
          component={Notifications}
        />
      </Layout>
    </Router>
  );
}
