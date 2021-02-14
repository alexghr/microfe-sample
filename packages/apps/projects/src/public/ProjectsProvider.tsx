import React from "react";
import { CurrentProjectContextProvider } from "../contexts/CurrentProjectContext";
import { ProjectsContextProvider } from "../contexts/ProjectsContext";

export const ProjectsProvider: React.FC = ({ children }) => (
  <ProjectsContextProvider>
    <CurrentProjectContextProvider>{children}</CurrentProjectContextProvider>
  </ProjectsContextProvider>
);
