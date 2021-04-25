import React from "react";
import { createProject, fetchProjects } from "../api/projects";
import { CreateProjectMessage } from "../messages";
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

  const ports = React.useRef<MessagePort[]>([]);

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

  React.useEffect(() => {
    const cb = (ev: MessageEvent) => {
      // console.log('proj context', ev.data, ev.ports);
      if (ev.data === 'project:connect' && ev.ports.length > 0) {
        ports.current.push(...ev.ports);
        ev.ports.forEach(port => port.postMessage(JSON.stringify({
          type: 'projects:set',
          payload: {
            projects
          }
        })));

        ev.ports[0].addEventListener('message', (ev) => {
          console.log('got data', ev.data);
          const data: CreateProjectMessage = JSON.parse(ev.data);
          if (data.type === 'project:create') {
            addProject(data.payload.name);
          }
        });

        ev.ports[0].start();
      }
    }

    addEventListener('message', cb);
  }, []);

  React.useEffect(() => {
    ports.current.forEach(port => {
      port.postMessage(JSON.stringify({
          type: 'projects:set',
          payload: {
            projects
          }
      }));
    });
  }, [projects]);

  return (
    <ProjectsContext.Provider value={{ addProject, projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
