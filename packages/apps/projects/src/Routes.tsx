import React from "react";
import { Switch, Route } from "react-router";
import Projects from "./components/Projects";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Projects} />
  </Switch>
);

export default Routes;
