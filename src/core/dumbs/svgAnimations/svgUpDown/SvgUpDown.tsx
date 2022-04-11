/** @jsx jsx */
import React from "react";
import { upDownStyles } from "./styles";
import { jsx } from "@emotion/react";
import { Svg } from "../svg/Svg";
import { SVGProps } from "../../../domain";

function SvgUpDown({ list }: { list: SVGProps[] }): JSX.Element {
  return (
    <div css={upDownStyles}>
      {list.map((item) => (
        <Svg {...item} />
      ))}
    </div>
  );
}

export { SvgUpDown };
