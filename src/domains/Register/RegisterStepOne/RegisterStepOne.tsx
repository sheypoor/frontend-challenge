import React, { FC, useCallback, useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, DashboardOutlined } from "@ant-design/icons";

import useStyle from "../Register.style";
import { useAppContext } from "domains/App/App.context";

const RegisterStepOne: FC = () => {
  const history = useHistory();
  const classes = useStyle();
  const [form] = Form.useForm();
  const { setUserInformation } = useAppContext();
  const [user, setUser] = useState<any>({});

  const handleAdd = (values: any) => {
    setUserInformation(values);
    history?.push(`/register/step-two`);
  };

  const RegisterStepOneForm = useCallback(
    () => (
      <Form
        name="normal_create_user"
        form={form}
        className={classes.registerStepForm}
        initialValues={{
          ...user,
        }}
        onFinish={handleAdd}
      >
        <Form.Item>
          <h2 className={classes.title}>ثبت نام - مرحله 1 از 2</h2>
        </Form.Item>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "لطفا نام را وارد کنید!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="نام"
          />
        </Form.Item>
        <Form.Item
          name="age"
          rules={[
            {
              required: true,
              message: "لطفا سن را وارد کنید!",
            },
          ]}
        >
          <Input
            type="number"
            prefix={<DashboardOutlined className="site-form-item-icon" />}
            placeholder="سن"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            <span>مرحله بعد</span>
          </Button>
        </Form.Item>
      </Form>
    ),
    [user]
  );

  return (
    <div className={classes.root}>
      <Helmet>
        <title>ثبت نام - مرحله 1 از 2</title>
      </Helmet>

      <RegisterStepOneForm />
    </div>
  );
};

export default RegisterStepOne;
