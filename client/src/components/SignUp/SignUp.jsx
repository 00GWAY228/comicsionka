import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.css';

import { regUser } from '../../redux/actions/userAC';

import { Form, Input, Button,  } from 'antd';
import {showFormDisp, showFormDispREG} from '../../redux/actions/showFormAC.js'
import Button2 from '@mui/material/Button';

export default function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector(state => state.errorReg)
  const user = useSelector(state => state.user)

  useEffect(() => user.email && navigate('/'), [ user.email ])

  const onFinish =  (values) => {
    dispatch(regUser(values))
    dispatch(showFormDisp(false))
    dispatch(showFormDispREG(false))
  }

  return (
    <div className={styles.formBox}>
    <div className={styles.container}>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Ваше имя"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
          >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      
        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          >
          <Input.Password />
        </Form.Item>
      
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          {/* <Button type="primary" htmlType="submit"> Submit </Button> */}
          <Button2 variant="contained" className={styles.btn_registration} type="primary" htmlType="submit" >Регистрация</Button2>
        </Form.Item>
        {/* <h6>
          уже есть аккаунт?  
        <Link to='/signin'> Войти</Link>
        </h6> */}
        <div>
          {
            error.length 
              ? <h6>{error}</h6> 
              : null
          }
        </div>
      </Form>
    </div>
    </div>
      );
    };
  

