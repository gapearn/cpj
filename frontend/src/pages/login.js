import { Button, Form, Input, message } from "antd";
import styles from "./global.module.css";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const onFinish = async (user) => {
    console.log("Success:", user);
    await axios
      .post("/checkUser", user)
      .then(function ({ data: { founduser } }) {
        console.log(founduser);
        if (founduser > 0) navigate("/upload");
        else message.error("User not found");
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
      <h1>LOGIN</h1>
      <Form
        name="login"
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
            type="primary"
            style={{ backgroundColor: "#E9A99C", borderColor: "white" }}
            htmlType="submit"
          >
            login
          </Button>
        </Form.Item>
      </Form>
      <Form.Item>
        <div style={{ textAlign: "left" }}>
          <Link style={{ color: "#E9A99C" }} to="/">
            new member?{" "}
          </Link>
        </div>
      </Form.Item>
    </div>
  );
};

export default Login;
