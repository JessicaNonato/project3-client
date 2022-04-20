//Arrumar: buttons do antd react, verificar posicionamento
import React, { Component, useState } from 'react';


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

class Signup extends Component {
  
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
          title="Signup"
          okText="Signup"
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
            name="signup"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="name"
              label={
                <span>
                  Name 
                </span>
              }
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
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
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>            
          </Form>
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
              style={{color:'red'}}
              type="text"
              onClick={() => {
                setVisible(true);
              }}
            >
              Signup
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
      {/* <div class="jumbotron text-center">
          <h3>Le Coeur</h3>
         
      </div> */}
      
      {/* <div className="container"> */}
          
      <CollectionsPage />
        </div>
      // </div>
  );
}
}
export default Signup;



  
// const Navbar = () => {
//   return (
//     <div>
//         <nav>
//         <NavLink to={'/'} id='signup' style={{textDecoration: "none"}}>Signup</NavLink>
//         <NavLink to={'/'} id='login' style={{textDecoration: "none"}}>Login</NavLink>
//         </nav>
//     </div>
//   )
// }

