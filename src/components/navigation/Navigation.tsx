import { Dispatch, SetStateAction } from "react";
import { Container, StyledButton, StyledGroup } from "./Navigation.styled";

type NavigationProps = {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
};

export const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  return (
    <Container>
      <StyledGroup
        style={{ width: "100vw", display: "flex" }}
        size={"large"}
        defaultValue={activeTab}
        onChange={({ target }) => setActiveTab(target.value)}
      >
        <StyledButton value={0}>Teste 1</StyledButton>
        <StyledButton value={1}>Teste 2</StyledButton>
        <StyledButton value={2}>Teste 3</StyledButton>
      </StyledGroup>
    </Container>
  );
};
