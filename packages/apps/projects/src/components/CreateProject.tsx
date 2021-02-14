import React, { useContext } from "react";
import { ProjectsContext } from "../contexts/ProjectsContext";

const CreateProject: React.FC = () => {
  const { addProject } = useContext(ProjectsContext);

  const handleCreateProject = React.useCallback(() => {
    const name = prompt("Name the new project");
    if (!name) {
      return;
    }

    addProject(name);
  }, [addProject]);

  return <button onClick={handleCreateProject}>Create Project</button>;
};

export default CreateProject;
