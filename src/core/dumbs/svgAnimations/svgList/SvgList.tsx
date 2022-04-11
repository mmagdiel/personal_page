import React from "react";
import { Svg } from "../svg/Svg";
import { SVGProps } from "../../../domain";

function SvgList({ list }: { list: SVGProps[] }): JSX.Element {
  return (
    <>
      {list.map((item) => (
        <Svg {...item} />
      ))}
    </>
  );
}

export { SvgList };
