import React from "react";
import styled from "styled-components";
import CreateProject from "../components/CreateProject";
import ProjectsList from "../components/ProjectsList";
import { ProjectsShim } from "./ProjectsShim";

export const ProjectsPanel2: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenProjects = React.useCallback(() => setOpen(true), []);
  const handleCloseProjects = React.useCallback(() => setOpen(false), []);

  return (
    <ProjectsShim>
      <button onClick={handleOpenProjects}>Projects</button>
      <Element open={open}>
        <button onClick={handleCloseProjects}>x</button>
        <h2>Projects</h2>
        <CreateProject />
        <ProjectsList />
      </Element>
    </ProjectsShim>
  );
};

const width = 320;
const Element = styled.div<{ open: boolean }>`
  display: block;
  position: fixed;
  right: ${({ open }) => (open ? 0 : `${-1 * width}px`)};
  transition: all 100ms ease-out;
  top: 0;
  bottom: 0;
  width: ${width}px;
`;
