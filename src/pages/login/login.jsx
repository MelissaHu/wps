import React, { Component } from 'react';
import './login.css'

import { Form, Icon, Input, Button, Checkbox } from 'antd';

class NormalLoginForm extends Component {
  constructor(){
    super()
    this.state={}
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(values.password==="123"){
          console.log('Received values of form: ', values);
         
          localStorage.setItem("userName",values.username)
          this.props.history.push('/doc')
        }else {
          alert('用户名或者密码错误')
        }
        
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return(
      <div className="login-container">
      <div className="login-wrapper">
       <h4 className="login-title" style={{textAlign:'center'}}>Melissa石墨</h4>
       <Form onSubmit={this.handleSubmit} className="login-form">
       <Form.Item>
         {getFieldDecorator('username', {
           rules: [{ required: true, message: 'Please input your username!' }],
         })(
           <Input
             prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
             placeholder="Username"
           />,
         )}
       </Form.Item>
       <Form.Item>
         {getFieldDecorator('password', {
           rules: [{ required: true, message: 'Please input your Password!' }],
         })(
           <Input
             prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
             type="password"
             placeholder="Password"
           />,
         )}
       </Form.Item>
       <Form.Item>
         {getFieldDecorator('remember', {
           valuePropName: 'checked',
           initialValue: true,
         })(<Checkbox>Remember me</Checkbox>)}
         <a className="login-form-forgot" href="">
           Forgot password
         </a>
         <div>
         <Button type="primary"  htmlType="submit" className="login-form-button">
           Log in
         </Button>
         </div>
         Or <a href="">register now!</a>
       </Form.Item>
     </Form>
      </div>
      </div>
    )
  
  }
}

NormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


export default NormalLoginForm
