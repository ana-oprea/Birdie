import React from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { register, authActions } from "./authSlice"
import { Button, Checkbox, Form, Input, Row, Col } from "antd"
import {
  LockOutlined,
  UserOutlined,
  LoadingOutlined,
  LinkOutlined,
  MailOutlined,
} from "@ant-design/icons"
import "./Register.css"

export default function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isSuccess) {
      navigate("/")
    }

    dispatch(authActions.reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onFinish = (values) => {
    const userData = {
      ...values.user,
    }
    dispatch(register(userData))
  }

  return (
    <div>
      <Row align='middle' style={{ height: "100vh" }}>
        <Col span={6} offset={9}>
          <h1>Register</h1>
          <Form
            name='register-user'
            className='register-form'
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name={["user", "email"]}
              rules={[
                {
                  required: true,
                  message: "Please enter a valid email.",
                  type: "email",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className='site-form-item-icon' />}
                placeholder='Email'
                data-cy='register-email-input'
              />
            </Form.Item>
            <Form.Item
              name={["user", "username"]}
              rules={[
                {
                  required: true,
                  message: "Please enter a username.",
                  type: "text",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Username'
                data-cy='register-email-input'
              />
            </Form.Item>
            <Form.Item
              name={["user", "name"]}
              rules={[
                {
                  required: true,
                  message: "Please enter a valid name.",
                  type: "text",
                },
              ]}
            >
              <Input placeholder='Full Name' data-cy='register-name-input' />
            </Form.Item>
            <Form.Item
              name={["user", "password"]}
              rules={[
                {
                  required: true,
                  message: "Please input a Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Password'
                data-cy='register-password-input'
              />
            </Form.Item>
            <Form.Item
              name={["user", "avatar"]}
              rules={[
                {
                  required: true,
                  message: "Please enter a valid url.",
                  type: "link",
                },
              ]}
            >
              <Input
                prefix={<LinkOutlined className='site-form-item-icon' />}
                placeholder='Avatar link'
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              {/* <a className='login-form-forgot' href=''>
              Forgot password
            </a> */}
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
