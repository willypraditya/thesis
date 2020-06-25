import React from "react";
import { Route, Redirect, Switch, Router } from "react-router-dom";
import NavbarRouter from "./NavbarRouter";
import history from "configs/history";

import NEW_Login from "components/Pages/NEW_RegisterAndLogin/Login";
import NEW_SignUp from "components/Pages/NEW_RegisterAndLogin/SignUp";
import NEW_ForgotPin from "components/Pages/NEW_RegisterAndLogin/ForgotPin";
import NotFound from "components/Pages/NotFound";

const RouterFlow = () => {
  // startLocale();
  // Axios.setupInterceptors();

  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          component={null}
          render={(props) => (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: props.location },
              }}
            />
          )}
        />
        <Route path="/dashboard" component={NavbarRouter} />
        <Route exact path="/login" component={NEW_Login} />
        <Route exact path="/join" component={NEW_SignUp} />
        <Route exact path="/forgot" component={NEW_ForgotPin} />

        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
};

export default RouterFlow;
