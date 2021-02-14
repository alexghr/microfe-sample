import React, { useContext } from "react";
import { Project } from "../models/project";
import { ProjectsContext } from "./ProjectsContext";

export type CurrentProjectContext = {
  currentProject: Project | undefined;
  setCurrentProject: (p: Project) => void;
};

export const CurrentProjectContext = React.createContext<CurrentProjectContext>(
  {
    currentProject: undefined,
    setCurrentProject: () => {},
  }
);

export const CurrentProjectContextProvider: React.FC = ({ children }) => {
  const {
    projects: { data },
  } = useContext(ProjectsContext);

  const [currentProjectId, setCurrentProjectId] = React.useState<
    Project["id"] | undefined
  >(undefined);

  const currentProject = data.find(({ id }) => id === currentProjectId);
  const setCurrentProject = React.useCallback(
    (project) => setCurrentProjectId(project.id),
    [setCurrentProjectId]
  );

  return (
    <CurrentProjectContext.Provider
      value={{ currentProject, setCurrentProject }}
    >
      {children}
    </CurrentProjectContext.Provider>
  );
};
