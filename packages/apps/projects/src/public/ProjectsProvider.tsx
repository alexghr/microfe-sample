import React from "react";
import AddItemToProjectModal from "../components/AddItemToProjectModal";
import { CurrentProjectContextProvider } from "../contexts/CurrentProjectContext";
import { ProjectsContextProvider } from "../contexts/ProjectsContext";

export const ProjectsProvider: React.FC = ({ children }) => (
  <ProjectsContextProvider>
    <CurrentProjectContextProvider>
      <AddItemToProjectModal />
      {children}
    </CurrentProjectContextProvider>
  </ProjectsContextProvider>
);
