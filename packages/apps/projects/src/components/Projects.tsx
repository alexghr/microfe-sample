import React from "react";
import { ProjectsContextProvider } from "../contexts/ProjectsContext";
import CreateProject from "./CreateProject";
import ProjectsList from "./ProjectsList";

const Projects: React.FC = () => (
  <div>
    <ProjectsContextProvider>
      <h2>Projects</h2>
      <CreateProject />
      <ProjectsList />
    </ProjectsContextProvider>
  </div>
);

export default Projects;
