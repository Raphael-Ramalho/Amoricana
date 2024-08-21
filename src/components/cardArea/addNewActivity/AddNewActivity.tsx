import { DatePicker, Form, Input, Select } from "antd";
import {
  AddIcon,
  HorizontalItem,
  NewActivity,
  StyledCollapse,
  StyledForm,
} from "./AddNewActivity.styled";
import { Frequency } from "../card/Card.type";

enum FormFields {
  ACTIVITY = "activity",
  FREQUENCY = "frequency",
  DATE_PICKER = "date_picker",
  DATE = "date",
  DESCRIPTION = "description",
  ORDER = "order",
}

export const AddNewActivity = () => {
  const [form] = Form.useForm();

  const members = [
    { value: "charles", label: "Charles" },
    { value: "lucy", label: "Lucy" },
    { value: "raphael", label: "Raphael" },
    { value: "vital", label: "Vital" },
    { value: "vitoria", label: "Vitória" },
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
        label="Dia:"
        name={FormFields.DATE}
        rules={[{ required: true }]}
      >
        <DatePicker
          allowClear
          placeholder=""
          format="DD-MM-YYYY"
        />
      </HorizontalItem>

      <HorizontalItem
        layout="horizontal"
        label="Frequência:"
        name={FormFields.FREQUENCY}
        rules={[{ required: true }]}
      >
        <Select
          style={{ width: "15rem" }}
          options={frequency}
        />
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
    </StyledForm>
  );

  return (
    <StyledCollapse
      size="small"
      destroyInactivePanel
      expandIconPosition="end"
      expandIcon={({ isActive }) => <AddIcon $isactive={isActive} />}
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
