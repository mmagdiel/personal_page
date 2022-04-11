import React from "react";
import { Divider, Inner, Content } from "../../../core";
import { SvgList, SvgUpDown, SvgUpDownWide } from "../../../core";
// @ts-ignore
import AboutMDX from "../../data/about";
import {
  aboutListUpDown,
  aboutListUpDownWide,
  aboutListSvg,
} from "../../domain";

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <SvgUpDown list={aboutListUpDown} />
      <SvgUpDownWide list={aboutListUpDownWide} />
      <SvgList list={aboutListSvg} />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
);

export { About };
