import React from "react";
import { Switch, Route } from "react-router";
import Dashboard from "../components/Dashboard";

export const DashboardApp: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
  </Switch>
);
