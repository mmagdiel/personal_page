import { keyframes, css } from "@emotion/react";

const upDownWide = keyframes`
from {
  transform: translateY(0);
}
to {
  transform: translateY(200px);
}
`;

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`;

const upDownWideStyles = css`
  animation: ${upDownWideAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export { upDownWideStyles };
