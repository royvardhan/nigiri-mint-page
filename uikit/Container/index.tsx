import { StyledContainer } from "./styled";
import { StyledContainerProps } from "./types";

const Container = ({ children, ...rest }: StyledContainerProps) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

export { Container, StyledContainer, type StyledContainerProps };
