import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Switch } from 'react-router';
import { spacing } from "./const";
import DashboardRoutes from "@alexghr/mfe-app-dashboard";
import ProjectRoutes from "@alexghr/mfe-app-projects";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Element>
        <Switch>
          {/* place /projects first otherwise DashboardRoutes will render for everything */}
          <Route path="/projects" component={ProjectRoutes} />
          <Route path="/" component={DashboardRoutes} />
        </Switch>
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

const Main = styled.main`
  flex-grow: 1;
  height: 100%;
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

const Attribution = styled.p`
  color: #666;
  text-align: center;
  margin-top: ${spacing.base};

  & > a {
    color: inherit;
  }
`;
