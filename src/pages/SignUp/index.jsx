import React from "react";
import "./style.css";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { AUTH_URL } from "../../constants/endpoint";
import { Link } from "react-router-dom";

// const formItemLayout = {
//   labelCol: { span: 6 },
//   wrapperCol: { span: 18 },
// };
// const tailFormItemLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

export default function SignUp() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const data = {
      username: values.username,
      password: values.password,
      email: values.email,
    };
    console.log(data);
    axios.post(`${AUTH_URL}/sign-up`, data).then((res) => {
      console.log(res);
    });
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="register"
      className="register-form"
      onFinish={onFinish}
      initialValues={{
        prefix: "84",
      }}
      scrollToFirstError
    >
      <h1>Sign up</h1>
      <Form.Item
        name="username"
        label="Username"
        rules={[
          // {
          //   type: 'text',
          //   message: 'Username was existed!',
          // },
          {
            required: true,
            message: "Please input your username",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      <p>
        Already have an account? <Link to="/signin">Login</Link>
      </p>
    </Form>
  );
}
