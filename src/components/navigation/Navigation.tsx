import { Container, TextContent, StyledButton, StyledGroup, IconContent } from "./Navigation.styled";
import { GeneralProps } from "../../App.type";

export const Navigation = ({
  activeTab,
  setActiveTab,
  contentArray,
}: GeneralProps) => {
  return (
    <Container>
      <StyledGroup
        onChange={({ target }) => setActiveTab(target.value)}
        size={"large"}
        value={activeTab}
      >
        {contentArray.map(({ id, name, icon }) => (
          <StyledButton key={id} value={id}>
            <IconContent>{icon}</IconContent>
            <TextContent>{name.toUpperCase()}</TextContent>
          </StyledButton>
        ))}
      </StyledGroup>
    </Container>
  );
};
