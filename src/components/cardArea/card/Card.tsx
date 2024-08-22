import { useState } from "react";
import { RowFlexContainer, Text } from "../../generic/generic.style";
import {
  CardContainer,
  FirstContainer,
  FirstRow,
  InnerContainer,
  Label,
  NameLabel,
  Order,
  RemoveButton,
  RemoveIcon,
  StyledModal,
} from "../CardArea.styled";
import { CardProps } from "./Card.type";

export const Card = ({ cardInfo, isOnMarkerTab, onClick }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { activityName, dayOfTheWeek, description, frequency, members } =
    cardInfo;

  const buildMembers = (members: string[]) => {
    return members.join(" / ");
  };

  const buildWeekString = (day: number) => {
    switch (day) {
      case 0:
        return "Domingo";
      case 1:
        return "Segunda-feira";
      case 2:
        return "Terça-feira";
      case 3:
        return "Quarta-feira";
      case 4:
        return "Quinta-feira";
      case 5:
        return "Sexta-feira";
      default:
        return "Sábado";
    }
  };
  return (
    <>
      <CardContainer
        $isOnMarkerTab={!!isOnMarkerTab}
        onClick={() => onClick?.()}
      >
        <InnerContainer>
          <FirstRow>
            <div>
              <FirstContainer>
                <NameLabel>Atividade: </NameLabel>
                <Text>{activityName}</Text>
              </FirstContainer>

              <div>
                <Label>Frequência: </Label>
                <Text>
                  {frequency + " -> " + buildWeekString(dayOfTheWeek)}
                </Text>
              </div>
            </div>

            {!isOnMarkerTab && (
              <RemoveButton
                type={"link"}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(true);
                }}
              >
                <RemoveIcon />
              </RemoveButton>
            )}
          </FirstRow>

          <div>
            <Label>Descrição: </Label>
            <Text>{description}</Text>
          </div>

          <RowFlexContainer>
            <Label>Ordem dos integrantes: </Label>
            <Order>{buildMembers(members)}</Order>
          </RowFlexContainer>
        </InnerContainer>
      </CardContainer>

      <StyledModal
        title={<Text>Deleção de atividade</Text>}
        open={isOpen}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        okText={<Text>Sim, desejo deletar</Text>}
        cancelText={<Text>Cancelar</Text>}
      >
        <p>Deseja deletar este card?</p>
        <p>
          Atenção! Esta ação <strong>não</strong> poderá ser desfeita.
        </p>
      </StyledModal>
    </>
  );
};
