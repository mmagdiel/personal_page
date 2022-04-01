import React from "react";
import { Divider, Inner, Content } from "../../../core";
import { Svg, UpDown, UpDownWide } from "../../../core";
// @ts-ignore
import AboutMDX from "../../data/about";

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
      <UpDown>
        <Svg
          icon="box"
          hiddenMobile
          width={6}
          color="icon_red"
          left="50%"
          top="75%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="70%"
          top="20%"
        />
        <Svg
          icon="triangle"
          width={8}
          stroke
          color="icon_darkest"
          left="25%"
          top="5%"
        />
        <Svg
          icon="cross"
          hiddenMobile
          width={24}
          color="icon_orange"
          left="80%"
          top="80%"
        />
      </UpDown>
      <UpDownWide>
        <Svg
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_darkest"
          left="5%"
          top="80%"
        />
        <Svg
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="95%"
          top="50%"
        />
        <Svg
          icon="circle"
          hiddenMobile
          width={6}
          color="icon_brightest"
          left="85%"
          top="15%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <Svg
        icon="circle"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="4%"
        top="20%"
      />
      <Svg icon="circle" width={12} color="icon_green" left="71%" top="60%" />
      <Svg icon="box" width={6} color="icon_purple" left="10%" top="10%" />
      <Svg icon="box" width={12} color="icon_darkest" left="10%" top="30%" />
      <Svg
        icon="hexa"
        width={8}
        stroke
        color="icon_yellow"
        left="15%"
        top="70%"
      />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
);

export { About };
