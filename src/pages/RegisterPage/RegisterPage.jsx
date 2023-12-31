import { Button, Form, Input, Typography } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { registrationUser } from 'redux/auth/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const [user, setInputs] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegistracion = e => {
    dispatch(registrationUser(user));
  };

  return (
    <div >
      <Form  onSubmitCapture={handleRegistracion}>
        <Typography.Title >
          Register
        </Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Pls write your name ",
            },
          ]}
          label="Name"
          name={'name'}
        >
          <Input
            placeholder="Enter your name"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Email address is not required',
            },
          ]}
          label="Email"
          name={'email'}
        >
          <Input
            placeholder="Enter your email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Pls enter password ',
            },
          ]}
          label="Password"
          name={'password'}
        >
          <Input.Password
            placeholder="Enter your password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </Form.Item>

      
        <Button
          type="primary"
          htmlType="submit"
          block
          
        >
          Register
          
        </Button>

        <div>
         Already registered?
          <Link to={'/login'}>  
            <span>Login</span>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
