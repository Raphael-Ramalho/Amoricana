import { Dispatch, SetStateAction } from "react";
import { Members } from "../../enum/enums";
import { Container, LoginContainer, Option, Title } from "./Login.styled";
import { Text } from "../generic/generic.style";

type LoginProps = {
  setCurrentUser: Dispatch<SetStateAction<Members | undefined>>;
};

export const Login = ({ setCurrentUser }: LoginProps) => {
  const members = Object.values(Members);

  return (
    <LoginContainer>
      <Title>Faça login com um usuário:</Title>
      <Container>
        {members.map((member) => (
          <Option onClick={() => setCurrentUser(member)}>
            <Text>{member}</Text>
          </Option>
        ))}
      </Container>
    </LoginContainer>
  );
};
