/** @jsx jsx */
import React from "react";
import { upDownStyles } from "./styles";
import { jsx } from "@emotion/react";
import { Svg } from "../svg";

function SvgUpDown({ children }: { children: React.ReactNode }) {
  return <div css={upDownStyles}>{children}</div>;
}

export { SvgUpDown };
