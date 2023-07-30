import { forwardRef } from "react";
import { StyledTypography } from "./styled";
import { TypographyProps } from "./types";

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, ...rest }, ref) => {
    return (
      <StyledTypography ref={ref} {...rest}>
        {children}
      </StyledTypography>
    );
  }
);
export { type TypographyProps, Typography };
