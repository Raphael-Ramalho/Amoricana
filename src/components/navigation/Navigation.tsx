import { Container, StyledButton, StyledGroup } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Container>
      <StyledGroup
        style={{ width: "100vw", display: "flex" }}
        size={"large"}
        onChange={() => {}}
      >
        <StyledButton style={{ flexGrow: 1 }} value="top">
          Horizontal
        </StyledButton>
        <StyledButton style={{ flexGrow: 1 }} value="left">
          Vertical
        </StyledButton>
        <StyledButton style={{ flexGrow: 1 }} value="left">
          Vertical
        </StyledButton>
      </StyledGroup>
    </Container>
  );
};
