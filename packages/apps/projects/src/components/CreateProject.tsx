import React, { useContext } from "react";
import { CurrentProjectContext } from "../contexts/CurrentProjectContext";
import { ProjectsContext } from "../contexts/ProjectsContext";

const CreateProject: React.FC = () => {
  const { addProject } = useContext(ProjectsContext);
  const { setCurrentProject } = useContext(CurrentProjectContext);

  const handleCreateProject = React.useCallback(() => {
    const name = prompt("Name the new project");
    if (!name) {
      return;
    }

    addProject(name).then((p) => setCurrentProject(p));
  }, [addProject]);

  return <button onClick={handleCreateProject}>Create Project</button>;
};

export default CreateProject;
