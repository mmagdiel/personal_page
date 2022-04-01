/** @jsx jsx */
import { jsx } from "theme-ui";
import { Divider, Inner, Content, UpDown, UpDownWide } from "../../../core";
import { waveAnimation, Svg } from "../../../core";
import { Footer } from "../footer";
// @ts-ignore
import ContactMDX from "../../data/contact";

const Contact = ({
  offset,
  factor = 1,
}: {
  offset: number;
  factor?: number;
}) => (
  <div>
    <Divider fill="divider" speed={0.2} offset={offset} factor={factor}>
      <div
        sx={{
          position: `absolute`,
          bottom: 0,
          width: `full`,
          transform: `matrix(1, 0, 0, -1, 0, 0)`,
        }}
      >
        <div
          sx={{
            position: `relative`,
            height: `full`,
            svg: { width: `100%`, height: `40vh` },
            path: { animation: waveAnimation(`20s`) },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="contact-wave"
            viewBox="0 0 800 338.05"
            preserveAspectRatio="none"
          >
            <path>
              <animate
                attributeName="d"
                values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                repeatCount="indefinite"
                dur="30s"
              />
            </path>
          </svg>
        </div>
      </div>
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <ContactMDX />
      </Inner>
      <Footer />
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg
          icon="cross"
          hiddenMobile
          width={8}
          color="icon_darkest"
          left="60%"
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
      </UpDown>
      <UpDownWide>
        <Svg
          icon="triangle"
          width={24}
          stroke
          color="icon_orange"
          left="90%"
          top="50%"
        />
        <Svg
          icon="circle"
          width={6}
          color="icon_brightest"
          left="85%"
          top="15%"
        />
        <Svg
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_green"
          left="15%"
          top="45%"
        />
      </UpDownWide>
      <Svg icon="arrowUp" width={6} color="icon_yellow" left="4%" top="20%" />
      <Svg icon="circle" width={12} color="icon_purple" left="70%" top="50%" />
      <Svg icon="box" width={12} color="icon_darkest" left="20%" top="30%" />
      <Svg
        icon="hexa"
        width={8}
        stroke
        color="icon_green"
        left="45%"
        top="25%"
      />
    </Divider>
  </div>
);

export { Contact };
