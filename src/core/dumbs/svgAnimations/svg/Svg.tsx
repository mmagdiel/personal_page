/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { SVGProps, hidden } from "../../../domain";
import { getShape, getViewBox } from "../../../domain";

const Svg = ({
  stroke = false,
  color = ``,
  width,
  icon,
  left,
  top,
  hiddenMobile = false,
}: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={getViewBox(icon)}
  >
    {getShape(icon)}
  </svg>
);

export { Svg };
