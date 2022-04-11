/** @jsx jsx */
import { jsx } from "theme-ui";
import { Divider, Inner, Content } from "../../../core";
import { SvgUpDown, SvgUpDownWide, SvgList } from "../../../core";
import { getGradient } from "../../../gatsby-plugin-theme-ui";
import {
  projectsListSvg,
  projectsListUpDown,
  projectsListUpDownWide,
} from "../../domain";

// @ts-ignore
import ProjectsMDX from "../../data/projects";

const Projects = ({
  offset,
  factor = 2,
}: {
  offset: number;
  factor?: number;
}) => (
  <div>
    <Divider
      bg={getGradient()}
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `#F1FFFA` },
          }}
        >
          <ProjectsMDX />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <SvgUpDown list={projectsListUpDown} />
      <SvgUpDownWide list={projectsListUpDownWide} />
      <SvgList list={projectsListSvg} />
    </Divider>
  </div>
);

export { Projects };
