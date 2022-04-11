/** @jsx jsx */
import { jsx } from "theme-ui";
import { Divider, Inner, Content } from "../../../core";
import { SvgList, SvgUpDown, SvgUpDownWide } from "../../../core";
import { heroListUpDown, heroListUpDownWide, heroList } from "../../domain";
// @ts-ignore
import Intro from "../../data/intro";

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <SvgList list={heroList} />
      <SvgUpDown list={heroListUpDown} />
      <SvgUpDownWide list={heroListUpDownWide} />
    </Divider>
    <Content
      sx={{ variant: `texts.bigger` }}
      speed={0.4}
      offset={offset}
      factor={factor}
    >
      <Inner>
        <Intro />
      </Inner>
    </Content>
  </div>
);

export { Hero };
