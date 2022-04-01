import { merge } from "theme-ui";
import { tailwind } from "@theme-ui/presets";
import chroma from "chroma-js";
import { dark, light, getGradient } from "./valueObjects";

const theme = merge(tailwind, {
  initialColorModeName: `dark`,
  config: {
    useCustomProperties: true,
  },
  colors: {
    primary: dark.shape,
    secondary: dark.billboard,
    text: dark.st,
    heading: dark.em,
    background: dark.noise,
    divider: chroma(dark.em).brighten(),
    textMuted: chroma(dark.st).brighten(2),
    icon_brightest: chroma(dark.em).brighten(),
    icon_darker: chroma(dark.em).darken(),
    icon_darkest: chroma(dark.em).darken(2),
    icon_red: chroma(dark.billboard).darken(),
    icon_blue: chroma(light.st).brighten(),
    icon_orange: dark.billboard,
    icon_yellow: dark.st,
    icon_pink: chroma(dark.billboard).brighten(),
    icon_purple: light.billboard,
    icon_green: light.shape,
    modes: {
      light: {
        text: light.em,
        heading: light.billboard,
        primary: light.shape,
        secondary: light.billboard,
        background: light.noise,
        divider: chroma(light.st).brighten(2),
        textMuted: chroma(light.em).brighten(2),
        icon_brightest: chroma(light.st).brighten(),
        icon_darker: chroma(light.st).darken(),
        icon_darkest: chroma(light.st).darken(2),
      },
    },
  },
  breakpoints: [`400px`, `600px`, `900px`, `1200px`, `1600px`],
  footer: {
    textAlign: `center`,
    display: `block`,
    position: `absolute`,
    bottom: 0,
    color: `background`,
    px: [2, 3],
    py: [3, 4],
  },
  styles: {
    root: {
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
      color: `text`,
      backgroundColor: `background`,
      a: {
        color: `primary`,
        textDecoration: `none`,
        transition: `all 0.3s ease-in-out`,
        "&:hover": {
          color: `primary`,
          textDecoration: `none`,
        },
      },
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      color: `text`,
    },
    blockquote: {
      marginLeft: 0,
      p: {
        fontSize: [2, 3],
        fontWeight: `medium`,
        color: `heading`,
      },
    },
    h1: {
      fontSize: [6, 7, 8],
      mt: 2,
      mb: 3,
      textShadow: `rgba(255, 255, 255, 0.15) 0px 5px 35px`,
      letterSpacing: `wide`,
      color: `heading`,
    },
    h2: {
      fontSize: [4, 5, 6],
      mt: 2,
      mb: 2,
      color: `heading`,
    },
    h3: {
      fontSize: [3, 4, 5],
      mt: 3,
      color: `heading`,
    },
    h4: {
      fontSize: [2, 3, 4],
      color: `heading`,
    },
    h5: {
      fontSize: [1, 2, 3],
      color: `heading`,
    },
    h6: {
      fontSize: 1,
      mb: 2,
      color: `heading`,
    },
  },
  layout: {
    container: {
      maxWidth: `5xl`,
    },
  },
  buttons: {
    toggle: {
      color: `background`,
      border: `none`,
      backgroundColor: `text`,
      cursor: `pointer`,
      alignSelf: `center`,
      px: 3,
      py: 2,
      ml: 3,
    },
  },
  texts: {
    bigger: {
      p: {
        fontSize: [2, 3, 4],
      },
    },
  },
});

export default theme;
export { getGradient };
