import { styled } from "../stiches.config";

export const StyledTypography = styled("p", {
  variants: {
    capital: { true: { textTransform: "capitalize" } },
    pointer: { true: { cursor: "pointer" } },
    color: {
      white: { color: "$white" },
    },
    weight: {
      regular: { fontWeight: "normal" },
      bold: { fontWeight: "bold" },
    },
    size: {
      default: {
        "@lg": { fontSize: "$base", lineHeight: "$6" }, //above lg breakpoint
        "@smMax": { fontSize: "$xs", lineHeight: "$4" }, //below sm breakpoint
        "@lgMax": { fontSize: "$sm", lineHeight: "$5" }, //between smMax & lg
      },
      xs: { fontSize: "$xs", lineHeight: "$4" },
      sm: { fontSize: "$sm", lineHeight: "$5" },
      base: { fontSize: "$base", lineHeight: "$6" },
      lg: { fontSize: "$lg", lineHeight: "$7" },
      xl: { fontSize: "$xl", lineHeight: "$7" },
      "2xl": { fontSize: "$2xl", lineHeight: "$8" },
      "3xl": { fontSize: "$3xl", lineHeight: "$9" },
      "4xl": { fontSize: "$4xl", lineHeight: "$10" },
      "5xl": { fontSize: "$5xl", lineHeight: "$11" },
      "6xl": { fontSize: "$6xl", lineHeight: "$12" },
      "7xl": { fontSize: "$7xl", lineHeight: "$13" },
      "8xl": { fontSize: "$8xl", lineHeight: "$14" },
      "9xl": { fontSize: "$9xl", lineHeight: "$15" },
    },
  },
});
