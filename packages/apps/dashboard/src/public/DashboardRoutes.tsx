import React from "react";
import { Switch, Route } from "react-router";
import Dashboard from "../components/Dashboard";

export const DashboardRoutes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
  </Switch>
);
