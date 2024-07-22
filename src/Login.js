
import { Alert, Button, Form, Input } from "antd";
import Signup, { passwordRegexp } from "./Singup.js";
import { useState } from "react";


 const Login = ({toggleForm, auth }) => {
 
  const [apiStatus, setApiStatus] = useState("init");

  const onSubmitForm = async (loginInfo) => {
    setApiStatus("pending");
    const { success } = await auth.loginUser(loginInfo);
    setApiStatus(success ? "success" : "error");
  };

  return (
    <div className="form">
      {apiStatus === "success" && (
        <Alert
          type="success"
          showIcon
          message="Logged in successfully.."
          closable
        />
      )}
      {apiStatus === "error" && (
        <Alert type="error" showIcon message="Invalid credentials" closable />
      )}
      <Form onFinish={onSubmitForm} layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: "email", message: "Please enter valid email" },
            { required: true, message: "Please enter email" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Password is required" },
            {
              pattern: passwordRegexp,
              message: "Inavlid password",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Button
          loading={apiStatus === "pending"}
          htmlType="submit"
          type="primary"
          block
        >
          Login
        </Button>
      </Form>
      <p>
        Don't have an account ?
        <Button onClick={toggleForm} type="link">
            Signup here
        </Button>
      </p>
    </div>
  );
};

export default  Login;