import { StyledBox } from "./styled";
import { StyledBoxProps } from "./types";

const Box = ({ children, ...rest }: StyledBoxProps) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};

export { Box, StyledBox, type StyledBoxProps };
