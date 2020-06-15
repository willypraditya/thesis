import React from "react";
import { Route, Redirect, Switch, Router } from "react-router-dom";
import { Provider } from "react-redux";
import NavbarRouter from "./NavbarRouter";
// import NotFoundComponent from "components/Global/NotFoundComponent";
import history from "configs/history";

import NEW_Login from "components/Pages/NEW_RegisterAndLogin/Login";
import NEW_SignUp from "components/Pages/NEW_RegisterAndLogin/SignUp";
import NEW_ForgotPin from "components/Pages/NEW_RegisterAndLogin/ForgotPin";

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
        <Route exact path="/new-login" component={NEW_Login} />
        <Route exact path="/new-join" component={NEW_SignUp} />
        <Route exact path="/new-forgot" component={NEW_ForgotPin} />

        {/* <Route component={NotFoundComponent}></Route> */}
      </Switch>
    </Router>
  );
};

export default RouterFlow;
