import React from "react";
import { ProjectCard } from "../sections";
import { getGradient } from "./valueObjects";

const components = {
  // eslint-disable-next-line react/display-name
  ProjectCard: ({ link, title, variant, children, ...props }) => {
    const option = getGradient(variant);
    return (
      <ProjectCard {...props} link={link} title={title} bg={option}>
        {children}
      </ProjectCard>
    );
  },
};

export default components;
