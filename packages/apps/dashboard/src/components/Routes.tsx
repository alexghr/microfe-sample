import React from "react";
import { Switch, Route } from "react-router";
import Dashboard from "./Dashboard";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
  </Switch>
);

export default Routes;
