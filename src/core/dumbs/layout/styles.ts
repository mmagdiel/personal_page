import { get } from "theme-ui";

const globalStyles = (t) => ({
  "*": {
    boxSizing: `inherit`,
    "&:before": {
      boxSizing: `inherit`,
    },
    "&:after": {
      boxSizing: `inherit`,
    },
  },
  html: {
    fontSize: `18px`,
    WebkitTextSizeAdjust: `100%`,
  },
  img: {
    borderStyle: `none`,
  },
  pre: {
    fontFamily: `monospace`,
    fontSize: `1em`,
  },
  "[hidden]": {
    display: `none`,
  },
  "::selection": {
    backgroundColor: get(t, `colors.primary`),
    color: get(t, `colors.background`),
  },
});

export { globalStyles };
