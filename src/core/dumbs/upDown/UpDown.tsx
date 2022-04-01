/** @jsx jsx */
import React from "react";
import { upDownStyles } from "./styles";
import { jsx } from "@emotion/react";

function UpDown({ children }: { children: React.ReactNode }) {
  return <div css={upDownStyles}>{children}</div>;
}

export { UpDown };
