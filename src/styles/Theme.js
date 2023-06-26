import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "'League Spartan', sans-serif",
  },
  colors: {
    white: {
      50: "#FFFFFF",
      100: "#EFFAFA",
    },
    green: {
      50: "#E1F0F0",
      100: "#5CA5A5",
      200: "#F2B3939",
    },
    grey: {
      50: "#7C8F8F",
      100: "#C9D3DB",
      200: "#2B3939",
    },
  },
  fontSizes: {
    "3xl": "4rem",
    "2xl": "3.125rem",
    xl: "1.375rem",
    lg: "1.125rem",
    md: "1.563rem",
    sm: "1.25rem",
    xs: "0.938rem",
  },
  fontWeights: {
    extrabold: 800,
    bold: 700,
    semibold: 600,
    medium: 500,
  },
});

export { theme };
