/** @jsx jsx */
import React from "react";
import { upDownWideStyles } from "./styles";
import { jsx } from "@emotion/react";

function UpDownWide({ children }: { children: React.ReactNode }) {
  return <div css={upDownWideStyles}>{children}</div>;
}

export { UpDownWide };
