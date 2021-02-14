import React from "react";
import { createProject, fetchProjects } from "../api/projects";
import { Project } from "../models/project";

type ProjectsContext = {
  addProject: (name: string) => Promise<Project>;
  projects: {
    data: ReadonlyArray<Project>;
    loading: boolean;
  };
};

export const ProjectsContext = React.createContext<ProjectsContext>({
  addProject: () => Promise.reject(new Error("Not implemented")),
  projects: {
    data: [],
    loading: false,
  },
});

export const ProjectsContextProvider: React.FC = ({ children }) => {
  const [projects, setProjects] = React.useState<ProjectsContext["projects"]>({
    loading: false,
    data: [],
  });

  // poor man's refresh mechanism
  const [refetchProjects, setRefetchProjects] = React.useState(0);

  const addProject = React.useCallback(
    (name) => {
      return createProject({ name }).then((project) => {
        setRefetchProjects(refetchProjects + 1);
        return project;
      });
    },
    [refetchProjects]
  );

  React.useEffect(() => {
    setProjects({ loading: true, data: [] });
    fetchProjects().then((data) => {
      setProjects({ loading: false, data });
    });
  }, [refetchProjects]);

  return (
    <ProjectsContext.Provider value={{ addProject, projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
