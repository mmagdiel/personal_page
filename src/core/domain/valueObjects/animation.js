import { keyframes } from "@emotion/react";

const wave = keyframes`
0% {
  d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
}
50% {
  d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
}
100% {
  d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
}
`;

const upDown = keyframes`
from {
  transform: translateY(0);
}
to {
  transform: translateY(30px);
}
`;

const upDownWide = keyframes`
from {
  transform: translateY(0);
}
to {
  transform: translateY(200px);
}
`;

export { wave, upDown, upDownWide };
