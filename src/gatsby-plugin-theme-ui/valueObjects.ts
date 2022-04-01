import { createOnceSwitcher } from "../core";

const dark = {
  noise: "#1D1E18",
  st: "#F29C07",
  em: "#07F285",
  strong: "#F1FFFA",
  billboard: "#F63E02",
  shape: "#8507F2",
};

const light = {
  noise: "#F1FFFA",
  st: "#3D515F",
  em: "#4C4D4F",
  strong: "#1D1E18",
  billboard: "#A586BD",
  shape: "#04BF68",
};

const LIME = "lime";
const LAVANDER = "lavender";
const AMETHYST = "amethyst";
const KALE = "kale";
const TULIP = "tulip";

const limeGradient = "linear-gradient(135deg, #F29C07, #04BF68)";
const lavenderGradient = "linear-gradient(225deg, #07F285, #A586BD)";
const amethystGradient = "linear-gradient(45deg, #3D515F, #A586BD)";
const kaleGradient = "linear-gradient(135deg, #04BF68, #8507F2)";
const tulipGradient = "linear-gradient(135deg, #8507F2, #F29C07)";

const gradients = {
  [LAVANDER]: lavenderGradient,
  [LIME]: limeGradient,
  [AMETHYST]: amethystGradient,
  [KALE]: kaleGradient,
  [TULIP]: tulipGradient,
};

const getGradient = createOnceSwitcher(gradients, TULIP);

export { dark, light, getGradient };
