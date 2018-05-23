import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Home from "./home/Home";
import Header from "./common/Header";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
