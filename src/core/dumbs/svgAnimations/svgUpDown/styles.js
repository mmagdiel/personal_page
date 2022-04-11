import { css, keyframes } from "@emotion/react";

const upDown = keyframes`
from {
  transform: translateY(0);
}
to {
  transform: translateY(30px);
}
`;

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`;

const upDownStyles = css`
  animation: ${upDownAnimation};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export { upDownStyles };
