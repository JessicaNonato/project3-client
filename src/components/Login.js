//Arrumar: buttons do antd react

import React, { Component, useState } from 'react';
import styled from 'styled-components';

//design
import 'bootstrap/dist/css/bootstrap.min.css';
// form and modal modules (antd library do react (UI))
import {
  Form,
  Input,
  Button,
  Modal
} from 'antd';
import 'antd/dist/antd.min.css';
import { Link } from 'react-router-dom';
import Signup from './Signup';

const ButtonAccount = styled.button`
  color: gray;
  background-color: #f9dcdf;
  width: 370px;
  height: 40px;
  border: none;
  margin: 0 auto;
  
`

class Login extends Component {
  
  render(){
          
      const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 8,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
        },
      };
      
      const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
        const [form] = Form.useForm();
        const onFinish = (values) => {
          console.log('Received values of form: ', values);
        };
        
        
        return (
          <Modal
          visible={visible}
          title="Login"
          okText="Login"
          cancelText="Cancel"
          onCancel={onCancel}
          onOk={() => {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                onCreate(values);
              })
              .catch((info) => {
                console.log('Validate Failed:', info);
              });
          }}
        >
          <Form
            {...formItemLayout}
            form={form}
            name="login"
            onFinish={onFinish}
            scrollToFirstError
          >
            
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
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
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>      
          </Form>
              <p>Don't have an account?</p>
              <Link to={'/signup'}>
              <ButtonAccount onClick={<Signup/>}>CREATE AN ACCOUNT</ButtonAccount>
              </Link>
          </Modal>
        );
      };


    //popup and form code: 
         
      const CollectionsPage = () => {
        const [visible, setVisible] = useState(false);
      
       //With this, we will get all field values.
        const onCreate = (values) => {
          console.log('Received values of form: ', values);
          setVisible(false);
        };
      
        return (
          <div>
            <Button
              style={{color:'white'}}
              type="text"
              onClick={() => {
                setVisible(true);
              }}
            >
              Login
            </Button>
            <CollectionCreateForm
              visible={visible}
              onCreate={onCreate}
              onCancel={() => {
                setVisible(false);
              }}
            />
          </div>
        );
      };
  return (
    <div className="MainDiv">
     
      
    {/* <div className="container"> */}
          
      <CollectionsPage/>
        </div>
      // </div>
  );
}
}
export default Login;



  
