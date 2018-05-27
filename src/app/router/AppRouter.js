import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Login from "../home/Login";
import Dashboard from "../dashboard/Dashboard";
import Management from "../management/Management";
import NotFoundPage from "../common/NotFoundPage";
import PrivateRoute from "./PirvateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path="/" component={Login} exact={true} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/management/:userId?" component={Management} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
