/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui";
import { button, container } from "./styles";

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <Box as="footer" variant="footer">
      <button
        sx={button}
        type="button"
        onClick={toggleColorMode}
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    </Box>
  );
};

export { Footer };

/*

  <br />
  <Flex sx={container}>
    {isDark ? (
      <img
        width="30"
        height="30"
        src="https://img.lekoarts.de/gatsby/logo_v2-light_w30.png"
        alt="LekoArts Logo"
      />
    ) : (
      <img
        width="30"
        height="30"
        src="https://img.lekoarts.de/gatsby/logo_v2_w30.png"
        alt="LekoArts Logo"
      />
    )}
    {` `}
    <Link
      aria-label="Link to the theme's GitHub repository"
      sx={{ ml: 2 }}
      href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara"
    >
      Theme
    </Link>
    <div sx={{ mx: 1 }}>by</div>
    {` `}
    <Link
      aria-label="Link to the theme author's website"
      href="https://www.lekoarts.de?utm_source=cara&utm_medium=Theme"
    >
      LekoArts
    </Link>
  </Flex>

*/
