import { Form, Input } from "antd";
import {
  ArrowIcon,
  NewActivity,
  StyledCollapse,
} from "./AddNewActivity.styled";

export const AddNewActivity = () => {
  const formComponent = (
    <Form
      name="add-activity-form"
      layout="vertical"
    >
      <Form.Item
        layout="vertical"
        label="Atividade"
        name="activity"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        layout="vertical"
        label="Frequência"
        name="frequency"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        layout="vertical"
        label="Descrição"
        name="description"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        layout="vertical"
        label="Ordem dos Integrantes"
        name="order"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
    </Form>
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
