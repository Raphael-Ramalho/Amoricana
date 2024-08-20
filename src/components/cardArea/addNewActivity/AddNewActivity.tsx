import { DatePicker, Form, Input, Select } from "antd";
import {
  ArrowIcon,
  HorizontalItem,
  NewActivity,
  StyledCollapse,
  StyledForm,
} from "./AddNewActivity.styled";
import { Frequency } from "../card/Card.type";

export const AddNewActivity = () => {
  const formComponent = (
    <StyledForm name="add-activity-form" layout="vertical">
      <Form.Item
        layout="vertical"
        label="Nome da Atividade:"
        name="activity"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <HorizontalItem
        layout="horizontal"
        label="Frequência:"
        name="frequency"
        rules={[{ required: true }]}
      >
        <Select
          style={{ width: "15rem" }}
          options={[
            { value: Frequency.UNIQUE, label: Frequency.UNIQUE },
            { value: Frequency.WEEKLY, label: Frequency.WEEKLY },
            { value: Frequency.BIWEEKLY, label: Frequency.BIWEEKLY },
            { value: Frequency.MONTHLY, label: Frequency.MONTHLY },
          ]}
        />
      </HorizontalItem>

      <HorizontalItem
        layout="horizontal"
        label="Dia:"
        name="date"
        rules={[{ required: true }]}
      >
        {false ? (
          <DatePicker allowClear placeholder="" format="DD-MM-YYYY" />
        ) : (
          <Select
            style={{ width: "20rem" }}
            options={[
              { value: 0, label: "Domingo" },
              { value: 1, label: "Segunda-feira" },
              { value: 2, label: "Terça-feira" },
              { value: 3, label: "Quarta-feira" },
              { value: 4, label: "Quinta-feira" },
              { value: 5, label: "Sexta-feira" },
              { value: 6, label: "Sabado" },
            ]}
          />
        )}
      </HorizontalItem>

      <Form.Item
        layout="vertical"
        label="Descrição:"
        name="description"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        layout="vertical"
        label={`Ordem dos Integrantes (separe com " , "):`}
        name="order"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
    </StyledForm>
  );

  return (
    <StyledCollapse
      size="small"
      expandIconPosition="right"
      expandIcon={({ isActive }) => <ArrowIcon isActive={isActive} />}
      items={[
        {
          key: "1",
          label: <NewActivity>Adicionar nova atividade</NewActivity>,
          children: formComponent,
        },
      ]}
    />
  );
};
