import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Login from "../home/Login";
import Dashboard from "../dashboard/Dashboard";
import Management from "../management/Management";
import NotFoundPage from '../common/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/management" component={Management} />
        <Route path="/management/:userId" component={Management}  exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
