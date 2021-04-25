import React from "react";
import TopHeadlines from "./TopHeadlines";
import { ProjectsPanel2 } from '@alexghr/mfe-app-projects';

const Dashboard: React.FC = () => {
  return (
    <div>
      <ProjectsPanel2 />
      <TopHeadlines />
    </div>
  );
};

export default Dashboard;
