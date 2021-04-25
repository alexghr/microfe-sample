import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { spacing } from "./const";
import { DashboardApp } from "@alexghr/mfe-app-dashboard";
import { ProjectsApp } from "@alexghr/mfe-app-projects";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Element>
        <NavBar>
          <Link to="/">Dashboard</Link>
          <Link to="/project">Project</Link>
        </NavBar>
        <ProjectsApp />
        <DashboardApp />
      </Element>
    </>
  );
};

export default App;

const Element = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
`;

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  height: 48px;
`;

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
  }
`;
