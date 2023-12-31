import { Button, Divider, Form, Input, message, Typography } from 'antd';
import {
  FacebookFilled,
  GoogleOutlined,
  TwitterOutlined,
} from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { loginUser } from 'redux/auth/authOperations';

import { fetchContacts } from 'redux/contacts/operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [user, setInputs] = useState({
    username: '',
    password: '',
  });

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const SocialLogin = name => {
    message.success('Вхід через ' + name);
  };

  const handleLogin = async e => {
    e.preventDefault();
    await dispatch(loginUser(user)).unwrap();
    dispatch(fetchContacts());
  };

  return (
    <div >
      <Form >
        <Typography.Title >Login</Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              type: 'text',
              message: "Не вірнe ім'я ",
            },
          ]}
          label="email"
          name={'email'}
        >
          <Input
            placeholder="Enter your email"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Pls enter yout password',
            },
          ]}
          label="Password"
          name={'password'}
        >
          <Input.Password
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleLogin}>
          Login
        </Button>
        <Divider style={{ borderColor: 'green' }}>or Login with</Divider>
        <div>
          <GoogleOutlined
          
            name="google"
            onClick={() => SocialLogin('Google')}
            style={{ color: 'red' }}
          />
          <FacebookFilled
          
            onClick={() => SocialLogin('Facebook')}
            style={{ color: 'blue' }}
          />
          <TwitterOutlined
           
            onClick={() => SocialLogin('Twitter')}
            style={{ color: 'cyan' }}
          />
        </div>
        <div >
          Not registered yet?
          <Link to={'/register'}>
            <span>Register</span>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
