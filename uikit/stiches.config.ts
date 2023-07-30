import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    lineHeights: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: "0.75rem", //12px
      4: "1rem", //16px
      5: "1.25rem", //20px
      6: "1.5rem", //24px
      7: "1.75rem", //28px
      8: "2rem", //32px
      9: "2.25rem", //36px
      10: "2.5rem", //40px
      11: "3rem", //48px
      12: "3.75rem", //60px
      13: "4.5rem", //72px
      14: "6rem", //96px,
      15: "8rem", //128px
    },
    fontSizes: {
      xs: "0.75rem", //12px
      sm: "0.875rem", //14px
      base: "1rem", //16px
      lg: "1.125rem", //18px
      xl: "1.25rem", //20px
      "2xl": "1.5rem", //24px
      "3xl": "1.875rem", //30px
      "4xl": "2.25rem", //36px
      "5xl": "3rem", //48px
      "6xl": "3.75rem", //60px
      "7xl": "4.5rem", //72px
      "8xl": "6rem", //96px,
      "9xl": "8rem", //128px
    },
    fontWeights: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    colors: {
      white: "#FFF",
    },
  },
});
