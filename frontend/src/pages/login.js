import { Button, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
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
      <h1>LOG IN</h1>
      <Form
        name="login"
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
          <Input/>
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
          <Input type="password"  />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            style={{ backgroundColor: "#E9A99C" , borderColor:"white"}}
            htmlType="submit"
          >
            login
          </Button>
        </Form.Item>
      </Form>
      <Form.Item>
        <div style={{ textAlign: "left" }}>
          <Link style={{color:"#E9A99C"}} to="/">new member? </Link>
        </div>
      </Form.Item>
    </div>
  );
};

export default Login;
