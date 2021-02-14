import React, { useContext } from "react";
import styled from "styled-components";
import { ProjectsContext } from "../contexts/ProjectsContext";
import { LoadingIndicator } from "@alexghr/mfe-app-common";
import { CurrentProjectContext } from "../contexts/CurrentProjectContext";

const ProjectsList: React.FC = () => {
  const {
    projects: { loading, data },
  } = useContext(ProjectsContext);

  const { currentProject, setCurrentProject } = useContext(
    CurrentProjectContext
  );

  return (
    <Element>
      {loading && <LoadingIndicator />}
      {data.map((p) => (
        <div key={String(p.id)} onClick={() => setCurrentProject(p)}>
          {p.name}
          {p === currentProject ? <span>Current Project</span> : null}
        </div>
      ))}
    </Element>
  );
};

export default ProjectsList;

const Element = styled.div``;
