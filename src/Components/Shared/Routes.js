import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home/Index";
import Contact from "../Contact/Index";
import About from "../About/Index";
import Login from "../Account/Login";
import Page from "../Page/Index";
import NoMatch from "../Error/404";

const checkAuth = () => {
  const token = localStorage.getItem("userInfoName");
  if (!token) {
    return false;
  }
  return true;
};

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} exact />
    <Route path="/page/:title" component={Page} exact />
    <AuthRoute path="/protected" component={Contact} exact />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
