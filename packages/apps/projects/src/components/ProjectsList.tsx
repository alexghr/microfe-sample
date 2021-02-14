import React, { useContext } from "react";
import styled from "styled-components";
import { ProjectsContext } from "../contexts/ProjectsContext";
import { LoadingIndicator } from "@alexghr/mfe-app-common";

const ProjectsList: React.FC = () => {
  const {
    projects: { loading, data },
  } = useContext(ProjectsContext);

  return (
    <Element>
      {loading && <LoadingIndicator />}
      {data.map((p) => (
        <div key={String(p.id)}>{p.name}</div>
      ))}
    </Element>
  );
};

export default ProjectsList;

const Element = styled.div``;
