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
import { Frequency, Members } from "../../../enum/enums";
import { useState } from "react";

enum FormFields {
  ACTIVITY = "activity",
  FREQUENCY = "frequency",
  DATE = "date",
  DESCRIPTION = "description",
  ORDER = "order",
}

export const AddNewActivity = () => {
  const [isOpen, setIsOpen] = useState<string[] | string>([]);
  const [form] = Form.useForm();

  const members = [
    { value: Members.CHARLES, label: Members.CHARLES },
    { value: Members.LUCY, label: Members.LUCY },
    { value: Members.RAPHAEL, label: Members.RAPHAEL },
    { value: Members.VITAL, label: Members.VITAL },
    { value: Members.VITORIA, label: Members.VITORIA },
  ];

  const frequency = [
    { value: Frequency.UNIQUE, label: Frequency.UNIQUE },
    { value: Frequency.WEEKLY, label: Frequency.WEEKLY },
    { value: Frequency.BIWEEKLY, label: Frequency.BIWEEKLY },
    { value: Frequency.MONTHLY, label: Frequency.MONTHLY },
  ];

  const formComponent = (
    <StyledForm name="add-activity-form" layout="vertical" form={form}>
      <Form.Item
        layout="vertical"
        label="Nome da Atividade:"
        name={FormFields.ACTIVITY}
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
        <Select style={{ width: "15rem" }} options={frequency} />
      </HorizontalItem>

      <HorizontalItem
        layout="horizontal"
        label="Dia:"
        name={FormFields.DATE}
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
        name={FormFields.ORDER}
        rules={[
          { required: true, message: "Preencha a ordem dos participantes" },
        ]}
      >
        <Select
          mode="multiple"
          allowClear
          placeholder="Selecione em ordem"
          onChange={() => {}}
          options={members}
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
        <SubmitButton>Criar Atividade</SubmitButton>
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
