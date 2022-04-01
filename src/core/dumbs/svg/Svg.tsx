/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { IconType } from "../../domain";
import { getShape, getViewBox } from "../../domain";

const hidden = [`none`, `none`, `block`];

type SVGProps = {
  stroke?: boolean;
  color?: string | number | any;
  width: number;
  icon: IconType;
  left: string;
  top: string;
  hiddenMobile?: boolean;
};

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
