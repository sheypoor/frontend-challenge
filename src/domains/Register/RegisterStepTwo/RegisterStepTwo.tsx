import React, { FC, useCallback, useState } from "react";
import { Helmet } from "react-helmet";
import { Form, Input, Button, Select } from "antd";
import { MailOutlined, Loading3QuartersOutlined } from "@ant-design/icons";

import useStyle from "../Register.style";
import { useAppContext } from "domains/App/App.context";
import { createUser } from "sdk";

interface User {
  name: string;
  age: number;
  email: string;
  newsletter: "daily" | "weekly" | "monthly";
}

const RegisterStepTwo: FC = () => {
  const classes = useStyle();
  const [loading, setLoading] = useState(false);
  const [registerErrorMessage, setRegisterErrorMessage] = useState("");
  const [registerSuccessMessage, setRegisterSuccessMessage] = useState("");
  const [form] = Form.useForm();
  const [user, setUser] = useState<any>({});
  const { setUserInformation, userInfo } = useAppContext();
  const { Option } = Select;

  const onAdd = (values: any) => {
    const details: User = { ...values, ...userInfo };

    setRegisterSuccessMessage("");
    setRegisterErrorMessage("");
    setLoading(true);
    setUserInformation(details);

    createUser(details)
      .then((response) => {
        console.log("response: ", response);
        setLoading(false);
        setRegisterSuccessMessage("ثبت نام با موفقیت انجام شد.");
      })
      .catch((error) => {
        console.log("error: ", error);
        setRegisterSuccessMessage("خطایی رخ داده است.");
      });
  };

  const RegisterStepTwoForm = useCallback(
    () => (
      <Form
        name="normal_create_user"
        form={form}
        className={classes.registerStepForm}
        initialValues={{
          ...user,
        }}
        onFinish={onAdd}
      >
        <Form.Item>
          <h1 className={classes.title}>ثبت نام - مرحله 2 از 2</h1>
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "لطفا پست الکترونیکی را وارد کنید!",
            },
          ]}
        >
          <Input placeholder="پست الکترونیکی" />
        </Form.Item>

        <Form.Item
          name="area"
          rules={[{ required: true, message: "لطفا خبرنامه را انتخاب کنید!" }]}
        >
          <Select placeholder="خبرنامه">
            <Option selected="selected" value="daily">
              روزانه
            </Option>
            <Option value="weekly">هفتگی</Option>
            <Option value="monthly">ماهانه</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {loading ? <Loading3QuartersOutlined spin /> : <span>ثبت نام</span>}
          </Button>
          <span className={classes.registerStepError}>
            {registerErrorMessage}
          </span>
          <span className={classes.registerStepSuccess}>
            {registerSuccessMessage}
          </span>
        </Form.Item>
      </Form>
    ),
    [user, registerSuccessMessage, registerErrorMessage, loading]
  );

  return (
    <div className={classes.root}>
      <Helmet>
        <title>ثبت نام - مرحله 2 از 2</title>
      </Helmet>

      <RegisterStepTwoForm />
    </div>
  );
};

export default RegisterStepTwo;
