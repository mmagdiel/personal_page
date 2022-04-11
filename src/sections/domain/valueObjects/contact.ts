import { SVGProps } from "../../../core/domain";

const contactListUpDown: SVGProps[] = [
  {
    icon: "cross",
    hiddenMobile: true,
    width: 8,
    color: "icon_darkest",
    left: "60%",
    top: "20%",
  },
  {
    icon: "triangle",
    width: 8,
    stroke: true,
    color: "icon_darkest",
    left: "25%",
    top: "5%",
  },
];

const contactListUpDownWide: SVGProps[] = [
  {
    icon: "triangle",
    width: 24,
    stroke: true,
    color: "icon_orange",
    left: "90%",
    top: "50%",
  },
  {
    icon: "circle",
    width: 6,
    color: "icon_brightest",
    left: "85%",
    top: "15%",
  },
  {
    icon: "upDown",
    hiddenMobile: true,
    width: 8,
    color: "icon_green",
    left: "15%",
    top: "45%",
  },
];

const contactListSvg: SVGProps[] = [
  {
    icon: "arrowUp",
    width: 6,
    color: "icon_yellow",
    left: "4%",
    top: "20%",
  },
  {
    icon: "circle",
    width: 12,
    color: "icon_purple",
    left: "70%",
    top: "50%",
  },
  {
    icon: "box",
    width: 12,
    color: "icon_darkest",
    left: "20%",
    top: "30%",
  },
  {
    icon: "hexa",
    width: 8,
    stroke: true,
    color: "icon_green",
    left: "45%",
    top: "25%",
  },
];

export { contactListSvg, contactListUpDown, contactListUpDownWide };
