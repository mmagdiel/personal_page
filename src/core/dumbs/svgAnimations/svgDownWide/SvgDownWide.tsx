/** @jsx jsx */
import React from "react";
import { upDownWideStyles } from "./styles";
import { jsx } from "@emotion/react";
import { Svg } from "../svg/Svg";
import { SVGProps } from "../../../domain";

function SvgUpDownWide({ list }: { list: SVGProps[] }): JSX.Element {
  return (
    <div css={upDownWideStyles}>
      {list.map((item) => (
        <Svg {...item} />
      ))}
    </div>
  );
}

export { SvgUpDownWide };
