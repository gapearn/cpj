import { Button, Form, Input } from "antd";
import styles from "./global.module.css";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  const onFinish = async (user) => {
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
        <p>username</p>
        <Form.Item name="username">
          <Input />
        </Form.Item>
        <p>password</p>
        <Form.Item name="password">
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
