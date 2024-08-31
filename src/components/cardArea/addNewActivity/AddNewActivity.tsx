import { Button, DatePicker, Form, Input, Select } from "antd";
import {
  AddIcon,
  ButtonContainer,
  HorizontalItem,
  NewActivity,
  StyledCollapse,
  StyledForm,
  SubmitButton,
} from "./AddNewActivity.styled";
import { FormFields, Frequency, Members } from "../../../enum/enums";
import { Dispatch, SetStateAction, useState } from "react";
import { ActivityInfo, CardInfo, FormInfo } from "../../../types/types";
import { activitiesRef } from "../../../firebase";
import { addDoc } from "firebase/firestore";

type NewActivityProps = {
  setActivityCards: Dispatch<SetStateAction<CardInfo[]>>;
};

export const AddNewActivity = ({ setActivityCards }: NewActivityProps) => {
  const [isOpen, setIsOpen] = useState<string[] | string>([]);
  const [form] = Form.useForm();

  const activityName = Form.useWatch(FormFields.ACTIVITY_NAME, form);
  const frequency = Form.useWatch(FormFields.FREQUENCY, form);
  const members = Form.useWatch(FormFields.MEMBERS, form);
  const startingDate = Form.useWatch(FormFields.STARTING_DATE, form);

  const formIsValid =
    activityName && frequency && !!members?.length && startingDate;

  const membersArray = [
    { value: Members.CHARLES, label: Members.CHARLES },
    { value: Members.LUCY, label: Members.LUCY },
    { value: Members.RAPHAEL, label: Members.RAPHAEL },
    { value: Members.VITAL, label: Members.VITAL },
    { value: Members.VITORIA, label: Members.VITORIA },
  ];

  const frequencyArray = [
    { value: Frequency.UNIQUE, label: Frequency.UNIQUE },
    { value: Frequency.WEEKLY, label: Frequency.WEEKLY },
    { value: Frequency.BIWEEKLY, label: Frequency.BIWEEKLY },
    { value: Frequency.MONTHLY, label: Frequency.MONTHLY },
  ];

  const handleSubmit = async () => {
    const formValues = form.getFieldsValue() as FormInfo;

    const membersInfo = formValues.members.map((member, index) => {
      const startingDate = formValues.startingDate.add(index * 7, "day");
      return {
        member,
        startingDate: startingDate.toString(),
      };
    });

    const formattedValues: ActivityInfo = {
      activityName: formValues.activityName,
      dayOfTheWeek: formValues.startingDate.day(),
      description: formValues.description,
      frequency: formValues.frequency,
      markedDates: [],
      membersInfo,
      startingDate: formValues.startingDate.toString(),
    };

    await addDoc(activitiesRef, formattedValues)
      .then((doc) => {
        setActivityCards((oldValues) => [
          ...oldValues,
          { ...formattedValues, id: doc.id },
        ]);

        setIsOpen([]);
        form.resetFields();
      })
      .catch((error) => console.log("error:", error));
  };

  const formComponent = (
    <StyledForm name="add-activity-form" layout="vertical" form={form}>
      <Form.Item
        layout="vertical"
        label="Nome da Atividade:"
        name={FormFields.ACTIVITY_NAME}
        rules={[{ required: true, message: "Preencha o nome da atividade" }]}
      >
        <Input />
      </Form.Item>

      <HorizontalItem
        layout="horizontal"
        label="Frequência:"
        name={FormFields.FREQUENCY}
        rules={[{ required: true }]}
      >
        <Select style={{ width: "15rem" }} options={frequencyArray} />
      </HorizontalItem>

      <HorizontalItem
        layout="horizontal"
        label="Dia:"
        name={FormFields.STARTING_DATE}
        rules={[{ required: true }]}
      >
        <DatePicker allowClear placeholder="" format="DD-MM-YYYY" />
      </HorizontalItem>

      <Form.Item
        layout="vertical"
        label="Descrição:"
        name={FormFields.DESCRIPTION}
      >
        <Input />
      </Form.Item>

      <Form.Item
        layout="vertical"
        label={`Responsáveis:`}
        name={FormFields.MEMBERS}
        rules={[
          { required: true, message: "Preencha a ordem dos participantes" },
        ]}
      >
        <Select
          mode="multiple"
          allowClear
          placeholder="Selecione em ordem"
          options={membersArray}
        />
      </Form.Item>
      <ButtonContainer>
        <Button
          onClick={() => {
            form.resetFields();
            setIsOpen([]);
          }}
        >
          Cancelar
        </Button>
        <SubmitButton disabled={!formIsValid} onClick={handleSubmit}>
          Criar Atividade
        </SubmitButton>
      </ButtonContainer>
    </StyledForm>
  );

  return (
    <StyledCollapse
      size="small"
      destroyInactivePanel
      activeKey={isOpen}
      onChange={setIsOpen}
      expandIconPosition="end"
      expandIcon={({ isActive }) => <AddIcon $isactive={isActive} />}
      items={[
        {
          key: "add-panel",
          label: <NewActivity>Adicionar nova atividade</NewActivity>,
          children: formComponent,
        },
      ]}
    />
  );
};
