import { IconType } from "../valueObjects/icons";

const hidden = [`none`, `none`, `block`];

type SVGProps = {
  top: string;
  left: string;
  width: number;
  icon: IconType;
  stroke?: boolean;
  hiddenMobile?: boolean;
  color?: string | number | any;
};

export type { SVGProps };
export { hidden };
