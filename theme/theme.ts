import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { Menu } from "./menu";

// refer docs for better customization idea - https://github.com/chakra-ui/chakra-ui/tree/v2/packages/theme

// https://github.com/chakra-ui/chakra-ui/blob/v2/packages/theme/src/utils/is-chakra-theme.ts

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
    },
  },
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  components: {
    Button,
    Menu
  }
});
