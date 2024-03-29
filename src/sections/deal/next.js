import React from "react";
import { ProjectCard } from "../dumbs";

function next() {
  return (
    <>
      <ProjectCard
        title="Setting  up a yarn Workspace"
        link="https://www.lekoarts.de/javascript/setting-up-a-yarn-workspace-with-typescript-eslint-and-cypress?utm_source=cara&utm_medium=Theme"
        variant="lavender"
      >
        A robust solution for multi-package repositories.
      </ProjectCard>
      <ProjectCard
        title="Adding a Draft Feature to Gatsby"
        link="https://www.lekoarts.de/garden/adding-a-draft-feature-to-gatsby?utm_source=cara&utm_medium=Theme"
        variant="amethyst"
      >
        A solution with the createSchemaCustomization API.
      </ProjectCard>
      <ProjectCard
        title="Theme UI Plugin for Figma"
        link="https://www.lekoarts.de/design/introducing-the-theme-ui-plugin-for-figma?utm_source=cara&utm_medium=Theme"
        variant="kale"
      >
        The Theme UI plugin for Figma allows for a workflow where Theme UI is
        the starting point both for design & development.
      </ProjectCard>
    </>
  );
}

export default next;
