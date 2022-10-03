import { Button, Form, Input } from "antd";
import styles from "./global.module.css";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  const onFinish = async (user) => {
    console.log("Success:", user);
    await axios
      .post("/", user)
      .then(function ({ status }) {
        console.log(status);
        if (status === 201) navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      <h1>REGISTER</h1>
      <Form
        name="register"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles.form}
        size="large"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <p>username</p>
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <p>password</p>
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ backgroundColor: "#E9A99C", borderColor: "white" }}
            type="primary"
            htmlType="submit"
          >
            register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
