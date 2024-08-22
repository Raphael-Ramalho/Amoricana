import {
  Container,
  TextContent,
  StyledButton,
  StyledGroup,
  IconContent,
} from "./Navigation.styled";
import { GeneralProps } from "../../App.type";

export const Navigation = ({
  activeTab,
  contentArray,
  selectedCard,
  setActiveTab,
}: GeneralProps) => {
  return (
    <Container>
      <StyledGroup
        onChange={({ target }) => setActiveTab(target.value)}
        size={"large"}
        value={activeTab}
      >
        {contentArray.map(({ id, name, icon }) => (
          <StyledButton
            key={id}
            value={id}
            disabled={id === 1 && !selectedCard}
          >
            <IconContent>{icon}</IconContent>
            <TextContent>{name.toUpperCase()}</TextContent>
          </StyledButton>
        ))}
      </StyledGroup>
    </Container>
  );
};
