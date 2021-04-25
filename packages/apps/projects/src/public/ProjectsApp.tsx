import React from "react";
import { Route, Switch } from "react-router";
import { Project } from "../components/Project";
import { ProjectsProvider } from "./ProjectsProvider";

export const ProjectsApp: React.FC = () => (
  <ProjectsProvider>
    <Switch>
      <Route path="/project" render={({ match }) => <Project id={match.params.id} />} />
    </Switch>
  </ProjectsProvider>
);
